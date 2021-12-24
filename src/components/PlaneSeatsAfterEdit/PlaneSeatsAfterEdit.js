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
  
    const numOfSeats = [
      seatsFirst.length,
      seatsBusiness.length,
      seatsEco.length,
    ];
  
    const seats = seatsFirst.concat(seatsBusiness).concat(seatsEco);
    const alreadyChosen = state.FlightsUserDetails.SeatsReserved;
    const [alreadyChosen2, setalreadyChosen2] = useState(alreadyChosen)
    let [chosenSeats, setChosenSeats] = useState(alreadyChosen2);
  
  
  
    let blockedSeats = [];
    const cabin = state.FlightsUserDetails.ChosenCabin;
    if (cabin === "Business")
      blockedSeats = getBlockedSeats(state.rows.BusinessSeats);
  
    if (cabin === "First")
      blockedSeats = getBlockedSeats(state.rows.FirstSeats);
  
    if (cabin === "Economy")
      blockedSeats = getBlockedSeats(state.rows.EconomySeats);
  
  
    let editFlight = true ;
  
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
      console.log(e.target.style.background);
  
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
      //console.log(alreadyChosen2);
      //console.log(chosenSeats);
    }
    return (
        <>
      {/* <ResponsiveAppBar pages={[]} isUser={true} settings={['profile']} /> */}

      <div className="container3">
        <h2 style={{ textAlign: "center" }}>Select New Flight Seats</h2>

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
          className="btn"
          style={{marginLeft:"44%"}}    
        >
          Cancel
        </Button>
       
      
      <Button
          // disabled={ chosenSeats.length !== state.noSeats}
          disabled={chosenSeats.length !== alreadyChosen.length}
          onClick={returnChosenSeats}
          variant="contained"
          className="btn"
          style={{marginLeft:"44%"}}    
        >
          Reserve
          {/* <Link
          to="/SummaryConfirm"
          state={{
            depFlight: state.depFlight,
            arrFlight: state.arrFlight,
            cabin: state.cabin,
            noSeats: state.noSeats,
            id:state.id,
            depSeatsReserved: chosenSeats,
            arrSeatsReserved: retChosenSeats,
          }}
        >
          {" "}
          Reserve{" "}
        </Link> */}
        </Button>
    </>
    )
}

export default PlaneSeatsAfterEdit
