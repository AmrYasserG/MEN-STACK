import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../Context/UserContext";
import { useNavigate } from "react-router";

import background from "./Background.jpg";
import logo2 from "./../../Images/logo2.png";
import axios from "axios";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" to="/">
        MENStack Airlines
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
function Login() {
  const [sending, setSending] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);
  const [wrongEmail, setWrongEmail] = useState(false);
  const [emptyFields, setEmptyFields] = useState(false);
  const navigate = useNavigate();
  const [showPass, setshowPass] = useState(false);
  const { user, setUser } = useContext(UserContext);
  useEffect(() => console.log(user), [user]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    if (!data.get("email") || !data.get("password")) {
      setEmptyFields(true);
    } else {
      if (!sending) {
        setSending(true);
        axios
          .post("http://localhost:3005/auth/login", {
            Email: data.get("email"),
            Password: data.get("password"),
          })
          .then((res) => {
            console.log(res);

            setUser({
              id: res.data.user._id,
              token: res.data.authorization,
              type: res.data.user.Type,
            });
            navigate("../");
          })
          .catch((err) => {
            if (err.response.status === 413) {
              setWrongPassword(true);
            }
            if (err.response.status === 408) {
              setWrongEmail(true);
            }
          });
        setSending(false);
      }
    }
  };
  const handlechange = (e) => {
    // e.preventDefault();
    setshowPass(!showPass);
  };

  return (
    <Grid
      container
      direction={"row-reverse"}
      // sx={{
      //   backgroundImage: `url(${background})`,
      //   backgroundRepeat: "no-repeat",
      //   backgroundColor: (t) =>
      //     t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      <Grid item sm={12} xs={12}></Grid>
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
              {" "}
              <Box
                sx={{
                  mx: 0,
                  width: "90%",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <img
                  src={logo2}
                  width="70%"
                  height="100%"
                  style={{ cursor: "pointer" }}
                  alt="Logo"
                />
              </Box>
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
                  error={wrongEmail || emptyFields}
                  margin="normal"
                  onChange={() => {
                    if (emptyFields) setEmptyFields(false);
                    if (wrongEmail) setWrongEmail(false);
                  }}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  helperText={wrongEmail ? "Email is Incorrect" : ""}
                />
                <TextField
                  error={wrongPassword || emptyFields}
                  onChange={() => {
                    if (emptyFields) setEmptyFields(false);
                    if (wrongPassword) setWrongPassword(false);
                  }}
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPass ? "text" : "password"}
                  id="password"
                  autoComplete="current-password"
                  helperText={wrongPassword ? "Pasword is Incorrect" : ""}
                />
                <FormControlLabel
                  control={<Checkbox value="Show password" color="primary" />}
                  label="Show password"
                  onChange={handlechange}
                />
                <Button
                  disabled={sending}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Button
                  disabled={sending}
                  color="info"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={() => navigate("/")}
                >
                  Continue as Guest
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link
                      to="/forget"
                      style={{ textDecoration: "none" }}
                    >
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to="/signup" style={{ textDecoration: "none" }}>
                      {"Don't have an account? Sign Up"}
                    </Link>{" "}
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
function LoginBar({ setBeta }) {
  const [sending, setSending] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);
  const [wrongEmail, setWrongEmail] = useState(false);
  const [emptyFields, setEmptyFields] = useState(false);
  const [showPass, setshowPass] = useState(false);
  const { user, setUser } = useContext(UserContext);
  useEffect(() => console.log(user), [user]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    if (!data.get("email") || !data.get("password")) {
      setEmptyFields(true);
    } else {
      if (!sending) {
        setSending(true);
        axios
          .post("http://localhost:3005/auth/login", {
            Email: data.get("email"),
            Password: data.get("password"),
          })
          .then((res) => {
            console.log(res);

            setUser({
              id: res.data.user._id,
              token: res.data.authorization,
              type: res.data.user.Type,
            });
            console.log(res.data);
          })
          .catch((err) => {
            if (err.response && err.response.status === 413) {
              setWrongPassword(true);
            }
            if (err.response && err.response.status === 408) {
              setWrongEmail(true);
            }
            setWrongPassword(true);
          });
        setSending(false);
        setBeta(false);
      }
    }
  };
  const handlechange = (e) => {
    // e.preventDefault();
    setshowPass(!showPass);
  };

  return (
    <Grid
      container
      direction={"row-reverse"}
      // sx={{
      //   backgroundImage: `url(${background})`,
      //   backgroundRepeat: "no-repeat",
      //   backgroundColor: (t) =>
      //     t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      <Grid item sm={12} xs={12}></Grid>
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
              {" "}
              <Box
                sx={{
                  mx: 0,
                  width: "90%",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <img
                  src={logo2}
                  width="70%"
                  height="100%"
                  style={{ cursor: "pointer" }}
                  alt="Logo"
                />
              </Box>
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
                  error={wrongEmail || emptyFields}
                  margin="normal"
                  onChange={() => {
                    if (emptyFields) setEmptyFields(false);
                    if (wrongEmail) setWrongEmail(false);
                  }}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  helperText={wrongEmail ? "Email is Incorrect" : ""}
                />
                <TextField
                  error={wrongPassword || emptyFields}
                  onChange={() => {
                    if (emptyFields) setEmptyFields(false);
                    if (wrongPassword) setWrongPassword(false);
                  }}
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPass ? "text" : "password"}
                  id="password"
                  autoComplete="current-password"
                  helperText={wrongPassword ? "Pasword is Incorrect" : ""}
                />
                <FormControlLabel
                  control={<Checkbox value="Show password" color="primary" />}
                  label="Show password"
                  onChange={handlechange}
                />
                <Button
                  disabled={sending}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Button
                  disabled={sending}
                  color="info"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={() => setBeta(false)}
                >
                  Continue as Guest
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link to="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to="/signup" style={{ textDecoration: "none" }}>
                      {"Don't have an account? Sign Up"}
                    </Link>{" "}
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

export { Login, LoginBar };
