import React from "react";
import { useState,useEffect } from "react";
import Input from "@mui/material/Input";
import  Button  from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import AvTimerOutlinedIcon from "@mui/icons-material/AvTimerOutlined";
import Box from "@mui/material/Box";
import axios from "axios";
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
  const [User, setUser] = useState([]);
  
  
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
function EditUser(id) {
  axios
    .put("http://localhost:3005/users/editUser/" + id, {
      Name:User.Name,
      Email:User.Email,
      Age:User.Age,
      BornIn:User.BornIn,
      LivesIn:User.LivesIn,
      MartialStatus:User.MartialStatus,
      PhoneNumber:User.PhoneNumber,
      Job:User.Job
    })
  
    
}
  const onSubmit = (e) => {
    e.preventDefault();
    EditUser("617e93641ff94cd5d2055174");
    alert(User.BornIn);
  };

  useEffect(() => {
      setName(User.Name);
      setEmail(User.Email);
      setBornIn(User.BornIn);
      setMartialStatus(User.MartialStatus);
      setPhoneNumber(User.PhoneNumber);
      setLivesIn(User.LivesIn);
      setJob(User.Job)
  }, [User]);

  useEffect(() => {
    axios
      .get("http://localhost:3005/users/userInfo/617e93641ff94cd5d2055174")
      .then((res) => {
        setUser(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  
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
          value={Name}
          onChange={(e) => setName(e.target.value)}
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
        
          value={getAge(new Date(BornIn))}
          required
          onChange={(e) => setAge(Number(e.target.value))}
          error={Age<=0}
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
          value={MartialStatus}
          onChange={(e) => setMartialStatus(e.target.value)}     
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
          value={LivesIn}
          required
          onChange={(e) => setLivesIn(e.target.value)}
          
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
          value={Job}
          onChange={(e) => setJob(e.target.value)}
          
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




