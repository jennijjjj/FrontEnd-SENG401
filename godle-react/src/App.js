import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import RoutingPage from './RoutingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SparklingCursor from './SparklingCursor';
import Deity from './Deity';

const App = () => {

  return (
    <div>
      <div className="gradient-container"></div>
      <div className="cursorCanvas">
        <Router>
          <Routes>
            <Route exact path="/" element={<RoutingPage page="Home" />} />
            <Route exact={true} path='/Register' element={<RoutingPage page="Register" />} />
            <Route exact={true} path='/Matches' element={<RoutingPage page="Matches" />} />
            <Route exact={true} path='/Admin' element={<RoutingPage page="Admin" />} />
            <Route exact={true} path='/Calendar' element={<RoutingPage page="Calendar" />} />
            <Route exact={true} path='/Forum' element={<RoutingPage page="Forum" />} />
            <Route exact={true} path='/Start' element={<RoutingPage page="Start" />} />
            <Route exact={true} path='/Deity' element={<RoutingPage page="Deity" />} />
            {//<Route path="/page-variable" exact={true} element={<RoutingPage page={"page-variable"}/>}/>
            }
          </Routes>
        </Router>
        <SparklingCursor />
      </div>
    </div>

  )
}

export default App;
