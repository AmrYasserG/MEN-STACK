import axios from "axios";
import Grid from "@mui/material/Grid";

import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { useState, useEffect, forwardRef } from "react";
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

const Login = () => {
  return (
    <Box
      p={3}
      sx={{
        m: "auto",
        my: "10%",
        "text-align": "center",
        backgroundColor: "#e8f6ab",
        width: 5 / 9,
      }}
    >
      <Box p={4} m={4} sx={{}}>
        <Typography
          variant="h3"
          component="div"
          sx={{ color: "#7777e4", textAlign: "center" }}
        >
          Create A Flight{" "}
        </Typography>
      </Box>
      <Box>
        <Grid container>
          <Grid item xs={0} md={2}></Grid>
          <Grid item xs={6} md={4}>
            <Typography
              component="div"
              sx={{ my: 1, textAlign: "left", fontSize: "1vw" }}
            >
              Login
            </Typography>
          </Grid>
          <Grid item xs={6} md={4}></Grid>
          <Grid item xs={0} md={2}></Grid>
          <Grid item xs={0} md={2}></Grid>
          <Grid item xs={6} md={4}>
            <Typography
              component="div"
              sx={{ my: 1, textAlign: "left", fontSize: "1vw" }}
            >
              Password
            </Typography>
          </Grid>
          <Grid item xs={6} md={4}></Grid>
          <Grid item xs={0} md={2}></Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Login;
