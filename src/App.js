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
import PlaneSeats from "./components/planeSeats/planeSeats";
import SummaryConfirm from "./components/SummaryConfirm/SummaryConfirm";
import ConfirmedFlight from "./components/ConfirmedFlight/ConfirmedFlight";
import SignIn from "./components/SignIn/SignIn";
import { Box } from "@mui/material";
import background from "./components/Background.jpg";

class App extends Component {
  render() {
    return (
      <Router className="App">
        <Box
         p={2}
        sx={{ 
          
          backgroundImage:`url(${background})`}}>
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
            <Route path="/SummaryConfirm" element={<SummaryConfirm />} />
            <Route path="/ConfirmedFlight" element={<ConfirmedFlight />} />
            <Route path="/planeSeats" element={<PlaneSeats />} /> 
          </Routes>
        </Box>
      </Router>
    );
  }
}

export default App;
