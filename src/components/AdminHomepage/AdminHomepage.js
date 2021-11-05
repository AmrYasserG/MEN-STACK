import { Component, useState, useEffect } from "react";
// import * as React from 'react';
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
import "./AdminHomepage.css";

const AdminHomepage = () => {
  const [rows, setRows] = useState([]);

  const columns = [
    { id: "FlightNumber", label: "Flight Number", Width: 100 },
    { id: "From", label: "From", Width: 100 },
    { id: "To", label: "To", Width: 100 },
    { id: "Date", label: "Flight Date", Width: 100 },
    { id: "DepartureTime", label: "Departure Time", Width: 100 },
    { id: "ArrivalTime", label: "Arrival Time", Width: 100 },
    { id: "AirportDeparture", label: "Airport Departure", Width: 100 },
    { id: "AirportArrival", label: "Airport Arrival", Width: 100 },
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
    // {
    //   id: 'density',
    //   label: 'Density',
    //   minWidth: 100,
    //   align: 'right',
    //   format: (value) => value.toFixed(2),
    // },
  ];

  useEffect(() => {
    GetAllFlights();
  });

  function GetAllFlights() {
    axios
      .get("http://localhost:3005/getAllFlights")
      .then((res) => {
        setRows(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function CreateNewFlight() {}

  function SearchForFlights() {}

  function EditRow(values) {
    console.log(values);
  }

  function DeleteRow(values) {
    //console.log(values);
  }

  return (
    <div>
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        color="success"
        style={{ marginLeft: "91.5%", marginTop: "9%" }}
        onClick={() => {
          alert("Clicked Create");
          CreateNewFlight();
        }}
      >
        Create
      </Button>
      <Paper sx={{ width: "100%", overflow: "hidden", marginTop: "1%" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    style={{ Width: column.Width, textAlign: "center" }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => {
                return (
                  <TableRow hover key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      if (column.id === "action") {
                        return (
                          <TableCell sx={{ textAlign: "center" }}>
                            <Button
                              variant="contained"
                              startIcon={<EditIcon />}
                              style={{ width: "50px", height: "25px" }}
                              onClick={() => {
                                alert("Clicked Edit");
                                EditRow(row);
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
                                alert("Clicked Delete");
                                DeleteRow(row);
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
