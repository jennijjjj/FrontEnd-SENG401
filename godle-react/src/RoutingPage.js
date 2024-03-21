import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './Home';
import AppNavbar from './AppNavbar';
import Register from './Register';
import Matches from './MatchingPageComponents/Matches';
import Admin from './AdminComponents/AdminHome';
import Deity from './Deity';
import CalendarPage from './CalendarComponents/CalendarPage';
import Forum from './ForumComponents/ForumHome';
import { Container } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
//import anotherpage from './anotherpage';

const RoutingPage = ({ page }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(undefined);
  const [matchedDeities, setMatchedDeities] = useState(undefined);
  const [deity, setDeity] = useState(undefined);
  const [tosButtonClicked, settosButtonClicked] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    setLoading(false);
  }, [setLoading])

  const checkLocalStorage = () => {
    try {
      const token = localStorage.getItem('token');
      const userString = localStorage.getItem('user');
      const deityString = localStorage.getItem('deity')
      const storedIsAdmin = localStorage.getItem('isAdmin')
      if (token && userString) {
        const user = JSON.parse(userString);
        setUser(user);
        if (deityString){
          const storedDeity = JSON.parse(deityString);
          setDeity(storedDeity);
        }
        if (storedIsAdmin==='false'){
          setIsAdmin(false);
        }else{
          setIsAdmin(true);
        }
        console.log(user,deity,storedIsAdmin)
      }
    } catch (err) {
    }

  };

  // Call checkLocalStorage on component mount
  useEffect(() => {
    checkLocalStorage();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }


  try {
    if (deity !== undefined && !isAdmin) {
      if(page === "Calendar") {
        return (
          <div>
            <AppNavbar user={user} setUser={setUser} setDeity={setDeity} deity={deity} setIsAdmin={setIsAdmin} isAdmin={isAdmin} />
            <Container fluid>
              <CalendarPage deity={deity} user={user} />
            </Container>
          </div>
        );
      } else if (page === "Forum") {
        return (
          <div>
            <AppNavbar AppNavbar user={user} setUser={setUser} setDeity={setDeity} deity={deity} setIsAdmin={setIsAdmin} isAdmin={isAdmin}/>
            <Container fluid>
              <Forum user={user} />
            </Container>
          </div>
        )
      }
      return (
        <div>
          <AppNavbar user={user} setUser={setUser} setDeity={setDeity} deity={deity} setIsAdmin={setIsAdmin} isAdmin={isAdmin} />
          <Container fluid>
            <Deity deity={deity} setDeity={setDeity} />
          </Container>
        </div>
      );
      
    }

    if (isAdmin && user) {
      return (
        <div>
          <AppNavbar user={user} setUser={setUser} setDeity={setDeity} deity={deity} setIsAdmin={setIsAdmin} isAdmin={isAdmin} />
          <Container fluid>
            <Admin />
          </Container>
        </div>
      )
    } else {
      if (page === "Home") {
        return (
          <div>
            <AppNavbar user={user} setUser={setUser} setDeity={setDeity} deity={deity} setIsAdmin={setIsAdmin} isAdmin={isAdmin}/>
            <Container fluid>
              <Home tosButtonClicked={tosButtonClicked} settosButtonClicked={settosButtonClicked} setMatchedDeities={setMatchedDeities} user={user}/>
            </Container>
          </div>
        );
      } else if (page === "Register") {
        return (
          <div>
            <AppNavbar user={user} setUser={setUser} setDeity={setDeity} deity={deity} setIsAdmin={setIsAdmin} isAdmin={isAdmin} />
            <Container fluid>
              <Register />
            </Container>
          </div>
        );
      } else if (page === "Matches") {
        return (
          <div>
            <AppNavbar user={user} setUser={setUser} setDeity={setDeity} deity={deity} setIsAdmin={setIsAdmin} isAdmin={isAdmin} />
            <Container fluid>
              <Matches user={user} matchedDeities={matchedDeities} setDeity={setDeity} />
            </Container>
          </div>
        )
      }
    }
  } catch (error) {
    console.error("Error in rendering component:", error);
    // Handle error if needed
    localStorage.clear();
    navigate("/");
    return <p>Error occurred, please try again later.</p>;
  }
}


export default RoutingPage
