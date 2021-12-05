import React from "react";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";

const UpdateButton = ({
  row,
  setUpdPopupButton,
  setEdit_id,
  setEditDepartureTime,
  setEditDepartureTerminal,
  setEditArrivalTime,
  setEditArrivalTermina,
  setEditDate,
  setEditEconomyClassSeats,
  setEditFirstClassSeats,
  setEditFlight,
  setEditFrom,
  setEditTo,
  setEditBusinessClassSeats,
  setX
}) => {
  return (
    <Button
      style={{
        width: "100px",
        height: "35px",
      }}
      variant="contained"
      startIcon={<EditIcon />}
      onClick={() => {
        // setEdit_id(row._id)
        // setUpdPopupButton(true)
        // setEditDepartureTime(row.DepartureTime)
        // setEditDepartureTerminal(row.AirportDepartureTerminal)
        // setEditArrivalTime(row.ArrivalTime)
        // setEditArrivalTermina(row.AirportArrivalTerminal)
        // setEditDate(row.Date)
        // setEditEconomyClassSeats(row.EconomySeatsNo)
        // setEditFirstClassSeats(row.FirstSeatsNo)
        // setEditFlight(row.FlightNumber)
        // setEditFrom(row.From)
        // setEditTo(row.To)
        // setEditBusinessClassSeats(row.BusinessSeatsNo)
        // setX(true)
      }}
    >
      Edit
    </Button>
  );
};

export default UpdateButton;
