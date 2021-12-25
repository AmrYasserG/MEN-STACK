import React from "react";
import { useState, useEffect, forwardRef } from "react";
import Grid from "@mui/material/Grid";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import Popup from "../Popup/Popup";
import "./AdminHomepage.css";
import UpdateOver from "../UpdateOver/UpdateOver";
import SearchFlight from "../SearchFlight/SearchFlight.js";
import IconButton from "@mui/material/IconButton";
import { Row2 } from "../CollapsibleTable/CollapsibleTable";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AdminHomepage = () => {
  const [rows, setRows] = useState([]);
  const [toBeDeletedFlight, setToBeDeletedFlight] = useState("");
  const [deletePopupButton, setDeletePopupButton] = useState(false);
  const [editFlight, setEditFlight] = useState("");
  const [editFrom, setEditFrom] = useState("");
  const [editTo, setEditTo] = useState("");
  const [editDate, setEditDate] = useState("");
  const [editArrivalDate, setEditArrivalDate] = useState("");
  const [editDepartureTime, setEditDepartureTime] = useState("");
  const [editArrivalTime, setEditArrivalTime] = useState("");
  const [editDepartureTerminal, setEditDepartureTerminal] = useState("");
  const [editArrivalTerminal, setEditArrivalTerminal] = useState("");
  const [editBaggageAllowance, setEditBaggageAllowance] = useState("");
  const [edit_id, setEdit_id] = useState("");

  const [updPopupButton, setUpdPopupButton] = useState(false);
  const [deleteOpenResponse, setDeleteOpenResponse] = useState(false);
  const [editOpenResponse, setEditOpenResponse] = useState(false);
  const [x, setX] = useState(false);

  const [validEditFlightN, setValidEditFlightNo] = useState(true);

  const [validDate, setValidDate] = useState(true);
  const [validTime, setValidTime] = useState(true);
  const Compare2Dates = (d1, d2) => {
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getDate() === d2.getDate() &&
      d1.getMonth() === d2.getMonth()
    );
  };

  useEffect(() => {
    setValidDate(new Date(editDate) <= new Date(editArrivalDate));
  }, [editArrivalDate, editDate]);
  useEffect(() => {
    setValidTime(
      !validDate ||
        !Compare2Dates(new Date(editArrivalDate), new Date(editDate)) ||
        editDepartureTime < editArrivalTime
    );
  }, [
    editArrivalDate,
    editDate,
    editDepartureTime,
    editArrivalTime,
    validDate,
  ]);

  function GetAllFlights() {
    axios
      .get("http://localhost:3005/flights/getAllFlights")
      .then((res) => {
        setRows(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //function SearchForFlights() {}

  function EditRow(values) {
    axios
      .put("http://localhost:3005/flights/editFlight/" + values, {
        FlightNumber: editFlight,
        From: editFrom,
        To: editTo,
        ArrivalTime: editArrivalTime,
        DepartureTime: editDepartureTime,
        AirportDepartureTerminal: editDepartureTerminal,
        AirportArrivalTerminal: editArrivalTerminal,
        Date: editDate,
        ArrivalDate: editArrivalDate,
        BaggageAllowance: editBaggageAllowance,
      })
      .then((res) => {
        setUpdPopupButton(false);
        setX(false);
        setEditOpenResponse(true);
        GetAllFlights();
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 411) setValidEditFlightNo(false);
      });
  }

  function DeleteRow(values) {
    axios
      .delete("http://localhost:3005/flights/deleteFlight/" + values)
      .then((res) => {
        setDeleteOpenResponse(true);
        setRows(
          rows.filter((rows) => {
            return rows._id !== values;
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
    // setToBeDeletedFlight("");
  }

  const deleteHandleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setDeleteOpenResponse(false);
  };

  const editHandleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setEditOpenResponse(false);
  };

  const searchFlight = async (flight) => {
    //console.log(flight);
    //console.log(flight.Flight);
    await axios
      .post("http://localhost:3005/flights/searchFlights", {
        FlightNumber: flight.FlightNo,
        From: flight.From,
        To: flight.To,
        BaggageAllowance: flight.BaggageAllowance,
        ArrivalTime: flight.ArrivalTime,
        DepartureTime: flight.DepartureTime,
        EconomySeatsNo: flight.EconomyClassSeatsNo,
        BusinessSeatsNo: flight.BusinessClassSeatsNo,
        FirstSeatsNo: flight.FirstClassSeatsNo,
        EconomyClassPrice: flight.EconomyClassSeatsPrice,
        BusinessClassPrice: flight.BusinessClassSeatsPrice,
        FirstClassPrice: flight.FirstClassSeatsPrice,
        AirportDepartureTerminal: flight.DepartureTerminal,
        AirportArrivalTerminal: flight.ArrivalTerminal,
        Date: flight.Date,
        ArrivalDate: flight.ArrivalDate,
      })
      .then((result) => setRows(result.data));
  };
  useEffect(() => {
    GetAllFlights();
  }, []);

  return (
    <div>
      {/* <ResponsiveAppBar pages={["Create Flight"]} isAdmin={true} /> */}
      <Snackbar
        open={deleteOpenResponse}
        autoHideDuration={6000}
        onClose={deleteHandleClose}
      >
        <Alert
          onClose={deleteHandleClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Deleted Successfully
        </Alert>
      </Snackbar>
      <Snackbar
        open={editOpenResponse}
        autoHideDuration={6000}
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
      <Popup trigger={deletePopupButton} setTrigger={setDeletePopupButton}>
        <CancelOutlinedIcon
          color="error"
          style={{ width: "25%", height: "30%" }}
        />
        <h2>Are you sure?</h2>
        <p style={{ fontSize: "small" }}>
          Do you really want to delete this flight with all its details? This
          action cannot be undone
        </p>
        <Button
          variant="contained"
          color="error"
          style={{ right: "5%", top: "7%" }}
          onClick={() => {
            setDeletePopupButton(false);
            DeleteRow(toBeDeletedFlight);
            setX(false);
            // setToBeDeletedFlight("");
          }}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          style={{ left: "5%", top: "7%" }}
          onClick={() => {
            setDeletePopupButton(false);
            setX(false);
          }}
        >
          Cancel
        </Button>
      </Popup>
      <UpdateOver trigger={updPopupButton} setTrigger={setUpdPopupButton}>
        <h1>Update Flight</h1>
        <Grid container rowSpacing={"3%"} ml={"2%"}>
          <Grid item xs={6} sx={{ textAlign: "left" }}>
            <label>FlightNumber:</label>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "left" }}>
            <input
              style={{ width: "70%" }}
              error={true}
              name="flno"
              id="flno"
              type="text"
              value={editFlight}
              onChange={(e) => {
                setEditFlight(e.target.value);
                setValidEditFlightNo(true);
              }}
            />
          </Grid>
          {!validEditFlightN && (
            <Grid
              item
              xs={2}
              sx={{ textAlign: "left", color: "#FF1004", fontSize: "9px" }}
            >
              <label>Flight No Already Exists</label>
            </Grid>
          )}
          <Grid item xs={6} sx={{ textAlign: "left" }}>
            <label>From:</label>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "left" }}>
            <input
              style={{ width: "70%" }}
              name="from"
              id="from"
              type="text"
              value={editFrom}
              onChange={(e) => {
                setEditFrom(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={6} sx={{ textAlign: "left" }}>
            <label>To:</label>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "left" }}>
            <input
              style={{ width: "70%" }}
              name="to"
              id="to"
              type="text"
              value={editTo}
              onChange={(e) => {
                setEditTo(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={6} sx={{ textAlign: "left" }}>
            <label>Departure Date:</label>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "left" }}>
            <input
              error={editDate && !validDate}
              style={{ width: "70%" }}
              name="date"
              id="date"
              type="date"
              value={editDate}
              onChange={(e) => {
                setEditDate(e.target.value);
              }}
            />
          </Grid>
          {editDate && !validDate && (
            <Grid
              item
              xs={2}
              sx={{ textAlign: "left", color: "#FF1004", fontSize: "9px" }}
            >
              <label>Departure Date is Later than Arrival Date</label>
            </Grid>
          )}
          <Grid item xs={6} sx={{ textAlign: "left" }}>
            <label>Arrival Date:</label>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "left" }}>
            <input
              error={editArrivalDate && !validDate}
              style={{ width: "70%" }}
              name="date"
              id="adate"
              type="date"
              value={editArrivalDate}
              onChange={(e) => {
                setEditArrivalDate(e.target.value);
              }}
            />
          </Grid>
          {editArrivalDate && !validDate && (
            <Grid
              item
              xs={2}
              sx={{ textAlign: "left", color: "#FF1004", fontSize: "9px" }}
            >
              <label>Arrival Date is Earilier than Departure Date</label>
            </Grid>
          )}

          <Grid item xs={6} sx={{ textAlign: "left" }}>
            <label>Departure Time:</label>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "left" }}>
            <input
              error={editDepartureTime && validTime}
              style={{ width: "70%" }}
              name="dep"
              id="dep"
              type="time"
              value={editDepartureTime}
              onChange={(e) => {
                setEditDepartureTime(e.target.value);
              }}
            />
          </Grid>
          {editDepartureTime && !validTime && (
            <Grid
              item
              xs={2}
              sx={{ textAlign: "left", color: "#FF1004", fontSize: "9px" }}
            >
              <label>Departure Time is Later than Arrival Time</label>
            </Grid>
          )}

          <Grid item xs={6} sx={{ textAlign: "left" }}>
            <label>Arrival Time:</label>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "left" }}>
            <input
              error={editArrivalTime && validTime}
              style={{ width: "70%" }}
              name="arrivet"
              id="arrivet"
              type="time"
              value={editArrivalTime}
              onChange={(e) => {
                setEditArrivalTime(e.target.value);
              }}
            />
          </Grid>
          {editDepartureTime && !validTime && (
            <Grid
              item
              xs={2}
              sx={{ textAlign: "left", color: "#FF1004", fontSize: "9px" }}
            >
              <label>Arrival Time is Earilier than Departure Time</label>
            </Grid>
          )}
          <Grid item xs={6} sx={{ textAlign: "left" }}>
            <label>Airport Departure Terminal:</label>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "left" }}>
            <input
              style={{ width: "70%" }}
              name="depTer"
              id="depTer"
              type="number"
              value={editDepartureTerminal}
              onChange={(e) => {
                setEditDepartureTerminal(Number(e.target.value));
              }}
            />
          </Grid>
          <Grid item xs={6} sx={{ textAlign: "left" }}>
            <label>Airport Arrival Terminal:</label>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "left" }}>
            <input
              style={{ width: "70%" }}
              name="arrTer"
              id="arrTer"
              type="number"
              value={editArrivalTerminal}
              onChange={(e) => {
                setEditArrivalTerminal(Number(e.target.value));
              }}
            />
          </Grid>

          <Grid item xs={6} sx={{ textAlign: "left" }}>
            <label>Baggage Allowance:</label>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "left" }}>
            <input
              style={{ width: "70%" }}
              name="fstNop"
              id="fstNop"
              type="number"
              value={editBaggageAllowance}
              onChange={(e) => {
                setEditBaggageAllowance(Number(e.target.value));
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              disabled={
                !validTime ||
                !validEditFlightN ||
                !validDate ||
                !editFlight ||
                !editFrom ||
                !editTo ||
                !editArrivalTime ||
                !editDepartureTime ||
                !editDepartureTerminal ||
                !editArrivalTerminal ||
                !editDate ||
                !editArrivalDate ||
                !editBaggageAllowance
              }
              variant="contained"
              style={{ right: "5%", top: "7%" }}
              onClick={() => {
                EditRow(edit_id);
              }}
            >
              Update
            </Button>
            <Button
              variant="contained"
              color="error"
              style={{ left: "5%", top: "7%" }}
              onClick={() => {
                setUpdPopupButton(false);
                setX(false);
              }}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </UpdateOver>
      <div>
        <SearchFlight d={x} onSearch={searchFlight} />
        {/* <Link to="/signup" className="btn btn-primary">Sign up</Link> */}
      </div>
      <hr />
      <Box p={"1%"} maxHeight={1}>
        {rows.length > 0 ? (
          <TableContainer>
            <Table
              aria-label="collapsible table"
              className="header"
              stickyHeader={!x}
            >
              <TableHead>
                <TableRow>
                  <TableCell sx={{ color: "#FFFFFF " }}>
                    <p>&#8205</p>
                  </TableCell>
                  <TableCell
                    sx={{ textAlign: "center" }}
                    style={{ fontWeight: "bold" }}
                  >
                    Flight Number
                  </TableCell>
                  <TableCell
                    sx={{ textAlign: "center" }}
                    style={{ fontWeight: "bold" }}
                  >
                    From
                  </TableCell>
                  <TableCell
                    sx={{ textAlign: "center" }}
                    style={{ fontWeight: "bold" }}
                  >
                    To
                  </TableCell>
                  <TableCell
                    sx={{ textAlign: "center" }}
                    style={{ fontWeight: "bold" }}
                  >
                    Departure Date
                  </TableCell>
                  <TableCell
                    sx={{ textAlign: "center" }}
                    style={{ fontWeight: "bold" }}
                  >
                    Departure Time
                  </TableCell>
                  <TableCell
                    sx={{ textAlign: "center" }}
                    style={{ fontWeight: "bold" }}
                  >
                    Arrival Date
                  </TableCell>
                  <TableCell
                    sx={{ textAlign: "center" }}
                    style={{ fontWeight: "bold" }}
                  >
                    Arrival Time
                  </TableCell>
                  <TableCell
                    sx={{ textAlign: "center" }}
                    style={{ fontWeight: "bold" }}
                  >
                    Trip Duration
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <Row2
                    rownumber={index}
                    row={row}
                    EditContent={
                      <IconButton
                        disabled={x}
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          console.log(row);
                          setEdit_id(row._id);
                          setUpdPopupButton(true);
                          setEditDepartureTime(row.DepartureTime);
                          setEditDepartureTerminal(
                            row.AirportDepartureTerminal
                          );
                          setEditArrivalTime(row.ArrivalTime);
                          setEditArrivalTerminal(row.AirportArrivalTerminal);
                          setEditDate(row.Date);
                          setEditArrivalDate(row.ArrivalDate);

                          setEditFlight(row.FlightNumber);
                          setEditFrom(row.From);
                          setEditTo(row.To);
                          setEditBaggageAllowance(row.BaggageAllowance);

                          setX(true);
                        }}
                      >
                        <EditIcon />
                      </IconButton>
                    }
                    DeleteContent={
                      <IconButton
                        disabled={x}
                        variant="contained"
                        color="error"
                        onClick={() => {
                          setX(true);
                          setDeletePopupButton(true);
                          setToBeDeletedFlight(row._id);
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    }
                    isAdmin={true}
                  />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Box
            sx={{
              textAlign: "center",

              mx: "4%",
              opacity: 0.5,
            }}
          >
            <Typography variant="h6">No Flights Available</Typography>
          </Box>
        )}
      </Box>
    </div>
  );
};
export default React.memo(AdminHomepage);
