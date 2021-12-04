import * as React from "react";
import PropTypes from "prop-types";
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
import Button from "@mui/material/Button";
import DeleteButton from "../DeleteButton/DeleteButton";
import Tooltip from "@mui/material/Tooltip";

function Row({
  row,
  isAdmin,
  setX,
  setDeletePopupButton,
  setToBeDeletedFlight,
  setUpdPopupButton,
  setEdit_id,
  setEditDepartureTime,
  setEditDepartureTerminal,
  setEditArrivalTime,
  setEditArrivalTermina,
  setEditDate,
  setEditEconomyClassSeats,
  setEditFirstClassSeats,
  setEditFlight,
  setEditFrom,
  setEditTo,
  setEditBusinessClassSeats,
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
        <TableCell>{row.dDate}</TableCell>
        <TableCell>{row.rDate}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography
                variant="h6"
                gutterBottom
                component="div"
              ></Typography>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell style={{ fontWeight: "bold" }}>
                      Departure Time
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold" }}>
                      Arrival Time
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold" }}>
                      Airport Departure Terminal
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold" }}>
                      Airport Arrival Terminal
                    </TableCell>
                    <Tooltip title="Available Seats/All Seats" placement="top">
                      <TableCell style={{ fontWeight: "bold" }}>
                        Economy Class Seats
                      </TableCell>
                    </Tooltip>
                    <TableCell style={{ fontWeight: "bold" }}>
                      {" "}
                      Economy Class Price $
                    </TableCell>
                    <Tooltip title="Available Seats/All Seats" placement="top">
                      <TableCell style={{ fontWeight: "bold" }}>
                        Business Class Seats
                      </TableCell>
                    </Tooltip>
                    <TableCell style={{ fontWeight: "bold" }}>
                      Business Class Price $
                    </TableCell>
                    <Tooltip title="Available Seats/All Seats" placement="top">
                      <TableCell style={{ fontWeight: "bold" }}>
                        First Class Seats
                      </TableCell>
                    </Tooltip>
                    <TableCell style={{ fontWeight: "bold" }}>
                      First Class Price $
                    </TableCell>

                    <TableCell style={{ fontWeight: "bold" }}>
                      Baggage Allowance (kg)
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell style={{ fontWeight: "bold" }}>
                      {" "}
                      Departure
                    </TableCell>
                    <TableCell>{row.dDepartureTime}</TableCell>
                    <TableCell>{row.dArrivalTime}</TableCell>
                    <TableCell>{row.dAirportDepartureTerminal}</TableCell>
                    <TableCell>{row.dAirportArrivalTerminal}</TableCell>
                    <TableCell>
                      <div id="bloc1" style={{ color: "blue" }}>
                        {row.dEconomyAvailableSeatsNo}
                      </div>{" "}
                      <div id="bloc2">{"/" + row.dEconomySeatsNo}</div>{" "}
                    </TableCell>
                    <TableCell>{row.dEconomyClassPrice}</TableCell>
                    <TableCell>
                      <div id="bloc1" style={{ color: "blue" }}>
                        {row.dBusinessAvailableSeatsNo}
                      </div>{" "}
                      <div id="bloc2">{"/" + row.dBusinessSeatsNo}</div>{" "}
                    </TableCell>
                    <TableCell>{row.dBusinessClassPrice}</TableCell>
                    <TableCell>
                      <div id="bloc1" style={{ color: "blue" }}>
                        {row.dFirstAvailableSeatsNo}
                      </div>{" "}
                      <div id="bloc2">{"/" + row.dFirstSeatsNo}</div>{" "}
                    </TableCell>
                    <TableCell>{row.dFirstClassPrice}</TableCell>
                    <TableCell>{row.dBaggageAllowance}</TableCell>

                    {/* {isAdmin === true ? (
                      <TableCell>
                        <UpdateButton
                          row={row}
                          setUpdPopupButton={setUpdPopupButton}
                          setEdit_id={setEdit_id}
                          setEditDepartureTime={setEditDepartureTime}
                          setEditDepartureTerminal={setEditDepartureTerminal}
                          setEditArrivalTime={setEditArrivalTime}
                          setEditArrivalTermina={setEditArrivalTermina}
                          setEditDate={setEditDate}
                          setEditEconomyClassSeats={setEditEconomyClassSeats}
                          setEditFirstClassSeats={setEditFirstClassSeats}
                          setEditFlight={setEditFlight}
                          setEditFrom={setEditFrom}
                          setEditTo={setEditTo}
                          setEditBusinessClassSeats={setEditBusinessClassSeats}
                          setX={setX}
                        />
                      </TableCell>
                    ) : (
                      <></>
                    )} */}
                  </TableRow>

                  <TableRow>
                    <TableCell style={{ fontWeight: "bold" }}>
                      {" "}
                      Return
                    </TableCell>
                    <TableCell>{row.rDepartureTime}</TableCell>
                    <TableCell>{row.rArrivalTime}</TableCell>
                    <TableCell>{row.rAirportDepartureTerminal}</TableCell>
                    <TableCell>{row.rAirportArrivalTerminal}</TableCell>
                    <TableCell>
                      <div id="bloc1" style={{ color: "blue" }}>
                        {row.rEconomyAvailableSeatsNo}
                      </div>{" "}
                      <div id="bloc2">{"/" + row.rEconomySeatsNo}</div>{" "}
                    </TableCell>
                    <TableCell>{row.rEconomyClassPrice}</TableCell>
                    <TableCell>
                      <div id="bloc1" style={{ color: "blue" }}>
                        {row.rBusinessAvailableSeatsNo}
                      </div>{" "}
                      <div id="bloc2">{"/" + row.rBusinessSeatsNo}</div>{" "}
                    </TableCell>
                    <TableCell>{row.rBusinessClassPrice}</TableCell>
                    <TableCell>
                      <div id="bloc1" style={{ color: "blue" }}>
                        {row.rFirstAvailableSeatsNo}
                      </div>{" "}
                      <div id="bloc2">{"/" + row.rFirstSeatsNo}</div>{" "}
                    </TableCell>
                    <TableCell>{row.rFirstClassPrice}</TableCell>
                    <TableCell>{row.rBaggageAllowance}</TableCell>
                    {isAdmin === true ? (
                      <TableCell>
                        <DeleteButton
                          row={row}
                          setX={setX}
                          setDeletePopupButton={setDeletePopupButton}
                          setToBeDeletedFlight={setToBeDeletedFlight}
                        />
                      </TableCell>
                    ) : (
                      <></>
                    )}
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

// Row.propTypes = {
//   row: PropTypes.shape({
//     calories: PropTypes.number.isRequired,
//     carbs: PropTypes.number.isRequired,
//     fat: PropTypes.number.isRequired,
//     history: PropTypes.arrayOf(
//       PropTypes.shape({
//         amount: PropTypes.number.isRequired,
//         customerId: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//       }),
//     ).isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     protein: PropTypes.number.isRequired,
//     Date: PropTypes.number.isRequired,
//   }).isRequired,
// };

export default function CollapsibleTable({
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
  setEditArrivalTermina,
  setEditDate,
  setEditEconomyClassSeats,
  setEditFirstClassSeats,
  setEditFlight,
  setEditFrom,
  setEditTo,
  setEditBusinessClassSeats,
  content,
}) {
  return (
    <TableContainer sx={{ maxHeight: 500 }} component={Paper}>
      <Table aria-label="collapsible table" stickyHeader>
        <TableHead>
          <TableRow style={{ backgroundColor: "#F0F0F0" }}>
            <TableCell />
            <TableCell style={{ fontWeight: "bold" }}>Flight Number</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>From</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>To</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Departure Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row
              key={row}
              row={row}
              isAdmin={isAdmin}
              rows={rows}
              setX={setX}
              setDeletePopupButton={setDeletePopupButton}
              setToBeDeletedFlight={setToBeDeletedFlight}
              setUpdPopupButton={setUpdPopupButton}
              setEdit_id={setEdit_id}
              setEditDepartureTime={setEditDepartureTime}
              setEditDepartureTerminal={setEditDepartureTerminal}
              setEditArrivalTime={setEditArrivalTime}
              setEditArrivalTermina={setEditArrivalTermina}
              setEditDate={setEditDate}
              setEditEconomyClassSeats={setEditEconomyClassSeats}
              setEditFirstClassSeats={setEditFirstClassSeats}
              setEditFlight={setEditFlight}
              setEditFrom={setEditFrom}
              setEditTo={setEditTo}
              setEditBusinessClassSeats={setEditBusinessClassSeats}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
