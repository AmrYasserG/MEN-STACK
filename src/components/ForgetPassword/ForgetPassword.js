import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState, useEffect, forwardRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import axios from "axios";

const ForgetPassword = () => {
  const [sent, setsent] = useState("");
  const [wrongEmail, setWrongEmail] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data.get("email")) {
      axios
        .put("http://localhost:3005/auth/forgetPass", {
          Email: data.get("email"),
        })
        .then((res) => {
          setsent(true);
        })
        .catch((err) => {
          if (err.response.status === 477) {
            setWrongEmail(false);
          }
        });
    } else {
      setWrongEmail(false);
    }
  };
  return (
    <>
      {!sent ? (
        <Box
          sx={{
            "text-align": "center",
            m: "auto",
            my: "12%",
            width: ["90%", "40%"],
            border: "1px solid #eeeeee",
            backgroundColor: "#f9f9f9",
            "box-shadow": "0px 0px 20px 14px #0a8fad",
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              error={wrongEmail}
              margin="normal"
              onChange={() => {
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

            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {" "}
              Send New Password
            </Button>
          </Box>
          <div>
            <Typography variant="h6">
              A newly generated Password will be sent to your Email
            </Typography>
          </div>
        </Box>
      ) : (
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
            <Typography variant="h4">New Password Sent Successfully</Typography>
          </div>
          <div className="form-control">
            <Button variant="contained" color="primary" >
              <Link
                to="/Login"
                style={{ textDecoration: "none", color: "#FFFFFF" }}
              >
                Return to login
              </Link>{" "}
            </Button>
          </div>
        </Box>
      )}
    </>
  );
};
export default ForgetPassword;
