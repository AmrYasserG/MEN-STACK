import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo2 from "./../../Images/logo2.png";

const theme = createTheme();
function SignUp() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Age, setAge] = useState("");
  const [BornIn, setBornIn] = useState("");
  const [LivesIn, setLivesIn] = useState("");
  const [MartialStatus, setMartialStatus] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [PassportNumber, setPassportNumber] = useState("");
  const [Job, setJob] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [editOpenResponse, setEditOpenResponse] = useState(false);
  const [User, setUser] = useState([]);
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
  const [showPass, setshowPass] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const handlechange = (e) => {
    // e.preventDefault();
    setshowPass(!showPass);
  };

  return (
    <Grid container direction="row">
      <Grid item xs={2}>
        <Typography
          gutterBottom
          variant="subtitle1"
          component="h4"
          align="center"
          sx={{ textAlign: "left" }}
        >
          User Name:
        </Typography>
      </Grid>
      <Grid item xs={2} sx={{ all: "left" }}>
        <TextField
          size="small"
          sx={{ p: 0 }}
          type="text"
          label="User Name"
          required
        />
      </Grid>
      <Grid item xs={2}>
        <Typography
          gutterBottom
          variant="subtitle1"
          component="h4"
          align="center"
          sx={{ textAlign: "left" }}
        >
          Email
        </Typography>
      </Grid>
      <Grid item xs={2} sx={{ textAlign: "left" }}>
        <TextField
          size="small"
          sx={{ width: "110%", p: 0 }}
          type="text"
          label="Email"
          required
        />
      </Grid>
      <Grid item xs={2}>
        <Typography
          gutterBottom
          variant="subtitle1"
          component="h4"
          align="center"
          sx={{ textAlign: "left" }}
        >
          Password:
        </Typography>
      </Grid>
      <Grid item xs={2} sx={{ textAlign: "left" }}>
        <TextField
          size="small"
          sx={{ width: "110%", p: 0 }}
          type="text"
          label="Password"
          required
        />
      </Grid>
      <Grid item xs={2}>
        <Typography
          gutterBottom
          variant="subtitle1"
          component="h4"
          align="center"
          sx={{ textAlign: "left" }}
        >
          Confirm Password:
        </Typography>
      </Grid>
      <Grid item xs={2} sx={{ textAlign: "left" }}>
        <TextField
          size="small"
          sx={{ width: "110%", p: 0 }}
          type="text"
          label="Confirm Password"
          required
        />
      </Grid>
      <Grid item xs={2}>
        <Typography
          gutterBottom
          variant="subtitle1"
          component="h4"
          align="center"
          sx={{ textAlign: "left" }}
        >
          Address:
        </Typography>
      </Grid>
      <Grid item xs={2} sx={{ textAlign: "left" }}>
        <TextField
          size="small"
          sx={{ width: "110%", p: 0 }}
          type="text"
          label="Address"
          required
        />
      </Grid>
      <Grid item xs={2}>
        <Typography
          gutterBottom
          variant="subtitle1"
          component="h4"
          align="center"
          sx={{ textAlign: "left" }}
        >
          Phone Number:
        </Typography>
      </Grid>
      <Grid item xs={2} sx={{ textAlign: "left" }}>
        <TextField
          size="small"
          sx={{ width: "110%", p: 0 }}
          type="text"
          label="Phone No"
          required
        />
      </Grid>
      <Grid item xs={2}>
        <Typography
          gutterBottom
          variant="subtitle1"
          component="h4"
          align="center"
          sx={{ textAlign: "left" }}
        >
          Job:
        </Typography>
      </Grid>
      <Grid item xs={2} sx={{ textAlign: "left" }}>
        <TextField
          size="small"
          sx={{ width: "110%", p: 0 }}
          type="text"
          label="Job"
          required
        />
      </Grid>
    </Grid>
  );
}

export default SignUp;
