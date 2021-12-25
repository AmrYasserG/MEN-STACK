import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import  Grid from "@mui/material/Grid";
import axios from "axios";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import ResponsiveAppBar from "../ResponsiveAppBar/ResponsiveAppBar";

const ConfirmedFlight = () => {
  const state = JSON.parse(localStorage.getItem("state"));
  let User_Email = "";
  const [resNum,setresNum] = useState(0);
  let resNum2 = 0;
  console.log(state);
  useEffect(() => { 
    const User_id = state.id;
    if(state.editFlight){
      resNum2 = state.resNum
      setresNum(resNum2);
      cancelFlight();
    } 
    else{
      resNum2 = Date.now()
      setresNum(resNum2);
      createReservation(User_id);
    }
  }, []);

  function cancelFlight(){
    axios
      .delete(
        "http://localhost:3005/bookingFlights/cancelReservation/" + state.oldBookFlight._id + "/" + "ahmedamr1542@gmail.com"
      )
      .then((res) => {
        axios
        .delete(
          "http://localhost:3005/bookingFlights/cancelReservation/" + state.otherOldBookFlight._id + "/" + "ahmedamr1542@gmail.com"
        )
        .then((res) => {
            updateReservationAvailableSeats();
            createReservation(state.id)
        })
      })
      .catch((err) => {
        console.log(err);
      });  
  }

  function updateReservationAvailableSeats(){
    const toBeUpdatedFlight = state.rows;
    const toBeUpdatedFlightSeats = state.rowsSeatsReserved;
    const ChosenCabin = state.rowsCabin + "AvailableSeatsNo";
    let updatedAvailableSeats = {};
    switch (ChosenCabin) {
      case "EconomyAvailableSeatsNo":
        const EconomySeats = new Map(Object.entries(toBeUpdatedFlight.EconomySeats));
        for (let i = 0; i < toBeUpdatedFlightSeats.length; i++) {
          EconomySeats.set(toBeUpdatedFlightSeats[i], true);
        }
        updatedAvailableSeats = { EconomyAvailableSeatsNo: toBeUpdatedFlight.EconomyAvailableSeatsNo + toBeUpdatedFlightSeats.length, EconomySeats: Object.fromEntries(EconomySeats) };
        break;
      case "BusinessAvailableSeatsNo":
        const BusinessSeats = new Map(Object.entries(toBeUpdatedFlight.BusinessSeats));
        for (let i = 0; i < toBeUpdatedFlightSeats.length; i++) {
          BusinessSeats.set(toBeUpdatedFlightSeats[i], true);
        }
        updatedAvailableSeats = { BusinessAvailableSeatsNo: toBeUpdatedFlight.BusinessAvailableSeatsNo + toBeUpdatedFlightSeats.length, BusinessSeats: Object.fromEntries(BusinessSeats) };
        break;
      case "FirstAvailableSeatsNo":
        const FirstSeats = new Map(Object.entries(toBeUpdatedFlight.FirstSeats));
        for (let i = 0; i < toBeUpdatedFlightSeats.length; i++) {
          FirstSeats.set(toBeUpdatedFlightSeats[i], true);
        }
        updatedAvailableSeats = { FirstAvailableSeatsNo: toBeUpdatedFlight.FirstAvailableSeatsNo + toBeUpdatedFlightSeats.length, FirstSeats: Object.fromEntries(FirstSeats) };
        break;
      default:
    }
    // console.log(updatedAvailableSeats);
    axios
      .put(
        "http://localhost:3005/flights/updateFlightAvailableSeats/" +
        toBeUpdatedFlight._id,
        updatedAvailableSeats
      )
      .then((res) => {
        
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function createReservation(User_id) {
    // console.log(User_Email);
    axios
      .get(
        "http://localhost:3005/users/userInfo/" + User_id
      )
      .then((res) => {
        User_Email = res.data.Email;
        console.log(User_Email); 
        axios
        .post("http://localhost:3005/bookingFlights/CreateReservation", {
        User_id: state.id,
        ReservationNumber: resNum2,
        FlightNumber: state.depFlight.FlightNumber,
        ChosenCabin: state.depFlight.cabin,
        SeatsReserved: state.depSeatsReserved,
        TotalReservationPrice: state.depFlight.Price * state.noSeats,
        Type: "Departure Flight",
        Otherflight: state.arrFlight.FlightNumber
      })
      .then((res) => {
        // console.log("created dep flight");
        const toBeUpdatedFlight = state.depFlight;
        const toBeUpdatedFlightSeats = state.depSeatsReserved;
        const ChosenCabin = state.depFlight.cabin + "AvailableSeatsNo";
        let updatedAvailableSeats = {};
        switch (ChosenCabin) {
          case "EconomyAvailableSeatsNo":
            const EconomySeats = new Map(
              Object.entries(toBeUpdatedFlight.EconomySeats)
            );
            for (let i = 0; i < toBeUpdatedFlightSeats.length; i++) {
              EconomySeats.set(toBeUpdatedFlightSeats[i], false);
            }
            updatedAvailableSeats = {
              EconomyAvailableSeatsNo:
                toBeUpdatedFlight.EconomyAvailableSeatsNo -
                toBeUpdatedFlightSeats.length,
              EconomySeats: Object.fromEntries(EconomySeats),
            };
            break;
          case "BusinessAvailableSeatsNo":
            const BusinessSeats = new Map(
              Object.entries(toBeUpdatedFlight.BusinessSeats)
            );
            for (let i = 0; i < toBeUpdatedFlightSeats.length; i++) {
              BusinessSeats.set(toBeUpdatedFlightSeats[i], false);
            }
            updatedAvailableSeats = {
              BusinessAvailableSeatsNo:
                toBeUpdatedFlight.BusinessAvailableSeatsNo -
                toBeUpdatedFlightSeats.length,
              BusinessSeats: Object.fromEntries(BusinessSeats),
            };
            break;
          case "FirstAvailableSeatsNo":
            const FirstSeats = new Map(
              Object.entries(toBeUpdatedFlight.FirstSeats)
            );
            for (let i = 0; i < toBeUpdatedFlightSeats.length; i++) {
              FirstSeats.set(toBeUpdatedFlightSeats[i], false);
            }
            updatedAvailableSeats = {
              FirstAvailableSeatsNo:
                toBeUpdatedFlight.FirstAvailableSeatsNo -
                toBeUpdatedFlightSeats.length,
              FirstSeats: Object.fromEntries(FirstSeats),
            };
            break;
          default:
        }
        axios
          .put(
            "http://localhost:3005/flights/updateFlightAvailableSeats/" +
              state.depFlight.id,
            updatedAvailableSeats
          )
          .then((res) => {
            // console.log("updated dep flight");
            axios.post(
              "http://localhost:3005/bookingFlights/CreateReservation",
              {
                User_id: state.id,
                ReservationNumber: resNum2,
                FlightNumber: state.arrFlight.FlightNumber,
                ChosenCabin: state.arrFlight.cabin,
                SeatsReserved: state.arrSeatsReserved,
                TotalReservationPrice: state.arrFlight.Price * state.noSeats,
                Type: "Return Flight",
                Otherflight: state.depFlight.FlightNumber
              }
            );
          })
          .then((res) => {
            // console.log("created ret flight");
            const toBeUpdatedFlight = state.arrFlight;
            const toBeUpdatedFlightSeats = state.arrSeatsReserved;
            const ChosenCabin = state.arrFlight.cabin + "AvailableSeatsNo";
            let updatedAvailableSeats = {};
            switch (ChosenCabin) {
              case "EconomyAvailableSeatsNo":
                const EconomySeats = new Map(
                  Object.entries(toBeUpdatedFlight.EconomySeats)
                );
                for (let i = 0; i < toBeUpdatedFlightSeats.length; i++) {
                  EconomySeats.set(toBeUpdatedFlightSeats[i], false);
                }
                updatedAvailableSeats = {
                  EconomyAvailableSeatsNo:
                    toBeUpdatedFlight.EconomyAvailableSeatsNo -
                    toBeUpdatedFlightSeats.length,
                  EconomySeats: Object.fromEntries(EconomySeats),
                };
                break;
              case "BusinessAvailableSeatsNo":
                const BusinessSeats = new Map(
                  Object.entries(toBeUpdatedFlight.BusinessSeats)
                );
                for (let i = 0; i < toBeUpdatedFlightSeats.length; i++) {
                  BusinessSeats.set(toBeUpdatedFlightSeats[i], false);
                }
                updatedAvailableSeats = {
                  BusinessAvailableSeatsNo:
                    toBeUpdatedFlight.BusinessAvailableSeatsNo -
                    toBeUpdatedFlightSeats.length,
                  BusinessSeats: Object.fromEntries(BusinessSeats),
                };
                break;
              case "FirstAvailableSeatsNo":
                const FirstSeats = new Map(
                  Object.entries(toBeUpdatedFlight.FirstSeats)
                );
                for (let i = 0; i < toBeUpdatedFlightSeats.length; i++) {
                  FirstSeats.set(toBeUpdatedFlightSeats[i], false);
                }
                updatedAvailableSeats = {
                  FirstAvailableSeatsNo:
                    toBeUpdatedFlight.FirstAvailableSeatsNo -
                    toBeUpdatedFlightSeats.length,
                  FirstSeats: Object.fromEntries(FirstSeats),
                };
                break;
              default:
            }
            axios
              .put(
                "http://localhost:3005/flights/updateFlightAvailableSeats/" +
                  state.arrFlight.id,
                updatedAvailableSeats
              )
              .then((res) => {
                axios.post("http://localhost:3005/bookingFlights/sendItinerary/" + User_Email,{state:state,resNum:resNum2});
              });
          });
      });
    }).catch((err) => {
      console.log(err);
    })
      
  }

  return (
    <div>
      <ResponsiveAppBar pages={[]} isUser={true}settings={['profile']}  />
      <h1>Choosen Flights Summary</h1>
      <div style={{textAlign:"center"}}>
      <h1 >Iternary</h1>
      <br></br>
      </div>

      <Box
        p={1}
        sx={{
          marginLeft: "5%",
          marginRight: "5%",
          marginTop: "0",
          textAlign: "center",
          width: 3 / 9,
          border: "5px solid #eeeeee",
          backgroundColor: "#fbfbfb",
          boxShadow: "7px 7px 7px#cccccc",
          float: "Right",
        }}
      >
        <label>Departure Flight:</label>
        <h4>${state.depFlight.Price * state.noSeats}</h4>

        <label>Return Flight:</label>
        <h4>${state.arrFlight.Price * state.noSeats}</h4>

        <label>Total Price: </label>
        <h3>
          $
          {state.depFlight.Price * state.noSeats +
            state.arrFlight.Price * state.noSeats}
        </h3>
        <br></br>
      </Box>
      <Box
        p={1}
        sx={{
          marginLeft: "5%",
          my: "2%",
          textAlign: "center",
          width: 3 / 9,
          border: "5px solid #eeeeee",
          backgroundColor: "#fbfbfb",
          boxShadow: "7px 7px 7px#cccccc",
          
        }}
      >
        <Grid container sx={{textAlign:"left"}}>
          <Grid item xs={12} md={12} >
            <h2 style={{textAlign:"center"}}>Departure Flight</h2>
          </Grid>
          <Grid item xs={1} md={2}></Grid>
          <Grid item xs={5} md={4}>
            <label >Flight Date:</label>
          </Grid>
          <Grid sx={{textAlign:"right"}}item xs={5} md={4}>
            <label>{state.depFlight.Date}</label>
          </Grid>
          <Grid item xs={1} md={2}></Grid>

          <Grid item xs={1} md={2}></Grid>
          <Grid sx={{marginTop:"2%"}} item xs={5} md={4}>
            <label>Departure Time:</label>{" "}
          </Grid>

          <Grid sx={{marginTop:"2%", textAlign:"right"}} item xs={5} md={4}>
            <label>{state.depFlight.DepTime}</label>{" "}
          </Grid>
          <Grid item xs={1} md={2}></Grid>

          <Grid item xs={1} md={2}></Grid>
          <Grid sx={{marginTop:"2%"}} item xs={5} md={4}>
            <label>Arrival Time:</label>
          </Grid>
          <Grid sx={{marginTop:"2%", textAlign:"right"}} item xs={5} md={4}>
            <label>{state.depFlight.ArrTime}</label>
          </Grid>
          <Grid item xs={1} md={2}></Grid>
          <Grid item xs={1} md={2}></Grid>

          <Grid sx={{marginTop:"2%"}}item xs={5} md={4}>
            <label>Price per Seat:</label>
          </Grid>
          <Grid sx={{marginTop:"2%",textAlign:"right"}}item xs={5} md={4}>
            <label>{state.depFlight.Price}</label>
          </Grid>
          <Grid item xs={1} md={2}></Grid>
          <Grid item xs={1} md={2}></Grid>
          <Grid sx={{marginTop:"2%"}} item xs={5} md={4}>
            <label>Cabin Class :</label>
          </Grid>
          <Grid sx={{marginTop:"2%",textAlign:"right"}} item xs={5} md={4}>
            <label>{state.depFlight.cabin}</label>
          </Grid>
          <Grid item xs={1} md={2}></Grid>
          <Grid item xs={1} md={2}></Grid>
          <Grid sx={{marginTop:"2%"}} item xs={5} md={4}>
            <label>Choosen Seats :</label>
          </Grid>
          <Grid sx={{marginTop:"2%",textAlign:"right"}} item xs={5} md={4}>
            <label>
              {state.depSeatsReserved.map((SeatNumber) => {
                return <span key={SeatNumber}>{SeatNumber} </span>;
              })}
            </label>
          </Grid>
          <Grid item xs={1} md={2}></Grid>
        </Grid>
      </Box>

      
<br></br>
      <Box
        p={1}
        sx={{
          marginLeft: "5%",
          my: "2%",
          textAlign: "center",
          width: 3 / 9,
          border: "5px solid #eeeeee",
          backgroundColor: "#fbfbfb",
          boxShadow: "7px 7px 7px#cccccc",
          float:"left"
        }}
      >
        <Grid container sx={{ textAlign: "left" }}>
          <Grid item xs={12} md={12} >
            <h2 style={{textAlign:"center"}}>Return Flight</h2>
          </Grid>
          <Grid item xs={1} md={2} marginTop={"2%"}></Grid>
          <Grid item xs={5} md={4} marginTop={"2%"}>
            <label>Flight Date:</label>{" "}
          </Grid>
          <Grid item xs={5} md={4}  sx={{marginTop:"2%", textAlign:"right"}}>
            <label>{state.arrFlight.Date}</label>{" "}
          </Grid>
          <Grid item xs={1} md={2} marginTop={"2%"}></Grid>
          <Grid item xs={1} md={2} marginTop={"2%"}></Grid>
          <Grid item xs={5} md={4} marginTop={"2%"}>
            <label>Departure Time:</label>{" "}
          </Grid>
          <Grid item xs={5} md={4} sx={{marginTop:"2%", textAlign:"right"}}>
            <label>{state.arrFlight.DepTime}</label>{" "}
          </Grid>
          <br></br> <Grid item xs={1} md={2} marginTop={"2%"}></Grid>
          <Grid item xs={1} md={2} marginTop={"2%"}></Grid>{" "}
          <Grid item xs={5} md={4} marginTop={"2%"}>
            <label>Arrival Time:</label>{" "}
          </Grid>
          <Grid item xs={5} md={4} sx={{marginTop:"2%", textAlign:"right"}}>
            <label>{state.arrFlight.ArrTime}</label>{" "}
          </Grid>
          <Grid item xs={1} md={2} marginTop={"2%"}></Grid>
          <Grid item xs={1} md={2} marginTop={"2%"}></Grid>
          <Grid item xs={5} md={4} marginTop={"2%"}>
            <label>Price per Seat:</label>{" "}
          </Grid>
          <Grid item xs={5} md={4} sx={{marginTop:"2%", textAlign:"right"}}>
            <label>{state.arrFlight.Price}</label>
          </Grid>
          <Grid item xs={1} md={2} marginTop={"2%"}></Grid>
          <Grid item xs={1} md={2} marginTop={"2%"}></Grid>{" "}
          <Grid item xs={5} md={4} marginTop={"2%"}>
            <label>Cabin Class :</label>{" "}
          </Grid>
          <Grid item xs={5} md={4} sx={{marginTop:"2%", textAlign:"right"}}>
            <label>{state.arrFlight.cabin}</label>{" "}
          </Grid>
          <Grid item xs={1} md={2} marginTop={"2%"}></Grid>
          <Grid item xs={1} md={2} marginTop={"2%"}></Grid>{" "}
          <Grid item xs={5} md={4} marginTop={"2%"}>
            <label>Choosen Seats :</label>{" "}
          </Grid>
          <Grid item xs={5} md={4} sx={{marginTop:"2%", textAlign:"right"}}>
            <label>
              {state.arrSeatsReserved.map((SeatNumber) => {
                return <span key={SeatNumber}>{SeatNumber} </span>;
              })}
            </label>
          </Grid>
          <Grid item xs={1} md={2} marginTop={"2%"}></Grid>
        </Grid>
      </Box>
      <Box
        p={1}
        sx={{
          marginLeft: "5%",
          marginRight: "5%",
          marginTop: "5%",
          textAlign: "center",
          width: 3 / 9,
          border: "5px solid #eeeeee",
          backgroundColor: "#fbfbfb",
          boxShadow: "7px 7px 7px#cccccc",
          float:"right"
        }}
      >
        <label>Your Flight is confirmed!</label>
        <br></br>
        <h1>#{resNum}</h1>

        <br></br>
        <Button variant="contained" onClick={()=>{
            localStorage.removeItem("state");
        }}>
          <Link style={{textDecoration:'none'}} to="/">
            {" "}
            Return to Home{" "}
          </Link>
        </Button>
      </Box>
    </div>
  );
};

export default ConfirmedFlight;
