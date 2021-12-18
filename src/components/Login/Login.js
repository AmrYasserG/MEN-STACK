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
import background from "./Background.jpg";
import logo from "./logo.png";
import logo2 from "./../../Images/logo2.png";
import axios from "axios";
import Tooltip from "@mui/material/Tooltip";

const theme = createTheme();
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="http://localhost:3000/UserProfile">
        MENStack Airlines
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
function Login() {
  const [showPass, setshowPass] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    axios
      .post(
        "http://localhost:3005/auth/login" ,
        {
          Email: data.get("email"),
          Password: data.get("password"),  
        }
      )
      .then((res) => {
        console.log(res);
      });
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
    <Grid
      container
      direction={"row-reverse"}
      sx={{
        
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundColor: (t) =>
        t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Grid item sm={12} xs={12}>
        <Box
          sx={{
            m: "auto",
            mx: 0,
            alignItems: "center",
            textAlign:"center"
          }}
        >
          <img
            src={logo2}
            width="20%"
            height="100%"
            style={{ cursor: "pointer", marginTop: "5%" }}
            alt="Logo"
          />
        </Box>
      </Grid>
      <Grid item sm={12} xs={12}>
        <Box>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                m: "auto",
                "& > :not(style)": { mt: 4, mx: 3 },
                marginTop: "13%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#f9f9f9",
                "box-shadow": "0px 0px 20px 14px #0a8fad",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPass ? "text" : "password"}
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="Show password" color="primary" />}
                  label="Show password"
                  onChange={handlechange}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
          </Container>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Login;
