// import * as React from "react";
// import Typography from "@mui/material/Typography";
// import Grid from "@mui/material/Grid";
// import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import BackspaceRoundedIcon from "@mui/icons-material/BackspaceRounded";
// import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
// import InputAdornment from "@mui/material/InputAdornment";

// function Scratch() {
//   var myMap = new Map([
//     ["thing1", 1],
//     ["thing2", 2],
//     ["thing3", 3],
//   ]);
//   myMap.set("a", 1);

//   return (
//     // <div>
//     <Box
//       component="form"
//       sx={{
//         p: 2,
//         margin: "auto",
//         maxWidth: "80%",
//         my: 10,
//       }}
//     >
//       <Accordion>
//         <AccordionSummary
//           sx={{ "text-align": "center" }}
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1a-content"
//           id="panel1a-header"
//         >
//           <Typography sx={{ mx: "40%", width: 800 }} variant="h5">
//             Search Criteriea &nbsp;
//             <SearchRoundedIcon />
//           </Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <hr />
//           <Box sx={{ flexGrow: 1 }}>
//             <Grid
//               container
//               spacing={2}
//               alignItems="left"
//               rowSpacing={3}
//               columnSpacing={1}
//             >
//               {/*Flight No*/}
//               <Grid item xs={1}></Grid>
//               <Grid item xs={2}>
//                 <Typography
//                   gutterBottom
//                   variant="subtitle1"
//                   component="h4"
//                   align="center"
//                   sx={{ textAlign: "left" }}
//                 >
//                   Flight Number:
//                 </Typography>
//               </Grid>
//               <Grid item xs={2}>
//                 <TextField
//                   size="small"
//                   sx={{ width: "110%", height: "3ch", p: 0 }}
//                   type="text"
//                   label="Fligh Number"
//                   required
//                 />
//               </Grid>
//               <Grid
//                 item
//                 xs={1}
//                 sx={{ borderRight: "0px solid #eeeeee" }}
//               ></Grid>
//               <Grid item xs={1} sx={{ borderLeft: "0px solid #eeeeee" }}></Grid>
//               {/*Flight Date*/}
//               <Grid item xs={2}>
//                 {" "}
//                 <Typography
//                   gutterBottom
//                   variant="subtitle1"
//                   component="h4"
//                   align="center"
//                   sx={{ textAlign: "left" }}
//                 >
//                   Flight Date:
//                 </Typography>
//               </Grid>
//               <Grid item xs={2}>
//                 <TextField
//                   size="small"
//                   sx={{ width: "110%", height: "3ch", p: 0 }}
//                   InputProps={{
//                     type: "date",
//                   }}
//                   required
//                 />
//               </Grid>
//               <Grid item xs={1}></Grid>
//               <Grid item xs={1}></Grid>
//               {/*From*/}
//               <Grid item xs={2}>
//                 <Typography
//                   gutterBottom
//                   variant="subtitle1"
//                   component="h4"
//                   align="center"
//                   sx={{ textAlign: "left" }}
//                 >
//                   From:
//                 </Typography>
//               </Grid>
//               <Grid item xs={2}>
//                 <TextField
//                   size="small"
//                   sx={{ width: "110%", height: "3ch", p: 0 }}
//                   type="text"
//                   label="From"
//                   required
//                 />
//               </Grid>
//               <Grid
//                 item
//                 xs={1}
//                 sx={{ borderRight: "1px solid #eeeeee" }}
//               ></Grid>
//               <Grid item xs={1} sx={{ borderLeft: "1px solid #eeeeee" }}></Grid>
//               {/*To*/}
//               <Grid item xs={2}>
//                 <Typography
//                   gutterBottom
//                   variant="subtitle1"
//                   component="h4"
//                   align="center"
//                   sx={{ textAlign: "left" }}
//                 >
//                   To:
//                 </Typography>
//               </Grid>
//               <Grid item xs={2}>
//                 <TextField
//                   size="small"
//                   sx={{ width: "110%", height: "3ch", p: 0 }}
//                   type="text"
//                   label="To"
//                   required
//                 />
//               </Grid>
//               <Grid item xs={1}></Grid>
//               <Grid item xs={1}></Grid>
//               {/*Departure Time*/}
//               <Grid item xs={2}>
//                 <Typography
//                   gutterBottom
//                   variant="subtitle1"
//                   component="h4"
//                   align="center"
//                   sx={{ textAlign: "left" }}
//                 >
//                   Departure Time:
//                 </Typography>
//               </Grid>
//               <Grid item xs={2}>
//                 <TextField
//                   size="small"
//                   sx={{ width: "110%", height: "3ch", p: 0 }}
//                   type="time"
//                   required
//                 />
//               </Grid>
//               <Grid
//                 item
//                 xs={1}
//                 sx={{ borderRight: "1px solid #eeeeee" }}
//               ></Grid>
//               <Grid item xs={1} sx={{ borderLeft: "1px solid #eeeeee" }}></Grid>
//               {/*Arrival Time*/}
//               <Grid item xs={2}>
//                 <Typography
//                   gutterBottom
//                   variant="subtitle1"
//                   component="h4"
//                   align="center"
//                   sx={{ textAlign: "left" }}
//                 >
//                   Arrival Time:
//                 </Typography>
//               </Grid>
//               <Grid item xs={2}>
//                 <TextField
//                   size="small"
//                   sx={{ width: "110%", height: "3ch", p: 0 }}
//                   type="time"
//                   required
//                 />
//               </Grid>
//               <Grid item xs={1}></Grid>
//               <Grid item xs={1}></Grid>
//               {/*Departure Terminal*/}
//               <Grid item xs={2}>
//                 <Typography
//                   gutterBottom
//                   variant="subtitle1"
//                   component="h4"
//                   align="center"
//                   sx={{ textAlign: "left" }}
//                 >
//                   Departure Terminal:
//                 </Typography>
//               </Grid>
//               <Grid item xs={2}>
//                 <TextField
//                   size="small"
//                   sx={{ width: "110%", height: "3ch", p: 0 }}
//                   type="number"
//                   required
//                   label="Departure Terminal"
//                 />
//               </Grid>
//               <Grid
//                 item
//                 xs={1}
//                 sx={{ borderRight: "1px solid #eeeeee" }}
//               ></Grid>
//               <Grid item xs={1} sx={{ borderLeft: "1px solid #eeeeee" }}></Grid>
//               {/*Arrival Terminal*/}
//               <Grid item xs={2}>
//                 <Typography
//                   gutterBottom
//                   variant="subtitle1"
//                   component="h4"
//                   align="center"
//                   sx={{ textAlign: "left" }}
//                 >
//                   Arrival Terminal:
//                 </Typography>
//               </Grid>
//               <Grid item xs={2}>
//                 <TextField
//                   size="small"
//                   sx={{ width: "110%", height: "3ch", p: 0 }}
//                   type="number"
//                   label="Arrival Terminal"
//                   required
//                 />
//               </Grid>
//               <Grid item xs={1}></Grid>
//               {/*/--------------------------/*/}
//               <Grid item xs={1}></Grid>
//               {/*First Class Seats*/}
//               <Grid item xs={2}>
//                 <Typography
//                   gutterBottom
//                   variant="subtitle1"
//                   component="h4"
//                   align="center"
//                   sx={{ textAlign: "left" }}
//                 >
//                   First Class Seats:
//                 </Typography>
//               </Grid>
//               <Grid item xs={2}>
//                 <TextField
//                   label="No Of Seats"
//                   size="small"
//                   sx={{ width: "110%", height: "3ch", p: 0 }}
//                   type="number"
//                   required
//                 />
//               </Grid>
//               <Grid item xs={2}>
//                 <TextField
//                   label="Price"
//                   size="small"
//                   sx={{ mx: 2, width: "110%", height: "3ch", p: 0 }}
//                   type="number"
//                   required
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="end">$</InputAdornment>
//                     ),
//                   }}
//                 />
//               </Grid>{" "}
//               <Grid
//                 item
//                 xs={1}
//                 sx={{ borderRight: "1px solid #eeeeee" }}
//               ></Grid>
//               <Grid item xs={4}>
//                 {" "}
//                 <Typography
//                   gutterBottom
//                   variant="subtitle1"
//                   component="h4"
//                   align="center"
//                   sx={{ textAlign: "center" }}
//                 >
//                   Baggage Allowance:
//                 </Typography>
//               </Grid>
//               <Grid item xs={1}></Grid>
//               {/*Business Class Seats*/}
//               <Grid item xs={2}>
//                 <Typography
//                   gutterBottom
//                   variant="subtitle1"
//                   component="h4"
//                   align="center"
//                   sx={{ textAlign: "left" }}
//                 >
//                   Business Class Seats:
//                 </Typography>
//               </Grid>
//               <Grid item xs={2}>
//                 <TextField
//                   label="No Of Seats"
//                   size="small"
//                   sx={{ width: "110%", height: "3ch", p: 0 }}
//                   type="number"
//                   required
//                 />
//               </Grid>
//               <Grid item xs={2}>
//                 <TextField
//                   label="Price"
//                   size="small"
//                   sx={{ mx: 2, width: "110%", height: "3ch", p: 0 }}
//                   type="number"
//                   required
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="end">$</InputAdornment>
//                     ),
//                   }}
//                 />
//               </Grid>
//               <Grid
//                 item
//                 xs={1}
//                 sx={{ borderRight: "1px solid #eeeeee" }}
//               ></Grid>
//               <Grid item xs={4} sx={{ textAlign: "center" }}>
//                 <TextField
//                   size="small"
//                   sx={{ width: "55%", height: "3ch", p: 0 }}
//                   type="number"
//                   required
//                   label="Baggage Allowance"
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="end">kg</InputAdornment>
//                     ),
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={1}></Grid>
//               {/*Economy Class Seats*/}
//               <Grid item xs={2}>
//                 <Typography
//                   gutterBottom
//                   variant="subtitle1"
//                   component="h4"
//                   align="center"
//                   sx={{ textAlign: "left" }}
//                 >
//                   Economy Class Seats:
//                 </Typography>
//               </Grid>
//               <Grid item xs={2}>
//                 <TextField
//                   label="No Of Seats"
//                   size="small"
//                   sx={{ width: "110%", height: "3ch", p: 0 }}
//                   type="number"
//                   required
//                 />
//               </Grid>
//               <Grid item xs={2}>
//                 <TextField
//                   label="Price"
//                   size="small"
//                   sx={{ mx: 2, width: "110%", height: "3ch", p: 0 }}
//                   type="number"
//                   required
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="end">$</InputAdornment>
//                     ),
//                   }}
//                 />
//               </Grid>
//               <Grid
//                 item
//                 xs={1}
//                 sx={{ borderRight: "1px solid #eeeeee" }}
//               ></Grid>
//               <Grid item xs={4}></Grid>
//               <Grid item xs={1}></Grid>
//               <Grid item xs={5} sx={{ textAlign: "center" }}>
//                 <Button
//                   startIcon={<BackspaceRoundedIcon />}
//                   variant="contained"
//                   color="secondary"
//                   sx={{ width: "57%", height: "40px", mx: 7, my: 2 }}
//                 >
//                   Reset
//                 </Button>
//               </Grid>
//               <Grid item xs={5} sx={{ textAlign: "center" }}>
//                 <Button
//                   sx={{ width: "57%", height: "40px", mx: 7, my: 2 }}
//                   endIcon={<SearchRoundedIcon />}
//                   variant="contained"
//                   color="primary"
//                 >
//                   Search
//                 </Button>
//               </Grid>
//               <Grid item xs={1}></Grid>
//             </Grid>
//           </Box>
//         </AccordionDetails>
//       </Accordion>
//     </Box>
//   );
//   {
//     /* <br />
//       {Array.from(myMap).map(([key, value]) => {
//         return (
//           <div>
//             <h2>{key}1 </h2>
//             <h5>{value}2</h5>
//           </div>
//         );
//       })}
//     </div> */
//   }
// }
// export default Scratch;

