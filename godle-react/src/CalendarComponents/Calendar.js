import React, { useState, useEffect } from 'react';
import './Calendar.css'
import { format, addMonths, subMonths, startOfWeek, addDays, startOfMonth, endOfMonth, endOfWeek, isSameMonth, isSameDay } from 'date-fns';

const Calendar = ({ deity, user }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [celebrations, setCelebrations] = useState(null);

  useEffect( () => {
    console.log(user);
    console.log(deity);
    console.log(format(currentDate, 'MMMM'));

    const send_packet = { 
        deityName: deity.name,
        email: user.username,
        month: format(currentDate, 'MMMM')
    }

    fetch('/Calendar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(send_packet)
    })
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            throw new Error("Error with calendar database connection");
        })
        .then(data => {
            console.log(data);
            setCelebrations(data);
        })

  }, [deity, user, currentDate]);


  const header = () => {
    return (
      <div className="header row flex-middle">
        <div className="column col-start">
          <div className="icon" onClick={prevMonth}>
            {'<'}
          </div>
        </div>
        <div className="column col-center">
          <span>{format(currentDate, 'MMMM')}</span>
        </div>
        <div className="column col-end" onClick={nextMonth}>
          <div className="icon">{'>'}</div>
        </div>
      </div>
    );
  };

  const daysOfWeek = () => {
    const dateFormat = "iii";
    const days = [];

    let startDate = startOfWeek(currentDate);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="column col-center" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="days row">{days}</div>;
  };

  const cells = () => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const dateFormat = "d";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`column cell ${!isSameMonth(day, monthStart)
              ? "disabled"
              : isSameDay(day, currentDate) ? "selected" : ""}`}
            key={day}
            onClick={() => onDateClick(cloneDay)}
          >
            <span className="number">{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  };

  const onDateClick = day => {
    setCurrentDate(day);
  };

  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const prevMonth = () => {
    setCurrentDate(subMonths(currentDate, -1));
  };

  return (
    <div className="calendar">
      {header()}
      {daysOfWeek()}
      {cells()}
    </div>
  );
};

export default Calendar;
