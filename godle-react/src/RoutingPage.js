import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './Home';
import AppNavbar from './AppNavbar';
import { Container } from 'reactstrap';
//import anotherpage from './anotherpage';

const RoutingPage = ({ page }) => {

  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    setLoading(true);
    setLoading(false);
  }, [ setLoading])

  if (loading) {
    return <p>Loading...</p>;
  }

  if (page === "Home") {
    return (
      <div>
        <AppNavbar user={user} setUser={setUser}/>
        <Container fluid>
          <Home/>
        </Container>
      </div>
    );
//   } else if (page === "anotherpage") {
//     return (
//       <div>
//         <AppNavbar user={user} setUser={setUser}/>
//         <Container fluid>
//           <FlightDetails user={user}/>
//         </Container>
//       </div>
//     );
   }
}

export default RoutingPage