import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

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

// import * as React from "react";
// import Typography from "@mui/material/Typography";
// import Grid from "@mui/material/Grid";
// import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import BackspaceRoundedIcon from "@mui/icons-material/BackspaceRounded";
// import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
// import InputAdornment from "@mui/material/InputAdornment";

// const rows = [
//   {
//     FlightNumber: 'XY1',
//     From: 'LAX',
//     To: 'CAI',
//     ArrivalTime: '30/12/2021',
//     DepartureTime: '29/12/2021',
//     EconomySeatsNo: 1,
//     BusinessSeatsNo: 1,
//     FirstSeatsNo: 1,
//     EconomyAvailableSeatsNo: 1,
//     BusinessAvailableSeatsNo: 1,
//     FirstAvailableSeatsNo: 2,
//     FirstClassPrice: 750,
//     BusinessClassPrice: 1900,
//     EconomyClassPrice: 200000,
//     AirportDepartureTerminal: 1,
//     AirportArrivalTerminal: 2,
//     Date: '5/11/2021',
//     BaggageAllowance: 2,
//   },
//   {
//     FlightNumber: 'AB1',
//     From: 'LAX',
//     To: 'CAI',
//     ArrivalTime: '30/12/2021',
//     DepartureTime: '29/12/2021',
//     EconomySeatsNo: 1,
//     BusinessSeatsNo: 1,
//     FirstSeatsNo: 1,
//     EconomyAvailableSeatsNo: 3,
//     BusinessAvailableSeatsNo: 23,
//     FirstAvailableSeatsNo: 1,
//     FirstClassPrice: 750,
//     BusinessClassPrice: 1900,
//     EconomyClassPrice: 200000,
//     AirportDepartureTerminal: 1,
//     AirportArrivalTerminal: 2,
//     Date: '5/11/2021',
//     BaggageAllowance: 2,
//   },
//   {
//     FlightNumber: 'AC1',
//     From: 'LAX',
//     To: 'CAI',
//     ArrivalTime: '30/12/2021',
//     DepartureTime: '29/12/2021',
//     EconomySeatsNo: 1,
//     BusinessSeatsNo: 1,
//     FirstSeatsNo: 1,
//     EconomyAvailableSeatsNo: 1,
//     BusinessAvailableSeatsNo: 1,
//     FirstAvailableSeatsNo: 1,
//     FirstClassPrice: 750,
//     BusinessClassPrice: 1900,
//     EconomyClassPrice: 200000,
//     AirportDepartureTerminal: 1,
//     AirportArrivalTerminal: 2,
//     Date: '5/11/2021',
//     BaggageAllowance: 2,
//   },
//   {
//     FlightNumber: 'AD1',
//     From: 'LAX',
//     To: 'CAI',
//     ArrivalTime: '30/12/2021',
//     DepartureTime: '29/12/2021',
//     EconomySeatsNo: 1,
//     BusinessSeatsNo: 1,
//     FirstSeatsNo: 1,
//     EconomyAvailableSeatsNo: 1,
//     BusinessAvailableSeatsNo: 1,
//     FirstAvailableSeatsNo: 1,
//     FirstClassPrice: 750,
//     BusinessClassPrice: 1900,
//     EconomyClassPrice: 200000,
//     AirportDepartureTerminal: 1,
//     AirportArrivalTerminal: 2,
//     Date: '5/11/2021',
//     BaggageAllowance: 2,
//   }
// ];

