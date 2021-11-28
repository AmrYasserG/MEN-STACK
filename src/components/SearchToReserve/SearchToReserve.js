import { useState } from "react";
const SearchToReserve = ({ onSearch }) => {
  const [From, setFrom] = useState("");
  const [To, setTo] = useState("");
  const [Date, setDate] = useState("");
  const [DepartureTime, setDepartureTime] = useState("");
  // const [ArrivalTime, setArrivalTime] = useState("");
  const [BusinessClassSeats, setBusinessClassSeats] = useState("");
  const [EconomyClassSeats, setEconomyClassSeats] = useState("");
  const [FirstClassSeats, setFirstClassSeats] = useState("");

  const onSubmit = (e) => {
    //e.preventDefault()
    // if (!Flight) {
    //     alert('Please add a Flight number')
    //     return
    //   }
    //   if (!From||!To||!Date||!DepartureTime||!ArrivalTime||!DepartureTerminal||!ArrivalTerminal) {
    //     alert('Please complete all inputs')
    //     return
    //   }
    if (e.value === "Search Flight") {
      onSearch({
        From,
        To,
        Date,
        DepartureTime,
        BusinessClassSeats,
        EconomyClassSeats,
        FirstClassSeats,
      });
    } else {
      onSearch(null);
    }
  };

  return (
    <form className="" onSubmit={onSubmit}>
      <div className="form-control.">
        <label>From</label>
        <input
          type="text"
          placeholder="From"
          value={From}
          onChange={(e) => setFrom(e.target.value)}
        />
      </div>
      <div className="form-control.">
        <label>To</label>
        <input
          type="text"
          placeholder="To"
          value={To}
          onChange={(e) => setTo(e.target.value)}
        />
      </div>
      <div className="form-control.">
        <label>Flight Date</label>
        <input
          type="date"
          placeholder="Fight Date"
          value={Date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="form-control.">
        <label>Departure Time</label>
        <input
          type="time"
          placeholder="Departure Time"
          value={DepartureTime}
          onChange={(e) => setDepartureTime(e.target.value)}
        />
      </div>

      <div className="form-control.">
        <label>Business Class Seats</label>
        <input
          type="text"
          placeholder="Business Class Seats"
          value={BusinessClassSeats}
          onChange={(e) => setBusinessClassSeats(Number(e.target.value))}
        />
      </div>
      <div className="form-control.">
        <label>Economy Class Seats</label>
        <input
          type="text"
          placeholder="Economy Class Seats"
          value={EconomyClassSeats}
          onChange={(e) => setEconomyClassSeats(Number(e.target.value))}
        />
      </div>
      <div className="form-control.">
        <label>First Class Seats</label>
        <input
          type="text"
          placeholder="First Class Seats"
          value={FirstClassSeats}
          onChange={(e) => setFirstClassSeats(Number(e.target.value))}
        />
      </div>

      <input type="submit" value="Search Flight" className="btn btn-block" />
      <input type="submit" value="Reset Search" className="btn btn-block" />
    </form>
  );
};

export default SearchToReserve;
