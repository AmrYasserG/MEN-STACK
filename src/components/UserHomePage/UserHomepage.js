import { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
// import Button from "@mui/material/Button";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// import AddIcon from "@mui/icons-material/Add";
// import MuiAlert from "@mui/material/Alert";
// import Snackbar from "@mui/material/Snackbar";
// import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
// import Popup from "../Popup/Popup";
import SearchToReserve from "../SearchToReserve/SearchToReserve.js";

const UserHomepage = () => {
  const [ReturnRows, setReturnRows] = useState([]);
  const [DepartureRows, setDepartureRows] = useState([]);

  const searchToReserve = (SearchCriteria) => {
    searchDepatureReserve(SearchCriteria);
    searchArrivalReserve(SearchCriteria);
  };

  const searchDepatureReserve = async (SearchCriteria) => {
    await axios
      .post("http://localhost:3005/flights/searchFlightsToReserve", {
        From: SearchCriteria.From,
        To: SearchCriteria.To,
        Class: SearchCriteria.SeatClass,
        SeatNo: SearchCriteria.SeatsNo,
        Date: SearchCriteria.DepartureDate,
      })
      .then((result) => setDepartureRows(result.data));
  };

  const searchArrivalReserve = async (SearchCriteria) => {
    await axios
      .post("http://localhost:3005/flights/searchFlightsToReserve", {
        From: SearchCriteria.To,
        To: SearchCriteria.From,
        Class: SearchCriteria.SeatClass,
        SeatNo: SearchCriteria.SeatsNo,
        Date: SearchCriteria.ReturnDate,
      })
      .then((result) => setReturnRows(result.data));
  };

  const departureColumns = [
    { id: "FlightNumber", label: "Flight Number", width: 60 },
    { id: "From", label: "From", width: 60 },
    { id: "To", label: "To", width: 60 },
    { id: "Date", label: "Flight Date", width: 110 },
    { id: "Class", label: "Class ", width: 60 },
    { id: "baggage", label: "Baggage Allowance", width: 60 },
  ];
  const arrivalColumns = [
    { id: "FlightNumber", label: "Flight Number", width: 60 },
    { id: "From", label: "From", width: 60 },
    { id: "To", label: "To", width: 60 },
    { id: "Date", label: "Flight Date", width: 110 },
    { id: "Class", label: "Class ", width: 60 },
    { id: "baggage", label: "Baggage Allowance", width: 60 },
  ];

  return (
    <div>
      <div>
        <SearchToReserve onSearch={searchToReserve} />
      </div>
      <h1>Departure Flights</h1>
      <Paper sx={{ width: "100%", overflow: "hidden", marginTop: "1%" }}>
        <TableContainer sx={{ maxHeight: 500 }}>
          <Table>
            <TableHead>
              <TableRow>
                {departureColumns.map((column) => (
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
              {DepartureRows.map((row) => {
                return (
                  <TableRow hover key={row._id}>
                    {departureColumns.map((column) => {
                      const value = row[column.id];
                      {
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
      <br></br>
      <h2>Arrival Flights</h2>
      <Paper sx={{ width: "100%", overflow: "hidden", marginTop: "1%" }}>
        <TableContainer sx={{ maxHeight: 500 }}>
          <Table>
            <TableHead>
              <TableRow>
                {arrivalColumns.map((column) => (
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
              {ReturnRows.map((row) => {
                return (
                  <TableRow hover key={row._id}>
                    {arrivalColumns.map((column) => {
                      const value = row[column.id];
                      {
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
export default UserHomepage;
