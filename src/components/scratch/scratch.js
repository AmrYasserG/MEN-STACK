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

//      <Link to={{
// pathname: '/ReservedFlights',
// state: [{id: "618ba4fffe6644777d199219"}],
// }}
// style= {{backgroundColor: "#111"}}> Your Page </Link>

import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
//import DeleteIcon from "@mui/icons-material/Delete";
//import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import { Style } from "@mui/icons-material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
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

export default function ResponsiveGrid() {
  // function changeBackgroundTemp(e) {
  //     e.target.style.background = '#E0E0E0';
  //   }
  //   function backToNormal(e) {
  //     e.target.style.background = 'white';
  //   }
  function changeBackground(e) {
    //console.log(e.target.id);
    if (e.target.style.background !== "white") {
      e.target.style.background = "white";
      let newChosenSeats = [];
      for (let i = 0; i < chosenSeats.length; i++) {
        if (chosenSeats[i] !== e.target.id) newChosenSeats.push(chosenSeats[i]);
      }
      chosenSeats = newChosenSeats;
    } else {
      e.target.style.background = "#E0E0E0";
      chosenSeats.push(e.target.id);
    }
    console.log(chosenSeats);
  }

  return (
    <div className="container">
      {/* <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1} columns={{ xs: 12, sm: 12 }}>
          {seats.map((seat) => (
            <Grid item key={seat}>
              <Item
                id={seat}
                onClick={changeBackground}
                style={{ cursor: "pointer" }}
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        maxWidth: "80%",
        flexGrow: 1,
        marginTop: "10%",
      }}
    >


      <Grid container spacing={2}>
        <Grid item xs={12} sm container>
          <Grid item container spacing={2}>
            <Grid
              item
              container
              direction="column"
              xs={3}
              style={{ color: "white", backgroundColor: "#111" }}
            >
              <Typography gutterBottom variant="subtitle1" component="div">
                Standard license
              </Typography>
              <Typography variant="body2" gutterBottom>
                Full resolution 1920x1080 • JPEG
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1030114
              </Typography>
            </Grid>
            <Grid
              item
              container
              direction="column"
              xs={3}
              style={{ color: "white", backgroundColor: "#333" }}
            >
              <Typography sx={{ cursor: "pointer" }} variant="body2">
                Remove
              </Typography>
            </Grid>
            <Grid
              item
              container
              direction="column"
              xs={5}
              style={{ color: "white", backgroundColor: "#777" }}
            ></Grid>
            <Grid
              item
              xs={1}
              container
              direction="column"
              style={{ color: "white", backgroundColor: "#333" }}
            >
              <Button
                variant="contained"
                color="error"
                style={{ right: "16%", top: "3%" }}
              >
                {seat}
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box> */}
    </div>
  );
}
