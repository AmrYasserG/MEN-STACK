// import * as React from 'react';
import axios from "axios";
import AddFlight from "./AddFlight";
import "./CreateFlight.css";


const CreateFlight = () => {
  const addFlight = async (flight) => {
    console.log(flight);
    console.log(flight.Flight);
    await axios.post("http://localhost:3005/flights/createNewFlight", 
    {
    FlightNumber:JSON.parse(flight.Flight),
    From:flight.From,
    To:flight.To,
    ArrivalTime:flight.ArrivalTime,
    DepartureTime:flight.DepartureTime,
    EconomySeatsNo:flight.EconomyClassSeats,
    BusinessSeatsNo:flight.BusinessClassSeats,
    FirstSeatsNo:flight.FirstClassSeats,
    AirportDepartureTerminal:flight.DepartureTerminal,
    AirportArrivalTerminal:flight.ArrivalTerminal,
    Date: flight.Date
   }
  // {
  //   FlightNumber:22,
  //   From:flight.From,
  //   To:flight.To,
  //   ArrivalTime:flight.ArrivalTime,
  //   DepartureTime:flight.DepartureTime,
  //   EconomySeatsNo:3,
  //   BusinessSeatsNo:3,
  //   FirstSeatsNo:3,
  //   AirportDepartureTerminal:3,
  //   AirportArrivalTerminal:3,
  //   Date:new Date(flight.Date)
  //  }
   )
   
  }

  return (
    <div className="createFlight">
      <AddFlight onAdd={addFlight}/>
      {/* <Link to="/signup" className="btn btn-primary">Sign up</Link> */}
    </div>
  );
};
export default CreateFlight;

