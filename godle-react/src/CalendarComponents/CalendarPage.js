import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import './Custom.css';
import Loading from '../Loading';

const CalendarPage = ({ deity, user }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [celebrations, setCelebrations] = useState([]);
  const [celebrationMap, setCelebrationMap] = useState({});
  const [currentMonth, setCurrentMonth] = useState("initial");
  const [selectedCelebration, setSelectedCelebration] = useState(null);
  const [loadingCalendar, setLoadingCalendar] = useState(false);

  useEffect(() => {
    const fetchCelebrations = async () => {
      setLoadingCalendar(true);

      const send_packet = {
        deityName: deity.name,
        email: user.username,
        month: currentDate.toLocaleString('default', { month: 'long' })
      };

      try {
        const response = await fetch('/Calendar', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(send_packet)
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        if(data.response === "There are no celebrations this month") {
          throw new Error("No celebrations this month");
        }

        setCelebrations(data);
      } catch (error) {
        console.error('There was an error fetching the celebrations', error);
      } finally {
        setLoadingCalendar(false);
      }
    };

    if(currentMonth !== currentDate.toLocaleString('default', { month: 'long' })) {
      setCurrentMonth(currentDate.toLocaleString('default', { month: 'long' }))
      fetchCelebrations();
    } else {
      console.log("Same month no new request made");
    }
  }, [currentDate, deity.name, user.username]);

  useEffect(() => {
    console.log(celebrations);
    const map = {};
    celebrations.forEach(celebration => {
      const key = `${celebration.month}-${celebration.day}`;
      map[key] = celebration;
    });
    setCelebrationMap(map);
  }, [celebrations]);

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const month = date.toLocaleString('default', { month: 'long' });
      const day = date.getDate();
      const key = `${month}-${day}`;
      return celebrationMap[key] ? 'highlight' : null;
    }
  };

  const onClickDay = (value) => {
    const month = value.toLocaleString('default', { month: 'long' });
    const day = value.getDate();
    const key = `${month}-${day}`;
    if (celebrationMap[key]) {
      setSelectedCelebration(celebrationMap[key]);
    } else {
      setSelectedCelebration(null);
    }
  };

  return (<>
    { loadingCalendar ? <Loading /> : null }
    <div style={{ display: "flex", width: "100%", height: "50vh", alignItems: "center", justifyContent: "center" }}>
      <Calendar
        onChange={setCurrentDate}
        value={currentDate}
        onActiveStartDateChange={({ activeStartDate }) => setCurrentDate(activeStartDate)}
        tileClassName={tileClassName}
        onClickDay={onClickDay}
      />
    </div>
    <div style={{ height: "25vh", textAlign: "center", padding: "5% 25%" }}>
      {selectedCelebration && (
        <div>
          <h2>{selectedCelebration.name}</h2>
          <p>{selectedCelebration.description}</p>
          <p>Deity: {selectedCelebration.deity}</p>
        </div>
      )}
    </div>
    {(celebrations.length > 0) && celebrations[celebrations.length - 1].day === "None" ? (
    <div style={{ height: "25vh", textAlign: "center", padding: "2.5% 10%" }}>
      <h2>Upcoming Prayer</h2>
      <h4>{celebrations[celebrations.length - 1].name}</h4>
      <p>{celebrations[celebrations.length - 1].description}</p>
    </div>) : (null)}
  </>);
};

export default CalendarPage;
