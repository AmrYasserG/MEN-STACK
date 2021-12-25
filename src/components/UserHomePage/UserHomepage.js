import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";
import ResponsiveAppBar from "../ResponsiveAppBar/ResponsiveAppBar";
import SearchToReserve from "../SearchToReserve/SearchToReserve.js";
import { CollapsibleTable } from "../CollapsibleTable/CollapsibleTable";
import { UserContext } from "../../Context/UserContext";

const UserHomepage = () => {
  const [ReturnRows, setReturnRows] = useState([]);
  const [DepartureRows, setDepartureRows] = useState([]);

  const [depSelectedRow, updateDepSelectedRow] = useState("");
  const [depChoosenRow, updateDepChoosenRow] = useState("");

  const [arrSelectedRow, updateArrSelectedRow] = useState("");
  const [arrChoosenRow, updateArrChoosenRow] = useState("");

  const [depclassType, depsetClassType] = useState("");
  const [arrclassType, arrsetClassType] = useState("");
  const [numberSeats, setNumberSeats] = useState(0);

  const [searchOff, setSearchOff] = useState(false);
  const { user } = useContext(UserContext);

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
      .then((result) => {
        setDepartureRows(result.data);
      });
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

  function selectFlight(row, isDep) {
    if (isDep === true) {
      if (JSON.stringify(row) === JSON.stringify(depChoosenRow))
        updateDepChoosenRow("");
      else {
        updateDepChoosenRow(row);
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
      }
    } else {
      if (JSON.stringify(row) === JSON.stringify(arrChoosenRow))
        updateArrChoosenRow("");
      else {
        updateArrChoosenRow(row);
        updateArrSelectedRow({
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
            arrclassType === "First"
              ? row.FirstClassPrice
              : arrclassType === "Economy"
              ? row.EconomyClassPrice
              : row.BusinessClassPrice,
          EconomySeats: row.EconomySeats,
          FirstSeats: row.FirstSeats,
          BusinessSeats: row.BusinessSeats,
          EconomyAvailableSeatsNo: row.EconomyAvailableSeatsNo,
          BusinessAvailableSeatsNo: row.BusinessAvailableSeatsNo,
          FirstAvailableSeatsNo: row.FirstAvailableSeatsNo,
        });
      }
    }
  }

  return (
    <div>
      {/* <Button variant="contained" color="success" style={{ marginLeft: "87%" }}>
        <Link
          style={{ textDecoration: "none" }}
          to="/ReservedFlights"
          state={{ id: user.id }}
        >
          {" "}
          View Reservation{" "}
        </Link>
      </Button> */}

      <div>
        <SearchToReserve onSearch={searchToReserve} d={searchOff} />
      </div>
      <h1>Departure Flights</h1>
      <CollapsibleTable
        isDep
        selectFlight={selectFlight}
        rows={DepartureRows}
        isUser
        setSearchOff={setSearchOff}
        updateArrChoosenRow={updateArrChoosenRow}
        firstClass={arrclassType === "First" ? true : false}
        economyClass={arrclassType === "Economy" ? true : false}
        businessClass={arrclassType === "Business" ? true : false}
      />
      <br></br>
      <h1>Arrival Flights</h1>
      <CollapsibleTable
        rows={ReturnRows}
        isUser
        selectFlight={selectFlight}
        firstClass={arrclassType === "First" ? true : false}
        economyClass={arrclassType === "Economy" ? true : false}
        businessClass={arrclassType === "Business" ? true : false}
      />
      {!searchOff && (
        <Button
          disabled={depChoosenRow === "" || arrChoosenRow === ""}
          variant="contained"
          style={{ marginLeft: "40%", marginTop: "1%" }}
        >
          <Link
            style={{ textDecoration: "none" }}
            to="/PlaneSeats"
            state={{
              depFlight: depSelectedRow,
              arrFlight: arrSelectedRow,
              cabin: depclassType,
              noSeats: parseInt(numberSeats),
              id: user.id,
            }}
          >
            {" "}
            Proceed to Seat Selection{" "}
          </Link>
        </Button>
      )}
    </div>
  );
};
export default UserHomepage;
