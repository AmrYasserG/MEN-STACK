import React from "react";
import { useState, useEffect, forwardRef, useContext } from "react";
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
import Divider from "@mui/material/Divider";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import { UserContext } from "../../Context/UserContext";
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
  const [userDetails, setUserDetails] = useState([]);
  const [selectedTab, setSelectedTab] = useState(0);

  const { user } = useContext(UserContext);

  const [OldPassword, setOldPassword] = useState("");
  const [showOldPassword, setshowOldPassword] = useState(false);

  const [NewPassword, setNewPassword] = useState("");
  const [showNewPassword, setshowNewPassword] = useState(false);

  const [ConfirmNewPassword, setConfirmNewPassword] = useState("");
  const [showConfirmNewPassword, setshowConfirmNewPassword] = useState(false);

  const [uniqueEmail, setUniqueEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [notSimilarPassword, setNotSimilarPassword] = useState(true);
  const [passwordExists, setPasswordExists] = useState(false);
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
    setValidPassword(
      NewPassword === ConfirmNewPassword ||
        NewPassword === "" ||
        ConfirmNewPassword === ""
    );
  }, [NewPassword, ConfirmNewPassword]);
  useEffect(() => {
    setNotSimilarPassword(
      NewPassword !== OldPassword || NewPassword === "" || OldPassword === ""
    );
  }, [NewPassword, OldPassword]);
  const handleClickShowOldPassword = () => {
    setshowOldPassword(!showOldPassword);
  };
  const handleOldPasswordChange = (event) => {
    setOldPassword(event.target.value);
  };

  const handleClickShowConfirmNewPassword = () => {
    setshowConfirmNewPassword(!showConfirmNewPassword);
  };
  const handleConfirmNewPasswordChange = (event) => {
    setConfirmNewPassword(event.target.value);
  };

  const handleClickShowNewPassword = () => {
    setshowNewPassword(!showNewPassword);
  };
  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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

  function EditUser() {
    axios
      .put("http://localhost:3005/users/editUser/" + user.id, {
        FirstName: FirstName,
        LastName: LastName,
        Email: Email,
        Age: getAge(BornIn),
        BornIn: BornIn,
        LivesIn: LivesIn,
        MartialStatus: MartialStatus,
        PhoneNumber: PhoneNumber,
        PassportNumber: PassportNumber,
      })
      .then((res) => {
        setEditOpenResponse(true);
        setUserDetails(res.data);
      })
      .catch((err) => {
        setUniqueEmail(false);
      });
  }
  const onSubmit = (e) => {
    e.preventDefault();
    EditUser();
  };
  const onSubmitPassword = (e) => {
    e.preventDefault();
    console.log(user.id);
    axios
      .put("http://localhost:3005/auth/changePassword/" + user.id, {
        oldPass: OldPassword,
        newPass: NewPassword,
      })
      .then((res) => {
        setOldPassword("");
        setConfirmNewPassword("");
        setNewPassword("");
        setEditOpenResponse(true);
        //setUserDetails(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        setPasswordExists(true);
      });
  };

  useEffect(() => {
    setFirstName(userDetails.FirstName);
    setLastName(userDetails.LastName);
    setEmail(userDetails.Email);
    setBornIn(userDetails.BornIn);
    setAge(userDetails.Age);
    setMartialStatus(userDetails.MartialStatus);
    setPhoneNumber(userDetails.PhoneNumber);
    setPassportNumber(userDetails.PassportNumber);
    setLivesIn(userDetails.LivesIn);
  }, [userDetails]);

  useEffect(() => {
    setPasswordExists(false);
  }, [OldPassword]);

  useEffect(() => {
    axios
      .get("http://localhost:3005/users/userInfo/" + user.id)
      .then((res) => {
        setUserDetails(res.data);
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
    if (!uniqueEmail) setUniqueEmail(true);
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
          width: ["80%", "40%"],
          "text-align": "center",
          border: "1px solid #eeeeee",
          backgroundColor: "#f9f9f9",
          "box-shadow": "0px 0px 3px 3px #59C8FD",
        }}
      >
        <Tabs centered value={selectedTab} onChange={handleChange}>
          <Tab
            label="Profile Info"
            sx={{ fontSize: ["3vw", "1vw"], maxWidth: "50%" }}
          />
          <Tab
            label="Password"
            sx={{ fontSize: ["3vw", "1vw"], maxWidth: "50%" }}
          />
        </Tabs>
        <Divider />
        {selectedTab === 0 ? (
          <Box>
            <div>
              <Typography sx={{ fontSize: ["5vw", "2vw"], m: "3%" }}>
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
                error={!validEmail || !uniqueEmail}
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
                    ? uniqueEmail
                      ? ""
                      : "Email Already Exists"
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
                  !validateEmail(Email) ||
                  FirstName === "" ||
                  Email === "" ||
                  BornIn === "" ||
                  Age <= 0 ||
                  MartialStatus === "" ||
                  LivesIn === "" ||
                  PhoneNumber === "" ||
                  !parseInt(PhoneNumber) ||
                  !parseInt(Age) ||
                  (FirstName === userDetails.FirstName &&
                    LastName === userDetails.LastName &&
                    Email === userDetails.Email &&
                    //BornIn===User.Born&&
                    Age === userDetails.Age &&
                    MartialStatus === userDetails.MartialStatus &&
                    LivesIn === userDetails.LivesIn &&
                    PhoneNumber === userDetails.PhoneNumber &&
                    PassportNumber === userDetails.PassportNumber)
                }
                sx={{ fontSize: "1vw" }}
              >
                Edit Profile
              </Button>
            </div>
          </Box>
        ) : (
          <Box>
            <Typography sx={{ fontSize: ["5vw", "2vw"], m: "3%" }}>
              Change Password{" "}
            </Typography>
            <Box>
              <FormControl
                sx={{
                  width: ["90%", "50%"],
                  textAlign: "left",
                  my: ["8%", "2%"],
                }}
                variant="outlined"
              >
                <InputLabel
                  htmlFor="outlined-adornment-password"
                  sx={{ fontSize: ["3.5vw", "1vw"] }}
                >
                  Old Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  error={!notSimilarPassword || passwordExists}
                  type={showOldPassword ? "text" : "password"}
                  value={OldPassword}
                  onChange={handleOldPasswordChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => handleClickShowOldPassword()}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showOldPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  sx={{ height: ["9vw", "4vw"] }}
                  label="Old Password"
                />
                {passwordExists && (
                  <FormHelperText error>Incorrect Password</FormHelperText>
                )}
              </FormControl>
            </Box>
            <Box>
              <FormControl
                sx={{
                  width: ["90%", "50%"],
                  textAlign: "left",
                  my: ["8%", "2%"],
                }}
                variant="outlined"
              >
                <InputLabel
                  htmlFor="outlined-adornment-password"
                  sx={{ fontSize: ["3.5vw", "1vw"] }}
                >
                  New Password
                </InputLabel>
                <OutlinedInput
                  error={!validPassword || !notSimilarPassword}
                  id="outlined-adornment-password"
                  type={showNewPassword ? "text" : "password"}
                  value={NewPassword}
                  onChange={handleNewPasswordChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => handleClickShowNewPassword()}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showNewPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  sx={{ height: ["9vw", "4vw"] }}
                  label="New Password"
                />
                {!notSimilarPassword ? (
                  <FormHelperText error>
                    New and Old Passwords Can not be similar
                  </FormHelperText>
                ) : (
                  !validPassword && (
                    <FormHelperText error>
                      Passwords are not similar
                    </FormHelperText>
                  )
                )}
              </FormControl>
            </Box>
            <Box>
              <FormControl
                sx={{
                  width: ["90%", "50%"],
                  textAlign: "left",
                  my: ["8%", "2%"],
                }}
                variant="outlined"
              >
                <InputLabel
                  htmlFor="outlined-adornment-password"
                  sx={{ fontSize: ["3.5vw", "1vw"] }}
                >
                  Confirm New Password
                </InputLabel>
                <OutlinedInput
                  error={!validPassword}
                  id="outlined-adornment-password"
                  type={showConfirmNewPassword ? "text" : "password"}
                  value={ConfirmNewPassword}
                  onChange={handleConfirmNewPasswordChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => handleClickShowConfirmNewPassword()}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showConfirmNewPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Confirm New Password"
                  sx={{ height: ["9vw", "4vw"] }}
                />
              </FormControl>
            </Box>
            <br />
            <Box>
              <Button
                variant="contained"
                color="primary"
                onClick={onSubmitPassword}
                size="large"
                disabled={
                  !(
                    OldPassword &&
                    NewPassword &&
                    ConfirmNewPassword &&
                    validPassword
                  )
                }
                sx={{ fontSize: ["3.1vw", "1vw"] }}
              >
                Change Password{" "}
              </Button>
            </Box>
            <br />
          </Box>
        )}{" "}
        {/* <Input type="submit" value="Create Flight" className="btn btn-block"/> */}
      </Box>
    </Box>
  );
};

export default UserProfile;
