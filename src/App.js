import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AdminHomepage from './components/AdminHomepage/AdminHomepage';
import scratch from './components/scratch/scratch';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route exact path='/' component={AdminHomepage} />
        <Route path='/AdminHomepage' component={AdminHomepage} />
        <Route path='/scratch' component={scratch} />
        </div>
      </Router>
    );
  }
}

export default App;