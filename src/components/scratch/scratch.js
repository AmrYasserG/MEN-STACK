import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import '../planeSeats/planeSeats.css'

export default function ResponsiveGrid() {
  const seats = [
    "A01",
    "B01",
    "C01",
    "D01",
    "E01",
    "F01",
    "A02",
    "B02",
    "C02",
    "D02",
    "E02",
    "F02",
    "A03",
    "B03",
    "C03",
    "D03",
    "E03",
    "F03",
    "A04",
    "B04",
    "C04",
    "D04",
    "E04",
    "F04",
    "A05",
    "B05",
    "C05",
    "D05",
    "E05",
    "F05",
    "A06",
    "B06",
    "C06",
    "D06",
    "E06",
    "F06",
    "A07",
    "B07",
    "C07",
    "D07",
    "E07",
    "F07",
    "A08",
    "B08",
    "C08",
    "D08",
    "E08",
    "F08",
    "A09",
    "B09",
    "C09",
    "D09",
    "E09",
    "F09",
    "A10",
    "B10",
    "C10",
    "D10",
    "E10",
    "F10",
  ];
  let chosenSeats = [];
  const blockedSeats = [
    "E06",
    "F06",
    "A07",
    "B07",
    "C07",
    "D07",
    "E07",
    "F07",
    "A08",
    "B08",
    "C08",
  ];
  const NumOfSeats = [8, 18, 30];

  const returnChosenSeats = () => {
    console.log(chosenSeats);
  };

  function changeBackground(e) {
    if (
      e.target.style.background === "white" ||
      e.target.style.background === ""
    ) {
      e.target.style.background = "#adddff";
      chosenSeats.push(e.target.id);
    } else {
      e.target.style.background = "white";
      let newChosenSeats = [];
      for (let i = 0; i < chosenSeats.length; i++) {
        if (chosenSeats[i] !== e.target.id) newChosenSeats.push(chosenSeats[i]);
      }
      chosenSeats = newChosenSeats;
    }
  }
  return (
    <div className="container">
        {NumOfSeats[0] >0 ? <h3 textAlign="center">First Class Seats</h3> : <></>}
      <div className="container1">
        <Grid container spacing={1} columns={2}>
          {seats.splice(0, NumOfSeats[0]).map((seat) => (
            <Grid item key={seat}>
              {blockedSeats.includes(seat) ? (
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
      </div>

      {NumOfSeats[1] >0 ? <h3 textAlign="center">Business Class Seats</h3> : <></>}
      <Grid container spacing={1} columns={{ xs: 12, sm: 12 }}>
        {seats.splice(0, NumOfSeats[1]).map((seat) => (
          <Grid item key={seat}>
            {blockedSeats.includes(seat) ? (
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

      {NumOfSeats[2] >0 ? <h3 textAlign="center">Economy Class Seats</h3> : <></>}
      <Grid container spacing={1} columns={{ xs: 12, sm: 12 }}>
        <br />
        {seats.splice(0, NumOfSeats[2]).map((seat) => (
          <Grid item key={seat}>
            {blockedSeats.includes(seat) ? (
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
      <button
        className="btn"
        style={{ backgroundColor: "#000000" }}
        onClick={returnChosenSeats}
      >
        Reserve
      </button>
    </div>
  );
}