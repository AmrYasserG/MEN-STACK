import React from "react";
import { useState,useEffect,forwardRef } from "react";
import Input from "@mui/material/Input";
import  Button  from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import AvTimerOutlinedIcon from "@mui/icons-material/AvTimerOutlined";
import Box from "@mui/material/Box";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
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
  const [editOpenResponse, setEditOpenResponse] = useState(false);
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
const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
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
const editHandleClose = (event, reason) => {
  if (reason === "clickaway") {
    return;
  }
  setEditOpenResponse(false);
};

function EditUser(id) {
  axios
    .put("http://localhost:3005/users/editUser/" + "617e93641ff94cd5d2055174", {
      Name:Name,
      Email:Email,
      Age:Age,
      BornIn:BornIn,
      LivesIn:LivesIn,
      MartialStatus:MartialStatus,
      PhoneNumber:PhoneNumber,
      Job:Job
    })
    .then((res) => {
      setEditOpenResponse(true);
      setUser(res.data);
    });   
}
  const onSubmit = (e) => {
    //e.preventDefault();
    EditUser("617e93641ff94cd5d2055174");
    
    
  };

  useEffect(() => {
      setName(User.Name);
      setEmail(User.Email);
      setBornIn(User.BornIn);
      setAge(User.Age);
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
  },[]);

  
  return (
    <form   >
      <Snackbar
        open={editOpenResponse}
        autoHideDuration={3000}
        onClose={editHandleClose}
      >
        <Alert
          onClose={editHandleClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Edited Successfully
        </Alert>
      </Snackbar>
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
        
          value={Age}
          required
          onChange={(e) => setAge(e.target.value)}
          error={Age<=0||!parseInt(Age)}
          helperText={
            !parseInt(Age)?"Should be Numbers": Age<=0?"Age should be positive":""
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
          error={PhoneNumber===""||!parseInt(PhoneNumber)}
          label="PhoneNumber"
          value={PhoneNumber}
          required
          onChange={(e) => setPhoneNumber(e.target.value)}
          helperText={
            parseInt(PhoneNumber)?"":"Should only be numbers"
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
      disabled={
          Name===""||
          Email===""||
          BornIn===""||
          Age<=0||
          MartialStatus===""||
          LivesIn===""||
          Job===""||
          PhoneNumber===""||
          !parseInt(PhoneNumber)||
          !parseInt(Age)||
          (Name===User.Name&&
          Email===User.Email&&
          //BornIn===User.Born&&
          Age===User.Age&&
          MartialStatus===User.MartialStatus&&
          LivesIn===User.LivesIn&&
          Job===User.Job&&
          PhoneNumber===User.PhoneNumber
          )
            }
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




