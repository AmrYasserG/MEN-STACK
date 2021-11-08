// import * as React from 'react';
import { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
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
import AddIcon from "@mui/icons-material/Add";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import Popup from "../Popup/Popup";
import "./AdminHomepage.css";
import UpdateOver from "../UpdateOver/UpdateOver";

const AdminHomepage = () => {
  const [rows, setRows] = useState([]);
  const [toBeDeletedFlight, setToBeDeletedFlight] = useState("");
  const [deletePopupButton, setDeletePopupButton] = useState(false);
  const [toBeUpdFlight, setToBeUpdFlight] = useState("");
  const [updPopupButton, setUpdPopupButton] = useState(false);

  const columns = [
    { id: "FlightNumber", label: "Flight Number", width: 60 },
    { id: "From", label: "From", width: 60 },
    { id: "To", label: "To", width: 60 },
    { id: "Date", label: "Flight Date", width: 110 },
    { id: "DepartureTime", label: "Departure Time", width: 80 },
    { id: "ArrivalTime", label: "Arrival Time", width: 80 },
    {
      id: "AirportDepartureTerminal",
      label: "Airport Departure Terminal",
      width: 60,
    },
    {
      id: "AirportArrivalTerminal",
      label: "Airport Arrival Terminal",
      width: 60,
    },
    {
      id: "BusinessSeatsNo",
      label: "Number Of Business Class Seats",
      Width: 100,
    },
    {
      id: "EconomySeatsNo",
      label: "Number Of Economy Class Seats",
      Width: 100,
    },
    {
      id: "FirstSeatsNo",
      label: "Number Of First Class Seats",
      Width: 100,
    },
    { id: "action", label: "Action", Width: 100 },
  ];

  useEffect(() => {
    GetAllFlights();
  });

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
    axios.put(
      "http://localhost:3005/flights/editFlight/" + values,
      toBeUpdFlight
    );
    console.log(toBeUpdFlight);
  }

  function DeleteRow(values) {
    axios
      .delete("http://localhost:3005/flights/deleteFlight/" + values)
      .then((res) => {
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

  return (
    <div>
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
            // setToBeDeletedFlight("");
          }}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          style={{left: "5%", top: "7%" }}
          onClick={() => {
            setDeletePopupButton(false);
          }}
        >
          Cancel
        </Button>
      </Popup>
      <UpdateOver trigger={updPopupButton} setTrigger={setUpdPopupButton}>
        <h1>Update Flight</h1>
        <label>FlightNumber:</label>
        <span>
          <input
            name="flno"
            id="flno"
            type="text"
            value={toBeUpdFlight.FlightNumber}
            onChange={(e) => {
              toBeUpdFlight.FlightNumber = Number(e.target.value);
            }}
          />
        </span>
        <br></br>
        <label>From:</label>
        <span>
          <input
            name="from"
            id="from"
            type="text"
            value={toBeUpdFlight.From}
            onChange={(e) => {
              toBeUpdFlight.From = e.target.value;
            }}
          />
        </span>
        <br></br>
        <label>To:</label>
        <span>
          <input
            name="to"
            id="to"
            type="text"
            value={toBeUpdFlight.To}
            onChange={(e) => {
              toBeUpdFlight.To = e.target.value;
            }}
          />
        </span>
        <br></br>
        <label>Flight Date:</label>
        <span>
          <input
            name="date"
            id="date"
            type="date"
            value={toBeUpdFlight.Date}
            onChange={(e) => {
              toBeUpdFlight.Date = e.target.value;
            }}
          />
        </span>
        <br></br>
        <label>Departure Time:</label>
        <span>
          <input
            name="dep"
            id="dep"
            type="time"
            value={toBeUpdFlight.DepartureTime}
            onChange={(e) => {
              toBeUpdFlight.DepartureTime = e.target.value;
            }}
          />
        </span>
        <br></br>
        <label>Arrival Time:</label>
        <span>
          <input
            name="arrive"
            id="arrive"
            type="time"
            value={toBeUpdFlight.ArrivalTime}
            onChange={(e) => {
              toBeUpdFlight.ArrivalTime = e.target.value;
            }}
          />
        </span>
        <br></br>
        <label>Airport Departure Terminal:</label>
        <span>
          <input
            name="depTer"
            id="depTer"
            type="text"
            value={toBeUpdFlight.AirportDepartureTerminal}
            onChange={(e) => {
              toBeUpdFlight.AirportDepartureTerminal = Number(e.target.value);
            }}
          />
        </span>
        <br></br>
        <label>Airport Arrival Terminal:</label>
        <span>
          <input
            name="arrTer"
            id="arrTer"
            type="text"
            value={toBeUpdFlight.AirportArrivalTerminal}
            onChange={(e) => {
              toBeUpdFlight.AirportArrivalTerminal = Number(e.target.value);
            }}
          />
        </span>
        <br></br>
        <label>Number Of Business Class Seats:</label>
        <span>
          <input
            name="busNo"
            id="busNo"
            type="text"
            value={toBeUpdFlight.BusinessSeatsNo}
            onChange={(e) => {
              toBeUpdFlight.BusinessSeatsNo = Number(e.target.value);
            }}
          />
        </span>
        <br></br>
        <label>Number Of Economy Class Seats:</label>
        <span>
          <input
            name="ecoNo"
            id="ecoNo"
            type="text"
            value={toBeUpdFlight.EconomySeatsNo}
            onChange={(e) => {
              toBeUpdFlight.EconomySeatsNo = Number(e.target.value);
            }}
          />
        </span>
        <br></br>
        <label>Number Of First Class Seats:</label>
        <span>
          <input
            name="fstNo"
            id="fstNo"
            type="text"
            value={toBeUpdFlight.FirstSeatsNo}
            onChange={(e) => {
              toBeUpdFlight.FirstSeatsNo = Number(e.target.value);
            }}
          />
        </span>
        <br></br>

        <Button
          variant="contained"
          color="error"
          //style={{ right: "16%", top: "3%" }}
          onClick={() => {
            setUpdPopupButton(false);
            EditRow(toBeUpdFlight._id);
            // setToBeDeletedFlight("");
          }}
        >
          Update
        </Button>
      </UpdateOver>
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        color="success"
        style={{ marginLeft: "91.5%", marginTop: "5%" }}
        onClick={() => {
          window.location.href = "/createFlight";
        }}
      >
        {"Create"}
      </Button>

      <Paper sx={{ width: "100%", overflow: "hidden", marginTop: "1%" }}>
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
              {rows.map((row) => {
                return (
                  <TableRow hover key={row._id}>
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
                              startIcon={<EditIcon />}
                              onClick={() => {
                                setUpdPopupButton(true);
                                setToBeUpdFlight(row);
                              }}
                            >
                              Edit
                            </Button>
                            <br />
                            <br />
                            <Button
                              variant="contained"
                              color="error"
                              startIcon={<DeleteIcon />}
                              onClick={() => {
                                setDeletePopupButton(true);
                                setToBeDeletedFlight(row._id);
                              }}
                            >
                              Delete
                            </Button>
                          </TableCell>
                        );
                      } else {
                        return (
                          <TableCell
                            key={column.id}
                            sx={{ textAlign: "center" }}
                          >
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
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
      </Paper>
    </div>
  );
};
export default AdminHomepage;
