// import * as React from 'react';
import axios from "axios";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import "./CreateFlight.css";
import { useState, useEffect, forwardRef, memo } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import FormLabel from "@mui/material/FormLabel";
import FlightTakeoffRoundedIcon from "@mui/icons-material/FlightTakeoffRounded";
import FlightLandRoundedIcon from "@mui/icons-material/FlightLandRounded";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import ResponsiveAppBar from "../ResponsiveAppBar/ResponsiveAppBar";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CreateFlight = () => {
  const [twoWay, setTwoWay] = useState(false);
  const [Flight, setFlight] = useState("");
  const [From, setFrom] = useState("");
  const [To, setTo] = useState("");
  const [FlightDate, setFlightDate] = useState("");
  const [FlightArrivalDate, setFlightArrivalDate] = useState("");
  const [DepartureTime, setDepartureTime] = useState("");
  const [ArrivalTime, setArrivalTime] = useState("");
  const [DepartureTerminal, setDepartureTerminal] = useState();
  const [ArrivalTerminal, setArrivalTerminal] = useState();
  const [BusinessClassSeats, setBusinessClassSeats] = useState();
  const [EconomyClassSeats, setEconomyClassSeats] = useState();
  const [FirstClassSeats, setFirstClassSeats] = useState();
  const [BusinessClassPrice, setBusinessClassPrice] = useState();
  const [EconomyClassPrice, setEconomyClassPrice] = useState();
  const [FirstClassPrice, setFirstClassPrice] = useState();
  const [BaggageAllowance, setBaggageAllowance] = useState();
  const [ReturnFlight, setReturnFlight] = useState("");
  const [ReturnDate, setReturnDate] = useState("");
  const [ReturnArrivalDate, setReturnArrivalDate] = useState("");
  const [ReturnDepartureTime, setReturnDepartureTime] = useState("");
  const [ReturnArrivalTime, setReturnArrivalTime] = useState("");
  const [ReturnDepartureTerminal, setReturnDepartureTerminal] = useState();
  const [ReturnArrivalTerminal, setReturnArrivalTerminal] = useState();
  const [ReturnBusinessClassSeats, setReturnBusinessClassSeats] = useState();
  const [ReturnEconomyClassSeats, setReturnEconomyClassSeats] = useState();
  const [ReturnFirstClassSeats, setReturnFirstClassSeats] = useState();
  const [ReturnBusinessClassPrice, setReturnBusinessClassPrice] = useState();
  const [ReturnEconomyClassPrice, setReturnEconomyClassPrice] = useState();
  const [ReturnFirstClassPrice, setReturnFirstClassPrice] = useState();
  const [ReturnBaggageAllowance, setReturnBaggageAllowance] = useState();

  //Validation
  const [validFlightNumber, setValidFlightNumber] = useState(true);
  const [validUniqueFlightNumber, setValidUniqueFlightNumber] = useState(false);
  const [validUniqueReturnFlightNumber, setValidUniqueReturnFlightNumber] =
    useState(false);
  const [validDate, setValidDate] = useState(true);
  const [validArrivalDate, setValidArrivalDate] = useState(true);
  const [validReturnArrivalDate, setValidReturnArrivalDate] = useState(true);
  const [validDepartureTime, setValidDepartureTime] = useState(true);
  const [validReturnTime, setValidReturnTime] = useState(true);
  const [CreateResponse, setCreateResponse] = useState(false);

  const handleCreateResponseClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setCreateResponse(false);
  };

  const handleUniqueReturnFlightNumberClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setValidUniqueReturnFlightNumber(false);
  };

  const handleUniqueFlightNumberClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setValidUniqueFlightNumber(false);
  };

  useEffect(() => {
    setValidFlightNumber(!twoWay || Flight !== ReturnFlight);
  }, [twoWay, Flight, ReturnFlight]);
  useEffect(() => {
    //Compare Departure Flight
    setValidDate(!twoWay || new Date(FlightArrivalDate) < new Date(ReturnDate));
  }, [twoWay, FlightArrivalDate, ReturnDate]);

  useEffect(() => {
    setValidArrivalDate(new Date(FlightDate) <= new Date(FlightArrivalDate));
  }, [FlightArrivalDate, FlightDate]);

  useEffect(() => {
    setValidDepartureTime(
      !validArrivalDate ||
        !Compare2Dates(new Date(FlightArrivalDate), new Date(FlightDate)) ||
        DepartureTime < ArrivalTime
    );
  }, [
    FlightArrivalDate,
    FlightDate,
    DepartureTime,
    ArrivalTime,
    validArrivalDate,
  ]);
  useEffect(() => {
    setValidReturnTime(
      !twoWay ||
        !validReturnArrivalDate ||
        !Compare2Dates(new Date(ReturnArrivalDate), new Date(ReturnDate)) ||
        ReturnDepartureTime < ReturnArrivalTime
    );
  }, [
    twoWay,
    ReturnArrivalDate,
    ReturnDate,
    ReturnDepartureTime,
    ReturnArrivalTime,
    validReturnArrivalDate,
  ]);
  useEffect(() => {
    setValidReturnArrivalDate(
      !twoWay || new Date(ReturnArrivalDate) >= new Date(ReturnDate)
    );
  }, [twoWay, ReturnArrivalDate, ReturnDate]);

  const Compare2Dates = (d1, d2) => {
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getDate() === d2.getDate() &&
      d1.getMonth() === d2.getMonth()
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();

    let temp;

    if (!twoWay) {
      temp = {
        twoWay,
        FlightNumber: Flight,
        From,
        To,
        Date: FlightDate,
        ArrivalDate: FlightArrivalDate,
        DepartureTime,
        ArrivalTime,
        AirportDepartureTerminal: DepartureTerminal,
        AirportArrivalTerminal: ArrivalTerminal,
        BusinessSeatsNo: BusinessClassSeats,
        EconomySeatsNo: EconomyClassSeats,
        FirstSeatsNo: FirstClassSeats,
        BusinessClassPrice,
        EconomyClassPrice,
        FirstClassPrice,
        BaggageAllowance,
      };
    } else {
      temp = {
        twoWay,
        FlightNumber: Flight,
        From,
        To,
        Date: FlightDate,
        ArrivalDate: FlightArrivalDate,
        DepartureTime,
        ArrivalTime,
        AirportDepartureTerminal: DepartureTerminal,
        AirportArrivalTerminal: ArrivalTerminal,
        BusinessSeatsNo: BusinessClassSeats,
        EconomySeatsNo: EconomyClassSeats,
        FirstSeatsNo: FirstClassSeats,
        BusinessClassPrice,
        EconomyClassPrice,
        FirstClassPrice,
        BaggageAllowance,

        ReturnFlightNumber: ReturnFlight,
        ReturnDate,
        ReturnArrivalDate,
        ReturnDepartureTime,
        ReturnArrivalTime,
        ReturnAirportDepartureTerminal: ReturnDepartureTerminal,
        ReturnAirportArrivalTerminal: ReturnArrivalTerminal,
        ReturnBusinessSeatsNo: ReturnBusinessClassSeats,
        ReturnEconomySeatsNo: ReturnEconomyClassSeats,
        ReturnFirstSeatsNo: ReturnFirstClassSeats,
        ReturnBusinessClassPrice,
        ReturnEconomyClassPrice,
        ReturnFirstClassPrice,
        ReturnBaggageAllowance,
      };
    }
    console.log("Sending");
    axios
      .post("http://localhost:3005/flights/createNewFlight", temp)
      .then((res) => {
        console.log(res);
        console.log(typeof res);
        if (res.data === "Balabizo") {
          setValidUniqueFlightNumber(true);
        } else if (res.data === "Ba3lol") {
          setValidUniqueReturnFlightNumber(true);
        } else {
          setFrom("");
          setTo("");

          setFlight("");
          setFlightDate("");
          setFlightArrivalDate("");
          setDepartureTime("");
          setArrivalTime("");
          setDepartureTerminal("");
          setArrivalTerminal("");
          setBusinessClassSeats(0);
          setEconomyClassSeats(0);
          setFirstClassSeats(0);
          setBusinessClassPrice(0);
          setEconomyClassPrice(0);
          setFirstClassPrice(0);
          setBaggageAllowance(0);

          setReturnFlight("");
          setReturnDate("");
          setReturnArrivalDate("");
          setReturnDepartureTime("");
          setReturnArrivalTime("");
          setReturnDepartureTerminal("");
          setReturnArrivalTerminal("");
          setReturnBusinessClassSeats(0);
          setReturnEconomyClassSeats(0);
          setReturnFirstClassSeats(0);
          setReturnBusinessClassPrice(0);
          setReturnEconomyClassPrice(0);
          setReturnFirstClassPrice(0);
          setReturnBaggageAllowance(0);
          setValidFlightNumber(true);
          setValidDate(true);
          setCreateResponse(true);
        }
      });
  };

  return (
    <>
      <Box
        p={1}
        sx={{
          m: "auto",
          my: "2%",
          "text-align": "center",
          width: ["95%", 7 / 9, 5 / 9],
          border: "1px solid #eeeeee",
          backgroundColor: "#f9f9f9",
          "box-shadow": "0px 0px 3px 3px #59C8FD",
        }}
      >
        <Box component={"div"}>
          <Typography variant="h3" component="div" sx={{ my: "3%" }}>
            Create A Flight{" "}
          </Typography>
          <FormControlLabel
            control={<Switch />}
            value={twoWay}
            label="Add Return Flight"
            labelPlacement="start"
            onChange={(e) => {
              setTwoWay(e.target.checked);
            }}
          />
        </Box>
        <hr />
        <form onSubmit={onSubmit}>
          <Divider sx={{ fontVariant: "small-caps" }}>location</Divider>
          <Box componet={"div"} p={2}>
            {" "}
            <TextField
              type="text"
              label="From"
              required
              onChange={(e) => setFrom(e.target.value)}
              value={From}
              sx={{ backgroundColor: "#ffffff", width: ["60%", "30%"], mx: 5 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FlightTakeoffRoundedIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              type="text"
              label="To"
              value={To}
              required
              onChange={(e) => setTo(e.target.value)}
              sx={{
                backgroundColor: "#ffffff",
                width: ["60%", "30%"],
                mx: 5,
                my: [2, 0],
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FlightLandRoundedIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <hr />
          <Divider sx={{ fontVariant: "small-caps" }}>departure flight</Divider>
          <Box componet={"div"} p={2}>
            <TextField
              type="text"
              id="outlined-basic"
              label="Flight Number"
              required
              error={!validFlightNumber && Flight}
              helperText={
                validFlightNumber ? "" : "Flight Numbers Cant be similar"
              }
              onChange={(e) => setFlight(e.target.value)}
              value={Flight}
              sx={{ backgroundColor: "#ffffff" }}
            />
          </Box>
          <Divider sx={{ width: 4 / 5, m: "auto" }}>Date and Time</Divider>
          <Box componet={"div"} p={1}>
            <TextField
              required
              type="date"
              label="Departure Date"
              id="dDate"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"> </InputAdornment>
                ),
              }}
              error={!validArrivalDate && FlightDate}
              helperText={
                !validArrivalDate && FlightDate
                  ? "Departure Date must NOT be LATER than Arrival Date"
                  : ""
              }
              value={FlightDate}
              onChange={(e) => setFlightDate(e.target.value)}
              sx={{
                backgroundColor: "#ffffff",
                width: ["60%", "30%"],
                mx: 5,
                my: [2, 0],
              }}
            />
            <TextField
              required
              type="date"
              label="Arrival Date"
              id="dDate"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"> </InputAdornment>
                ),
              }}
              error={FlightArrivalDate && (!validDate || !validArrivalDate)}
              helperText={
                FlightArrivalDate && !validArrivalDate
                  ? "Departure Date must NOT be LATER than Arrival Date"
                  : FlightArrivalDate && !validDate
                  ? "Departure Flight must be EARLIER than Return Flight"
                  : ""
              }
              value={FlightArrivalDate}
              onChange={(e) => setFlightArrivalDate(e.target.value)}
              sx={{ backgroundColor: "#ffffff", width: ["60%", "30%"], mx: 5 }}
            />
          </Box>{" "}
          <Box componet={"div"} p={1}>
            <TextField
              type="time"
              variant="outlined"
              error={!validDepartureTime && DepartureTime}
              label="Departure Time"
              value={DepartureTime}
              required
              onChange={(e) => setDepartureTime(e.target.value)}
              sx={{
                backgroundColor: "#ffffff",
                width: ["60%", "30%"],
                mx: 5,
                my: [2, 0],
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"> </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="outlined"
              type="time"
              label="Arrival Time"
              value={ArrivalTime}
              error={!validDepartureTime && ArrivalTime}
              required
              onChange={(e) => setArrivalTime(e.target.value)}
              sx={{ backgroundColor: "#ffffff", width: ["60%", "30%"], mx: 5 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"> </InputAdornment>
                ),
              }}
              helperText={
                !validDepartureTime && ArrivalTime
                  ? "Arrival Should be later than Departure Time"
                  : ""
              }
            />
          </Box>{" "}
          <Divider sx={{ width: 4 / 5, m: "auto" }}>Terminals</Divider>
          <Box componet={"div"} p={2}>
            <TextField
              type="number"
              label="Departure Terminal"
              error={DepartureTerminal <= 0}
              value={DepartureTerminal}
              required
              onChange={(e) => setDepartureTerminal(e.target.value)}
              helperText={DepartureTerminal <= 0 ? "Invalid Value" : ""}
              sx={{
                backgroundColor: "#ffffff",
                width: ["60%", "30%"],
                mx: 5,
                my: [2, 0],
              }}
            />
            <TextField
              type="number"
              label="Arrival Terminal"
              error={ArrivalTerminal <= 0}
              value={ArrivalTerminal}
              required
              onChange={(e) => setArrivalTerminal(e.target.value)}
              helperText={ArrivalTerminal <= 0 ? "Invalid Value" : ""}
              sx={{ backgroundColor: "#ffffff", width: ["60%", "30%"], mx: 5 }}
            />
          </Box>{" "}
          <Divider sx={{ width: 4 / 5, m: "auto" }}>Classes Info</Divider>
          <Box componet={"div"} p={2}>
            <FormLabel>
              First Class:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </FormLabel>

            <TextField
              sx={{ backgroundColor: "#ffffff", width: "20%", mx: "2%" }}
              type="number"
              size="small"
              label="No. Seats"
              value={FirstClassSeats}
              required
              onChange={(e) => setFirstClassSeats(Number(e.target.value))}
              error={FirstClassSeats <= 0}
              helperText={FirstClassSeats <= 0 ? "Invalid Value" : ""}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AirlineSeatReclineNormalIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              sx={{ backgroundColor: "#ffffff", width: "20%" }}
              type="number"
              size="small"
              label="Price"
              value={FirstClassPrice}
              required
              onChange={(e) => setFirstClassPrice(Number(e.target.value))}
              error={FirstClassPrice <= 0}
              helperText={FirstClassPrice <= 0 ? "Invalid Value" : ""}
              InputProps={{
                endAdornment: <InputAdornment position="end">$</InputAdornment>,
              }}
            />
          </Box>{" "}
          <Box componet={"div"} p={2}>
            <FormLabel>Business Class:</FormLabel>

            <TextField
              sx={{ backgroundColor: "#ffffff", width: "20%", mx: "2%" }}
              type="number"
              label="No. Seats"
              value={BusinessClassSeats}
              required
              size="small"
              onChange={(e) => setBusinessClassSeats(Number(e.target.value))}
              error={BusinessClassSeats <= 0}
              helperText={BusinessClassSeats <= 0 ? "Invalid Value" : ""}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AirlineSeatReclineNormalIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              sx={{ backgroundColor: "#ffffff", width: "20%" }}
              type="number"
              label="Price"
              value={BusinessClassPrice}
              required
              size="small"
              onChange={(e) => setBusinessClassPrice(Number(e.target.value))}
              error={BusinessClassPrice <= 0}
              helperText={BusinessClassPrice <= 0 ? "Invalid Value" : ""}
              InputProps={{
                endAdornment: <InputAdornment position="end">$</InputAdornment>,
              }}
            />
          </Box>{" "}
          <Box componet={"div"} p={2}>
            <FormLabel>Economy Class:</FormLabel>

            <TextField
              sx={{ backgroundColor: "#ffffff", width: "20%", mx: "2%" }}
              type="number"
              label="No. Seats"
              value={EconomyClassSeats}
              required
              size="small"
              onChange={(e) => setEconomyClassSeats(Number(e.target.value))}
              error={EconomyClassSeats <= 0}
              helperText={EconomyClassSeats <= 0 ? "Invalid Value" : ""}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AirlineSeatReclineNormalIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              sx={{ backgroundColor: "#ffffff", width: "20%" }}
              type="number"
              label="Price"
              value={EconomyClassPrice}
              required
              size="small"
              onChange={(e) => setEconomyClassPrice(Number(e.target.value))}
              error={EconomyClassPrice <= 0}
              helperText={EconomyClassPrice <= 0 ? "Invalid Value" : ""}
              InputProps={{
                endAdornment: <InputAdornment position="end">$</InputAdornment>,
              }}
            />
          </Box>{" "}
          <Divider sx={{ width: 4 / 5, m: "auto" }}>Baggage Allowance</Divider>
          <Box componet={"div"} p={2}>
            <TextField
              type="number"
              sx={{ backgroundColor: "#ffffff", width: ["60%", "30%"], mx: 5 }}
              error={BaggageAllowance <= 0}
              label="Baggage allowance"
              value={BaggageAllowance}
              required
              onChange={(e) => setBaggageAllowance(Number(e.target.value))}
              helperText={BaggageAllowance <= 0 ? "Invalid Value" : ""}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">kg</InputAdornment>
                ),
              }}
            />
          </Box>{" "}
          {twoWay && (
            <Box>
              <hr />
              <Divider sx={{ fontVariant: "small-caps" }}>
                return flight
              </Divider>
              <Box componet={"div"} p={2}>
                <TextField
                  type="text"
                  id="outlined-basic"
                  label="Flight Number"
                  required
                  error={!validFlightNumber}
                  helperText={
                    validFlightNumber ? "" : "Flight Numbers Cant be similar"
                  }
                  onChange={(e) => setReturnFlight(e.target.value)}
                  value={ReturnFlight}
                  sx={{ backgroundColor: "#ffffff" }}
                />
              </Box>
              <Divider sx={{ width: 4 / 5, m: "auto" }}>Date and Time</Divider>
              <Box componet={"div"} p={2}>
                <TextField
                  required
                  type="date"
                  label="Departure Date"
                  id="rDate"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"> </InputAdornment>
                    ),
                  }}
                  error={ReturnDate && (!validDate || !validReturnArrivalDate)}
                  helperText={
                    !validReturnArrivalDate && ReturnDate
                      ? "Departure Date must NOT be LATER than Arrival Date"
                      : !validDate && ReturnDate
                      ? "Departure Flight must be EARLIER than Return Flight"
                      : ""
                  }
                  value={ReturnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  sx={{
                    backgroundColor: "#ffffff",
                    width: ["60%", "30%"],
                    mx: 5,
                    my: [2, 0],
                  }}
                />
                <TextField
                  required
                  type="date"
                  label="Arrival Date"
                  id="rdDate"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"> </InputAdornment>
                    ),
                  }}
                  error={!validReturnArrivalDate && ReturnArrivalDate}
                  helperText={
                    !validReturnArrivalDate && ReturnArrivalDate
                      ? "Departure Flight must be EARLIER than Return Flight"
                      : ""
                  }
                  value={ReturnArrivalDate}
                  onChange={(e) => setReturnArrivalDate(e.target.value)}
                  sx={{
                    backgroundColor: "#ffffff",
                    width: ["60%", "30%"],
                    mx: 5,
                  }}
                />
              </Box>{" "}
              <Box componet={"div"} p={1}>
                <TextField
                  type="time"
                  variant="outlined"
                  label="Departure Time"
                  error={!validReturnTime && ReturnDepartureTime}
                  value={ReturnDepartureTime}
                  required
                  onChange={(e) => setReturnDepartureTime(e.target.value)}
                  sx={{
                    backgroundColor: "#ffffff",
                    width: ["60%", "30%"],
                    mx: 5,
                    my: [2, 0],
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"> </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  variant="outlined"
                  type="time"
                  label="Arrival Time"
                  error={!validReturnTime && ReturnArrivalTime}
                  value={ReturnArrivalTime}
                  required
                  onChange={(e) => setReturnArrivalTime(e.target.value)}
                  sx={{
                    backgroundColor: "#ffffff",
                    width: ["60%", "30%"],
                    mx: 5,
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"> </InputAdornment>
                    ),
                  }}
                  helperText={
                    !validReturnTime && ReturnArrivalTime
                      ? "Arrival Should be later than Departure Time"
                      : ""
                  }
                />
              </Box>{" "}
              <Divider sx={{ width: 4 / 5, m: "auto" }}>Terminals</Divider>
              <Box componet={"div"} p={2}>
                <TextField
                  type="number"
                  label="Departure Terminal"
                  error={ReturnDepartureTerminal <= 0}
                  value={ReturnDepartureTerminal}
                  required
                  onChange={(e) => setReturnDepartureTerminal(e.target.value)}
                  helperText={DepartureTerminal <= 0 ? "Invalid Value" : ""}
                  sx={{
                    backgroundColor: "#ffffff",
                    width: ["60%", "30%"],
                    mx: 5,
                    my: [2, 0],
                  }}
                />
                <TextField
                  type="number"
                  label="Arrival Terminal"
                  error={ReturnArrivalTerminal <= 0}
                  value={ReturnArrivalTerminal}
                  required
                  onChange={(e) => setReturnArrivalTerminal(e.target.value)}
                  helperText={ArrivalTerminal <= 0 ? "Invalid Value" : ""}
                  sx={{
                    backgroundColor: "#ffffff",
                    width: ["60%", "30%"],
                    mx: 5,
                  }}
                />
              </Box>{" "}
              <Divider sx={{ width: 4 / 5, m: "auto" }}>Classes Info</Divider>
              <Box componet={"div"} p={2}>
                <FormLabel>
                  First Class:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </FormLabel>

                <TextField
                  sx={{ backgroundColor: "#ffffff", width: "20%", mx: "2%" }}
                  type="number"
                  size="small"
                  label="No. Seats"
                  value={ReturnFirstClassSeats}
                  required
                  onChange={(e) =>
                    setReturnFirstClassSeats(Number(e.target.value))
                  }
                  error={ReturnFirstClassSeats <= 0}
                  helperText={FirstClassSeats <= 0 ? "Invalid Value" : ""}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AirlineSeatReclineNormalIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  sx={{ backgroundColor: "#ffffff", width: "20%" }}
                  type="number"
                  size="small"
                  label="Price"
                  value={ReturnFirstClassPrice}
                  required
                  onChange={(e) =>
                    setReturnFirstClassPrice(Number(e.target.value))
                  }
                  error={ReturnFirstClassPrice <= 0}
                  helperText={FirstClassPrice <= 0 ? "Invalid Value" : ""}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">$</InputAdornment>
                    ),
                  }}
                />
              </Box>{" "}
              <Box componet={"div"} p={2}>
                <FormLabel>Business Class:</FormLabel>

                <TextField
                  sx={{ backgroundColor: "#ffffff", width: "20%", mx: "2%" }}
                  type="number"
                  label="No. Seats"
                  value={ReturnBusinessClassSeats}
                  required
                  size="small"
                  onChange={(e) =>
                    setReturnBusinessClassSeats(Number(e.target.value))
                  }
                  error={ReturnBusinessClassSeats <= 0}
                  helperText={BusinessClassSeats <= 0 ? "Invalid Value" : ""}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AirlineSeatReclineNormalIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  sx={{ backgroundColor: "#ffffff", width: "20%" }}
                  type="number"
                  label="Price"
                  value={ReturnBusinessClassPrice}
                  required
                  size="small"
                  onChange={(e) =>
                    setReturnBusinessClassPrice(Number(e.target.value))
                  }
                  error={ReturnBusinessClassPrice <= 0}
                  helperText={BusinessClassPrice <= 0 ? "Invalid Value" : ""}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">$</InputAdornment>
                    ),
                  }}
                />
              </Box>{" "}
              <Box componet={"div"} p={2}>
                <FormLabel>Economy Class:</FormLabel>

                <TextField
                  sx={{ backgroundColor: "#ffffff", width: "20%", mx: "2%" }}
                  type="number"
                  label="No. Seats"
                  value={ReturnEconomyClassSeats}
                  required
                  size="small"
                  onChange={(e) =>
                    setReturnEconomyClassSeats(Number(e.target.value))
                  }
                  error={ReturnEconomyClassSeats <= 0}
                  helperText={EconomyClassSeats <= 0 ? "Invalid Value" : ""}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AirlineSeatReclineNormalIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  sx={{ backgroundColor: "#ffffff", width: "20%" }}
                  type="number"
                  label="Price"
                  value={ReturnEconomyClassPrice}
                  required
                  size="small"
                  onChange={(e) =>
                    setReturnEconomyClassPrice(Number(e.target.value))
                  }
                  error={ReturnEconomyClassPrice <= 0}
                  helperText={EconomyClassPrice <= 0 ? "Invalid Value" : ""}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">$</InputAdornment>
                    ),
                  }}
                />
              </Box>{" "}
              <Divider sx={{ width: 4 / 5, m: "auto" }}>
                Baggage Allowance
              </Divider>
              <Box componet={"div"} p={2}>
                <TextField
                  type="number"
                  sx={{
                    backgroundColor: "#ffffff",
                    width: ["60%", "30%"],
                    mx: 5,
                  }}
                  error={ReturnBaggageAllowance <= 0}
                  label="Baggage allowance"
                  value={ReturnBaggageAllowance}
                  required
                  onChange={(e) =>
                    setReturnBaggageAllowance(Number(e.target.value))
                  }
                  helperText={BaggageAllowance <= 0 ? "Invalid Value" : ""}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">kg</InputAdornment>
                    ),
                  }}
                />
              </Box>{" "}
            </Box>
          )}
          <div className="form-control">
            <Button
              disabled={
                !(
                  validReturnTime &&
                  validDepartureTime &&
                  validReturnArrivalDate &&
                  validArrivalDate &&
                  validDate &&
                  EconomyClassPrice > 0 &&
                  EconomyClassSeats > 0 &&
                  BusinessClassPrice > 0 &&
                  BusinessClassSeats > 0 &&
                  FirstClassPrice > 0 &&
                  FirstClassSeats > 0 &&
                  DepartureTerminal > 0 &&
                  ArrivalTerminal > 0 &&
                  BaggageAllowance > 0 &&
                  (!twoWay ||
                    (ReturnEconomyClassPrice > 0 &&
                      ReturnEconomyClassSeats > 0 &&
                      ReturnBusinessClassPrice > 0 &&
                      ReturnBusinessClassSeats > 0 &&
                      ReturnFirstClassPrice > 0 &&
                      ReturnFirstClassSeats > 0 &&
                      ReturnDepartureTerminal > 0 &&
                      ReturnArrivalTerminal > 0 &&
                      ReturnBaggageAllowance > 0))
                )
              }
              type="submit"
              variant="contained"
              color="primary"
              size="large"
            >
              Create Flight
            </Button>
          </div>
          {/* <Input type="submit" value="Create Flight" className="btn btn-block"/> */}
        </form>

        <Snackbar
          open={validUniqueFlightNumber}
          autoHideDuration={10000}
          onClose={handleUniqueFlightNumberClose}
        >
          <Alert
            onClose={handleUniqueFlightNumberClose}
            severity="error"
            sx={{ width: "100%" }}
          >
            Departure FlightNumber Already Exists{" "}
          </Alert>
        </Snackbar>

        <Snackbar
          open={validUniqueReturnFlightNumber}
          autoHideDuration={10000}
          onClose={handleUniqueReturnFlightNumberClose}
        >
          <Alert
            onClose={handleUniqueReturnFlightNumberClose}
            severity="error"
            sx={{ width: "100%" }}
          >
            Return FlightNumber Already Exists{" "}
          </Alert>
        </Snackbar>

        <Snackbar
          open={CreateResponse}
          autoHideDuration={10000}
          onClose={handleCreateResponseClose}
        >
          <Alert
            onClose={handleCreateResponseClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Created Successfully{" "}
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
};
export default memo(CreateFlight);