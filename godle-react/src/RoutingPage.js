import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './Home';
import AppNavbar from './AppNavbar';
import Register from './Register';
import Matches from './MatchingPageComponents/Matches';
import { Container } from 'reactstrap';
//import anotherpage from './anotherpage';

const RoutingPage = ({ page }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(undefined);
  const [tosButtonClicked, settosButtonClicked] = useState(false);

  useEffect(() => {
    setLoading(true);
    setLoading(false);
  }, [setLoading])

  if (loading) {
    return <p>Loading...</p>;
  }

  if (page === "Home") {
    return (
      <div>
        <AppNavbar user={user} setUser={setUser} />
        <Container fluid>
          <Home tosButtonClicked={tosButtonClicked} settosButtonClicked={settosButtonClicked} />
        </Container>
      </div>
    );
  } else if (page === "Register") {
    return (
      <div>
        <AppNavbar user={user} setUser={setUser} />
        <Container fluid>
          <Register />
        </Container>
      </div>
    );
  } else if (page === "Matches") {
    return (
      <div>
        <AppNavbar user={user} setUser={setUser} />
        <Container fluid>
          <Matches />
        </Container>
      </div>
    )
  }
}

export default RoutingPage