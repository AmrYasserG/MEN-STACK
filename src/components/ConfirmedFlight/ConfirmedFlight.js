import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import Button from "@mui/material/Button";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

const ConfirmedFlight = () => {
    const state = useLocation().state;
    const [depChoosen,setDepChoosen] = useState("");
    const [arrChoosen,setArrChoosen] = useState("");
    useEffect(() => {
        console.log(state);
      }, []);
    return (
        
        
             <div>
        <h1>Choosen Flights Summary</h1>
        <br></br>

        <Box
      p={1}
      sx={{
          
        marginLeft: "5%",
        marginRight:"5%",
        marginTop:"0",
        "text-align": "center",
        width: 3/ 9,
        border: "5px solid #eeeeee",
        backgroundColor: "#fbfbfb",
        "box-shadow": "7px 7px 7px#cccccc",
        float:"Right"
      }}
    >
        <label>Departure Flight:</label>
        <h4>${state.depFlight.Price*state.noSeats}</h4>
        
        <label>Return Flight:</label>
        <h4>${state.arrFlight.Price*state.noSeats}</h4>
        


      <label>Total Price: </label>
        <h3>${state.depFlight.Price*state.noSeats+state.arrFlight.Price*state.noSeats}</h3>
        <br></br>
        </Box>
        
       
       

            <Box
      p={1}
      sx={{
          
        marginLeft: "5%",
        my: "2%",
        "text-align": "center",
        width: 3/ 9,
        border: "5px solid #eeeeee",
        backgroundColor: "#fbfbfb",
        "box-shadow": "7px 7px 7px#cccccc",
      }}
    >
        
           
        <h2>Departure Flight</h2>
        
        <label>Flight Date:</label>
        <label>{state.depFlight.Date}</label>
        <br></br>
        <label>Departure Time:</label>
       <label>{state.depFlight.DepTime}</label>
        <br></br>
        <label>Arrival Time:</label>
        <label>{state.depFlight.ArrTime}</label>
        <br></br>
        <label>Price per Seat:</label>
       <label>{state.depFlight.Price}</label>
        <br></br>
        <label>Cabin Class :</label>
        <label>{state.cabin}</label>
        <br></br>
        <label>Choosen Seats :</label>
        <label>{state.depSeatsReserved.map(
                              (SeatNumber) => {
                                return <span key={SeatNumber}>{SeatNumber} </span>;
                              }
                            )}</label>
        
        </Box>
        
        <Box
      p={1}
      sx={{
          
        marginLeft: "5%",
        marginRight:"5%",
        marginTop:"0",
        "text-align": "center",
        width: 3/ 9,
        border: "5px solid #eeeeee",
        backgroundColor: "#fbfbfb",
        "box-shadow": "7px 7px 7px#cccccc",
       
      }}
    >

      <label>Your Flight is confirmed!</label>
      <br></br>
      <h1>#{state.ConfirmId}</h1>

       
        <br></br>
        <Button variant="contained"><Link underline="none" to = '/HomePage'
     
      > Return to Home </Link></Button>
        </Box>
       
        <Box
      p={1}
      sx={{
          
        marginLeft: "5%",
        my: "2%",
        "text-align": "center",
        width: 3/ 9,
        border: "5px solid #eeeeee",
        backgroundColor: "#fbfbfb",
        "box-shadow": "7px 7px 7px#cccccc",
      }}
    >
        <h2>Return Flight</h2>
        <label>Flight Date:</label>
        <label>{state.arrFlight.Date}</label>
        <br></br>
        <label>Departure Time:</label>
       <label>{state.arrFlight.DepTime}</label>
        <br></br>
        <label>Arrival Time:</label>
        <label>{state.arrFlight.ArrTime}</label>
        <br></br>
        <label>Price per Seat:</label>
       <label>{state.arrFlight.Price}</label>
        <br></br>
        <label>Cabin Class :</label>
        <label>{state.cabin}</label>
        <br></br>
        <label>Choosen Seats :</label>
        <label>{state.arrSeatsReserved.map(
                              (SeatNumber) => {
                                return <span key={SeatNumber}>{SeatNumber} </span>;
                              }
                            )}</label>
        <br></br>
        </Box>

        

       
        
        </div>
    );
};

export default ConfirmedFlight ;