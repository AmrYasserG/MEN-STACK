import { Fragment, useState } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const EditBody = () => {
  const [editFlight, setEditFlight] = useState("");
  const [editFrom, setEditFrom] = useState("");
  const [editTo, setEditTo] = useState("");
  const [editDate, setEditDate] = useState("");
  const [editDepartureTime, setEditDepartureTime] = useState("");
  const [editArrivalTime, setEditArrivalTime] = useState("");
  const [editDepartureTerminal, setEditDepartureTerminal] = useState("");
  const [editArrivalTerminal, setEditArrivalTerminal] = useState("");
  const [editBusinessClassSeats, setEditBusinessClassSeats] = useState("");
  const [editEconomyClassSeats, setEditEconomyClassSeats] = useState("");
  const [editFirstClassSeats, setEditFirstClassSeats] = useState("");

  return (
    <Fragment>
      <label>FlightNumber:</label>
      <span>
        <input
          name="flno"
          id="flno"
          type="text"
          value={editFlight}
          onChange={(e) => {
            setEditFlight(e.target.value);
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
          value={editFrom}
          onChange={(e) => {
            setEditFrom(e.target.value);
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
          value={editTo}
          onChange={(e) => {
            setEditTo(e.target.value);
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
          value={editDate}
          onChange={(e) => {
            setEditDate(e.target.value);
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
          value={editDepartureTime}
          onChange={(e) => {
            setEditDepartureTime(e.target.value);
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
          value={editArrivalTime}
          onChange={(e) => {
            setEditArrivalTime(e.target.value);
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
          value={editDepartureTerminal}
          onChange={(e) => {
            setEditDepartureTerminal(Number(e.target.value));
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
          value={editArrivalTerminal}
          onChange={(e) => {
            setEditArrivalTerminal(Number(e.target.value));
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
          value={editBusinessClassSeats}
          onChange={(e) => {
            setEditBusinessClassSeats(Number(e.target.value));
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
          value={editEconomyClassSeats}
          onChange={(e) => {
            setEditEconomyClassSeats(Number(e.target.value));
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
          value={editFirstClassSeats}
          onChange={(e) => {
            setEditFirstClassSeats(Number(e.target.value));
          }}
        />
      </span>
    </Fragment>
  );
};

export default EditBody;
