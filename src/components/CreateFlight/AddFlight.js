import { useState } from "react";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";

import FlightTakeoffRoundedIcon from "@mui/icons-material/FlightTakeoffRounded";
import FlightLandRoundedIcon from "@mui/icons-material/FlightLandRounded";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";

const AddFlight = ({ onAdd }) => {
  const [Flight, setFlight] = useState("");
  const [From, setFrom] = useState("");
  const [To, setTo] = useState("");
  const [Date, setDate] = useState("");
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

  //Validation
  const [validFirstClassSeatNo, setvalidFirstClassSeatNo] = useState(true);
  const [validBusinessClassSeatNo, setvalidBusinessClassSeatNo] =
    useState(true);
  const [validEconomyClassSeatNo, setvalidEconomyClassSeatNo] = useState(true);
  const [validFirstClassSeatPrice, setvalidFirstClassSeatPrice] =
    useState(true);
  const [validBusinessClassSeatPrice, setvalidBusinessClassSeatPrice] =
    useState(true);
  const [validEconomyClassSeatPrice, setvalidEconomyClassSeatPrice] =
    useState(true);
  const [validArrivalTerminal, setvalidArrivalTerminal] = useState(true);
  const [validDepartureTerminal, setvalidDepartureTerminal] = useState(true);
  const [validBaggageAllowance, setvalidBaggageAllowance] = useState(true);

  const [validFlightNumber, setvalidFlightNumber] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault();

    onAdd({
      Flight,
      From,
      To,
      Date,
      DepartureTime,
      ArrivalTime,
      DepartureTerminal,
      ArrivalTerminal,
      BusinessClassSeats,
      EconomyClassSeats,
      FirstClassSeats,
      BusinessClassPrice,
      EconomyClassPrice,
      FirstClassPrice,
      BaggageAllowance,
    });

    setFlight("");
    setFrom("");
    setTo("");
    setDate("");
    setDepartureTime("");
    setArrivalTime("");
    setDepartureTerminal("");
    setArrivalTerminal("");
    setBusinessClassSeats("");
    setEconomyClassSeats("");
    setFirstClassSeats("");
    setBusinessClassPrice("");
    setEconomyClassPrice("");
    setFirstClassPrice("");
    setBaggageAllowance("");
    alert("Flight added");
  };
  const fillMap = (map, n) => {
    const c = ["A", "B", "C", "D", "E", "F"];
    let total = n;
    for (let i = 1; i <= total / 6; i++) {
      for (let j = 0; j < 6; j++) {
        map.set(c[j] + i, true);
      }
    }
    for (let i = 1; i <= total % 6; i++) {
      map.set(c[i - 1] + (parseInt(total / 6) + 1), true);
    }
  };

  return (
    <form>
      <Box
        p={5}
        component={"form"}
        sx={{
          m: "auto",
          my: "3%",
          "text-align": "center",
          width: 1 / 2,
          border: "5px solid #eeeeee",
          backgroundColor: "#f1f1f1",
          "box-shadow": "7px 7px 7px#cccccc",
        }}
      >
        <Box component={"div"} sx={{ color: "#7777e4" }}>
          <h1>Create A Flight</h1>
        </Box>
        <Divider sx={{ fontVariant: "small-caps", fontWeight: "bold" }}>
          identification
        </Divider>
        <Box componet={"div"} p={2}>
          <TextField
            type="text"
            id="outlined-basic"
            label="Flight Number"
            required
            onChange={(e) => setFlight(e.target.value)}
            value={Flight}
            error={!Flight}
            helperText={!Flight ? "This is required" : ""}
            sx={{ backgroundColor: "#efefef" }}
          />
        </Box>
        <Divider sx={{ fontVariant: "small-caps", fontWeight: "bold" }}>
          location
        </Divider>
        <Box componet={"div"} p={2}>
          {" "}
          <TextField
            type="text"
            label="From"
            error={From === ""}
            required
            onChange={(e) => setFrom(e.target.value)}
            value={From}
            helperText={From === "" ? "This is required" : ""}
            sx={{ width: "30%", mx: 5 }}
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
            error={To === ""}
            value={To}
            required
            onChange={(e) => setTo(e.target.value)}
            helperText={To === "" ? "This is required" : ""}
            sx={{ width: "30%", mx: 5 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FlightLandRoundedIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Divider sx={{ fontVariant: "small-caps", fontWeight: "bold" }}>
          date and time
        </Divider>
        <Box componet={"div"} p={2}>
          <TextField
            error={Date === ""}
            required
            type="date"
            label="Date"
            id="dDate"
            InputProps={{
              startAdornment: <InputAdornment></InputAdornment>,
            }}
            variant="outlined"
            value={Date}
            onChange={(e) => setDate(e.target.value)}
            helperText={Date === "" ? "This is required" : ""}
            sx={{ width: "30%", mx: 5 }}
          />
        </Box>{" "}
        <Box componet={"div"} p={1}>
          <TextField
            type="time"
            variant="outlined"
            error={DepartureTime === ""}
            label="Departure Time"
            value={DepartureTime}
            required
            onChange={(e) => setDepartureTime(e.target.value)}
            helperText={DepartureTime === "" ? "This is required" : ""}
            sx={{ width: "30%", mx: 5 }}
            InputProps={{
              startAdornment: <InputAdornment></InputAdornment>,
            }}
          />
          <TextField
            variant="outlined"
            type="time"
            error={ArrivalTime === ""}
            label="Arrival Time"
            value={ArrivalTime}
            required
            onChange={(e) => setArrivalTime(e.target.value)}
            helperText={ArrivalTime === "" ? "This is required" : ""}
            sx={{ width: "30%", mx: 5 }}
            InputProps={{
              startAdornment: <InputAdornment></InputAdornment>,
            }}
          />
        </Box>{" "}
        <Divider sx={{ fontVariant: "small-caps", fontWeight: "bold" }}>
          terminals
        </Divider>
        <Box componet={"div"} p={2}>
          <TextField
            type="number"
            label="Departure Terminal"
            error={DepartureTerminal <= 0}
            value={DepartureTerminal}
            required
            onChange={(e) => setDepartureTerminal(e.target.value)}
            helperText={DepartureTerminal <= 0 ? "This is required" : ""}
            sx={{ width: "30%", mx: 5 }}
          />
          <TextField
            type="number"
            label="Arrival Terminal"
            error={ArrivalTerminal <= 0}
            value={ArrivalTerminal}
            required
            onChange={(e) => setArrivalTerminal(e.target.value)}
            helperText={ArrivalTerminal <= 0 ? "This is required" : ""}
            sx={{ width: "30%", mx: 5 }}
          />
        </Box>{" "}
        <Divider
          sx={{
            fontVariant: "small-caps",
            fontWeight: "bold",
          }}
        >
          class info
        </Divider>{" "}
        <Divider
          sx={{
            fontVariant: "small-caps",
            width: 3 / 4,
            m: "auto",
          }}
        >
          first class
        </Divider>
        <Box componet={"div"} p={2}>
          <TextField
            sx={{ width: "20%", mx: 5 }}
            type="number"
            label="No. Seats"
            value={FirstClassSeats}
            required
            onChange={(e) => setFirstClassSeats(Number(e.target.value))}
            error={FirstClassSeats <= 0}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AirlineSeatReclineNormalIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            sx={{ width: "15%", mx: 5 }}
            type="number"
            label="Price"
            value={FirstClassPrice}
            required
            onChange={(e) => setFirstClassPrice(Number(e.target.value))}
            error={FirstClassPrice <= 0}
            InputProps={{
              endAdornment: <InputAdornment position="end">$</InputAdornment>,
            }}
          />
        </Box>{" "}
        <Divider
          sx={{
            fontVariant: "small-caps",
            width: 3 / 4,
            m: "auto",
          }}
        >
          business class
        </Divider>
        <Box componet={"div"} p={2}>
          <TextField
            sx={{ width: "20%", mx: 5 }}
            type="number"
            label="No. Seats"
            value={BusinessClassSeats}
            required
            onChange={(e) => setBusinessClassSeats(Number(e.target.value))}
            error={BusinessClassSeats <= 0}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AirlineSeatReclineNormalIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            sx={{ width: "15%", mx: 5 }}
            type="number"
            label="Price"
            value={BusinessClassPrice}
            required
            onChange={(e) => setBusinessClassPrice(Number(e.target.value))}
            error={BusinessClassPrice <= 0}
            helperText={BusinessClassPrice <= 0 ? "This is required" : ""}
            InputProps={{
              endAdornment: <InputAdornment position="end">$</InputAdornment>,
            }}
          />
        </Box>{" "}
        <Divider
          sx={{
            fontVariant: "small-caps",
            width: 3 / 4,
            m: "auto",
          }}
        >
          economy class
        </Divider>
        <Box componet={"div"} p={2}>
          <TextField
            sx={{ width: "20%", mx: 5 }}
            type="number"
            label="No. Seats"
            value={EconomyClassSeats}
            required
            onChange={(e) => setEconomyClassSeats(Number(e.target.value))}
            error={EconomyClassSeats <= 0}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AirlineSeatReclineNormalIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            sx={{ width: "15%", mx: 5 }}
            type="number"
            label="Price"
            value={EconomyClassPrice}
            required
            onChange={(e) => setEconomyClassPrice(Number(e.target.value))}
            error={EconomyClassPrice <= 0}
            InputProps={{
              endAdornment: <InputAdornment position="end">$</InputAdornment>,
            }}
          />
        </Box>{" "}
        <Divider sx={{ fontVariant: "small-caps", fontWeight: "bold" }}>
          baggage allowance
        </Divider>
        <Box componet={"div"} p={2}>
          <TextField
            type="number"
            sx={{ width: "30%", mx: 5 }}
            error={BaggageAllowance < 0}
            label="Baggage allowance"
            value={BaggageAllowance}
            required
            onChange={(e) => setBaggageAllowance(Number(e.target.value))}
            helperText={BaggageAllowance < 0 ? "Should be positive" : ""}
            InputProps={{
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            }}
          />
        </Box>{" "}
        <div className="form-control">
          <Button
            variant="contained"
            color="primary"
            onClick={onSubmit}
            size="large"
            disabled={
              Flight === "" ||
              From === "" ||
              To === "" ||
              Date === "" ||
              DepartureTime === "" ||
              ArrivalTime === "" ||
              DepartureTerminal <= 0 ||
              ArrivalTerminal <= 0 ||
              BusinessClassSeats <= 0 ||
              BusinessClassPrice <= 0 ||
              EconomyClassSeats <= 0 ||
              EconomyClassPrice <= 0 ||
              FirstClassSeats <= 0 ||
              FirstClassPrice <= 0 ||
              BaggageAllowance < 0
            }
          >
            Create Flight
          </Button>
        </div>
        {/* <Input type="submit" value="Create Flight" className="btn btn-block"/> */}
      </Box>
    </form>
  );
};

export default AddFlight;
