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
