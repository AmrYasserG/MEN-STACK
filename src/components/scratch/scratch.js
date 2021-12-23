// import { useState } from "react";
// import { Link } from "react-router-dom";

// import Paper from "@mui/material/Paper";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import axios from "axios";
// import Button from "@mui/material/Button";
// import ResponsiveAppBar from "../ResponsiveAppBar/ResponsiveAppBar";
// // import Button from "@mui/material/Button";
// // import DeleteIcon from "@mui/icons-material/Delete";
// // import EditIcon from "@mui/icons-material/Edit";
// // import AddIcon from "@mui/icons-material/Add";
// // import MuiAlert from "@mui/material/Alert";
// // import Snackbar from "@mui/material/Snackbar";
// // import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
// import UpdateOver from "../UpdateOver/UpdateOver";
// //import "./UserHomepage.css";

// import SearchToReserve from "../SearchToReserve/SearchToReserve.js";
// import { CollapsibleTable } from "../CollapsibleTable/CollapsibleTable";

// const UserHomepage = () => {
//   const [ReturnRows, setReturnRows] = useState([]);
//   const [DepartureRows, setDepartureRows] = useState([]);

//   const [depSelectedRow, updateDepSelectedRow] = useState("");
//   const [depChoosenRow, updateDepChoosenRow] = useState("");

//   const [arrSelectedRow, updateArrSelectedRow] = useState("");
//   const [arrChoosenRow, updateArrChoosenRow] = useState("");

//   const [depclassType, depsetClassType] = useState("");
//   const [arrclassType, arrsetClassType] = useState("");
//   const [numberSeats, setNumberSeats] = useState(0);

//   const [selectPopupButton, setSelectPopupButton] = useState(false);
//   const [selectArPopupButton, setSelectArPopupButton] = useState(false);

//   const [searchOff, setSearchOff] = useState(false);

//   const searchToReserve = (SearchCriteria) => {
//     if (SearchCriteria) {
//       searchDepatureReserve(SearchCriteria);
//       searchArrivalReserve(SearchCriteria);
//       depsetClassType(SearchCriteria.SeatClass);
//       arrsetClassType(SearchCriteria.SeatClass);
//       setNumberSeats(SearchCriteria.SeatsNo);
//     } else {
//       setReturnRows([]);
//       setDepartureRows([]);
//     }
//   };

//   const searchDepatureReserve = async (SearchCriteria) => {
//     await axios
//       .post("http://localhost:3005/flights/searchFlightsToReserve", {
//         From: SearchCriteria.From,
//         To: SearchCriteria.To,
//         Class: SearchCriteria.SeatClass,
//         SeatNo: SearchCriteria.SeatsNo,
//         Date: SearchCriteria.DepartureDate,
//       })
//       .then((result) => {
//         console.log(result.data);
//         setDepartureRows(result.data);
//       });
//   };

//   const searchArrivalReserve = async (SearchCriteria) => {
//     await axios
//       .post("http://localhost:3005/flights/searchFlightsToReserve", {
//         From: SearchCriteria.To,
//         To: SearchCriteria.From,
//         Class: SearchCriteria.SeatClass,
//         SeatNo: SearchCriteria.SeatsNo,
//         Date: SearchCriteria.ReturnDate,
//       })
//       .then((result) => setReturnRows(result.data));
//   };

//   const departureColumns = [
//     { id: "FlightNumber", label: "Flight Number", width: 60 },
//     { id: "From", label: "From", width: 60 },
//     { id: "To", label: "To", width: 60 },
//     { id: "Date", label: "Flight Date", width: 110 },
//     { id: "Class", label: "Class ", width: 60 },
//     { id: "BaggageAllowance", label: "Baggage Allowance", width: 60 },
//   ];
//   const arrivalColumns = [
//     { id: "FlightNumber", label: "Flight Number", width: 60 },
//     { id: "From", label: "From", width: 60 },
//     { id: "To", label: "To", width: 60 },
//     { id: "Date", label: "Flight Date", width: 110 },
//     { id: "Class", label: "Class ", width: 60 },
//     { id: "BaggageAllowance", label: "Baggage Allowance", width: 60 },
//   ];

//   return (
//     <div>
//       <ResponsiveAppBar pages={[]} settings={['profile']} isUser={true} />

//       <Button variant="contained" color="success" style={{ marginLeft: "87%", marginTop: "1%" }}><Link to='/ReservedFlights'
//         state={{ id: "617e93641ff94cd5d2055174" }}> View Reservation </Link></Button>

