import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import DeleteButton from "../DeleteButton/DeleteButton";
import Tooltip from "@mui/material/Tooltip";
import UpdateButton from "../UpdateButton/UpdateButton";
import "./CollapsibleTable.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';

function Row({
  rows,
  row,
  index,
  isAdmin,
  setX,
  setDeletePopupButton,
  setToBeDeletedFlight,
  setUpdPopupButton,
  setEdit_id,
  setEditDepartureTime,
  setEditDepartureTerminal,
  setEditArrivalTime,
  setEditArrivalTerminal,
  setEditDate,
  setEditEconomyClassSeats,
  setEditFirstClassSeats,
  setEditFlight,
  setEditFrom,
  setEditTo,
  setEditBusinessClassSeats,
  setEditBaggageAllowance,
  setEditBusinessClassSeatsPrice,
  setEditFirstClassSeatsPrice,
  setEditEconomyClassSeatsPrice,
  isUser,
  economyClass,
  firstClass,
  businessClass,
  reservation,
  setToBeCanceled,
  setCancelReservationPopupButton,
  FlightsUserDetails,
  state,
  setSelectArPopupButton,

  setSearchOff,
  updateArrChoosenRow,
}) {
  //   const { row } = props;
  const [open, setOpen] = React.useState(false);

  //style={{fontWeight : 'bold'}}
  return (
    <React.Fragment>
      <TableRow
        style={{ backgroundColor: "#F7F7F7" }}
        sx={{ fontWeight: "bold", "& > *": { borderBottom: "unset" } }}
      >
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.FlightNumber}
        </TableCell>
        <TableCell>{row.From}</TableCell>
        <TableCell>{row.To}</TableCell>
        <TableCell>{row.ArrivalTime}</TableCell>
        <TableCell>{row.DepartureTime}</TableCell>
        <TableCell>{row.Date}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            {isAdmin === true ? (
              <Box sx={{ margin: 1 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  component="div"
                ></Typography>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <Tooltip
                        title="Available Seats/All Seats"
                        placement="top"
                      >
                        <TableCell style={{ fontWeight: "bold" }}>
                          Economy Class Seats
                        </TableCell>
                      </Tooltip>
                      <TableCell style={{ fontWeight: "bold" }}>
                        Economy Class Price $
                      </TableCell>
                      <Tooltip
                        title="Available Seats/All Seats"
                        placement="top"
                      >
                        <TableCell style={{ fontWeight: "bold" }}>
                          Business Class Seats
                        </TableCell>
                      </Tooltip>
                      <TableCell style={{ fontWeight: "bold" }}>
                        Business Class Price $
                      </TableCell>
                      <Tooltip
                        title="Available Seats/All Seats"
                        placement="top"
                      >
                        <TableCell style={{ fontWeight: "bold" }}>
                          First Class Seats
                        </TableCell>
                      </Tooltip>
                      <TableCell style={{ fontWeight: "bold" }}>
                        First Class Price $
                      </TableCell>
                      <TableCell style={{ fontWeight: "bold" }}>
                        Airport Departure Terminal
                      </TableCell>
                      <TableCell style={{ fontWeight: "bold" }}>
                        Airport Arrival Terminal
                      </TableCell>
                      <TableCell style={{ fontWeight: "bold" }}>
                        Baggage Allowance (kg)
                      </TableCell>
                      <TableCell>
                        <UpdateButton
                          row={row}
                          setUpdPopupButton={setUpdPopupButton}
                          setEdit_id={setEdit_id}
                          setEditDepartureTime={setEditDepartureTime}
                          setEditDepartureTerminal={setEditDepartureTerminal}
                          setEditArrivalTime={setEditArrivalTime}
                          setEditArrivalTerminal={setEditArrivalTerminal}
                          setEditDate={setEditDate}
                          setEditEconomyClassSeats={setEditEconomyClassSeats}
                          setEditFirstClassSeats={setEditFirstClassSeats}
                          setEditFlight={setEditFlight}
                          setEditFrom={setEditFrom}
                          setEditTo={setEditTo}
                          setEditBusinessClassSeats={setEditBusinessClassSeats}
                          setX={setX}
                          setEditBaggageAllowance={setEditBaggageAllowance}
                          setEditEconomyClassSeats={setEditEconomyClassSeats}
                          setEditBusinessClassSeatsPrice={
                            setEditBusinessClassSeatsPrice
                          }
                          setEditFirstClassSeatsPrice={
                            setEditFirstClassSeatsPrice
                          }
                          setEditEconomyClassSeatsPrice={
                            setEditEconomyClassSeatsPrice
                          }
                        />
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <div id="bloc1" style={{ color: "blue" }}>
                          {row.EconomyAvailableSeatsNo}
                        </div>{" "}
                        <div id="bloc2">{"/" + row.EconomySeatsNo}</div>{" "}
                      </TableCell>
                      <TableCell>{row.EconomyClassPrice}</TableCell>
                      <TableCell>
                        <div id="bloc1" style={{ color: "blue" }}>
                          {row.BusinessAvailableSeatsNo}
                        </div>{" "}
                        <div id="bloc2">{"/" + row.BusinessSeatsNo}</div>{" "}
                      </TableCell>
                      <TableCell>{row.BusinessClassPrice}</TableCell>
                      <TableCell>
                        <div id="bloc1" style={{ color: "blue" }}>
                          {row.FirstAvailableSeatsNo}
                        </div>{" "}
                        <div id="bloc2">{"/" + row.FirstSeatsNo}</div>{" "}
                      </TableCell>
                      <TableCell>{row.FirstClassPrice}</TableCell>
                      <TableCell>{row.AirportDepartureTerminal}</TableCell>
                      <TableCell>{row.AirportArrivalTerminal}</TableCell>
                      <TableCell>{row.BaggageAllowance}</TableCell>
                      <TableCell>
                        <DeleteButton
                          row={row}
                          setX={setX}
                          setDeletePopupButton={setDeletePopupButton}
                          setToBeDeletedFlight={setToBeDeletedFlight}
                        />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>
            ) : (
              <></>
            )}
            {isUser === true ? (
              <Box sx={{ margin: 1 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  component="div"
                ></Typography>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      {economyClass === true ? (
                        <Tooltip
                          title="Available Seats/All Seats"
                          placement="top"
                        >
                          <TableCell style={{ fontWeight: "bold" }}>
                            Economy Class Seats
                          </TableCell>
                        </Tooltip>
                      ) : (
                        <></>
                      )}
                      {economyClass === true ? (
                        <TableCell style={{ fontWeight: "bold" }}>
                          {" "}
                          Economy Class Price $
                        </TableCell>
                      ) : (
                        <></>
                      )}
                      {businessClass === true ? (
                        <Tooltip
                          title="Available Seats/All Seats"
                          placement="top"
                        >
                          <TableCell style={{ fontWeight: "bold" }}>
                            Business Class Seats
                          </TableCell>
                        </Tooltip>
                      ) : (
                        <></>
                      )}
                      {businessClass === true ? (
                        <TableCell style={{ fontWeight: "bold" }}>
                          Business Class Price $
                        </TableCell>
                      ) : (
                        <></>
                      )}
                      {firstClass === true ? (
                        <Tooltip
                          title="Available Seats/All Seats"
                          placement="top"
                        >
                          <TableCell style={{ fontWeight: "bold" }}>
                            First Class Seats
                          </TableCell>
                        </Tooltip>
                      ) : (
                        <></>
                      )}
                      {firstClass === true ? (
                        <TableCell style={{ fontWeight: "bold" }}>
                          First Class Price $
                        </TableCell>
                      ) : (
                        <></>
                      )}
                      <TableCell style={{ fontWeight: "bold" }}>
                        Airport Departure Terminal
                      </TableCell>
                      <TableCell style={{ fontWeight: "bold" }}>
                        Airport Arrival Terminal
                      </TableCell>
                      <TableCell style={{ fontWeight: "bold" }}>
                        Baggage Allowance (kg)
                      </TableCell>
                      <TableCell style={{ fontWeight: "bold" }}>
                        Select
                      </TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      {economyClass === true ? (
                        <TableCell>
                          <div id="bloc1" style={{ color: "blue" }}>
                            {row.EconomyAvailableSeatsNo}
                          </div>{" "}
                          <div id="bloc2">{"/" + row.EconomySeatsNo}</div>{" "}
                        </TableCell>
                      ) : (
                        <></>
                      )}
                      {economyClass === true ? (
                        <TableCell>{row.EconomyClassPrice}</TableCell>
                      ) : (
                        <></>
                      )}
                      {businessClass === true ? (
                        <TableCell>
                          <div id="bloc1" style={{ color: "blue" }}>
                            {row.BusinessAvailableSeatsNo}
                          </div>{" "}
                          <div id="bloc2">{"/" + row.BusinessSeatsNo}</div>{" "}
                        </TableCell>
                      ) : (
                        <></>
                      )}
                      {businessClass === true ? (
                        <TableCell>{row.BusinessClassPrice}</TableCell>
                      ) : (
                        <></>
                      )}
                      {firstClass === true ? (
                        <TableCell>
                          <div id="bloc1" style={{ color: "blue" }}>
                            {row.FirstAvailableSeatsNo}
                          </div>{" "}
                          <div id="bloc2">{"/" + row.FirstSeatsNo}</div>{" "}
                        </TableCell>
                      ) : (
                        <></>
                      )}
                      {firstClass === true ? (
                        <TableCell>{row.FirstClassPrice}</TableCell>
                      ) : (
                        <></>
                      )}
                      <TableCell>{row.AirportDepartureTerminal}</TableCell>
                      <TableCell>{row.AirportArrivalTerminal}</TableCell>
                      <TableCell>{row.BaggageAllowance}</TableCell>
                      <TableCell>
                        <Checkbox
                          // onChange={() => {
                          //   updateArrChoosenRow(row);
                          // }}
                          color="default"
                        />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>
            ) : (
              <></>
            )}
            {reservation === true ? (
              <Box sx={{ margin: 1 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  component="div"
                ></Typography>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell style={{ fontWeight: "bold" }}>
                        Reservation Number
                      </TableCell>
                      <TableCell style={{ fontWeight: "bold" }}>
                        Class
                      </TableCell>
                      <TableCell style={{ fontWeight: "bold" }}>
                        Airport Departure Terminal
                      </TableCell>
                      <TableCell style={{ fontWeight: "bold" }}>
                        Airport Arrival Terminal
                      </TableCell>
                      <TableCell style={{ fontWeight: "bold" }}>
                        Baggage Allowance (kg)
                      </TableCell>
                      <TableCell style={{ fontWeight: "bold" }}>
                        Reserved Seats
                      </TableCell>
                      <TableCell style={{ fontWeight: "bold" }}>
                        Total Reservation Price
                      </TableCell>
                      <TableCell>
                        <IconButton
                          variant="contained"
                          color="primary"
                          onClick={() => {}}
                        >
                          <Link
                            to="/editDeparture"
                            style={{textDecoration : 'none' , color : 'none'} }
                            state={{
                              FlightsUserDetails: FlightsUserDetails[index],
                              AllFlightsUserDetails: FlightsUserDetails,
                              AllMyFlights:rows,
                              rows:row,
                              id : state.id
                            }}
                          >
                            <EditIcon />
                          </Link>
                          
                        </IconButton>
                      </TableCell>
                      <TableCell>
                        <IconButton
                          variant="contained"
                          color="primary"
                          onClick={() => {
                            
                          }}
                        >
                          <EmailIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        {FlightsUserDetails[index].ReservationNumber}
                      </TableCell>
                      <TableCell>
                        {FlightsUserDetails[index].ChosenCabin}
                      </TableCell>
                      <TableCell>{row.AirportDepartureTerminal}</TableCell>
                      <TableCell>{row.AirportArrivalTerminal}</TableCell>
                      <TableCell>{row.BaggageAllowance}</TableCell>
                      <TableCell>
                        {FlightsUserDetails[index].SeatsReserved.map(
                          (SeatNumber) => {
                            return <span key={SeatNumber}>{SeatNumber} </span>;
                          }
                        )}
                      </TableCell>
                      <TableCell>
                        {FlightsUserDetails[index].TotalReservationPrice}
                      </TableCell>
                      <TableCell>
                        <IconButton
                          variant="contained"
                          color="error"
                          onClick={() => {
                            setCancelReservationPopupButton(true);
                            setToBeCanceled(index);
                          }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                      
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>
            ) : (
              <></>
            )}
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export function CollapsibleTable({
  rows,
  isAdmin,
  setX,
  setDeletePopupButton,
  setToBeDeletedFlight,
  setUpdPopupButton,
  setEdit_id,
  setEditDepartureTime,
  setEditDepartureTerminal,
  setEditArrivalTime,
  setEditArrivalTerminal,
  setEditDate,
  setEditEconomyClassSeats,
  setEditFirstClassSeats,
  setEditFlight,
  setEditFrom,
  setEditTo,
  setEditBusinessClassSeats,
  setEditBaggageAllowance,
  setEditBusinessClassSeatsPrice,
  setEditFirstClassSeatsPrice,
  setEditEconomyClassSeatsPrice,
  isUser,
  economyClass,
  businessClass,
  firstClass,
  reservation,
  setCancelReservationPopupButton,
  setToBeCanceled,
  reservationInfo,
  FlightsUserDetails,
  setSearchOff,
  setSelectArPopupButton,
  updateArrChoosenRow,
  state
}) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            {" "}
            <TableCell />
            <TableCell style={{ fontWeight: "bold" }}>Flight Number</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>From</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>To</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Arrival Time</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Departure Time</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <Row
              index={index}
              row={row}
              isAdmin={isAdmin}
              businessClass={businessClass}
              isUser={isUser}
              rows={rows}
              economyClass={economyClass}
              firstClass={firstClass}
              reservation={reservation}
              rows={rows}
              setX={setX}
              setDeletePopupButton={setDeletePopupButton}
              setToBeDeletedFlight={setToBeDeletedFlight}
              setUpdPopupButton={setUpdPopupButton}
              setEdit_id={setEdit_id}
              setEditDepartureTime={setEditDepartureTime}
              setEditDepartureTerminal={setEditDepartureTerminal}
              setEditArrivalTime={setEditArrivalTime}
              setEditArrivalTerminal={setEditArrivalTerminal}
              setEditDate={setEditDate}
              setEditEconomyClassSeats={setEditEconomyClassSeats}
              setEditFirstClassSeats={setEditFirstClassSeats}
              setEditFlight={setEditFlight}
              setEditFrom={setEditFrom}
              setEditTo={setEditTo}
              setEditBusinessClassSeats={setEditBusinessClassSeats}
              setEditBaggageAllowance={setEditBaggageAllowance}
              setEditBusinessClassSeatsPrice={setEditBusinessClassSeatsPrice}
              setEditFirstClassSeatsPrice={setEditFirstClassSeatsPrice}
              setEditEconomyClassSeatsPrice={setEditEconomyClassSeatsPrice}
              setToBeCanceled={setToBeCanceled}
              setCancelReservationPopupButton={setCancelReservationPopupButton}
              reservationInfo={reservationInfo}
              FlightsUserDetails={FlightsUserDetails}
              setSearchOff={setSearchOff}
              setSelectArPopupButton={setSelectArPopupButton}
              updateArrChoosenRow={updateArrChoosenRow}
              state = {state}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// export function Row2({ row, isAdmin, EditContent, DeleteContent }) {
//   //   const { row } = props;
//   const [open, setOpen] = React.useState(false);

//   //style={{fontWeight : 'bold'}}
//   return (
//     <React.Fragment>
//       <TableRow
//         style={{ backgroundColor: "#F7F7F7" }}
//         sx={{ fontWeight: "bold", "& > *": { borderBottom: "unset" } }}
//       >
//         <TableCell>
//           <IconButton
//             aria-label="expand row"
//             size="small"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//           </IconButton>
//         </TableCell>
//         <TableCell component="th" scope="row">
//           {row.FlightNumber}
//         </TableCell>
//         <TableCell>{row.From}</TableCell>
//         <TableCell>{row.To}</TableCell>
//         <TableCell>{row.ArrivalTime}</TableCell>
//         <TableCell>{row.DepartureTime}</TableCell>
//         <TableCell>{row.Date}</TableCell>
//       </TableRow>
//       <TableRow>
//         <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
//           <Collapse in={open} timeout="auto" unmountOnExit>
//             <Box sx={{ margin: 1, float: "left", width: "94%" }}>
//               <Typography
//                 variant="h6"
//                 gutterBottom
//                 component="div"
//               ></Typography>
//               <Table size="small">
//                 <TableHead>
//                   <TableRow>
//                     <Tooltip title="Available Seats/All Seats" placement="top">
//                       <TableCell style={{ fontWeight: "bold" }}>
//                         Economy Class Seats
//                       </TableCell>
//                     </Tooltip>
//                     <TableCell style={{ fontWeight: "bold" }}>
//                       {" "}
//                       Economy Class Price ($)
//                     </TableCell>
//                     <Tooltip title="Available Seats/All Seats" placement="top">
//                       <TableCell style={{ fontWeight: "bold" }}>
//                         Business Class Seats
//                       </TableCell>
//                     </Tooltip>
//                     <TableCell style={{ fontWeight: "bold" }}>
//                       Business Class Price ($)
//                     </TableCell>
//                     <Tooltip title="Available Seats/All Seats" placement="top">
//                       <TableCell style={{ fontWeight: "bold" }}>
//                         First Class Seats
//                       </TableCell>
//                     </Tooltip>
//                     <TableCell style={{ fontWeight: "bold" }}>
//                       First Class Price ($)
//                     </TableCell>
//                     <TableCell style={{ fontWeight: "bold" }}>
//                       Airport Departure Terminal
//                     </TableCell>
//                     <TableCell style={{ fontWeight: "bold" }}>
//                       Airport Arrival Terminal
//                     </TableCell>
//                     <TableCell style={{ fontWeight: "bold" }}>
//                       Baggage Allowance (kg)
//                     </TableCell>
//                     <TableCell>
//                       <Tooltip title="Edit" sx={{ m: 1 }}>
//                         {EditContent}
//                       </Tooltip>
//                     </TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   <TableRow>
//                     <TableCell>
//                       <div id="bloc1" style={{ color: "blue" }}>
//                         {row.EconomyAvailableSeatsNo}
//                       </div>{" "}
//                       <div id="bloc2">{"/" + row.EconomySeatsNo}</div>{" "}
//                     </TableCell>
//                     <TableCell>{row.EconomyClassPrice}</TableCell>
//                     <TableCell>
//                       <div id="bloc1" style={{ color: "blue" }}>
//                         {row.BusinessAvailableSeatsNo}
//                       </div>{" "}
//                       <div id="bloc2">{"/" + row.BusinessSeatsNo}</div>{" "}
//                     </TableCell>
//                     <TableCell>{row.BusinessClassPrice}</TableCell>
//                     <TableCell>
//                       <div id="bloc1" style={{ color: "blue" }}>
//                         {row.FirstAvailableSeatsNo}
//                       </div>{" "}
//                       <div id="bloc2">{"/" + row.FirstSeatsNo}</div>{" "}
//                     </TableCell>
//                     <TableCell>{row.FirstClassPrice}</TableCell>
//                     <TableCell>{row.AirportDepartureTerminal}</TableCell>
//                     <TableCell>{row.AirportArrivalTerminal}</TableCell>
//                     <TableCell>{row.BaggageAllowance}</TableCell>
//                     <TableCell>
//                       <Tooltip title="Delete" sx={{ m: 1 }}>
//                         {DeleteContent}
//                       </Tooltip>
//                     </TableCell>
//                   </TableRow>
//                 </TableBody>
//               </Table>
//             </Box>
//           </Collapse>
//         </TableCell>
//       </TableRow>
//     </React.Fragment>
//   );
// }

export function Row2({ row, isAdmin, EditContent, DeleteContent }) {
  //   const { row } = props;
  const [open, setOpen] = React.useState(false);

  //style={{fontWeight : 'bold'}}
  return (
    <React.Fragment>
      <TableRow
        style={{ backgroundColor: "#F7F7F7" }}
        sx={{ fontWeight: "bold", "& > *": { borderBottom: "unset" } }}
      >
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.FlightNumber}
        </TableCell>
        <TableCell>{row.From}</TableCell>
        <TableCell>{row.To}</TableCell>
        <TableCell>{row.ArrivalTime}</TableCell>
        <TableCell>{row.DepartureTime}</TableCell>
        <TableCell>{row.Date}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1, float: "left", width: "94%" }}>
              <Typography
                variant="h6"
                gutterBottom
                component="div"
              ></Typography>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <Tooltip title="Available Seats/All Seats" placement="top">
                      <TableCell style={{ fontWeight: "bold" }}>
                        Economy Class Seats
                      </TableCell>
                    </Tooltip>
                    <TableCell style={{ fontWeight: "bold" }}>
                      {" "}
                      Economy Class Price ($)
                    </TableCell>
                    <Tooltip title="Available Seats/All Seats" placement="top">
                      <TableCell style={{ fontWeight: "bold" }}>
                        Business Class Seats
                      </TableCell>
                    </Tooltip>
                    <TableCell style={{ fontWeight: "bold" }}>
                      Business Class Price ($)
                    </TableCell>
                    <Tooltip title="Available Seats/All Seats" placement="top">
                      <TableCell style={{ fontWeight: "bold" }}>
                        First Class Seats
                      </TableCell>
                    </Tooltip>
                    <TableCell style={{ fontWeight: "bold" }}>
                      First Class Price ($)
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold" }}>
                      Airport Departure Terminal
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold" }}>
                      Airport Arrival Terminal
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold" }}>
                      Baggage Allowance (kg)
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div id="bloc1" style={{ color: "blue" }}>
                        {row.EconomyAvailableSeatsNo}
                      </div>{" "}
                      <div id="bloc2">{"/" + row.EconomySeatsNo}</div>{" "}
                    </TableCell>
                    <TableCell>{row.EconomyClassPrice}</TableCell>
                    <TableCell>
                      <div id="bloc1" style={{ color: "blue" }}>
                        {row.BusinessAvailableSeatsNo}
                      </div>{" "}
                      <div id="bloc2">{"/" + row.BusinessSeatsNo}</div>{" "}
                    </TableCell>
                    <TableCell>{row.BusinessClassPrice}</TableCell>
                    <TableCell>
                      <div id="bloc1" style={{ color: "blue" }}>
                        {row.FirstAvailableSeatsNo}
                      </div>{" "}
                      <div id="bloc2">{"/" + row.FirstSeatsNo}</div>{" "}
                    </TableCell>
                    <TableCell>{row.FirstClassPrice}</TableCell>
                    <TableCell>{row.AirportDepartureTerminal}</TableCell>
                    <TableCell>{row.AirportArrivalTerminal}</TableCell>
                    <TableCell>{row.BaggageAllowance}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
            <Box>
              <Tooltip title="Edit" sx={{ m: 1 }}>
                {EditContent}
              </Tooltip>
              <br />
              <Tooltip title="Delete" sx={{ m: 1 }}>
                {DeleteContent}
              </Tooltip>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
