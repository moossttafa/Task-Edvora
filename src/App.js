import React from 'react';
import Home from './Pages/Nearest rides/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PastRides from './Pages/Past rides/PastRides';
import UpcomingRides from './Pages/Upcoming rides/UpcomingRides';
import Navbar from './Components/Header/Navbar';
import './App.css'; 
// import Context from './Components/Context/ApiContext';
// import RideContext from './Components/Context/RideContext';

const App = () => {
  return (
    <Router>
      <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/pastRides'>
              <PastRides />
            </Route>
            <Route exact path='/upcomingRides'>
              <UpcomingRides />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