//       <UpdateOver trigger={selectPopupButton} setTrigger={setSelectPopupButton}>
//         <h1>Flight Details:</h1>
//         <br></br>
//         <label>FlightNumber:</label>
//         <label>{depSelectedRow.FlightNumber}</label>
//         <br></br>
//         <label>From:</label>
//         <label>{depSelectedRow.From}</label>
//         <br></br>
//         <label>To:</label>
//         <label>{depSelectedRow.To}</label>
//         <br></br>
//         <label>Flight Date:</label>
//         <label>{depSelectedRow.Date}</label>
//         <br></br>
//         <label>Departure Time:</label>
//         <label>{depSelectedRow.DepTime}</label>
//         <br></br>
//         <label>Arrival Time:</label>
//         <label>{depSelectedRow.ArrTime}</label>
//         <br></br>
//         <label>Airport Departure Terminal:</label>
//         <label>{depSelectedRow.DepTerminal}</label>
//         <br></br>
//         <label>Airport Arrival Terminal:</label>
//         <label>{depSelectedRow.ArrTerminal}</label>
//         <br></br>
//         <label>Class:</label>
//         <label>{depclassType}</label>
//         <br></br>
//         <label>Price:</label>
//         <label>{depSelectedRow.Price}</label>
//         <br></br>
//         <Button
//           variant="contained"
//           style={{ right: "5%", top: "7%" }}
//           onClick={() => {
//             setSearchOff(false);

//             setSelectPopupButton(false);
//             updateDepChoosenRow(depSelectedRow);
//             console.log(depSelectedRow._id);
//           }}
//         >
//           Select
//         </Button>
//         <Button
//           variant="contained"
//           color="error"
//           style={{ left: "5%", top: "7%" }}
//           onClick={() => {
//             setSearchOff(false);

//             setSelectPopupButton(false);
//           }}
//         >
//           Cancel
//         </Button>
//       </UpdateOver>
//       <UpdateOver
//         trigger={selectArPopupButton}
//         setTrigger={setSelectArPopupButton}
//       >
//         <h1>Flight Details:</h1>
//         <br></br>
//         <label>FlightNumber:</label>
//         <label>{arrSelectedRow.FlightNumber}</label>
//         <br></br>
//         <label>From:</label>
//         <label>{arrSelectedRow.From}</label>
//         <br></br>
//         <label>To:</label>
//         <label>{arrSelectedRow.To}</label>
//         <br></br>
//         <label>Flight Date:</label>
//         <label>{arrSelectedRow.Date}</label>
//         <br></br>
//         <label>Departure Time:</label>
//         <label>{arrSelectedRow.DepTime}</label>
//         <br></br>
//         <label>Arrival Time:</label>
//         <label>{arrSelectedRow.ArrTime}</label>
//         <br></br>
//         <label>Airport Departure Terminal:</label>
//         <label>{arrSelectedRow.DepTerminal}</label>
//         <br></br>
//         <label>Airport Arrival Terminal:</label>
//         <label>{arrSelectedRow.ArrTerminal}</label>
//         <br></br>
//         <label>Class:</label>
//         <label>{arrclassType}</label>
//         <br></br>
//         <label>Price:</label>
//         <label>{arrSelectedRow.Price}</label>
//         <br></br>
//         <Button
//           variant="contained"
//           style={{ right: "5%", top: "7%" }}
//           onClick={() => {
//             setSearchOff(false);
//             setSelectArPopupButton(false);
//             updateArrChoosenRow(arrSelectedRow);
//             //console.log(arrSelectedRow._id);
//           }}
//         >
//           Select
//         </Button>
//         <Button
//           color="error"
//           variant="contained"
//           style={{ left: "5%", top: "7%" }}
//           onClick={() => {
//             setSearchOff(false);
//             setSelectArPopupButton(false);
//           }}
//         >
//           Cancel
//         </Button>
//       </UpdateOver>

