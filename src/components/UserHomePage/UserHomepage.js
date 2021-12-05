import { useState } from "react";
import { Link } from "react-router-dom";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import Button from "@mui/material/Button";
import ResponsiveAppBar from "../ResponsiveAppBar/ResponsiveAppBar";
// import Button from "@mui/material/Button";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// import AddIcon from "@mui/icons-material/Add";
// import MuiAlert from "@mui/material/Alert";
// import Snackbar from "@mui/material/Snackbar";
// import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import UpdateOver from "../UpdateOver/UpdateOver";
import "./UserHomepage.css";

import SearchToReserve from "../SearchToReserve/SearchToReserve.js";
import { Select } from "@mui/material";

const UserHomepage = () => {
  const [ReturnRows, setReturnRows] = useState([]);
  const [DepartureRows, setDepartureRows] = useState([]);

  const [depSelectedRow, updateDepSelectedRow] = useState("");
  const [depChoosenRow, updateDepChoosenRow] = useState("");

  const [arrSelectedRow, updateArrSelectedRow] = useState("");
  const [arrChoosenRow, updateArrChoosenRow] = useState("");

  const [depclassType, depsetClassType] = useState("");
  const [arrclassType, arrsetClassType] = useState("");
  const[numberSeats,setNumberSeats]=useState(0);

  const [selectPopupButton, setSelectPopupButton] = useState(false);
  const [selectArPopupButton, setSelectArPopupButton] = useState(false);

  const searchToReserve = (SearchCriteria) => {
    if (SearchCriteria) {
      searchDepatureReserve(SearchCriteria);
      searchArrivalReserve(SearchCriteria);
      depsetClassType(SearchCriteria.SeatClass);
      arrsetClassType(SearchCriteria.SeatClass);
      setNumberSeats(SearchCriteria.SeatsNo);
    } else {
      setReturnRows([]);
      setDepartureRows([]);
    }
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
    { id: "BaggageAllowance", label: "Baggage Allowance", width: 60 },
  ];
  const arrivalColumns = [
    { id: "FlightNumber", label: "Flight Number", width: 60 },
    { id: "From", label: "From", width: 60 },
    { id: "To", label: "To", width: 60 },
    { id: "Date", label: "Flight Date", width: 110 },
    { id: "Class", label: "Class ", width: 60 },
    { id: "BaggageAllowance", label: "Baggage Allowance", width: 60 },
  ];

  return (
    <div>
      
      
      <ResponsiveAppBar pages={["Reserved Flights"]} isUser={true} />

      <Button variant="contained" color="success" style={{marginLeft:"87%", marginTop:"1%"}}><Link to = '/ReservedFlights'
      state = {{id : "617e93641ff94cd5d2055174"}}> View Reservation </Link></Button>
      
      <UpdateOver trigger={selectPopupButton} setTrigger={setSelectPopupButton}>
        <h1>Flight Details:</h1>
        <br></br>
        <label>FlightNumber:</label>
        <label>{depSelectedRow.FlightNumber}</label>
        <br></br>
        <label>From:</label>
        <label>{depSelectedRow.From}</label>
        <br></br>
        <label>To:</label>
        <label>{depSelectedRow.To}</label>
        <br></br>
        <label>Flight Date:</label>
        <label>{depSelectedRow.Date}</label>
        <br></br>
        <label>Departure Time:</label>
        <label>{depSelectedRow.DepTime}</label>
        <br></br>
        <label>Arrival Time:</label>
        <label>{depSelectedRow.ArrTime}</label>
        <br></br>
        <label>Airport Departure Terminal:</label>
        <label>{depSelectedRow.DepTerminal}</label>
        <br></br>
        <label>Airport Arrival Terminal:</label>
        <label>{depSelectedRow.ArrTerminal}</label>
        <br></br>
        <label>Class:</label>
        <label>{depclassType}</label>
        <br></br>
        <label>Price:</label>
        <label>{depSelectedRow.Price}</label>
        <br></br>
        <Button
          variant="contained"
          color="error"
          style={{ right: "5%", top: "7%" }}
          onClick={() => {
            setSelectPopupButton(false);
            updateDepChoosenRow(depSelectedRow);
            console.log(depSelectedRow._id);
          }}
        >
          Select
        </Button>
        <Button
          variant="contained"
          style={{ left: "5%", top: "7%" }}
          onClick={() => {
            setSelectPopupButton(false);
          }}
        >
          Cancel
        </Button>
      </UpdateOver>
      <UpdateOver
        trigger={selectArPopupButton}
        setTrigger={setSelectArPopupButton}
      >
        <h1>Flight Details:</h1>
        <br></br>
        <label>FlightNumber:</label>
        <label>{arrSelectedRow.FlightNumber}</label>
        <br></br>
        <label>From:</label>
        <label>{arrSelectedRow.From}</label>
        <br></br>
        <label>To:</label>
        <label>{arrSelectedRow.To}</label>
        <br></br>
        <label>Flight Date:</label>
        <label>{arrSelectedRow.Date}</label>
        <br></br>
        <label>Departure Time:</label>
        <label>{arrSelectedRow.DepTime}</label>
        <br></br>
        <label>Arrival Time:</label>
        <label>{arrSelectedRow.ArrTime}</label>
        <br></br>
        <label>Airport Departure Terminal:</label>
        <label>{arrSelectedRow.DepTerminal}</label>
        <br></br>
        <label>Airport Arrival Terminal:</label>
        <label>{arrSelectedRow.ArrTerminal}</label>
        <br></br>
        <label>Class:</label>
        <label>{arrclassType}</label>
        <br></br>
        <label>Price:</label>
        <label>{arrSelectedRow.Price}</label>
        <br></br>
        <Button
          variant="contained"
          color="error"
          style={{ right: "5%", top: "7%" }}
          onClick={() => {
            setSelectArPopupButton(false);
            updateArrChoosenRow(arrSelectedRow);
            //console.log(arrSelectedRow._id);
          }}
        >
          Select
        </Button>
        <Button
          variant="contained"
          style={{ left: "5%", top: "7%" }}
          onClick={() => {
            setSelectArPopupButton(false);
          }}
        >
          Cancel
        </Button>
      </UpdateOver>

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
                  <TableRow
                    onClick={() => {
                      updateDepSelectedRow({
                        FlightNumber: row.FlightNumber,
                        From: row.From,
                        To: row.To,
                        Date: row.Date,
                        DepTime: row.DepartureTime,
                        ArrTime: row.ArrivalTime,
                        DepTerminal: row.AirportDepartureTerminal,
                        ArrTerminal: row.AirportArrivalTerminal,
                        Price:
                          depclassType === "First"
                            ? row.FirstClassPrice
                            : depclassType === "Economy"
                            ? row.EconomyClassPrice
                            : row.BusinessClassPrice,
                      });
                      setSelectPopupButton(true);
                    }}
                    hover
                    key={row._id}
                    className={
                      depChoosenRow.FlightNumber === row.FlightNumber
                        ? "tableSelected"
                        : ""
                    }
                  >
                    {departureColumns.map((column) => {
                      const value = row[column.id];
                      if (column.id === "Class") {
                        return (
                          <TableCell
                            key={column.id}
                            sx={{ textAlign: "center" }}
                          >
                            {depclassType}
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
      <br></br>
      <h1>Arrival Flights</h1>
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
                  <TableRow
                    onClick={() => {
                      updateArrSelectedRow({
                        FlightNumber: row.FlightNumber,
                        From: row.From,
                        To: row.To,
                        Date: row.Date,
                        DepTime: row.DepartureTime,
                        ArrTime: row.ArrivalTime,
                        DepTerminal: row.AirportDepartureTerminal,
                        ArrTerminal: row.AirportArrivalTerminal,
                        Price:
                          arrclassType === "First"
                            ? row.FirstClassPrice
                            : arrclassType === "Economy"
                            ? row.EconomyClassPrice
                            : row.BusinessClassPrice,
                      });
                      setSelectArPopupButton(true);
                    }}
                    hover
                    key={row._id}
                    className={
                      arrChoosenRow.FlightNumber === row.FlightNumber
                        ? "tableSelected"
                        : ""
                    }
                  >
                    {arrivalColumns.map((column) => {
                      const value = row[column.id];
                      if (column.id === "Class") {
                        return (
                          <TableCell
                            key={column.id}
                            sx={{ textAlign: "center" }}
                          >
                            {arrclassType}
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
      <Button disabled={depChoosenRow===""||arrChoosenRow===""}variant="contained" style={{marginLeft:"40%", marginTop:"1%"}}><Link to = '/SummaryConfirm'
      state = {{depFlight: depChoosenRow, arrFlight: arrChoosenRow,cabin: depclassType, noSeats: numberSeats,depSeatsReserved:["A1"],arrSeatsReserved:["A1","A2","A3"],id : "617e93641ff94cd5d2055174"}} 
      > Proceed to Seat Selection </Link></Button>
    </div>
  );
};
export default UserHomepage;
