import Grid from "@mui/material/Grid";
import "./planeSeats.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import ResponsiveAppBar from "../ResponsiveAppBar/ResponsiveAppBar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";

export default function PlaneSeats() {
  const state = useLocation().state;


  const depSeatsEco = Object.keys(state.depFlight.EconomySeats);
  const depSeatsFirst = Object.keys(state.depFlight.FirstSeats);
  const depSeatsBusiness = Object.keys(state.depFlight.BusinessSeats);

  const depSeats = depSeatsFirst.concat(depSeatsBusiness).concat(depSeatsEco);

  const [depChosenSeats, setdepChosenSeats] = useState([]);
  const [retChosenSeats, setretChosenSeats] = useState([]);

  let retBlockedSeats = [];
  let depBlockedSeats = [];
  if (state.cabin === "Business") {
    depBlockedSeats = getBlockedSeats(state.depFlight.BusinessSeats);
    retBlockedSeats = getBlockedSeats(state.arrFlight.BusinessSeats);
  }
  if (state.cabin === "First") {
    depBlockedSeats = getBlockedSeats(state.depFlight.FirstSeats);
    retBlockedSeats = getBlockedSeats(state.arrFlight.FirstSeats);
  }
  if (state.cabin === "Economy") {
    depBlockedSeats = getBlockedSeats(state.depFlight.EconomySeats);
    retBlockedSeats = getBlockedSeats(state.arrFlight.EconomySeats);
  }

  const depNumOfSeats = [
    depSeatsFirst.length,
    depSeatsBusiness.length,
    depSeatsEco.length,
  ];

  const retSeatsEco = Object.keys(state.arrFlight.EconomySeats);
  const retSeatsFirst = Object.keys(state.arrFlight.FirstSeats);
  const retSeatsBusiness = Object.keys(state.arrFlight.BusinessSeats);
  const retSeats = retSeatsFirst.concat(retSeatsBusiness).concat(retSeatsEco);

  //let retChosenSeats = [];

  const retNumOfSeats = [
    retSeatsFirst.length,
    retSeatsBusiness.length,
    retSeatsEco.length,
  ];

  // const returnChosenSeats = () => {
  //   console.log(depChosenSeats);
  //   console.log(retChosenSeats);
  // };
  // useEffect(() => {
  //   console.log(depBlockedSeats);
  //   console.log(retBlockedSeats);
  // }, []);

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

  function depChangeBackground(e) {
    if (
      e.target.style.background === "white" ||
      e.target.style.background === ""
    ) {
      e.target.style.background = "#adddff";
      setdepChosenSeats([...depChosenSeats, e.target.id]);
      //depChosenSeats.push(e.target.id);
    } else {
      e.target.style.background = "white";
      let newChosenSeats = [];
      for (let i = 0; i < depChosenSeats.length; i++) {
        if (depChosenSeats[i] !== e.target.id)
          newChosenSeats.push(depChosenSeats[i]);
      }
      setdepChosenSeats(newChosenSeats);
    }
  }
  function retChangeBackground(e) {
    if (
      e.target.style.background === "white" ||
      e.target.style.background === ""
    ) {
      e.target.style.background = "#adddff";
      setretChosenSeats([...retChosenSeats, e.target.id]);
      //retChosenSeats.push(e.target.id);
    } else {
      e.target.style.background = "white";
      let newChosenSeats = [];
      for (let i = 0; i < retChosenSeats.length; i++) {
        if (retChosenSeats[i] !== e.target.id)
          newChosenSeats.push(retChosenSeats[i]);
      }
      setretChosenSeats(newChosenSeats);
    }
  }

  return (
    <>
      <ResponsiveAppBar pages={[]} isUser={true} settings={['profile']} />

      <div className="container3">
        <h2 style={{ textAlign: "center" }}>Select Departure Flight Seats</h2>

        {depNumOfSeats[0] > 0 ? <h3>First Class Seats</h3> : <></>}
        <div className="container1">
          <Grid container spacing={1} columns={2}>
            {depSeats.splice(0, depNumOfSeats[0]).map((seat) => (
              <Grid item key={seat}>
                {state.cabin !== "First" ||
                  depBlockedSeats.includes(seat) ? (
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
                ) : (
                  <button
                    id={seat}
                    onClick={depChangeBackground}
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
        </div>

        {depNumOfSeats[1] > 0 ? <h3>Business Class Seats</h3> : <></>}
        <Grid container spacing={1} columns={{ xs: 12, sm: 12 }}>
          {depSeats.splice(0, depNumOfSeats[1]).map((seat) => (
            <Grid item key={seat}>
              {state.cabin !== "Business" ||
                depBlockedSeats.includes(seat) ? (
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
              ) : (
                <button
                  id={seat}
                  onClick={depChangeBackground}
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

        {depNumOfSeats[2] > 0 ? <h3>Economy Class Seats</h3> : <></>}
        <Grid container spacing={1} columns={{ xs: 12, sm: 12 }}>
          <br />
          {depSeats.splice(0, depNumOfSeats[2]).map((seat) => (
            <Grid item key={seat}>
              {state.cabin !== "Economy" ||
                depBlockedSeats.includes(seat) ? (
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
              ) : (
                <button
                  id={seat}
                  onClick={depChangeBackground}
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
      <div className="container4">
        <h2 style={{ textAlign: "center" }}>Select Return Flight Seats</h2>
        {retNumOfSeats[0] > 0 ? <h3>First Class Seats</h3> : <></>}
        <div className="container1">
          <Grid container spacing={1} columns={2}>
            {retSeats.splice(0, retNumOfSeats[0]).map((seat) => (
              <Grid item key={seat}>
                {state.cabin !== "First" ||
                  retBlockedSeats.includes(seat) ? (
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
                ) : (
                  <button
                    id={seat}
                    onClick={retChangeBackground}
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
        </div>

        {retNumOfSeats[1] > 0 ? <h3>Business Class Seats</h3> : <></>}
        <Grid container spacing={1} columns={{ xs: 12, sm: 12 }}>
          {retSeats.splice(0, retNumOfSeats[1]).map((seat) => (
            <Grid item key={seat}>
              {state.cabin !== "Business" ||
                retBlockedSeats.includes(seat) ? (
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
              ) : (
                <button
                  id={seat}
                  onClick={retChangeBackground}
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

        {retNumOfSeats[2] > 0 ? <h3>Economy Class Seats</h3> : <></>}
        <Grid container spacing={1} columns={{ xs: 12, sm: 12 }}>
          <br />
          {retSeats.splice(0, retNumOfSeats[2]).map((seat) => (
            <Grid item key={seat}>
              {state.cabin !== "Economy" ||
                retBlockedSeats.includes(seat) ? (
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
              ) : (
                <button
                  id={seat}
                  onClick={retChangeBackground}
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
        disabled={retChosenSeats.length !== state.noSeats || depChosenSeats.length !== state.noSeats}
        // onClick={returnChosenSeats}
        variant="contained"
        className="btn"
        required
        helperText="Please select your Prefered Class"
        style={{ marginLeft: "46%" }}
      >
        <Link
          style={{ textDecoration: 'none' }}
          to="/SummaryConfirm"
          state={{
            depFlight: state.depFlight,
            arrFlight: state.arrFlight,
            cabin: state.cabin,
            noSeats: state.noSeats,
            id: state.id,
            depSeatsReserved: depChosenSeats,
            arrSeatsReserved: retChosenSeats,
          }}
        >
          {" "}
          Reserve{" "}
        </Link>
      </Button>
      {retChosenSeats.length !== state.noSeats||
        depChosenSeats.length !== state.noSeats ? (
        <div style={{ marginLeft: "43%", color: 'red' }}
        >*Please select {state.noSeats} Seats</div>
      ) : null}


    </>
  );
}