//       <div>
//         <SearchToReserve onSearch={searchToReserve} d={searchOff} />
//       </div>
//       <h1>Departure Flights</h1>
//       <Paper sx={{ width: "100%", overflow: "hidden", marginTop: "1%" }}>
//         <TableContainer sx={{ maxHeight: 500 }}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 {departureColumns.map((column) => (
//                   <TableCell
//                     key={column.id}
//                     style={{ width: column.width, textAlign: "center" }}
//                   >
//                     {column.label}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {DepartureRows.map((row) => {
//                 return (
//                   <TableRow
//                     onClick={() => {
//                       setSearchOff(true);
//                       updateDepSelectedRow({
//                         id: row._id,
//                         FlightNumber: row.FlightNumber,
//                         From: row.From,
//                         To: row.To,
//                         Date: row.Date,
//                         DepTime: row.DepartureTime,
//                         ArrTime: row.ArrivalTime,
//                         DepTerminal: row.AirportDepartureTerminal,
//                         ArrTerminal: row.AirportArrivalTerminal,
//                         Price:
//                           depclassType === "First"
//                             ? row.FirstClassPrice
//                             : depclassType === "Economy"
//                               ? row.EconomyClassPrice
//                               : row.BusinessClassPrice,
//                         EconomySeats: row.EconomySeats,
//                         FirstSeats: row.FirstSeats,
//                         BusinessSeats: row.BusinessSeats,
//                         EconomyAvailableSeatsNo: row.EconomyAvailableSeatsNo,
//                         BusinessAvailableSeatsNo: row.BusinessAvailableSeatsNo,
//                         FirstAvailableSeatsNo: row.FirstAvailableSeatsNo
//                       });
//                       setSelectPopupButton(true);
//                     }}
//                     hover
//                     key={row._id}
//                     className={
//                       depChoosenRow.FlightNumber === row.FlightNumber
//                         ? "tableSelected"
//                         : ""
//                     }
//                   >
//                     {departureColumns.map((column) => {
//                       const value = row[column.id];
//                       if (column.id === "Class") {
//                         return (
//                           <TableCell
//                             key={column.id}
//                             sx={{ textAlign: "center" }}
//                           >
//                             {depclassType}
//                           </TableCell>
//                         );
//                       } else {
//                         return (
//                           <TableCell
//                             key={column.id}
//                             sx={{ textAlign: "center" }}
//                           >
//                             {column.format && typeof value === "number"
//                               ? column.format(value)
//                               : value}
//                           </TableCell>
//                         );
//                       }
//                     })}
//                   </TableRow>
//                 );
//               })}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Paper>
//       <CollapsibleTable
//         rows={DepartureRows}
//         isUser
//         setSearchOff={setSearchOff}
//         setSelectArPopupButton={setSelectArPopupButton}
//         updateArrChoosenRow={updateArrChoosenRow}
//         firstClass={arrclassType === "First" ? true : false}
//         economyClass={arrclassType === "Economy" ? true : false}
//         businessClass={arrclassType === "Business" ? true : false}
//       />
//       <br></br>
//       <h1>Arrival Flights</h1>
//       {/* <Paper sx={{ width: "100%", overflow: "hidden", marginTop: "1%" }}>
//         <TableContainer sx={{ maxHeight: 500 }}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 {arrivalColumns.map((column) => (
//                   <TableCell
//                     key={column.id}
//                     style={{ width: column.width, textAlign: "center" }}
//                   >
//                     {column.label}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {ReturnRows.map((row) => {
//                 return (
//                   <TableRow
//                     onClick={() => {
//                       setSearchOff(true);
//                       updateArrSelectedRow({
//                         id: row._id,
//                         FlightNumber: row.FlightNumber,
//                         From: row.From,
//                         To: row.To,
//                         Date: row.Date,
//                         DepTime: row.DepartureTime,
//                         ArrTime: row.ArrivalTime,
//                         DepTerminal: row.AirportDepartureTerminal,
//                         ArrTerminal: row.AirportArrivalTerminal,
//                         Price:
//                           arrclassType === "First"
//                             ? row.FirstClassPrice
//                             : arrclassType === "Economy"
//                               ? row.EconomyClassPrice
//                               : row.BusinessClassPrice,
//                         EconomySeats: row.EconomySeats,
//                         FirstSeats: row.FirstSeats,
//                         BusinessSeats: row.BusinessSeats,
//                         EconomyAvailableSeatsNo: row.EconomyAvailableSeatsNo,
//                         BusinessAvailableSeatsNo: row.BusinessAvailableSeatsNo,
//                         FirstAvailableSeatsNo: row.FirstAvailableSeatsNo
//                       });
//                       setSelectArPopupButton(true);
//                     }}
//                     hover
//                     key={row._id}
//                     className={
//                       arrChoosenRow.FlightNumber === row.FlightNumber
//                         ? "tableSelected"
//                         : ""
//                     }
//                   >
//                     {arrivalColumns.map((column) => {
//                       const value = row[column.id];
//                       if (column.id === "Class") {
//                         return (
//                           <TableCell
//                             key={column.id}
//                             sx={{ textAlign: "center" }}
//                           >
//                             {arrclassType}
//                           </TableCell>
//                         );
//                       } else {
//                         return (
//                           <TableCell
//                             key={column.id}
//                             sx={{ textAlign: "center" }}
//                           >
//                             {column.format && typeof value === "number"
//                               ? column.format(value)
//                               : value}
//                           </TableCell>
//                         );
//                       }
//                     })}
//                   </TableRow>
//                 );
//               })}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Paper> */}
//       <CollapsibleTable
//         rows={ReturnRows}
//         isUser
//         firstClass={arrclassType === "First" ? true : false}
//         economyClass={arrclassType === "Economy" ? true : false}
//         businessClass={arrclassType === "Business" ? true : false}
//       />
//       {!searchOff && <Button
//         disabled={depChoosenRow === "" || arrChoosenRow === ""}
//         variant="contained"
//         style={{ marginLeft: "40%", marginTop: "1%" }}
//       >
//         <Link
//           underline="none"
//           to="/PlaneSeats"
//           state={{
//             depFlight: depChoosenRow,
//             arrFlight: arrChoosenRow,
//             cabin: depclassType,
//             noSeats: parseInt(numberSeats),
//             id: "617e93641ff94cd5d2055174",
//           }}
//         >
//           {" "}
//           Proceed to Seat Selection{" "}
//         </Link>
//       </Button>}
//     </div>
//   );
// };
// export default UserHomepage;

