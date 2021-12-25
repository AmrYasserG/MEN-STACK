import * as React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Tooltip from "@mui/material/Tooltip";

import { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import EventIcon from "@mui/icons-material/Event";
import EmailIcon from "@mui/icons-material/Email";
import BadgeIcon from "@mui/icons-material/Badge";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function SignUp() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [Age, setAge] = useState("");
  const [BornIn, setBornIn] = useState("");
  const [LivesIn, setLivesIn] = useState("");
  const [MartialStatus, setMartialStatus] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [PassportNumber, setPassportNumber] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [validAge, setValidAge] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [duplicateEmail, setDuplicateEmail] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const [showPassword, setshowPassword] = useState(false);
  const [showConfirmPassword, setshowConfirmPassword] = useState(false);

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
  useEffect(() => {
    setValidPassword(Password === ConfirmPassword);
  }, [Password, ConfirmPassword]);
  useEffect(() => {
    let x =
      new Date(Date.now() - new Date(BornIn).getTime()).getUTCFullYear() - 1970;
    if (!x || x <= 0) {
      setValidAge(false);
      setAge("");
    } else {
      setValidAge(true);
      setAge(x.toString());
    }
  }, [BornIn]);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  useEffect(() => {
    if (duplicateEmail) setDuplicateEmail(false);
    if (validateEmail(Email)) setValidEmail(true);
    else setValidEmail(false);
  }, [Email]);
  const CreateNewUser = () => {
    setSending(true);
    axios
      .post("http://localhost:3005/auth/signup", {
        FirstName: FirstName,
        LastName: LastName,
        Email: Email,
        Age: Age,
        BornIn: BornIn,
        LivesIn: LivesIn,
        MartialStatus: MartialStatus,
        PhoneNumber: PhoneNumber,
        PassportNumber: PassportNumber,
        Password: Password,
      })
      .then((res) => {
        setSent(true);
        console.log(res);
      })
      .catch((err) => {
        setSending(false);
        setDuplicateEmail(true);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!sending) CreateNewUser();
  };

  const handleClickShowPassword = () => {
    setshowPassword(!showPassword);
  };
  const handleClickShowConfirmPassword = () => {
    setshowConfirmPassword(!showConfirmPassword);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box>
      {sent ? (
        <Box
          sx={{
            "text-align": "center",
            m: "auto",
            my: "30%",
            width: ["90%", "50%"],
            border: "1px solid #eeeeee",
            backgroundColor: "#f9f9f9",
            "box-shadow": "0px 0px 3px 3px #59C8FD",
          }}
        >
          <div>
            <Typography variant="h3">Welcome On Board :)</Typography>
          </div>
          <div className="form-control">
            <Button variant="contained" color="primary">
              <Link
                to="/Login"
                style={{ textDecoration: "none", color: "#FFFFFF" }}
              >
                Return to login
              </Link>{" "}
            </Button>
          </div>
        </Box>
      ) : (
        <Box
          p={2}
          sx={{
            m: "auto",
            "& > :not(style)": { mt: 4, mx: 3 },
            my: "2%",
            width: ["95%", "55%"],
            "text-align": "center",
            border: "1px solid #eeeeee",
            backgroundColor: "#f9f9f9",
            "box-shadow": "0px 0px 3px 3px #59C8FD",
          }}
        >
          <div>
            <Typography variant="h3">Ready to Fly?</Typography>
          </div>
          <Box>
            <TextField
              sx={{ width: ["45%", "30%"], mx: "2%", m: "1%" }}
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
            />

            <TextField
              sx={{ width: ["45%", "30%"], mx: "2%", my: "1%" }}
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
            />
          </Box>
          <Box>
            <TextField
              sx={{ width: ["94%", "64%"], mb: "1%" }}
              type="text"
              variant="outlined"
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
          </Box>
          <Box>
            <TextField
              sx={{ width: ["94%", "64%"], mb: "1%" }}
              type="text"
              label="Email"
              error={!validEmail || duplicateEmail}
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
                validEmail
                  ? duplicateEmail
                    ? "Email Already In Use"
                    : ""
                  : "Wrong Format (xxx@yyy.zzz)"
              }
            />
          </Box>
          <Box>
            <FormControl
              sx={{ width: ["45%", "30%"], mx: "2%", mb: "1%" }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                error={!validPassword}
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                value={Password}
                onChange={handlePasswordChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <FormControl
              sx={{ width: ["45%", "30%"], mx: ["2%"], mb: "1%" }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-cpassword">
                Confirm Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-cpassword"
                error={!validPassword}
                type={showConfirmPassword ? "text" : "password"}
                value={ConfirmPassword}
                onChange={handleConfirmPasswordChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowConfirmPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
              {!validPassword && (
                <FormHelperText id="cpassword-helper-text" error>
                  Passwords do not match
                </FormHelperText>
              )}
            </FormControl>
          </Box>
          <Box>
            <TextField
              sx={{ width: ["76%", "56%"], mb: "1%" }}
              required
              type="date"
              label="BornIn"
              id="dDate"
              variant="outlined"
              value={BornIn}
              error={!validAge}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EventIcon />
                  </InputAdornment>
                ),
              }}
              onChange={(e) => setBornIn(e.target.value)}
              helperText={!validAge && "InValid Date"}
            />
            {Age && (
              <Tooltip title="Age" placement="top" arrow>
                <FormLabel
                  sx={{
                    pt: "2%",
                    display: "inline-flex",

                    mx: "2%",
                  }}
                >
                  {Age}
                </FormLabel>
              </Tooltip>
            )}
          </Box>
          <Box>
            <TextField
              sx={{ width: ["94%", "64%"], mb: "1%" }}
              type="text"
              variant="outlined"
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
            />
          </Box>
          <Box>
            <TextField
              sx={{ width: ["94%", "64%"], mb: "1%" }}
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
            />
          </Box>
          <Box>
            <TextField
              sx={{ width: ["94%", "64%"], mb: "1%", textAlign: "left" }}
              type="text"
              id="outlined-basic"
              label="Martial Status"
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
            >
              {martialStatusClasses.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <div className="form-control">
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              disabled={
                !(
                  FirstName &&
                  LastName &&
                  PassportNumber &&
                  BornIn &&
                  Email &&
                  MartialStatus &&
                  LivesIn &&
                  validAge &&
                  validEmail &&
                  validPassword &&
                  !duplicateEmail &&
                  !sent
                )
              }
            >
              Sign Up
            </Button>
          </div>
          {/* <Input type="submit" value="Create Flight" className="btn btn-block"/> */}
        </Box>
      )}{" "}
    </Box>
  );
}

export default SignUp;
