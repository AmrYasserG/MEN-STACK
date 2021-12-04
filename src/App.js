import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import None from "./components/None/None";
import AdminHomepage from "./components/AdminHomepage/AdminHomepage";
import UserHomepage from "./components/UserHomePage/UserHomepage";
import Scratch from "./components/scratch/scratch";
import CreateFlight from "./components/CreateFlight/CreateFlight";
import UserProfile from "./components/UserProfile/UserProfile";
import Login from "./components/Login/Login";
import ReservedFlights from "./components/ReservedFlights/ReservedFlights";

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
            <Route path="/UserProfile" element={<UserProfile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/ReservedFlights" element={<ReservedFlights />} />            
            <Route path="/*" element={<None />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
