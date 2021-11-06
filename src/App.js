import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AdminHomepage from './components/AdminHomepage/AdminHomepage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route exact path='/' component={AdminHomepage} />
        <Route path='/AdminHomepage' component={AdminHomepage} />
        </div>
      </Router>
    );
  }
}

export default App;