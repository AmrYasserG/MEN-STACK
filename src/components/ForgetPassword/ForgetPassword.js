import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState, useEffect, forwardRef } from "react";

import axios from "axios";

const forgetPassword = () => {
  const [Email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);

  function sendForget() {
    axios
      .put("http://localhost:3005/auth/signup", {
        Email: email,
      })
      .then((res) => {})
      .catch((err) => {
        if (err.response.status === 477) {
          setValidEmail(false);
        }
      });
  }
  return (
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
          Return to login
        </Button>
      </div>
    </Box>
  );
};
