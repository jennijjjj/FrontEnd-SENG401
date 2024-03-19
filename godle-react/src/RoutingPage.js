import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './Home';
import AppNavbar from './AppNavbar';
import Register from './Register';
import Matches from './MatchingPageComponents/Matches';
import Admin from './AdminComponents/AdminHome';
import Deity from './Deity';
import Calendar from './CalendarComponents/Calendar';
import { Container } from 'reactstrap';
//import anotherpage from './anotherpage';

const RoutingPage = ({ page }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(undefined);
  const [matchedDeities, setMatchedDeities] = useState(undefined);
  const [deity, setDeity] = useState(undefined);
  const [tosButtonClicked, settosButtonClicked] = useState(false);

  useEffect(() => {
    setLoading(true);
    setLoading(false);
  }, [setLoading])

  if (loading) {
    return <p>Loading...</p>;
  }



  if (deity !== undefined) {
    if(page === "Calendar") {
      return (
        <div>
          <AppNavbar user={user} setUser={setUser} setDeity={setDeity} deity={deity} />
          <Container fluid>
            <Calendar deity={deity} />
          </Container>
        </div>
      );
    }
    return (
      <div>
        <AppNavbar user={user} setUser={setUser} setDeity={setDeity} deity={deity} />
        <Container fluid>
          <Deity deity={deity} setDeity={setDeity} />
        </Container>
      </div>
    );
  }

  if (page === "Home") {
    return (
      <div>
        <AppNavbar user={user} setUser={setUser} setDeity={setDeity} deity={deity} />
        <Container fluid>
          <Home tosButtonClicked={tosButtonClicked} settosButtonClicked={settosButtonClicked} setMatchedDeities={setMatchedDeities} user={user} />
        </Container>
      </div>
    );
  } else if (page === "Register") {
    return (
      <div>
        <AppNavbar user={user} setUser={setUser} setDeity={setDeity} deity={deity} />
        <Container fluid>
          <Register />
        </Container>
      </div>
    );
  } else if (page === "Matches") {
    return (
      <div>
        <AppNavbar user={user} setUser={setUser} setDeity={setDeity} deity={deity} />
        <Container fluid>
          <Matches user={user} matchedDeities={matchedDeities} setDeity={setDeity} />
        </Container>
      </div>
    )
  }else if (page === "Admin") {
    return (
      <div>
        <AppNavbar user={user} setUser={setUser} setDeity={setDeity} deity={deity} />
        <Container fluid>
          <Admin />
        </Container>
      </div>
    )
  }
  
}

export default RoutingPage