// function Row(props) {
//   //const [row, setrow] = useState(props)
//   const { row } = props;
//   const [open, setOpen] = React.useState(false);

//   //style={{backgroundColor : '#D3D3D3'}}
//   return (
//     // <div>
//     <Box
//       component="form"
//       sx={{
//         p: 2,
//         margin: "auto",
//         maxWidth: "80%",
//         my: 10,
//       }}
//     >
//       <Accordion>
//         <AccordionSummary
//           sx={{ "text-align": "center" }}
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1a-content"
//           id="panel1a-header"
//         >
//           <Typography sx={{ mx: "40%", width: 800 }} variant="h5">
//             Search Criteriea &nbsp;
//             <SearchRoundedIcon />
//           </Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <hr />
//           <Box sx={{ flexGrow: 1 }}>
//             <Grid
//               container
//               spacing={2}
//               alignItems="left"
//               rowSpacing={3}
//               columnSpacing={1}
//             >
//               {/*Flight No*/}
//               <Grid item xs={1}></Grid>
//               <Grid item xs={2}>
//                 <Typography
//                   gutterBottom
//                   variant="subtitle1"
//                   component="h4"
//                   align="center"
//                   sx={{ textAlign: "left" }}
//                 >
//                   Flight Number:
//                 </Typography>
//               </Grid>
//               <Grid item xs={2}>
//                 <TextField
//                   size="small"
//                   sx={{ width: "110%", height: "3ch", p: 0 }}
//                   type="text"
//                   label="Fligh Number"
//                   required
//                 />
//               </Grid>
//               <Grid
//                 item
//                 xs={1}
//                 sx={{ borderRight: "0px solid #eeeeee" }}
//               ></Grid>
//               <Grid item xs={1} sx={{ borderLeft: "0px solid #eeeeee" }}></Grid>
//               {/*Flight Date*/}
//               <Grid item xs={2}>
//                 {" "}
//                 <Typography
//                   gutterBottom
//                   variant="subtitle1"
//                   component="h4"
//                   align="center"
//                   sx={{ textAlign: "left" }}
//                 >
//                   Flight Date:
//                 </Typography>
//               </Grid>
//               <Grid item xs={2}>
//                 <TextField
//                   size="small"
//                   sx={{ width: "110%", height: "3ch", p: 0 }}
//                   InputProps={{
//                     type: "date",
//                   }}
//                   required
//                 />
//               </Grid>
//               <Grid item xs={1}></Grid>
//               <Grid item xs={1}></Grid>
//               {/*From*/}
//               <Grid item xs={2}>
//                 <Typography
//                   gutterBottom
//                   variant="subtitle1"
//                   component="h4"
//                   align="center"
//                   sx={{ textAlign: "left" }}
//                 >
//                   From:
//                 </Typography>
//               </Grid>
//               <Grid item xs={2}>
//                 <TextField
//                   size="small"
//                   sx={{ width: "110%", height: "3ch", p: 0 }}
//                   type="text"
//                   label="From"
//                   required
//                 />
//               </Grid>
//               <Grid
//                 item
//                 xs={1}
//                 sx={{ borderRight: "1px solid #eeeeee" }}
//               ></Grid>
//               <Grid item xs={1} sx={{ borderLeft: "1px solid #eeeeee" }}></Grid>
//               {/*To*/}
//               <Grid item xs={2}>
//                 <Typography
//                   gutterBottom
//                   variant="subtitle1"
//                   component="h4"
//                   align="center"
//                   sx={{ textAlign: "left" }}
//                 >
//                   To:
//                 </Typography>
//               </Grid>
//               <Grid item xs={2}>
//                 <TextField
//                   size="small"
//                   sx={{ width: "110%", height: "3ch", p: 0 }}
//                   type="text"
//                   label="To"
//                   required
//                 />
//               </Grid>
//               <Grid item xs={1}></Grid>
//               <Grid item xs={1}></Grid>
//               {/*Departure Time*/}
//               <Grid item xs={2}>
//                 <Typography
//                   gutterBottom
//                   variant="subtitle1"
//                   component="h4"
//                   align="center"
//                   sx={{ textAlign: "left" }}
//                 >
//                   Departure Time:
//                 </Typography>
//               </Grid>
//               <Grid item xs={2}>
//                 <TextField
//                   size="small"
//                   sx={{ width: "110%", height: "3ch", p: 0 }}
//                   type="time"
//                   required
//                 />
//               </Grid>
//               <Grid
//                 item
//                 xs={1}
//                 sx={{ borderRight: "1px solid #eeeeee" }}
//               ></Grid>
//               <Grid item xs={1} sx={{ borderLeft: "1px solid #eeeeee" }}></Grid>
//               {/*Arrival Time*/}
//               <Grid item xs={2}>
//                 <Typography
//                   gutterBottom
//                   variant="subtitle1"
//                   component="h4"
//                   align="center"
//                   sx={{ textAlign: "left" }}
//                 >
//                   Arrival Time:
//                 </Typography>
//               </Grid>
//               <Grid item xs={2}>
//                 <TextField
//                   size="small"
//                   sx={{ width: "110%", height: "3ch", p: 0 }}
//                   type="time"
//                   required
//                 />
//               </Grid>
//               <Grid item xs={1}></Grid>
//               <Grid item xs={1}></Grid>
//               {/*Departure Terminal*/}
//               <Grid item xs={2}>
//                 <Typography
//                   gutterBottom
//                   variant="subtitle1"
//                   component="h4"
//                   align="center"
//                   sx={{ textAlign: "left" }}
//                 >
//                   Departure Terminal:
//                 </Typography>
//               </Grid>
//               <Grid item xs={2}>
//                 <TextField
//                   size="small"
//                   sx={{ width: "110%", height: "3ch", p: 0 }}
//                   type="number"
//                   required
//                   label="Departure Terminal"
//                 />
//               </Grid>
//               <Grid
//                 item
//                 xs={1}
//                 sx={{ borderRight: "1px solid #eeeeee" }}
//               ></Grid>
//               <Grid item xs={1} sx={{ borderLeft: "1px solid #eeeeee" }}></Grid>
//               {/*Arrival Terminal*/}
//               <Grid item xs={2}>
//                 <Typography
//                   gutterBottom
//                   variant="subtitle1"
//                   component="h4"
//                   align="center"
//                   sx={{ textAlign: "left" }}
//                 >
//                   Arrival Terminal:
//                 </Typography>
//               </Grid>
//               <Grid item xs={2}>
//                 <TextField
//                   size="small"
//                   sx={{ width: "110%", height: "3ch", p: 0 }}
//                   type="number"
//                   label="Arrival Terminal"
//                   required
//                 />
//               </Grid>
//               <Grid item xs={1}></Grid>
//               {/*/--------------------------/*/}
//               <Grid item xs={1}></Grid>
//               {/*First Class Seats*/}
//               <Grid item xs={2}>
//                 <Typography
//                   gutterBottom
//                   variant="subtitle1"
//                   component="h4"
//                   align="center"
//                   sx={{ textAlign: "left" }}
//                 >
//                   First Class Seats:
//                 </Typography>
//               </Grid>
//               <Grid item xs={2}>
//                 <TextField
//                   label="No Of Seats"
//                   size="small"
//                   sx={{ width: "110%", height: "3ch", p: 0 }}
//                   type="number"
//                   required
//                 />
//               </Grid>
//               <Grid item xs={2}>
//                 <TextField
//                   label="Price"
//                   size="small"
//                   sx={{ mx: 2, width: "110%", height: "3ch", p: 0 }}
//                   type="number"
//                   required
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="end">$</InputAdornment>
//                     ),
//                   }}
//                 />
//               </Grid>{" "}
//               <Grid
//                 item
//                 xs={1}
//                 sx={{ borderRight: "1px solid #eeeeee" }}
//               ></Grid>
//               <Grid item xs={4}>
//                 {" "}
//                 <Typography
//                   gutterBottom
//                   variant="subtitle1"
//                   component="h4"
//                   align="center"
//                   sx={{ textAlign: "center" }}
//                 >
//                   Baggage Allowance:
//                 </Typography>
//               </Grid>
//               <Grid item xs={1}></Grid>
//               {/*Business Class Seats*/}
//               <Grid item xs={2}>
//                 <Typography
//                   gutterBottom
//                   variant="subtitle1"
//                   component="h4"
//                   align="center"
//                   sx={{ textAlign: "left" }}
//                 >
//                   Business Class Seats:
//                 </Typography>
//               </Grid>
//               <Grid item xs={2}>
//                 <TextField
//                   label="No Of Seats"
//                   size="small"
//                   sx={{ width: "110%", height: "3ch", p: 0 }}
//                   type="number"
//                   required
//                 />
//               </Grid>
//               <Grid item xs={2}>
//                 <TextField
//                   label="Price"
//                   size="small"
//                   sx={{ mx: 2, width: "110%", height: "3ch", p: 0 }}
//                   type="number"
//                   required
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="end">$</InputAdornment>
//                     ),
//                   }}
//                 />
//               </Grid>
//               <Grid
//                 item
//                 xs={1}
//                 sx={{ borderRight: "1px solid #eeeeee" }}
//               ></Grid>
//               <Grid item xs={4} sx={{ textAlign: "center" }}>
//                 <TextField
//                   size="small"
//                   sx={{ width: "55%", height: "3ch", p: 0 }}
//                   type="number"
//                   required
//                   label="Baggage Allowance"
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="end">kg</InputAdornment>
//                     ),
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={1}></Grid>
//               {/*Economy Class Seats*/}
//               <Grid item xs={2}>
//                 <Typography
//                   gutterBottom
//                   variant="subtitle1"
//                   component="h4"
//                   align="center"
//                   sx={{ textAlign: "left" }}
//                 >
//                   Economy Class Seats:
//                 </Typography>
//               </Grid>
//               <Grid item xs={2}>
//                 <TextField
//                   label="No Of Seats"
//                   size="small"
//                   sx={{ width: "110%", height: "3ch", p: 0 }}
//                   type="number"
//                   required
//                 />
//               </Grid>
//               <Grid item xs={2}>
//                 <TextField
//                   label="Price"
//                   size="small"
//                   sx={{ mx: 2, width: "110%", height: "3ch", p: 0 }}
//                   type="number"
//                   required
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="end">$</InputAdornment>
//                     ),
//                   }}
//                 />
//               </Grid>
//               <Grid
//                 item
//                 xs={1}
//                 sx={{ borderRight: "1px solid #eeeeee" }}
//               ></Grid>
//               <Grid item xs={4}></Grid>
//               <Grid item xs={1}></Grid>
//               <Grid item xs={5} sx={{ textAlign: "center" }}>
//                 <Button
//                   startIcon={<BackspaceRoundedIcon />}
//                   variant="contained"
//                   color="secondary"
//                   sx={{ width: "57%", height: "40px", mx: 7, my: 2 }}
//                 >
//                   Reset
//                 </Button>
//               </Grid>
//               <Grid item xs={5} sx={{ textAlign: "center" }}>
//                 <Button
//                   sx={{ width: "57%", height: "40px", mx: 7, my: 2 }}
//                   endIcon={<SearchRoundedIcon />}
//                   variant="contained"
//                   color="primary"
//                 >
//                   Search
//                 </Button>
//               </Grid>
//               <Grid item xs={1}></Grid>
//             </Grid>
//           </Box>
//         </AccordionDetails>
//       </Accordion>
//     </Box>
//   );
//   {
//     /* <br />
//       {Array.from(myMap).map(([key, value]) => {
//         return (
//           <div>
//             <h2>{key}1 </h2>
//             <h5>{value}2</h5>
//           </div>
//         );
//       })}
//     </div> */
//   }
// }

// // Row.propTypes = {
// //   row: PropTypes.shape({
// //     calories: PropTypes.number.isRequired,
// //     carbs: PropTypes.number.isRequired,
// //     fat: PropTypes.number.isRequired,
// //     history: PropTypes.arrayOf(
// //       PropTypes.shape({
// //         amount: PropTypes.number.isRequired,
// //         customerId: PropTypes.string.isRequired,
// //         date: PropTypes.string.isRequired,
// //       }),
// //     ).isRequired,
// //     name: PropTypes.string.isRequired,
// //     price: PropTypes.number.isRequired,
// //     protein: PropTypes.number.isRequired,
// //     Date: PropTypes.number.isRequired,
// //   }).isRequired,
// // };

// export default function CollapsibleTable() {
//   return (
//     <TableContainer component={Paper}>
//       <Table aria-label="collapsible table">
//         <TableHead>
//           <TableRow>
//             <TableCell />
//             <TableCell >Flight Number</TableCell>
//             <TableCell >From</TableCell>
//             <TableCell >To</TableCell>
//             <TableCell >Arrival Time</TableCell>
//             <TableCell >Departure Time</TableCell>
//             <TableCell >Date</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <Row key={row} row={row} />
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
