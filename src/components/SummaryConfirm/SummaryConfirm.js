import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
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
import ResponsiveAppBar from "../ResponsiveAppBar/ResponsiveAppBar";

const SummaryConfirm = () => {
  const state = useLocation().state;
  const [depChoosen, setDepChoosen] = useState("");
  const [arrChoosen, setArrChoosen] = useState("");
  let depFlight = state.depFlight
  depFlight.cabin = state.cabin
  let arrFlight = state.arrFlight
  arrFlight.cabin = state.cabin
  useEffect(() => {
    console.log(state);
  }, []);

  return (
    <div>
      <ResponsiveAppBar pages={[]} isUser={true} settings={["profile"]} />
      <div style={{ textAlign: "center" }}>
        <h1>Choosen Flights Summary</h1>
        <br></br>
      </div>

      <Box
        p={1}
        sx={{
          marginLeft: "5%",
          marginRight: "5%",
          marginTop: "0",
          "text-align": "center",
          width: 3 / 9,
          border: "5px solid #eeeeee",
          backgroundColor: "#fbfbfb",
          "box-shadow": "7px 7px 7px#cccccc",
          float: "Right",
        }}
      >
        <label>Departure Flight:</label>
        <h4>${state.depFlight.Price * state.noSeats}</h4>

        <label>Return Flight:</label>
        <h4>${state.arrFlight.Price * state.noSeats}</h4>

        <label>Total Price: </label>
        <h3>
          $
          {state.depFlight.Price * state.noSeats +
            state.arrFlight.Price * state.noSeats}
        </h3>
        <br></br>
        <Button variant="contained">
          <Link
            style={{ textDecoration: 'none' }}
            to="/Payment"
            state={{
              id: state.id,
              depFlight: depFlight,
              arrFlight: arrFlight,
              noSeats: state.noSeats,
              depSeatsReserved: state.depSeatsReserved,
              arrSeatsReserved: state.arrSeatsReserved,
              editFlight: false
            }}
          >
            {" "}
            Proceed to Payment{" "}
          </Link>
        </Button>
      </Box>

      <Box
        p={1}
        sx={{
          marginLeft: "5%",
          my: "2%",
          "text-align": "center",
          width: 3 / 9,
          border: "5px solid #eeeeee",
          backgroundColor: "#fbfbfb",
          "box-shadow": "7px 7px 7px#cccccc",
        }}
      >
        <Grid container sx={{ textAlign: "left" }}>
          <Grid item xs={12} md={12}>
            <h2 style={{ textAlign: "center" }}>Departure Flight</h2>
          </Grid>
          <Grid item xs={1} md={2}></Grid>
          <Grid item xs={5} md={4}>
            <label>Flight Date:</label>
          </Grid>
          <Grid sx={{ textAlign: "right" }} item xs={5} md={4}>
            <label>{state.depFlight.Date}</label>
          </Grid>
          <Grid item xs={1} md={2}></Grid>

          <Grid item xs={1} md={2}></Grid>
          <Grid sx={{ marginTop: "2%" }} item xs={5} md={4}>
            <label>Departure Time:</label>{" "}
          </Grid>

          <Grid sx={{ marginTop: "2%", textAlign: "right" }} item xs={5} md={4}>
            <label>{state.depFlight.DepTime}</label>{" "}
          </Grid>
          <Grid item xs={1} md={2}></Grid>

          <Grid item xs={1} md={2}></Grid>
          <Grid sx={{ marginTop: "2%" }} item xs={5} md={4}>
            <label>Arrival Time:</label>
          </Grid>
          <Grid sx={{ marginTop: "2%", textAlign: "right" }} item xs={5} md={4}>
            <label>{state.depFlight.ArrTime}</label>
          </Grid>
          <Grid item xs={1} md={2}></Grid>
          <Grid item xs={1} md={2}></Grid>

          <Grid sx={{ marginTop: "2%" }} item xs={5} md={4}>
            <label>Price per Seat:</label>
          </Grid>
          <Grid sx={{ marginTop: "2%", textAlign: "right" }} item xs={5} md={4}>
            <label>{state.depFlight.Price}</label>
          </Grid>
          <Grid item xs={1} md={2}></Grid>
          <Grid item xs={1} md={2}></Grid>
          <Grid sx={{ marginTop: "2%" }} item xs={5} md={4}>
            <label>Cabin Class :</label>
          </Grid>
          <Grid sx={{ marginTop: "2%", textAlign: "right" }} item xs={5} md={4}>
            <label>{state.cabin}</label>
          </Grid>
          <Grid item xs={1} md={2}></Grid>
          <Grid item xs={1} md={2}></Grid>
          <Grid sx={{ marginTop: "2%" }} item xs={5} md={4}>
            <label>Choosen Seats :</label>
          </Grid>
          <Grid sx={{ marginTop: "2%", textAlign: "right" }} item xs={5} md={4}>
            <label>
              {state.depSeatsReserved.map((SeatNumber) => {
                return <span key={SeatNumber}>{SeatNumber} </span>;
              })}
            </label>
          </Grid>
          <Grid item xs={1} md={2}></Grid>
        </Grid>
      </Box>

      <Box
        p={1}
        sx={{
          marginLeft: "5%",
          my: "2%",
          "text-align": "center",
          width: 3 / 9,
          border: "5px solid #eeeeee",
          backgroundColor: "#fbfbfb",
          "box-shadow": "7px 7px 7px#cccccc",
        }}
      >
        <Grid container sx={{ textAlign: "left" }}>
          <Grid item xs={12} md={12}>
            <h2 style={{ textAlign: "center" }}>Return Flight</h2>
          </Grid>
          <Grid item xs={1} md={2} marginTop={"2%"}></Grid>
          <Grid item xs={5} md={4} marginTop={"2%"}>
            <label>Flight Date:</label>{" "}
          </Grid>
          <Grid item xs={5} md={4} sx={{ marginTop: "2%", textAlign: "right" }}>
            <label>{state.arrFlight.Date}</label>{" "}
          </Grid>
          <Grid item xs={1} md={2} marginTop={"2%"}></Grid>
          <Grid item xs={1} md={2} marginTop={"2%"}></Grid>
          <Grid item xs={5} md={4} marginTop={"2%"}>
            <label>Departure Time:</label>{" "}
          </Grid>
          <Grid item xs={5} md={4} sx={{ marginTop: "2%", textAlign: "right" }}>
            <label>{state.arrFlight.DepTime}</label>{" "}
          </Grid>
          <br></br> <Grid item xs={1} md={2} marginTop={"2%"}></Grid>
          <Grid item xs={1} md={2} marginTop={"2%"}></Grid>{" "}
          <Grid item xs={5} md={4} marginTop={"2%"}>
            <label>Arrival Time:</label>{" "}
          </Grid>
          <Grid item xs={5} md={4} sx={{ marginTop: "2%", textAlign: "right" }}>
            <label>{state.arrFlight.ArrTime}</label>{" "}
          </Grid>
          <Grid item xs={1} md={2} marginTop={"2%"}></Grid>
          <Grid item xs={1} md={2} marginTop={"2%"}></Grid>
          <Grid item xs={5} md={4} marginTop={"2%"}>
            <label>Price per Seat:</label>{" "}
          </Grid>
          <Grid item xs={5} md={4} sx={{ marginTop: "2%", textAlign: "right" }}>
            <label>{state.arrFlight.Price}</label>
          </Grid>
          <Grid item xs={1} md={2} marginTop={"2%"}></Grid>
          <Grid item xs={1} md={2} marginTop={"2%"}></Grid>{" "}
          <Grid item xs={5} md={4} marginTop={"2%"}>
            <label>Cabin Class :</label>{" "}
          </Grid>
          <Grid item xs={5} md={4} sx={{ marginTop: "2%", textAlign: "right" }}>
            <label>{state.cabin}</label>{" "}
          </Grid>
          <Grid item xs={1} md={2} marginTop={"2%"}></Grid>
          <Grid item xs={1} md={2} marginTop={"2%"}></Grid>{" "}
          <Grid item xs={5} md={4} marginTop={"2%"}>
            <label>Choosen Seats :</label>{" "}
          </Grid>
          <Grid item xs={5} md={4} sx={{ marginTop: "2%", textAlign: "right" }}>
            <label>
              {state.arrSeatsReserved.map((SeatNumber) => {
                return <span key={SeatNumber}>{SeatNumber} </span>;
              })}
            </label>
          </Grid>
          <Grid item xs={1} md={2} marginTop={"2%"}></Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default SummaryConfirm;
