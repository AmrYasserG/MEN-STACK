import React from "react";
import { useState, useEffect, forwardRef } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import Snackbar from "@mui/material/Snackbar";
import Popup from "../Popup/Popup";
import MuiAlert from "@mui/material/Alert";
import "./ReservedFlights.css";
import ResponsiveAppBar from "../ResponsiveAppBar/ResponsiveAppBar";
import { useLocation } from "react-router-dom";
import { CollapsibleTable } from "../CollapsibleTable/CollapsibleTable";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function ReservedFlights() {
  const state = useLocation().state;
  const [FlightsReserved, setFlightsReserved] = useState([]);
  const [FlightsUserDetails, setFlightsUserDetails] = useState([]);
  const [toBeCanceled, setToBeCanceled] = useState(0);
  const [CancelReservationPopupButton, setCancelReservationPopupButton] = useState(false);
  const [deleteOpenResponse, setDeleteOpenResponse] = useState(false);
  const [User_Email, setUserEmail] = useState("");

  useEffect(() => {
    GetAllReservedFlights();
  }, []);

  function GetAllReservedFlights() {
    if (state !== null) {
      const User_id = state.id;
      GetUserInfo(User_id);
      axios
        .get(
          "http://localhost:3005/bookingFlights/getAllReservations/" + User_id
        )
        .then((res) => {
          const flight_Details = new Array(res.data.length);
          const flight_User_Details = new Array(res.data.length);
          for (let i = 0; i < res.data.length; i++) {
            flight_Details[i] = { FlightNumber: res.data[i].FlightNumber };
            flight_User_Details[i] = res.data[i];
          }
          setFlightsUserDetails(flight_User_Details);
          GetAllFlights(flight_Details, flight_User_Details);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function GetUserInfo(User_id) {
    axios
      .get(
        "http://localhost:3005/users/userInfo/" + User_id
      )
      .then((res) => {
        setUserEmail(res.data.Email);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function GetAllFlights(flight_Details, flight_User_Details) {
    if (flight_Details.length !== 0) {
      axios
        .post(
          "http://localhost:3005/flights/getAllFlightsWithId",
          flight_Details
        )
        .then((res) => {
          let sortedFlightsReserved = new Array(flight_User_Details.length);
          for (let i = 0; i < flight_User_Details.length; i++) {
            for (let j = 0; j < res.data.length; j++) {
              if (flight_User_Details[i].FlightNumber === res.data[j].FlightNumber) {
                sortedFlightsReserved[i] = res.data[j];
                break;
              }
            }
          }
          setFlightsReserved(sortedFlightsReserved);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function updateFlightAvailableSeats(FlightsReservedArray, FlightsUserDetailsArray) {
    const toBeUpdatedFlight = FlightsReservedArray[toBeCanceled];
    const toBeUpdatedFlightSeats = FlightsUserDetailsArray[toBeCanceled];
    const ChosenCabin = FlightsUserDetailsArray[toBeCanceled].ChosenCabin + "AvailableSeatsNo";
    let updatedAvailableSeats = {};
    switch (ChosenCabin) {
      case "EconomyAvailableSeatsNo":
        const EconomySeats = new Map(Object.entries(toBeUpdatedFlight.EconomySeats));
        for (let i = 0; i < toBeUpdatedFlightSeats.SeatsReserved.length; i++) {
          EconomySeats.set(toBeUpdatedFlightSeats.SeatsReserved[i], true);
        }
        updatedAvailableSeats = { EconomyAvailableSeatsNo: toBeUpdatedFlight.EconomyAvailableSeatsNo + toBeUpdatedFlightSeats.SeatsReserved.length, EconomySeats: Object.fromEntries(EconomySeats) };
        break;
      case "BusinessAvailableSeatsNo":
        const BusinessSeats = new Map(Object.entries(toBeUpdatedFlight.BusinessSeats));
        for (let i = 0; i < toBeUpdatedFlightSeats.SeatsReserved.length; i++) {
          BusinessSeats.set(toBeUpdatedFlightSeats.SeatsReserved[i], true);
        }
        updatedAvailableSeats = { BusinessAvailableSeatsNo: toBeUpdatedFlight.BusinessAvailableSeatsNo + toBeUpdatedFlightSeats.SeatsReserved.length, BusinessSeats: Object.fromEntries(BusinessSeats) };
        break;
      case "FirstAvailableSeatsNo":
        const FirstSeats = new Map(Object.entries(toBeUpdatedFlight.FirstSeats));
        for (let i = 0; i < toBeUpdatedFlightSeats.SeatsReserved.length; i++) {
          FirstSeats.set(toBeUpdatedFlightSeats.SeatsReserved[i], true);
        }
        updatedAvailableSeats = { FirstAvailableSeatsNo: toBeUpdatedFlight.FirstAvailableSeatsNo + toBeUpdatedFlightSeats.SeatsReserved.length, FirstSeats: Object.fromEntries(FirstSeats) };
        break;
      default:
    }
    // console.log(updatedAvailableSeats);
    axios
      .put(
        "http://localhost:3005/flights/updateFlightAvailableSeats/" +
        toBeUpdatedFlight._id,
        updatedAvailableSeats
      )
      .then((res) => {
        // console.log("Available Seats Updated successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function editSeats(userArr, flightArr , newSeats){
    
  }

  function DeleteRow() {
    const FlightReservedId = FlightsUserDetails[toBeCanceled]._id;
    axios
      .delete(
        "http://localhost:3005/bookingFlights/cancelReservation/" + FlightReservedId + "/" + User_Email
      )
      .then((res) => {
        updateFlightAvailableSeats(FlightsReserved, FlightsUserDetails);
        setDeleteOpenResponse(true);
        FlightsReserved.splice(toBeCanceled, 1)
        setFlightsReserved(
          FlightsReserved
        );
        setFlightsUserDetails(
          FlightsUserDetails.filter((Flights) => {
            return Flights._id !== FlightReservedId;
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const deleteHandleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setDeleteOpenResponse(false);
  };

  return (
    <div>
      <ResponsiveAppBar pages={[]} isUser={true} settings={['profile']} />
      <Snackbar
        open={deleteOpenResponse}
        autoHideDuration={3000}
        onClose={deleteHandleClose}
      >
        <Alert
          onClose={deleteHandleClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Cancelled Successfully
        </Alert>
      </Snackbar>
      <Popup
        trigger={CancelReservationPopupButton}
        setTrigger={setCancelReservationPopupButton}
      >
        <IconButton
          style={{ left: "68%", bottom: "30%" }}
          onClick={() => {
            setCancelReservationPopupButton(false);
          }}
        >
          <CloseOutlinedIcon />
        </IconButton>
        <CancelOutlinedIcon
          color="error"
          style={{ width: "25%", height: "30%", paddingRight: "10%" }}
        />
        <h2>Are you sure?</h2>
        <p style={{ fontSize: "small" }}>
          Do you really want to cancel this flight reservation? This action
          cannot be undone
        </p>
        <Button
          variant="contained"
          color="error"
          style={{ top: "7%" }}
          onClick={() => {
            setCancelReservationPopupButton(false);
            DeleteRow();
          }}
        >
          Cancel Reservation
        </Button>
      </Popup>

      <CollapsibleTable rows={FlightsReserved} reservation
        setCancelReservationPopupButton={setCancelReservationPopupButton} 
        FlightsUserDetails={FlightsUserDetails}
        setToBeCanceled={setToBeCanceled} state = {state}
        />
      <p style={{ textAlign: "center", width: "100%" }}>
        {FlightsUserDetails.length === 0 ? "No Reservations" : ""}
      </p>
      {/* <Button
        
        onClick={console.log(FlightsReserved) }
        variant="contained"
        className="btn"
        styl
        
      ></Button> */}

    </div>
  );
}

export default ReservedFlights;
