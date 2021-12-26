import { useState,useContext } from "react";
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
import { UserContext } from "../../Context/UserContext";

import EditSearchFlight from "../EditSearchFlight/EditSearchFlight.js";

const EditDchoose = () => {
  const [Rows, setDepartureRows] = useState([]);

  const [selectedRow, updateSelectedRow] = useState("");
  const [choosenRow, updateChoosenRow] = useState("");
  
  const { user } = useContext(UserContext);
  const [selectPopupButton, setSelectPopupButton] = useState(false);
  const [classType, setClassType] = useState("");
  const [searchOff, setSearchOff] = useState(false);

  const state = useLocation().state;
  console.log(state);
  const idOther = getID();
  function getID() {
    const other = state.FlightsUserDetails.Otherflight;
    for (let i = 0; i < state.AllMyFlights.length; i++) {
      if (state.AllMyFlights[i].FlightNumber === other) {
        return i;
      }
    }
  }

  const searchToReserve = (SearchCriteria) => {
    if (SearchCriteria) {
      searchDepatureReserve(SearchCriteria);
      setClassType(SearchCriteria.SeatClass);
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
        setDepartureRows(result.data);
      });
  };

  function selectFlight(row, isDep) {
    if (isDep === true) {
      if (JSON.stringify(row) === JSON.stringify(choosenRow))
        updateChoosenRow("")
      else {
        updateChoosenRow(row);
        updateSelectedRow({
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
            classType === "First"
              ? row.FirstClassPrice
              : classType === "Economy"
                ? row.EconomyClassPrice
                : row.BusinessClassPrice,
          EconomySeats: row.EconomySeats,
          FirstSeats: row.FirstSeats,
          BusinessSeats: row.BusinessSeats,
          EconomyAvailableSeatsNo: row.EconomyAvailableSeatsNo,
          BusinessAvailableSeatsNo: row.BusinessAvailableSeatsNo,
          FirstAvailableSeatsNo: row.FirstAvailableSeatsNo
        });
      }
    }
  }

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
      <EditSearchFlight
        onSearch={searchToReserve}
        hide={searchOff}
        Type={state.FlightsUserDetails.Type}
        otherflight={state.AllMyFlights[getID()]}
      />
      <h1>
        {state.FlightsUserDetails.Type === "Return Flight"
          ? "Return Flights"
          : "Departure Flights"}
      </h1>
      <CollapsibleTable isDep rows={Rows} isUser
        firstClass={classType === "First" ? true : false}
        economyClass={classType === "Economy" ? true : false}
        businessClass={classType === "Business" ? true : false}
        selectFlight={selectFlight}
        setSearchOff={setSearchOff}
        state = {state}
        priceDiff
        editFlight = {true}
      />
      <br></br>
      {!searchOff && (
        <Button
          disabled={choosenRow === ""}
          variant="contained"
          style={{ marginLeft: "40%", marginTop: "1%" }}
        >
          <Link
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
              newClass: classType,
              id: user.id,
              oldBookFlight:state.FlightsUserDetails,
              otherOldBookFlight: state.AllFlightsUserDetails[idOther],
              rowsCabin:state.FlightsUserDetails.ChosenCabin,
              arrFlight:state.FlightsUserDetails.Type==="Return Flight"?Object.assign(selectedRow,{cabin:classType}):{
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
                From: state.AllMyFlights[idOther].From,
                Price: state.AllFlightsUserDetails[idOther].ChosenCabin === "First"
                  ? state.AllMyFlights[idOther].FirstClassPrice
                  : state.AllFlightsUserDetails[idOther] === "Economy"
                    ? state.AllMyFlights[idOther].EconomyClassPrice
                    : state.AllMyFlights[idOther].BusinessClassPrice,
                To: state.AllMyFlights[idOther].To,
                id: state.AllMyFlights[idOther]._id,
                cabin: state.AllFlightsUserDetails[idOther].ChosenCabin
              },
              depFlight: state.FlightsUserDetails.Type === "Return Flight" ?
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
                  From: state.AllMyFlights[idOther].From,
                  Price: state.AllFlightsUserDetails[idOther].ChosenCabin === "First"
                    ? state.AllMyFlights[idOther].FirstClassPrice
                    : state.AllFlightsUserDetails[idOther] === "Economy"
                      ? state.AllMyFlights[idOther].EconomyClassPrice
                      : state.AllMyFlights[idOther].BusinessClassPrice,
                  To: state.AllMyFlights[idOther].To,
                  id: state.AllMyFlights[idOther]._id,
                  cabin: state.AllFlightsUserDetails[idOther].ChosenCabin
                }
                : Object.assign(selectedRow, { cabin: classType }),
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
