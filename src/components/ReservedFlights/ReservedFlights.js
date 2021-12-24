import React from "react";
import { useState, useEffect, forwardRef } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
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
import { collapseClasses } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Edit";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function ReservedFlights() {
  const state = useLocation().state;
  // const columns = [
  //   { id: "ReservationNumber", label: "Reservation Number", width: 80 },
  //   { id: "FlightNumber", label: "Flight Number", width: 80 },
  //   { id: "From", label: "From", width: 60 },
  //   { id: "To", label: "To", width: 60 },
  //   { id: "Date", label: "Flight Date", width: 100 },
  //   { id: "DepartureTime", label: "Departure Time", width: 80 },
  //   { id: "ArrivalTime", label: "Arrival Time", width: 80 },
  //   {
  //     id: "AirportDepartureTerminal",
  //     label: "Airport Departure Terminal",
  //     width: 120,
  //   },
  //   {
  //     id: "AirportArrivalTerminal",
  //     label: "Airport Arrival Terminal",
  //     width: 120,
  //   },
  //   {
  //     id: "ChosenCabin",
  //     label: "Cabin",
  //     Width: 60,
  //   },
  //   {
  //     id: "SeatsReserved",
  //     label: "Reserved Seats",
  //     Width: 80,
  //   },
  //   {
  //     id: "TotalReservationPrice",
  //     label: "Total Reservation Price",
  //     Width: 60,
  //   },
  //   { id: "action", label: "Action", Width: 100 },
  // ];
  const [FlightsReserved, setFlightsReserved] = useState([]);
  const [FlightsUserDetails, setFlightsUserDetails] = useState([]);
  const [toBeCanceled, setToBeCanceled] = useState(0);
  const [CancelReservationPopupButton, setCancelReservationPopupButton] = useState(false);
  const [deleteOpenResponse, setDeleteOpenResponse] = useState(false);
  const [User_Email, setUserEmail] = useState("");

  useEffect(() => {
    GetAllReservedFlights();
    console.log(FlightsUserDetails);
    console.log(FlightsReserved);
    console.log(state);
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
          //console.log(res.data);
          // console.log(FlightsUserDetails);
          // console.log(FlightsReserved);
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
    console.log(updatedAvailableSeats);
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

      {/* <Paper sx={{ width: "100%", overflow: "hidden", marginTop: "1%" }}>
        <TableContainer sx={{ maxHeight: 500 }}>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    style={{ width: column.width, textAlign: "center" }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {FlightsReserved.map((row, index) => {
                return (
                  <TableRow hover key={FlightsUserDetails[index]._id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      if (column.id === "action") {
                        return (
                          <TableCell
                            sx={{ textAlign: "center" }}
                            key={{ key: row._id }}
                          >
                            <Button
                              variant="contained"
                              color="error"
                              onClick={() => {
                                setCancelReservationPopupButton(true);
                                setToBeCanceled(index);
                              }}
                            >
                              Cancel Reservation
                            </Button>
                          </TableCell>
                        );
                      } else if (column.id === "ReservationNumber") {
                        return (
                          <TableCell
                            key={column.id}
                            sx={{ textAlign: "center" }}
                          >
                            {FlightsUserDetails[index].ReservationNumber}
                          </TableCell>
                        );
                      } else if (column.id === "ChosenCabin") {
                        return (
                          <TableCell
                            key={column.id}
                            sx={{ textAlign: "center" }}
                          >
                            {FlightsUserDetails[index].ChosenCabin}
                          </TableCell>
                        );
                      } else if (column.id === "SeatsReserved") {
                        return (
                          <TableCell
                            key={column.id}
                            sx={{ textAlign: "center" }}
                          >
                            {FlightsUserDetails[index].SeatsReserved.map(
                              (SeatNumber) => {
                                return <span key={SeatNumber}>{SeatNumber} </span>;
                              }
                            )}
                          </TableCell>
                        );
                      } else if (column.id === "TotalReservationPrice") {
                        return (
                          <TableCell
                            key={column.id}
                            sx={{ textAlign: "center" }}
                          >
                            {FlightsUserDetails[index].TotalReservationPrice}
                          </TableCell>
                        );
                      } else {
                        return (
                          <TableCell
                            key={column.id}
                            sx={{ textAlign: "center" }}
                          >
                            {value}
                          </TableCell>
                        );
                      }
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper> */}
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
