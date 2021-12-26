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
import EmailIcon from "@mui/icons-material/Email";
import editFlightIcon from './edit.png';

function Row({
  rows,
  row,
  index,
  isUser,
  economyClass,
  firstClass,
  businessClass,
  reservation,
  setToBeCanceled,
  setCancelReservationPopupButton,
  setSendIternaryPopupButton,
  setToBeMailed,
  FlightsUserDetails,
  setSelectArPopupButton,
  setSearchOff,
  updateArrChoosenRow,
  state,
  isDep,
  selectFlight,
  priceDiff,
  editFlight
}) {
  const [open, setOpen] = React.useState(false);

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
                      ) : null
                      }
                      {economyClass === true ? (
                        <TableCell style={{ fontWeight: "bold" }}>
                          {" "}
                          Economy Class Price $
                        </TableCell>
                      ) : null
                      }
                      {businessClass === true ? (
                        <Tooltip
                          title="Available Seats/All Seats"
                          placement="top"
                        >
                          <TableCell style={{ fontWeight: "bold" }}>
                            Business Class Seats
                          </TableCell>
                        </Tooltip>
                      ) : null
                      }
                      {businessClass === true ? (
                        <TableCell style={{ fontWeight: "bold" }}>
                          Business Class Price $
                        </TableCell>
                      ) : null
                      }
                      {firstClass === true ? (
                        <Tooltip
                          title="Available Seats/All Seats"
                          placement="top"
                        >
                          <TableCell style={{ fontWeight: "bold" }}>
                            First Class Seats
                          </TableCell>
                        </Tooltip>
                      ) : null
                      }
                      {firstClass === true ? (
                        <TableCell style={{ fontWeight: "bold" }}>
                          First Class Price $
                        </TableCell>
                      ) : null
                      }
                      <TableCell style={{ fontWeight: "bold" }}>
                        Airport Departure Terminal
                      </TableCell>
                      <TableCell style={{ fontWeight: "bold" }}>
                        Airport Arrival Terminal
                      </TableCell>
                      <TableCell style={{ fontWeight: "bold" }}> Trip Duration</TableCell>
                      <TableCell style={{ fontWeight: "bold" }}>
                        Baggage Allowance (kg)
                      </TableCell>
                      {editFlight===true? (<TableCell style={{ fontWeight: "bold" }}> Price Difference</TableCell>):null}
                      <TableCell style={{ fontWeight: "bold" }}>
                        Select
                      </TableCell>
                      
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
                      ) : null
                      }
                      {economyClass === true ? (
                        <TableCell>{row.EconomyClassPrice}</TableCell>
                      ) : null
                      }
                      {businessClass === true ? (
                        <TableCell>
                          <div id="bloc1" style={{ color: "blue" }}>
                            {row.BusinessAvailableSeatsNo}
                          </div>{" "}
                          <div id="bloc2">{"/" + row.BusinessSeatsNo}</div>{" "}
                        </TableCell>
                      ) : null
                      }
                      {businessClass === true ? (
                        <TableCell>{row.BusinessClassPrice}</TableCell>
                      ) : null
                      }
                      {firstClass === true ? (
                        <TableCell>
                          <div id="bloc1" style={{ color: "blue" }}>
                            {row.FirstAvailableSeatsNo}
                          </div>{" "}
                          <div id="bloc2">{"/" + row.FirstSeatsNo}</div>{" "}
                        </TableCell>
                      ) : null
                      }
                      {firstClass === true ? (
                        <TableCell>{row.FirstClassPrice}</TableCell>
                      ) : null
                      }
                      <TableCell>{row.AirportDepartureTerminal}</TableCell>
                      <TableCell>{row.AirportArrivalTerminal}</TableCell>
                      <TableCell>{row.TripDuration}</TableCell>
                      <TableCell>{row.BaggageAllowance}</TableCell>
                      {editFlight===true? (
                        <TableCell>
                        {(firstClass === true
                                ? row.FirstClassPrice
                                : economyClass === true
                                  ? row.EconomyClassPrice
                                  : row.BusinessClassPrice) -
                                (state.FlightsUserDetails.ChosenCabin === "First"
                                  ? state.rows.FirstClassPrice
                                  : state.FlightsUserDetails.ChosenCabin ===
                                    "Economy"
                                    ? state.rows.EconomyClassPrice
                                    : state.rows.BusinessClassPrice)}
                        </TableCell>
                      ):null}
                      <TableCell>
                        <Checkbox
                          onChange={() => {
                            selectFlight(row, isDep);
                          }}
                          color="default"
                        />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>
            ) : null
            }
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
                      <TableCell style={{ fontWeight: "bold" }}>Edit Seats</TableCell>
                      <TableCell style={{ fontWeight: "bold" }}>Edit Flight</TableCell>
                      <Tooltip title="Send Email" placement="top">
                      <TableCell>
                        <IconButton
                          variant="contained"
                          color="primary"
                          onClick={() => {
                            setSendIternaryPopupButton(true);
                            setToBeMailed(index);
                          }}
                        >
                          <EmailIcon />
                        </IconButton>
                      </TableCell>
                      </Tooltip>
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
                      <Tooltip title="Edit Seats" placement="top">
                      <TableCell>
                        <IconButton
                          variant="contained"
                          color="primary"
                          onClick={() => { }}
                        >
                          <Link
                            to="/planeSeatsAfterEdit"
                            style={{ textDecoration: "none" }}
                            state={{
                              FlightsUserDetails: FlightsUserDetails[index],
                              rows: row,
                              id: state.id,
                              editFlight: false,
                              newClass:FlightsUserDetails[index].ChosenCabin
                            }}
                          >
                            <EditIcon />
                          </Link>
                        </IconButton>
                      </TableCell>
                      </Tooltip>

                      
                      <Tooltip title="Edit Flight" placement="top">
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
                      </Tooltip>


                          
                          <Tooltip title="Delete Reservation" placement="top">
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
                      </Tooltip>
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>
            ) : null
            }
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export function CollapsibleTable({
  rows,
  isAdmin,
  isUser,
  economyClass,
  firstClass,
  businessClass,
  reservation,
  setCancelReservationPopupButton,
  setToBeCanceled,
  setSendIternaryPopupButton,
  setToBeMailed,
  reservationInfo,
  FlightsUserDetails,
  setSelectArPopupButton,
  setSearchOff,
  updateArrChoosenRow,
  state,
  isDep,
  selectFlight,
  priceDiff,
  editFlight
}) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            
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
              key={index}
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
              setCancelReservationPopupButton = {setCancelReservationPopupButton}
              setToBeCanceled = {setToBeCanceled}
              FlightsUserDetails={FlightsUserDetails}
              setSearchOff={setSearchOff}
              setSelectArPopupButton={setSelectArPopupButton}
              updateArrChoosenRow={updateArrChoosenRow}
              setSendIternaryPopupButton = {setSendIternaryPopupButton}
              setToBeMailed = {setToBeMailed}
              state={state}
              isDep={isDep}
              selectFlight={selectFlight}
              priceDiff={priceDiff}
              editFlight={editFlight}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


