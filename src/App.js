import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CreateUser from './components/CreateUser/CreateUser';
import ViewUsers from './components/ViewUsers/ViewUsers';
import AdminHomepage from './components/AdminHomepage/AdminHomepage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route exact path='/' component={ViewUsers} />
        <Route path='/create-user' component={CreateUser} />
        <Route path='/AdminHomepage' component={AdminHomepage} />
        </div>
      </Router>
    );
  }
}

export default App;