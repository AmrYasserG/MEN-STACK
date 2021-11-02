import React, { Component } from "react";
// import * as React from 'react';
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from '@mui/icons-material/Add';
import "./AdminHomepage.css";

class AdminHomepage extends Component {
  columns = [
    { id: "flightNumber", label: "Flight Number", Width: 100 },
    { id: "from", label: "From", Width: 100 },
    { id: "to", label: "To", Width: 100 },
    { id: "date", label: "Flight Date", Width: 100 },
    { id: "departureTime", label: "Departure Time", Width: 100 },
    { id: "arrivalTime", label: "Arrival Time", Width: 100 },
    { id: "airportDeparture", label: "Airport Departure", Width: 100 },
    { id: "airportArrival", label: "Airport Arrival", Width: 100 },
    {
      id: "noOfBusinessClassSeats",
      label: "Number Of Business Class Seats",
      Width: 100,
    },
    {
      id: "noOfEconomyClassSeats",
      label: "Number Of Economy Class Seats",
      Width: 100,
    },
    {
      id: "noOfFirstClassSeats",
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

  rows = [
      this.createData("India", "IN", 1324171354, 3287263),
      this.createData("China", "CN", 1403500365, 9596961),
      this.createData("Italy", "IT", 60483973, 301340),
      this.createData("United States", "US", 327167434, 9833520),
      this.createData("Canada", "CA", 37602103, 9984670),
      this.createData("Australia", "AU", 25475400, 7692024),
      this.createData("Germany", "DE", 83019200, 357578),
      this.createData("Ireland", "IE", 4857000, 70273),
      this.createData("Mexico", "MX", 126577691, 1972550),
      this.createData("Japan", "JP", 126317000, 377973),
      this.createData("France", "FR", 67022000, 640679),
      this.createData("United Kingdom", "GB", 67545757, 242495),
      this.createData("Russia", "RU", 146793744, 17098246),
      this.createData("Nigeria", "NG", 200962417, 923768),
      this.createData("Brazil", "BR", 210147125, 8515767),
    ];
    
    createData(flightNumber, from, population, size) {
      return { flightNumber, from};
    }

    GetAllFlights(){
        axios.get('http://localhost:3005/getAllFlights')
    .then(res => {
      console.log(res);
    }).catch(err=>{
      console.log(err);
    });
    }

    CreateNewFlight(){

    }

    SearchForFlights(){

    }

    EditRow(values){
        console.log(values);
    }

    DeleteRow(values){
        console.log(values);
    }

    render() {
    return (
      <Paper sx={{ width: "100%", overflow: "hidden", marginTop: "5%" }}>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          color="success"
          style={{marginLeft:'89.5%'}}
          onClick={() => {
            alert("Clicked Create");
            this.CreateNewFlight();
          }}
        >
          Create
        </Button>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {this.columns.map((column) => (
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
              {this.rows.map((row) => {
                return (
                  <TableRow hover key={row.code}>
                    {this.columns.map((column) => {
                      const value = row[column.id];
                      if (column.id === "action") {
                        return (
                          <TableCell sx={{ textAlign: "center" }}>
                            <Button
                              variant="contained"
                              startIcon={<EditIcon />}
                              onClick={() => {
                                alert("Clicked Edit");
                                this.EditRow(row);
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
                                this.DeleteRow(row);
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
    );
  }
}

export default AdminHomepage;
