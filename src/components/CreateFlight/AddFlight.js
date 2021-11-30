import { useState } from "react";
import Input from "@mui/material/Input";
import  Button  from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import AvTimerOutlinedIcon from "@mui/icons-material/AvTimerOutlined";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';




const AddFlight = ({ onAdd }) => {
  const [Flight, setFlight] = useState("");
  const [From, setFrom] = useState("");
  const [To, setTo] = useState("");
  const [Date, setDate] = useState("");
  const [DepartureTime, setDepartureTime] = useState("");
  const [ArrivalTime, setArrivalTime] = useState("");
  const [DepartureTerminal, setDepartureTerminal] = useState("");
  const [ArrivalTerminal, setArrivalTerminal] = useState("");
  const [BusinessClassSeats, setBusinessClassSeats] = useState("");
  const [EconomyClassSeats, setEconomyClassSeats] = useState("");
  const [FirstClassSeats, setFirstClassSeats] = useState("");
  const [BusinessClassPrice, setBusinessClassPrice] = useState("");
  const [EconomyClassPrice, setEconomyClassPrice] = useState("");
  const [FirstClassPrice, setFirstClassPrice] = useState("");
  const [BaggageAllowance, setBaggageAllowance] = useState("");


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
      BaggageAllowance
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
  const createMap = (map, n) => {
    const c = ["A", "B", "C", "D", "E", "F"];
    let total = n;
    for (let i = 1; i <= total / 6; i++) {
      for (let j = 0; j < 6; j++) {
        map.set(c[j] + i, true);
      }
    }
    for (let i = 1; i <= total % 6; i++) {
      map.set(c[i] + total / 6, true);
    }
  };


  return (
    <form   >
      <Box
          p={2}
          sx={{ "& > :not(style)": { mt: 4, mx: 3 }, "text-align": "center" }}
        >
      <div >
        <TextField
          type="text"
          id="outlined-basic"
          label="Flight Number" 
          required
          onChange={(e) => setFlight(Number(e.target.value))}
          value={Flight}
          error={Flight===""}
          helperText={
            Flight===""?"This is required":""
          }
        />
      </div>
      <div >
        <TextField
          type="text"
          label="From"
          error={From===""}
          required
          onChange={(e) => setFrom(e.target.value)}
          value={From}
          helperText={
            From===""?"This is required":""
          }
        />
      </div>
      <div >
        <TextField
          type="text"
          label="To"
          error={To===""}
          value={To}
          required
          onChange={(e) => setTo(e.target.value)}
          helperText={
            To===""?"This is required":""
          }
        />
      </div>
      <div >
      <TextField  
            error={Date===""}
            required
            type="date"
            label="Date"
            id="dDate"
            InputProps={{
              startAdornment: (
                <InputAdornment >
                  <AvTimerOutlinedIcon />
                </InputAdornment>
              ),
              type: "date",
            }}
            variant="outlined"
            value={Date}
            onChange={(e) => setDate(e.target.value)}
            helperText={
              Date===""?"This is required":""
            }
          />
        
        {/* <input
          type="date"
          lable="Date"
          value={Date}
          required
          onChange={(e) => setDate(e.target.value)}
        /> */}
      </div>
      <div >
        <TextField
          type="time"
          variant="outlined"
          error={DepartureTime===""}
          label="Departure Time"
          value={DepartureTime}
          required
          onChange={(e) => setDepartureTime(e.target.value)}
          helperText={
            DepartureTime===""?"This is required":""
          }
        />
      </div>
      <div >
        <TextField
          variant="outlined"
          type="time"
          error={ArrivalTime===""}
          label="Arrival Time"
          value={ArrivalTime}
          required
          onChange={(e) => setArrivalTime(e.target.value)}
          helperText={
            ArrivalTime===""?"This is required":""
          }
          
        />
      </div>
      <div>
        <TextField
          type="text"
          label="Departure Terminal"
          error={DepartureTerminal<=0}
          value={DepartureTerminal}
          required
          onChange={(e) => setDepartureTerminal(Number(e.target.value))}
          helperText={
            DepartureTerminal<=0===""?"This is required":""
          }
        />
      </div>
      <div >
        <TextField
          type="text"
          label="Arrival Terminal"
          error={ArrivalTerminal<=0}
          value={ArrivalTerminal}
          required
          onChange={(e) => setArrivalTerminal(Number(e.target.value))}
          helperText={
            ArrivalTerminal<=0===""?"This is required":""
          }
        />
      </div>
      <div>
      <label>Business Class Seats</label>
      </div>
      <div >
        <TextField
          sx={{ width: "10%", height: "40px", mx: "5px" }}
          type="number"
          placeholder="No. Seats"
          helperText="Hello"
          value={BusinessClassSeats}
          required
          onChange={(e) => setBusinessClassSeats(Number(e.target.value))}
          error={BusinessClassSeats<=0}
          helperText={
            BusinessClassSeats<=0?"This is required":""
          }
        />
        <TextField
          sx={{ width: "10%", height: "40px", mx: "5px" }}
          startAdornment={<InputAdornment position="left" >$</InputAdornment>}
          type="number"
          placeholder="Price"
          value={BusinessClassPrice}
          required
          onChange={(e) => setBusinessClassPrice(Number(e.target.value))}
          error={BusinessClassPrice<=0}
          helperText={
           BusinessClassPrice<=0?"This is required":""
          }
        />
      </div>
      <div>
      <label>Economy Class Seats</label>
      </div>
      <div>
        <TextField
          sx={{ width: "10%", height: "40px", mx: "5px" }}
          type="number"
          placeholder="No. Seats"
          value={EconomyClassSeats}
          required
          onChange={(e) => setEconomyClassSeats(Number(e.target.value))}
          error={EconomyClassSeats<=0}
        />
        <TextField
          sx={{ width: "10%", height: "40px", mx: "5px" }}
          startAdornment={<InputAdornment  position="left" >$</InputAdornment>}
          type="number"
          placeholder="Price"
          value={EconomyClassPrice}
          required
          onChange={(e) => setEconomyClassPrice(Number(e.target.value))}
          error={EconomyClassPrice<=0}
        />
      </div>
      <div>
      <label>First Class Seats</label>
      </div>
      <div className="form-control1">
        <TextField
          sx={{ width: "10%", height: "20px", mx: "5px" }}
          type="number"
          label="No. Seats"
          value={FirstClassSeats}
          required
          onChange={(e) => setFirstClassSeats(Number(e.target.value))}
          error={FirstClassSeats<=0}
        />
        <TextField
          sx={{ width: "10%", height: "40px", mx: "5px" }}
          startAdornment={<InputAdornment  position="left" >$</InputAdornment>}
          type="number"
          label="Price"
          value={FirstClassPrice}
          required
          onChange={(e) => setFirstClassPrice(Number(e.target.value))}
          error={FirstClassPrice<=0}
        />
      </div>
      <div >
        <TextField
          type="number"
          variant="outlined"
          error={BaggageAllowance<0}
          label="Baggage allowance"
          value={BaggageAllowance}
          required
          onChange={(e) => setBaggageAllowance(Number(e.target.value))}
          helperText={
            BaggageAllowance<0?"Should be positive":""
          }
        />
      </div>
      <div className="form-control">
      <Button variant="contained" color="primary" onClick={onSubmit} size ="large" 
      disabled={
              Flight===""||
              From===""||
              To===""||
              Date===""||
              DepartureTime===""||
              ArrivalTime===""||
              DepartureTerminal<=0||
              ArrivalTerminal<=0||
              BusinessClassSeats<=0||
              BusinessClassPrice<=0||
              EconomyClassSeats<=0||
              EconomyClassPrice<=0||
              FirstClassSeats<=0||
              FirstClassPrice<=0||
              BaggageAllowance<0
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
