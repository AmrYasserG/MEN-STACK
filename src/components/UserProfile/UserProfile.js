import React from "react";
import { useState, useEffect, forwardRef } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import ResponsiveAppBar from "../ResponsiveAppBar/ResponsiveAppBar";
import MenuItem from "@mui/material/MenuItem";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import EventIcon from "@mui/icons-material/Event";
import EmailIcon from "@mui/icons-material/Email";
import BadgeIcon from "@mui/icons-material/Badge";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const UserProfile = ({ onEdit }) => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Age, setAge] = useState("");
  const [BornIn, setBornIn] = useState("");
  const [LivesIn, setLivesIn] = useState("");
  const [MartialStatus, setMartialStatus] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [PassportNumber, setPassportNumber] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [editOpenResponse, setEditOpenResponse] = useState(false);
  const [User, setUser] = useState([]);
  const [selectedTab, setSelectedTab] = useState(0);

  const martialStatusClasses = [
    {
      value: "Single",
      label: "Single",
    },
    {
      value: "Married",
      label: "Married",
    },
    {
      value: "Divorced",
      label: "Divorced",
    },
    {
      value: "Separated",
      label: "Separated",
    },
    {
      value: "Widowed",
      label: "Widowed",
    },
  ];

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
  const editHandleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setEditOpenResponse(false);
  };

  function EditUser(id) {
    axios
      .put(
        "http://localhost:3005/users/editUser/" + "617e93641ff94cd5d2055174",
        {
          FirstName: FirstName,
          LastName: LastName,
          Email: Email,
          Age: getAge(BornIn),
          BornIn: BornIn,
          LivesIn: LivesIn,
          MartialStatus: MartialStatus,
          PhoneNumber: PhoneNumber,
          PassportNumber: PassportNumber,
        }
      )
      .then((res) => {
        setEditOpenResponse(true);
        setUser(res.data);
      });
  }
  const onSubmit = (e) => {
    e.preventDefault();
    EditUser("617e93641ff94cd5d2055174");
  };

  useEffect(() => {
    setFirstName(User.FirstName);
    setLastName(User.LastName);
    setEmail(User.Email);
    setBornIn(User.BornIn);
    setAge(User.Age);
    setMartialStatus(User.MartialStatus);
    setPhoneNumber(User.PhoneNumber);
    setPassportNumber(User.PassportNumber);
    setLivesIn(User.LivesIn);
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

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  useEffect(() => {
    if (validateEmail(Email)) setValidEmail(true);
    else setValidEmail(false);
  }, [Email]);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box>
      <ResponsiveAppBar pages={[]} settings={["profile"]} />
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
        sx={{
          m: "auto",
          "& > :not(style)": { mt: 4, mx: 3 },
          my: "2%",
          width: ["90%", "50%"],
          "text-align": "center",
          border: "1px solid #eeeeee",
          backgroundColor: "#f9f9f9",
          "box-shadow": "0px 0px 3px 3px #59C8FD",
        }}
      >
        <Tabs centered value={selectedTab} onChange={handleChange}>
          <Tab label="Profile Info" />
          <Tab label="Password" />
        </Tabs>
        {selectedTab === 0 && (
          <Box>
            <div>
              <Typography sx={{ fontSize: "3vw", m: "3%" }}>
                Your Profile
              </Typography>
            </div>
            <div>
              <TextField
                sx={{ width: "50%", my: "2%" }}
                type="text"
                id="outlined-basic"
                label="First Name"
                required
                value={FirstName}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <BadgeIcon />
                    </InputAdornment>
                  ),
                }}
                onChange={(e) => setFirstName(e.target.value)}
                error={FirstName === ""}
                helperText={FirstName === "" ? "This is required" : ""}
              />
            </div>
            <div>
              <TextField
                sx={{ width: "50%", my: "2%" }}
                type="text"
                id="outlined-basic"
                label="Last Name"
                required
                value={LastName}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <BadgeIcon />
                    </InputAdornment>
                  ),
                }}
                onChange={(e) => setLastName(e.target.value)}
                error={LastName === ""}
                helperText={LastName === "" ? "This is required" : ""}
              />
            </div>
            <div>
              <TextField
                sx={{ width: "50%", my: "2%" }}
                type="text"
                label="Email"
                error={!validEmail}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
                onChange={(e) => setEmail(e.target.value)}
                value={Email}
                helperText={
                  Email === ""
                    ? "This is required"
                    : validEmail
                    ? ""
                    : "Wrong Format"
                }
              />
            </div>
            <div>
              <TextField
                sx={{ width: "50%", my: "2%" }}
                error={BornIn === ""}
                required
                type="date"
                label="Birth Date"
                id="dDate"
                variant="outlined"
                value={BornIn}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EventIcon />
                    </InputAdornment>
                  ),
                }}
                onChange={(e) => setBornIn(e.target.value)}
                helperText={BornIn === "" ? "This is required" : ""}
              />
            </div>
            <div>
              <TextField
                sx={{ width: "50%", my: "2%" }}
                type="text"
                variant="outlined"
                error={PhoneNumber === "" || !parseInt(PhoneNumber)}
                label="Phone Number"
                value={PhoneNumber}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIcon />
                    </InputAdornment>
                  ),
                }}
                onChange={(e) => setPhoneNumber(e.target.value)}
                helperText={
                  parseInt(PhoneNumber) ? "" : "Should only be numbers"
                }
              />
            </div>
            <div>
              <TextField
                sx={{ width: "50%", my: "2%" }}
                type="text"
                variant="outlined"
                error={PassportNumber === ""}
                label="Passport Number"
                value={PassportNumber}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AssignmentIndIcon />
                    </InputAdornment>
                  ),
                }}
                onChange={(e) => setPassportNumber(e.target.value)}
              />
            </div>
            <div>
              <TextField
                sx={{ width: "50%", my: "2%" }}
                type="text"
                id="outlined-basic"
                label="Address"
                value={LivesIn}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <HomeIcon />
                    </InputAdornment>
                  ),
                }}
                onChange={(e) => setLivesIn(e.target.value)}
                error={LivesIn === ""}
                helperText={LivesIn === "" ? "This is required" : ""}
              />
            </div>
            <div>
              <TextField
                sx={{ width: "50%", textAlign: "left", my: "2%" }}
                type="text"
                id="outlined-basic"
                label="MartialStatus"
                required
                select
                value={MartialStatus}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LoyaltyIcon />
                    </InputAdornment>
                  ),
                }}
                onChange={(e) => setMartialStatus(e.target.value)}
                error={MartialStatus === ""}
                helperText={MartialStatus === "" ? "This is required" : ""}
              >
                {martialStatusClasses.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className="form-control">
              <Button
                variant="contained"
                color="primary"
                onClick={onSubmit}
                size="large"
                disabled={
                  FirstName === "" ||
                  Email === "" ||
                  BornIn === "" ||
                  Age <= 0 ||
                  MartialStatus === "" ||
                  LivesIn === "" ||
                  PhoneNumber === "" ||
                  !parseInt(PhoneNumber) ||
                  !parseInt(Age) ||
                  (FirstName === User.FirstName &&
                    LastName === User.LastName &&
                    Email === User.Email &&
                    //BornIn===User.Born&&
                    Age === User.Age &&
                    MartialStatus === User.MartialStatus &&
                    LivesIn === User.LivesIn &&
                    PhoneNumber === User.PhoneNumber &&
                    PassportNumber === User.PassportNumber)
                }
              >
                Edit Profile
              </Button>
            </div>
          </Box>
        )}{" "}
        {/* <Input type="submit" value="Create Flight" className="btn btn-block"/> */}
      </Box>
    </Box>
  );
};

export default UserProfile;
