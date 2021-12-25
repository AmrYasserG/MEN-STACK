import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
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
import UpdateOver from "../UpdateOver/UpdateOver";
import "./EditDchoose.css";
import { CollapsibleTable } from "../CollapsibleTable/CollapsibleTable";

import EditSearchFlight from "../EditSearchFlight/EditSearchFlight.js";

const EditDchoose = () => {
  const [DepartureRows, setDepartureRows] = useState([]);

  const [depSelectedRow, updateDepSelectedRow] = useState("");
  const [depChoosenRow, updateDepChoosenRow] = useState("");

  const [selectPopupButton, setSelectPopupButton] = useState(false);
  const [depclassType, depsetClassType] = useState("");
  const [searchOff, setSearchOff] = useState(false);

  const state = useLocation().state;
  console.log(state);
  console.log(state.FlightsUserDetails.Type);
  const idOther=getID();
  function getID() {
    const other = state.FlightsUserDetails.Otherflight;
    for (let i = 0; i < state.AllMyFlights.length; i++) {
      if (state.AllMyFlights[i].FlightNumber === other) {
        console.log(i);
        return i;
      }
    }
  }

  const searchToReserve = (SearchCriteria) => {
    if (SearchCriteria) {
      searchDepatureReserve(SearchCriteria);
      depsetClassType(SearchCriteria.SeatClass);
    } else {
      setDepartureRows([]);
    }
  };

  const searchDepatureReserve = async (SearchCriteria) => {
    await axios
      .post("http://localhost:3005/flights/searchFlightsToReserve", {
        From: state.rows.From,
        To: state.rows.To,
        Class: SearchCriteria.SeatClass,
        SeatNo: state.rows.SeatsNo,
        Date: SearchCriteria.DepartureDate,
      })
      .then((result) => {
        console.log(result.data);
        setDepartureRows(result.data);
      });
  };

  const departureColumns = [
    { id: "FlightNumber", label: "Flight Number", width: 60 },
    { id: "DepartureTime", label: "Departure Time", width: 60 },
    { id: "ArrivalTime", label: "Arrival Time", width: 60 },
    { id: "TripDuration", label: "Trip Duration ", width: 110 },
    { id: "PriceDifference", label: "Price Difference ", width: 60 },
  ];

  return (
    <div>
      <ResponsiveAppBar pages={[]} settings={["profile"]} isUser={true} />
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
          style={{ right: "5%", top: "7%" }}
          onClick={() => {
            setSearchOff(false);
            setSelectPopupButton(false);
            updateDepChoosenRow(depSelectedRow);
            console.log(depSelectedRow._id);
          }}
        >
          Select
        </Button>
        <Button
          variant="contained"
          color="error"
          style={{ left: "5%", top: "7%" }}
          onClick={() => {
            setSearchOff(false);

            setSelectPopupButton(false);
          }}
        >
          Cancel
        </Button>
      </UpdateOver>

      <div>
        <EditSearchFlight
          onSearch={searchToReserve}
          hide={searchOff}
          Type={state.FlightsUserDetails.Type}
          otherflight={state.AllMyFlights[getID()]}
        />
      </div>

      <h1>
        {state.FlightsUserDetails.Type === "Return Flight"
          ? "Return Flights"
          : "Departure Flights"}
      </h1>
      <CollapsibleTable isDep rows={DepartureRows} isUser />
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
                      setSearchOff(true);
                      updateDepSelectedRow({
                        id: row._id,
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
                        EconomySeats: row.EconomySeats,
                        FirstSeats: row.FirstSeats,
                        BusinessSeats: row.BusinessSeats,
                        EconomyAvailableSeatsNo: row.EconomyAvailableSeatsNo,
                        BusinessAvailableSeatsNo: row.BusinessAvailableSeatsNo,
                        FirstAvailableSeatsNo: row.FirstAvailableSeatsNo,
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
                      }  else if (column.id === "PriceDifference") {
                        return (
                          <TableCell
                            key={column.id}
                            sx={{ textAlign: "center" }}
                          >
                            {(depclassType === "First"
                              ? row.FirstClassPrice
                              : depclassType === "Economy"
                              ? row.EconomyClassPrice
                              : row.BusinessClassPrice) -
                              (state.FlightsUserDetails.ChosenCabin === "First"
                                ? state.rows.FirstClassPrice
                                : state.FlightsUserDetails.ChosenCabin ===
                                  "Economy"
                                ? state.rows.EconomyClassPrice
                                : state.rows.BusinessClassPrice)}
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

      {!searchOff && (
        <Button
          disabled={depChoosenRow === ""}
          variant="contained"
          style={{ marginLeft: "40%", marginTop: "1%" }}
        >
          <Link
            underline="none"
            to="/planeSeatsAfterEdit"
            style={{ textDecoration: "none" }}
            state={{
              FlightsUserDetails: state.FlightsUserDetails,
              rows: state.rows,
              rowsSeatsReserved:state.FlightsUserDetails.SeatsReserved,
              oldPrice: (state.FlightsUserDetails.ChosenCabin === "First"
              ? state.rows.FirstClassPrice
              : state.FlightsUserDetails.ChosenCabin ===
                "Economy"
              ? state.rows.EconomyClassPrice
              : state.rows.BusinessClassPrice),
              editFlight: true,
              newClass: depclassType,
              id: "617e93641ff94cd5d2055174",
              oldBookFlight:state.FlightsUserDetails,
              otherOldBookFlight: state.AllFlightsUserDetails[idOther],
              rowsCabin:state.FlightsUserDetails.ChosenCabin,


              arrFlight:state.FlightsUserDetails.Type==="Return Flight"?Object.assign(depChoosenRow,{cabin:depclassType}):{
                ArrTerminal: state.AllMyFlights[idOther].AirportArrivalTerminal,
                ArrTime: state.AllMyFlights[idOther].ArrivalTime,
                BusinessAvailableSeatsNo: state.AllMyFlights[idOther].BusinessAvailableSeatsNo,
                BusinessSeats: state.AllMyFlights[idOther].BusinessSeats,
                 Date: state.AllMyFlights[idOther].Date,
                DepTerminal: state.AllMyFlights[idOther].AirportDepartureTerminal, 
                DepTime: state.AllMyFlights[idOther].DepartureTime,
                  EconomyAvailableSeatsNo: state.AllMyFlights[idOther].EconomyAvailableSeatsNo,
                EconomySeats: state.AllMyFlights[idOther].EconomySeats,
              FirstAvailableSeatsNo: state.AllMyFlights[idOther].FirstAvailableSeatsNo,
              FirstSeats: state.AllMyFlights[idOther].FirstSeats,
              FlightNumber: state.AllMyFlights[idOther].FlightNumber,
              From: state.AllMyFlights[idOther].From ,
              Price: state.AllFlightsUserDetails[idOther].ChosenCabin=== "First"
              ? state.AllMyFlights[idOther].FirstClassPrice
              : state.AllFlightsUserDetails[idOther] === "Economy"
              ? state.AllMyFlights[idOther].EconomyClassPrice
              : state.AllMyFlights[idOther].BusinessClassPrice,
              To: state.AllMyFlights[idOther].To,
              id: state.AllMyFlights[idOther]._id,
              cabin:state.AllFlightsUserDetails[idOther].ChosenCabin
              },




              depFlight:state.FlightsUserDetails.Type==="Return Flight"?
              {
                ArrTerminal: state.AllMyFlights[idOther].AirportArrivalTerminal,
                ArrTime: state.AllMyFlights[idOther].ArrivalTime,
                BusinessAvailableSeatsNo: state.AllMyFlights[idOther].BusinessAvailableSeatsNo,
                BusinessSeats: state.AllMyFlights[idOther].BusinessSeats,
                 Date: state.AllMyFlights[idOther].Date,
                DepTerminal: state.AllMyFlights[idOther].AirportDepartureTerminal, 
                DepTime: state.AllMyFlights[idOther].DepartureTime,
                  EconomyAvailableSeatsNo: state.AllMyFlights[idOther].EconomyAvailableSeatsNo,
                EconomySeats: state.AllMyFlights[idOther].EconomySeats,
              FirstAvailableSeatsNo: state.AllMyFlights[idOther].FirstAvailableSeatsNo,
              FirstSeats: state.AllMyFlights[idOther].FirstSeats,
              FlightNumber: state.AllMyFlights[idOther].FlightNumber,
              From: state.AllMyFlights[idOther].From ,
              Price: state.AllFlightsUserDetails[idOther].ChosenCabin=== "First"
              ? state.AllMyFlights[idOther].FirstClassPrice
              : state.AllFlightsUserDetails[idOther] === "Economy"
              ? state.AllMyFlights[idOther].EconomyClassPrice
              : state.AllMyFlights[idOther].BusinessClassPrice,
              To: state.AllMyFlights[idOther].To,
              id: state.AllMyFlights[idOther]._id,
              cabin:state.AllFlightsUserDetails[idOther].ChosenCabin
              }
              :Object.assign(depChoosenRow,{cabin:depclassType}),






              
              isDep:
                state.FlightsUserDetails.Type === "Return Flight"
                  ? false
                  : true,
              otherFightSeats:
                state.AllFlightsUserDetails[getID()].SeatsReserved,
                
            }}
          >
            Proceed to Seat Selection
          </Link>
        </Button>
      )}
    </div>
  );
};
export default EditDchoose;
