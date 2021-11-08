import { useState } from "react";
const AddFlight = ({ onAdd }) => {
  const [Flight, setFlight] = useState("");
  const [From, setFrom] = useState("");
  const [To, setTo] = useState("");
  const [Date, setDate] = useState("");
  const [DepartureTime, setDepartureTime] = useState("");
  const [ArrivalTime, setArrivalTime] = useState("");
  const [DepartureTerminal, setDepartureTerminal] = useState("");
  const [ArrivalTerminal, setArrivalTermina] = useState("");
  const [BusinessClassSeats, setBusinessClassSeats] = useState("");
  const [EconomyClassSeats, setEconomyClassSeats] = useState("");
  const [FirstClassSeats, setFirstClassSeats] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    onAdd({
      Flight,
      From,
      To,
      Date,
      DepartureTime,
      ArrivalTime,
      DepartureTerminal,
      ArrivalTerminal,
      BusinessClassSeats,
      EconomyClassSeats,
      FirstClassSeats,
    });

    setFlight("");
    setFrom("");
    setTo("");
    setDate("");
    setDepartureTime("");
    setArrivalTime("");
    setDepartureTerminal("");
    setArrivalTermina("");
    setBusinessClassSeats("");
    setEconomyClassSeats("");
    setFirstClassSeats("");
    alert("Flight added");
  };

  return (
    <form className="add=form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Flight Number</label>
        <input
          type="text"
          placeholder="Add ID"
          value={Flight}
          required
          onChange={(e) => setFlight(Number(e.target.value))}
        />
      </div>
      <div className="form-control">
        <label>From</label>
        <input
          type="text"
          placeholder="Add From"
          value={From}
          required
          onChange={(e) => setFrom(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>To</label>
        <input
          type="text"
          placeholder="Add To"
          value={To}
          required
          onChange={(e) => setTo(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Flight Date</label>
        <input
          type="date"
          placeholder="Add Date"
          value={Date}
          required
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Departure Time</label>
        <input
          type="time"
          placeholder="Add Departure Time"
          value={DepartureTime}
          required
          onChange={(e) => setDepartureTime(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Arrival Time</label>
        <input
          type="time"
          placeholder="Add Arrival Time"
          value={ArrivalTime}
          required
          onChange={(e) => setArrivalTime(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Departure Terminal</label>
        <input
          type="text"
          placeholder="Add Departure Terminal"
          value={DepartureTerminal}
          required
          onChange={(e) => setDepartureTerminal(Number(e.target.value))}
        />
      </div>
      <div className="form-control">
        <label>Arrival Terminal</label>
        <input
          type="text"
          placeholder="Add Arrival Terminal"
          value={ArrivalTerminal}
          required
          onChange={(e) => setArrivalTermina(Number(e.target.value))}
        />
      </div>
      <div className="form-control">
        <label>Business Class Seats</label>
        <input
          type="text"
          placeholder="Add Business Class Seats"
          value={BusinessClassSeats}
          required
          onChange={(e) => setBusinessClassSeats(Number(e.target.value))}
        />
      </div>
      <div className="form-control">
        <label>Economy Class Seats</label>
        <input
          type="text"
          placeholder="Add Economy Class Seats"
          value={EconomyClassSeats}
          required
          onChange={(e) => setEconomyClassSeats(Number(e.target.value))}
        />
      </div>
      <div className="form-control">
        <label>First Class Seats</label>
        <input
          type="text"
          placeholder="Add First Class Seats"
          value={FirstClassSeats}
          required
          onChange={(e) => setFirstClassSeats(Number(e.target.value))}
        />
      </div>

      <input type="submit" value="Create Flight" className="btn btn-block" />
    </form>
  );
};

export default AddFlight;
