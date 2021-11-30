import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AdminHomepage from "./components/AdminHomepage/AdminHomepage";
import UserHomepage from "./components/UserHomePage/UserHomepage";
import Scratch from "./components/scratch/scratch";
import CreateFlight from "./components/CreateFlight/CreateFlight";

class App extends Component {
  render() {
    return (
      <Router className="App">
        <div>
          <Routes>
            <Route path="/" element={<AdminHomepage />} />
            <Route path="/CreateFlight" element={<CreateFlight />} />
            <Route path="/AdminHomepage" element={<AdminHomepage />} />
            <Route path="/scratch" element={<Scratch />} />
            <Route path="/HomePage" element={<UserHomepage />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