export function Row2({ row, isAdmin, EditContent, DeleteContent, rownumber }) {
  //   const { row } = props;
  const [open, setOpen] = React.useState(false);
  const from24to12 = (date) => {
    let temp = date.split(":");
    return `${Number(temp[0]) % 12}:${temp[1]} ${
      Number(temp[0]) < 12 ? "AM" : "PM"
    }`;
  };

  const dateFormatter = (date) => {
    if (date) {
      let temp = date.split("-");
      return `${temp[1]} / ${temp[2]} / ${temp[0]}`;
    }
    return date;
  };
  return (
    <React.Fragment>
      <TableRow
        sx={{ fontWeight: "bold", "& > *": { borderBottom: "unset" } }}
        style={
          rownumber % 2 === 0
            ? { backgroundColor: "#F1F1F1" }
            : { backgroundColor: "#FEFEFE" }
        }
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
        <TableCell component="th" scope="row" sx={{ textAlign: "center" }}>
          {row.FlightNumber}
        </TableCell>
        <TableCell sx={{ textAlign: "center" }}>{row.From}</TableCell>
        <TableCell sx={{ textAlign: "center" }}>{row.To}</TableCell>
        <Tooltip title="MM/DD/YYYY" placement="top" arrow>
          <TableCell sx={{ textAlign: "center" }}>
            {dateFormatter(row.Date)}
          </TableCell>
        </Tooltip>
        <TableCell sx={{ textAlign: "center" }}>
          {from24to12(row.DepartureTime)}
        </TableCell>
        <Tooltip title="MM/DD/YYYY" placement="top" arrow>
          <TableCell sx={{ textAlign: "center" }}>
            {dateFormatter(row.ArrivalDate)}
          </TableCell>
        </Tooltip>
        <TableCell sx={{ textAlign: "center" }}>
          {from24to12(row.ArrivalTime)}
        </TableCell>
        <TableCell sx={{ textAlign: "center" }}>{row.TripDuration}</TableCell>
      </TableRow>
      <TableRow sx={{ backgroundColor: "#FDFDFD" }}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={9}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ m: 1, float: "left", width: "100%" }}>
              <Typography
                variant="h6"
                gutterBottom
                component="div"
              ></Typography>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <Tooltip
                      arrow
                      title="Available Seats/All Seats"
                      placement="top"
                    >
                      <TableCell style={{ fontWeight: "bold" }}>
                        Economy Class Seats
                      </TableCell>
                    </Tooltip>
                    <TableCell style={{ fontWeight: "bold" }}>
                      {" "}
                      Economy Class Price ($)
                    </TableCell>
                    <Tooltip
                      arrow
                      title="Available Seats/All Seats"
                      placement="top"
                    >
                      <TableCell style={{ fontWeight: "bold" }}>
                        Business Class Seats
                      </TableCell>
                    </Tooltip>
                    <TableCell style={{ fontWeight: "bold" }}>
                      Business Class Price ($)
                    </TableCell>
                    <Tooltip
                      arrow
                      title="Available Seats/All Seats"
                      placement="top"
                    >
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
                    <TableCell>
                      {" "}
                      <Tooltip arrow title="Edit" sx={{ my: 1 }}>
                        {EditContent}
                      </Tooltip>
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
                      {" "}
                      <Tooltip arrow title="Delete" sx={{ my: 1 }}>
                        {DeleteContent}
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}