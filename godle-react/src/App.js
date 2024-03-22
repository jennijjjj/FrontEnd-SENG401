import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import RoutingPage from './RoutingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SparklingCursor from './SparklingCursor';
import { loginUser } from './APIRequests/LoginAPIRequests';
import Quiz from './Quiz';
import AppNavbar from './AppNavbar';
import Register from './Register';
import Matches from './MatchingPageComponents/Matches';
import Admin from './AdminComponents/AdminHome';
import Deity from './Deity';
import CalendarPage from './CalendarComponents/CalendarPage';
import Forum from './ForumComponents/ForumHome';
import LandingPage from './LandingPage';
import { Container } from 'reactstrap';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(undefined);
  const [matchedDeities, setMatchedDeities] = useState(undefined);
  const [deity, setDeity] = useState(undefined);
  const [tosButtonClicked, settosButtonClicked] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setLoading(true);
    setLoading(false);
  }, [setLoading])

  const checkLocalStorage = () => {
    try {
      const token = localStorage.getItem('token');
      const userString = localStorage.getItem('user');
      const deityString = localStorage.getItem('deity');
      const storedIsAdmin = localStorage.getItem('isAdmin')
      if (token && userString) {
        const user = JSON.parse(userString);
        loginUser(user.username, user.password);
        setUser(user); 
      }
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
    } catch (err) {
    }

  };
  useEffect(() => {
    checkLocalStorage();
  }, []);
  
  if (loading) {
    return <p>Loading...</p>;
  }


  return (
    <div>
      <div className="gradient-container"></div>
      <div className="cursorCanvas">
        <Router>
        <div>
          <AppNavbar user={user} setUser={setUser} setDeity={setDeity} deity={deity} setIsAdmin={setIsAdmin} isAdmin={isAdmin} />
        </div>
          <Routes>
          <Route path="/" element={<LandingPage user={user} deity={deity} />} />
            {(isAdmin ? 
              <Route path='/Admin' element={ <Admin />} />
            :<></>)}
            {(deity ? 
              <>
                <Route path='/Calendar' element={<CalendarPage deity={deity} user={user} />} />
                <Route path='/Forum' element={<Forum user={user} deity={deity} setDeity={setDeity} />} />
              </>
            :<></>)}
            <Route path='/Register' element={<Register />} />
            <Route path='/Matches' element={<Matches user={user} matchedDeities={matchedDeities} setDeity={setDeity} />} />
            <Route path='/Deity' element={<Deity deity={deity} setDeity={setDeity} />} />
            <Route path='/Quiz' element={<Quiz tosButtonClicked={tosButtonClicked} settosButtonClicked={settosButtonClicked} setMatchedDeities={setMatchedDeities} user={user}/>} />
          </Routes>
        </Router>
        <SparklingCursor />
      </div>
    </div>

  )
}

export default App;