import Grid from "@mui/material/Grid";
import "../planeSeats/planeSeats.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import ResponsiveAppBar from "../ResponsiveAppBar/ResponsiveAppBar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function PlaneSeats() {
  const state = useLocation().state;

  useEffect(() => {console.log(state);
  }, []);

  // const seatsEco = Object.keys(state.depFlight.EconomySeats);
  // const seatsFirst = Object.keys(state.depFlight.FirstSeats);
  // const seatsBusiness = Object.keys(state.depFlight.BusinessSeats);

  // const seats = seatsFirst.concat(seatsBusiness).concat(seatsEco);


  // let [chosenSeats, setChosenSeats] = useState([]);
  // chosenSeats = ['a1','a2'];

  // let blockedSeats = [];
  // if (state.cabin === "Business") 
  //   blockedSeats = getBlockedSeats(state.depFlight.BusinessSeats);

  // if (state.cabin === "First") 
  //   blockedSeats = getBlockedSeats(state.depFlight.FirstSeats);

  // if (state.cabin === "Economy") 
  //   blockedSeats = getBlockedSeats(state.depFlight.EconomySeats);

  // const numOfSeats = [
  //   seatsFirst.length,
  //   seatsBusiness.length,
  //   seatsEco.length,
  // ];

  const seats = ['a1', 'a2', 'a3', 'a4', 'b1', 'b2', 'b3', 'b4'];
  const numOfSeats = [4, 2, 2];
  let blockedSeats = [];
  const cabin = "First";
  const alreadyChosen=['a1', 'a2'];
  const [alreadyChosen2, setalreadyChosen2] = useState(alreadyChosen)
  let [chosenSeats, setChosenSeats] = useState(alreadyChosen2);
  //blockedSeats=blockedSeats.concat(alreadyChosen[0]);

  const returnChosenSeats = () => {
    console.log(chosenSeats);
    console.log(alreadyChosen2);
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

  function handleAlreadyChosen(e){
    let temp =[];
    for(let i = 0 ; i<alreadyChosen2.length ;i++){
      if(e.target.id === alreadyChosen2[i]){
        e.target.style.background = "lightblue"; 
        setChosenSeats([...chosenSeats ,alreadyChosen2[i]])
      }else{
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
    else{
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
      <ResponsiveAppBar pages={[]} isUser={true} settings={['profile']} />

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
                onClick={changeBackground }
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
                    onClick={changeBackground }
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
                  </button>): (
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
      <div className='container2'>
        <Button
          // disabled={ chosenSeats.length !== state.noSeats}
          disabled={chosenSeats.length !== alreadyChosen.length}
          onClick={returnChosenSeats}
          variant="contained"
          className="btn"
          styl

        >
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
      </div>
    </>
  );
}
