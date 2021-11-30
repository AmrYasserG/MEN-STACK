import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AdminHomepage from './components/AdminHomepage/AdminHomepage';
import scratch from './components/scratch/scratch';
import CreateFlight from './components/CreateFlight/CreateFlight';
import ReservedFlights from './components/ReservedFlights/ReservedFlights';

class App extends Component {
  render() {
    return (
      <Router className='App'>
        <div>
        <Route exact path='/' component={AdminHomepage} />
        <Route path='/CreateFlight' component={CreateFlight} />
        <Route path='/AdminHomepage' component={AdminHomepage} />
        <Route path='/ReservedFlights' component={ReservedFlights} />
        <Route path='/scratch' component={scratch} />
        </div>
      </Router>
    );
  }
}

export default App;