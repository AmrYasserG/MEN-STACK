import React from "react";
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




const UserProfile = ({ onEdit }) => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Age, setAge] = useState("");
  const [BornIn, setBornIn] = useState("");
  const [LivesIn, setLivesIn] = useState("");
  const [MartialStatus, setMartialStatus] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Job, setJob] = useState("");

  function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

const fillMap = (map,n) => {
  const c = ["A", "B", "C", "D", "E", "F"];
  let total = n;
  for (let i = 1; i <= total / 6; i++) {
    for (let j = 0; j < 6; j++) {
      map.set(c[j] + i, true);
    }
  }
  for (let i = 1; i <= total % 6; i++) {
    map.set(c[i] + total / 6+1, true);
  }
};

  const onSubmit = (e) => {
    e.preventDefault();

    onEdit({
      Name,
      Email,
      Age,
      BornIn,
      LivesIn,
      MartialStatus,
      PhoneNumber,
      Job,
    });
    
    alert("editted");
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
          label="Name" 
          required
          onChange={(e) => setName(e.target.value)}
          value={Name}
          error={Name===""}
          helperText={
            Name===""?"This is required":""
          }
        />
      </div>
      <div >
        <TextField
          type="text"
          label="email"
          error={Email===""}
          required
          onChange={(e) => setEmail(e.target.value)}
          value={Email}
          helperText={
            Email===""?"This is required":""
          }
        />
      </div>
      <div >
      <TextField  
            error={BornIn===""}
            required
            type="date"
            label="BornIn"
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
            value={BornIn}
            onChange={(e) => setBornIn(e.target.value)}
            helperText={
                BornIn===""?"This is required":""
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
     
      <div>
        <TextField
          type="text"
          label="Age"
          error={Age<=0}
          value={getAge(new Date(BornIn))}
          required
          onChange={(e) => setAge(Number(e.target.value))}
          helperText={
            Age<=0===""?"This is required":""
          }
        />
      </div>
      <div >
        <TextField
          type="text"
          id="outlined-basic"
          label="MartialStatus" 
          required
          onChange={(e) => setMartialStatus(e.target.value)}
          value={MartialStatus}
          error={MartialStatus===""}
          helperText={
            MartialStatus===""?"This is required":""
          }
        />
      </div>  
      <div >
        <TextField
          type="text"
          variant="outlined"
          error={PhoneNumber===""}
          label="PhoneNumber"
          value={PhoneNumber}
          required
          onChange={(e) => setPhoneNumber(Number(e.target.value))}
          helperText={
            PhoneNumber===""?"required":""
          }
        />
      </div>
      <div >
        <TextField
          type="text"
          id="outlined-basic"
          label="LivesIn" 
          required
          onChange={(e) => setLivesIn(e.target.value)}
          value={LivesIn}
          error={LivesIn===""}
          helperText={
            LivesIn===""?"This is required":""
          }
        />
      </div>
      <div >
        <TextField
          type="text"
          id="outlined-basic"
          label="Job" 
          required
          onChange={(e) => setJob(e.target.value)}
          value={Job}
          error={Job===""}
          helperText={
            Job===""?"This is required":""
          }
        />
      </div>
      <div className="form-control">
      <Button variant="contained" color="primary" onClick={onSubmit} size ="large" 
    //   disabled={
    //           Flight===""||
    //           From===""||
    //           To===""||
    //           Date===""||
    //           DepartureTime===""||
    //           ArrivalTime===""||
    //           DepartureTerminal<=0||
    //           ArrivalTerminal<=0||
    //           BusinessClassSeats<=0||
    //           BusinessClassPrice<=0||
    //           EconomyClassSeats<=0||
    //           EconomyClassPrice<=0||
    //           FirstClassSeats<=0||
    //           FirstClassPrice<=0||
    //           BaggageAllowance<0
    //         }
            >
            Edit Profile
          </Button>
      </div>
      {/* <Input type="submit" value="Create Flight" className="btn btn-block"/> */}
      </Box>
      
    </form>
    
  );
};

export default UserProfile;




