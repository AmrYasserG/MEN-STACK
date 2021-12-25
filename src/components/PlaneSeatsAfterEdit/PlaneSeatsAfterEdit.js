import React from "react";
import Grid from "@mui/material/Grid";
import "../planeSeats/planeSeats.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import ResponsiveAppBar from "../ResponsiveAppBar/ResponsiveAppBar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const PlaneSeatsAfterEdit = () => {
  const state = useLocation().state;

  useEffect(() => {
    console.log(state);
  }, []);

  const seatsEco = Object.keys(state.rows.EconomySeats);
  const seatsFirst = Object.keys(state.rows.FirstSeats);
  const seatsBusiness = Object.keys(state.rows.BusinessSeats);

  const seats = seatsFirst.concat(seatsBusiness).concat(seatsEco);

  const numOfSeats = [
    seatsFirst.length,
    seatsBusiness.length,
    seatsEco.length,
  ];

  let editFlight = state.editFlight;
  let alreadyChosen;

  if (editFlight === true)
    alreadyChosen = [];
  else
    alreadyChosen = state.FlightsUserDetails.SeatsReserved;

  const [alreadyChosen2, setalreadyChosen2] = useState(alreadyChosen)
  let [chosenSeats, setChosenSeats] = useState(alreadyChosen2);



  let blockedSeats = [];
  const cabin = state.newClass;
  if (cabin === "Business")
    blockedSeats = getBlockedSeats(state.rows.BusinessSeats);

  if (cabin === "First")
    blockedSeats = getBlockedSeats(state.rows.FirstSeats);

  if (cabin === "Economy")
    blockedSeats = getBlockedSeats(state.rows.EconomySeats);




  let temp = [];
  let found = false
  for (let i = 0; i < blockedSeats.length; i++) {
    for (let j = 0; j < blockedSeats.length; j++) {
      if (blockedSeats[i] === alreadyChosen[j]) {
        found = true;
        break;
      }
    }
    if (found === false)
      temp.push(blockedSeats[i])
    found = false;
  }
  blockedSeats = temp;


  const returnChosenSeats = () => {
    if (editFlight === true) { }
    else
      console.log(chosenSeats);
  };

  function getBlockedSeats(obj) {
    const temp = Object.entries(obj);
    let temp2 = [];
    for (let i = 0; i < temp.length; i++) {
      temp2 = temp2.concat(temp[i]);
    }
    const result = [];
    for (let i = 0; i < temp2.length - 1; i++) {
      if (!temp2[i + 1]) {
        result.push(temp2[i]);
      }
      i++;
    }

    return result;
  }

  function handleAlreadyChosen(e) {
    let temp = [];
    for (let i = 0; i < alreadyChosen2.length; i++) {
      if (e.target.id === alreadyChosen2[i]) {
        e.target.style.background = "lightblue";
        setChosenSeats([...chosenSeats, alreadyChosen2[i]])
      } else {
        temp.push(alreadyChosen2[i]);
      }
    }
    setalreadyChosen2(temp)
  }

  function changeBackground(e) {
    handleAlreadyChosen(e);
    if (
      (e.target.style.background === "white" ||
        e.target.style.background === "")
    ) {
      e.target.style.background = "lightblue";
      setChosenSeats([...chosenSeats, e.target.id]);
    }
    else {
      e.target.style.background = "white";
      let newChosenSeats = [];
      for (let i = 0; i < chosenSeats.length; i++) {
        if (chosenSeats[i] !== e.target.id)
          newChosenSeats.push(chosenSeats[i]);
      }
      setChosenSeats(newChosenSeats);
    }
  }
  return (
    <>
      <ResponsiveAppBar pages={[]} isUser={true} settings={['profile']} />

      <div className="container3">
        <h2 style={{ textAlign: "center" }}>Select Flight Seats</h2>

        {numOfSeats[0] > 0 ? <h3>First Class Seats</h3> : <></>}
        <div className="container1">
          <Grid container spacing={1} columns={2}>
            {seats.splice(0, numOfSeats[0]).map((seat) => (
              <Grid item key={seat}>
                {/* {state.cabin !== "First" || */}
                {cabin !== "First" ||
                  blockedSeats.includes(seat) ? (
                  <button
                    disabled
                    style={{
                      backgroundColor: "#BBBBBB",
                      width: 50,
                      height: 25,
                      borderRadius: 6,
                      borderColor: "#BBBBBB",
                    }}
                  >
                    {seat}
                  </button>
                ) : alreadyChosen2.includes(seat) ?
                  (<button
                    id={seat}
                    style={{
                      textAlign: "center",
                      cursor: "pointer",
                      backgroundColor: "lightblue",
                      width: 50,
                      height: 25,
                      borderRadius: 5,
                      borderColor: "#E0E0E0",
                    }}
                    onClick={changeBackground}
                  >
                    {seat}
                  </button>) : (
                    <button
                      id={seat}
                      style={{
                        textAlign: "center",
                        cursor: "pointer",
                        backgroundColor: "white",
                        width: 50,
                        height: 25,
                        borderRadius: 5,
                        borderColor: "#E0E0E0",
                      }}
                      onClick={changeBackground}
                    >
                      {seat}
                    </button>
                  )}
              </Grid>
            ))}
          </Grid>
        </div>

        {numOfSeats[1] > 0 ? <h3>Business Class Seats</h3> : <></>}
        <Grid container spacing={1} columns={{ xs: 12, sm: 12 }}>
          {seats.splice(0, numOfSeats[1]).map((seat) => (
            <Grid item key={seat}>
              {/* {state.cabin !== "Business" || */}
              {cabin !== "Business" ||
                blockedSeats.includes(seat) ? (
                <button
                  disabled
                  style={{
                    backgroundColor: "#BBBBBB",
                    width: 50,
                    height: 25,
                    borderRadius: 6,
                    borderColor: "#BBBBBB",
                  }}
                >
                  {seat}
                </button>
              ) : alreadyChosen2.includes(seat) ?
                (<button
                  id={seat}
                  onClick={changeBackground}
                  style={{
                    textAlign: "center",
                    cursor: "pointer",
                    backgroundColor: "lightblue",
                    width: 50,
                    height: 25,
                    borderRadius: 5,
                    borderColor: "#E0E0E0",
                  }}
                >
                  {seat}
                </button>) : (
                  <button
                    id={seat}
                    onClick={changeBackground}
                    style={{
                      textAlign: "center",
                      cursor: "pointer",
                      backgroundColor: "white",
                      width: 50,
                      height: 25,
                      borderRadius: 5,
                      borderColor: "#E0E0E0",
                    }}
                  >
                    {seat}
                  </button>
                )}
            </Grid>
          ))}
        </Grid>

        {numOfSeats[2] > 0 ? <h3>Economy Class Seats</h3> : <></>}
        <Grid container spacing={1} columns={{ xs: 12, sm: 12 }}>
          <br />
          {seats.splice(0, numOfSeats[2]).map((seat) => (
            <Grid item key={seat}>
              {/* {state.cabin !== "Economy" || */}
              {cabin !== "Economy" ||
                blockedSeats.includes(seat) ? (
                <button
                  disabled
                  style={{
                    backgroundColor: "#BBBBBB",
                    width: 50,
                    height: 25,
                    borderRadius: 6,
                    borderColor: "#BBBBBB",
                  }}
                >
                  {seat}
                </button>
              )
                : alreadyChosen2.includes(seat) ?
                  (<button
                    id={seat}
                    onClick={changeBackground}
                    style={{
                      textAlign: "center",
                      cursor: "pointer",
                      backgroundColor: "lightblue",
                      width: 50,
                      height: 25,
                      borderRadius: 5,
                      borderColor: "#E0E0E0",
                    }}
                  >
                    {seat}
                  </button>) : (
                    <button
                      id={seat}
                      onClick={changeBackground}
                      style={{
                        textAlign: "center",
                        cursor: "pointer",
                        backgroundColor: "white",
                        width: 50,
                        height: 25,
                        borderRadius: 5,
                        borderColor: "#E0E0E0",
                      }}
                    >
                      {seat}
                    </button>
                  )}
            </Grid>
          ))}
        </Grid>
        <br />
      </div>

      <br />




      <Button
        onClick={() => {
          window.location.href = "/ReservedFlights";
        }}
        variant="contained"
        id="bloc1"
        style={{ marginLeft: "42%", width: 100, height: 35 }}
      >
        {editFlight === false ? (
          <Link
            to="/ReservedFlights"
            style={{ textDecoration: 'none' , color: 'white' }}
            state={{
              id: state.id
            }}
          >
            Back{" "}
          </Link>
        ) : (<Link
          to="/editDeparture"
          style={{ textDecoration: 'none' ,color: 'white', width: 100, height: 35  }}
          state={{
            FlightsUserDetails: state.FlightsUserDetails,
            rows: state.rows
          }}
        >
          Back
        </Link>)}

      </Button>
      <Button
        // disabled={ chosenSeats.length !== state.noSeats}
        disabled={chosenSeats.length !== state.FlightsUserDetails.SeatsReserved.length}
        onClick={returnChosenSeats}
        variant="contained"
        id="bloc2"
        style={{ marginLeft: "2%" }}
      >
        {editFlight === false ? (

          <div>Reserve</div>
        ) : (<Link
          to="/Payment"
          style={{ textDecoration: 'none',color:'white' }}
          state={{
            arrFlight:state.arrFlight,
            arrSeatsReserved : state.isDep ? state.otherFightSeats : chosenSeats ,
            depFlight:state.depFlight,
            depSeatsReserved : state.isDep ? chosenSeats : state.otherFightSeats ,
            id:state.id,
            noSeats:chosenSeats.length,
            editFlight:state.editFlight,
            rows: state.rows,
            oldPrice: state.oldPrice,
            isDep: state.isDep,
            resNum: state.FlightsUserDetails.ReservationNumber
          }}
        >
          Reserve{" "}
        </Link>)}
      </Button>
      {chosenSeats.length !== state.FlightsUserDetails.SeatsReserved.length  ? (
        <div style={{ marginLeft: "43%", color: 'red' }}
        >*Please select {state.FlightsUserDetails.SeatsReserved.length} Seats</div>
      ) : null}

    </>
  )
}

export default PlaneSeatsAfterEdit