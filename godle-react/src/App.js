import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import RoutingPage from './RoutingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<RoutingPage page="Home"/>}/>
        {//<Route path="/page-variable" exact={true} element={<RoutingPage page={"page-variable"}/>}/>
        }
      </Routes>
    </Router>
  )
}

export default App;
