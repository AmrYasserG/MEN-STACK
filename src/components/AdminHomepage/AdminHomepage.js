import { useState, useEffect, forwardRef, Fragment } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import Popup from "../Popup/Popup";
import "./AdminHomepage.css";
import UpdateOver from "../UpdateOver/UpdateOver";
import SearchFlight from "../SearchFlight/SearchFlight.js";
import IconButton from "@mui/material/IconButton";
import ResponsiveAppBar from '../ResponsiveAppBar/ResponsiveAppBar' ;
import CollapsibleTable from "../CollapsibleTable/CollapsibleTable";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AdminHomepage = () => {
  const [rows, setRows] = useState([]);
  const [toBeDeletedFlight, setToBeDeletedFlight] = useState("");
  const [deletePopupButton, setDeletePopupButton] = useState(false);
  const [editFlight, setEditFlight] = useState("");
  const [editFrom, setEditFrom] = useState("");
  const [editTo, setEditTo] = useState("");
  const [editDate, setEditDate] = useState("");
  const [editDepartureTime, setEditDepartureTime] = useState("");
  const [editArrivalTime, setEditArrivalTime] = useState("");
  const [editDepartureTerminal, setEditDepartureTerminal] = useState("");
  const [editArrivalTerminal, setEditArrivalTermina] = useState("");
  const [editBusinessClassSeats, setEditBusinessClassSeats] = useState("");
  const [editEconomyClassSeats, setEditEconomyClassSeats] = useState("");
  const [editFirstClassSeats, setEditFirstClassSeats] = useState("");
  const [edit_id, setEdit_id] = useState("");

  const [updPopupButton, setUpdPopupButton] = useState(false);
  const [deleteOpenResponse, setDeleteOpenResponse] = useState(false);
  const [editOpenResponse, setEditOpenResponse] = useState(false);
  const [x, setX] = useState(false);

  const columns = [
    { id: "FlightNumber", label: "Flight Number", width: 60 },
    { id: "From", label: "From", width: 60 },
    { id: "To", label: "To", width: 60 },
    { id: "Date", label: "Flight Date", width: 110 },
    { id: "DepartureTime", label: "Departure Time", width: 80 },
    { id: "ArrivalTime", label: "Arrival Time", width: 80 },
    {
      id: "AirportDepartureTerminal",
      label: "Airport Departure Terminal",
      width: 60,
    },
    {
      id: "AirportArrivalTerminal",
      label: "Airport Arrival Terminal",
      width: 60,
    },
    {
      id: "BusinessSeatsNo",
      label: "Number Of Business Class Seats",
      Width: 100,
    },
    {
      id: "EconomySeatsNo",
      label: "Number Of Economy Class Seats",
      Width: 100,
    },
    {
      id: "FirstSeatsNo",
      label: "Number Of First Class Seats",
      Width: 100,
    },
    { id: "action", label: "Action", Width: 100 },
  ];

  function GetAllFlights() {
    axios
      .get("http://localhost:3005/flights/getAllFlights")
      .then((res) => {
        setRows(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //function SearchForFlights() {}

  function EditRow(values) {
    axios
      .put("http://localhost:3005/flights/editFlight/" + values, {
        FlightNumber: editFlight,
        From: editFrom,
        To: editTo,
        ArrivalTime: editArrivalTime,
        DepartureTime: editDepartureTime,
        EconomySeatsNo: editEconomyClassSeats,
        BusinessSeatsNo: editBusinessClassSeats,
        FirstSeatsNo: editFirstClassSeats,
        AirportDepartureTerminal: editDepartureTerminal,
        AirportArrivalTerminal: editArrivalTerminal,
        Date: editDate,
      })
      .then((res) => {
        setEditOpenResponse(true);
        GetAllFlights();
      });
  }

  function DeleteRow(values) {
    axios
      .delete("http://localhost:3005/flights/deleteFlight/" + values)
      .then((res) => {
        setDeleteOpenResponse(true);
        setRows(
          rows.filter((rows) => {
            return rows._id !== values;
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
    // setToBeDeletedFlight("");
  }

  const deleteHandleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setDeleteOpenResponse(false);
  };

  const editHandleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setEditOpenResponse(false);
  };

  const searchFlight = async (flight) => {
    //console.log(flight);
    //console.log(flight.Flight);
    await axios
      .post("http://localhost:3005/flights/searchFlights", {
        FlightNumber: flight.FlightNo,
        From: flight.From,
        To: flight.To,
        BaggageAllowance: flight.BaggageAllowance,
        ArrivalTime: flight.ArrivalTime,
        DepartureTime: flight.DepartureTime,
        EconomySeatsNo: flight.EconomyClassSeatsNo,
        BusinessSeatsNo: flight.BusinessClassSeatsNo,
        FirstSeatsNo: flight.FirstClassSeatsNo,
        EconomyClassPrice: flight.EconomyClassSeatsPrice,
        BusinessClassPrice: flight.BusinessClassSeatsPrice,
        FirstClassPrice: flight.FirstClassSeatsPrice,
        AirportDepartureTerminal: flight.DepartureTerminal,
        AirportArrivalTerminal: flight.ArrivalTerminal,
        Date: flight.Date,
      })
      .then((result) => setRows(result.data));
  };
  useEffect(() => {
    GetAllFlights();
  }, []);

  return (
    <div>
      <ResponsiveAppBar pages={["Create Flight"]} isAdmin = {true} />
      <Snackbar
        open={deleteOpenResponse}
        autoHideDuration={6000}
        onClose={deleteHandleClose}
      >
        <Alert
          onClose={deleteHandleClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Deleted Successfully
        </Alert>
      </Snackbar>
      <Snackbar
        open={editOpenResponse}
        autoHideDuration={6000}
        onClose={editHandleClose}
      >
        <Alert
          onClose={editHandleClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Edited Successfully
        </Alert>
      </Snackbar>
      <Popup trigger={deletePopupButton} setTrigger={setDeletePopupButton}>
        <CancelOutlinedIcon
          color="error"
          style={{ width: "25%", height: "30%" }}
        />
        <h2>Are you sure?</h2>
        <p style={{ fontSize: "small" }}>
          Do you really want to delete this flight with all its details? This
          action cannot be undone
        </p>
        <Button
          variant="contained"
          color="error"
          style={{ right: "5%", top: "7%" }}
          onClick={() => {
            setDeletePopupButton(false);
            DeleteRow(toBeDeletedFlight);
            setX(false);
            // setToBeDeletedFlight("");
          }}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          style={{ left: "5%", top: "7%" }}
          onClick={() => {
            setDeletePopupButton(false);
            setX(false);
          }}
        >
          Cancel
        </Button>
      </Popup>
      <UpdateOver trigger={updPopupButton} setTrigger={setUpdPopupButton}>
        <h1>Update Flight</h1>

        <label>FlightNumber:</label>
        <span>
          <input
            name="flno"
            id="flno"
            type="text"
            value={editFlight}
            onChange={(e) => {
              setEditFlight(e.target.value);
            }}
          />
        </span>
        <br></br>
        <label>From:</label>
        <span>
          <input
            name="from"
            id="from"
            type="text"
            value={editFrom}
            onChange={(e) => {
              setEditFrom(e.target.value);
            }}
          />
        </span>
        <br></br>
        <label>To:</label>
        <span>
          <input
            name="to"
            id="to"
            type="text"
            value={editTo}
            onChange={(e) => {
              setEditTo(e.target.value);
            }}
          />
        </span>
        <br></br>
        <label>Flight Date:</label>
        <span>
          <input
            name="date"
            id="date"
            type="date"
            value={editDate}
            onChange={(e) => {
              setEditDate(e.target.value);
            }}
          />
        </span>
        <br></br>
        <label>Departure Time:</label>
        <span>
          <input
            name="dep"
            id="dep"
            type="time"
            value={editDepartureTime}
            onChange={(e) => {
              setEditDepartureTime(e.target.value);
            }}
          />
        </span>
        <br></br>
        <label>Arrival Time:</label>
        <span>
          <input
            name="arrive"
            id="arrive"
            type="time"
            value={editArrivalTime}
            onChange={(e) => {
              setEditDepartureTime(e.target.value);
            }}
          />
        </span>
        <br></br>
        <label>Airport Departure Terminal:</label>
        <span>
          <input
            name="depTer"
            id="depTer"
            type="text"
            value={editDepartureTerminal}
            onChange={(e) => {
              setEditDepartureTerminal(Number(e.target.value));
            }}
          />
        </span>
        <br></br>
        <label>Airport Arrival Terminal:</label>
        <span>
          <input
            name="arrTer"
            id="arrTer"
            type="text"
            value={editArrivalTerminal}
            onChange={(e) => {
              setEditArrivalTermina(Number(e.target.value));
            }}
          />
        </span>
        <br></br>
        <label>Number Of Business Class Seats:</label>
        <span>
          <input
            name="busNo"
            id="busNo"
            type="text"
            value={editBusinessClassSeats}
            onChange={(e) => {
              setEditBusinessClassSeats(Number(e.target.value));
            }}
          />
        </span>
        <br></br>
        <label>Number Of Economy Class Seats:</label>
        <span>
          <input
            name="ecoNo"
            id="ecoNo"
            type="text"
            value={editEconomyClassSeats}
            onChange={(e) => {
              setEditEconomyClassSeats(Number(e.target.value));
            }}
          />
        </span>
        <br></br>
        <label>Number Of First Class Seats:</label>
        <span>
          <input
            name="fstNo"
            id="fstNo"
            type="text"
            value={editFirstClassSeats}
            onChange={(e) => {
              setEditFirstClassSeats(Number(e.target.value));
            }}
          />
        </span>
        <br></br>
        <Button
          variant="contained"
          color="error"
          style={{ right: "5%", top: "7%" }}
          onClick={() => {
            setUpdPopupButton(false);
            EditRow(edit_id);
            setX(false);
          }}
        >
          Update
        </Button>
        <Button
          variant="contained"
          style={{ left: "5%", top: "7%" }}
          onClick={() => {
            setUpdPopupButton(false);
            setX(false);
          }}
        >
          Cancel
        </Button>
      </UpdateOver>
      {/* <Button
        variant="contained"
        startIcon={<AddIcon />}
        color="success"
        style={{ marginLeft: "91.5%", marginTop: "5%" }}
        onClick={() => {
          window.location.href = "/createFlight";
        }}
      >
        {"Create"}
      </Button> */}

      <div>
        <SearchFlight d={x} onSearch={searchFlight} />
        {/* <Link to="/signup" className="btn btn-primary">Sign up</Link> */}
      </div>

      <CollapsibleTable
        rows={rows}
        isAdmin={true}
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

      {/* <Paper sx={{ width: "100%", overflow: "hidden", marginTop: "1%" }}>
        <TableContainer sx={{ maxHeight: 500 }}>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    style={{ width: column.width, textAlign: "center" }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => {
                return (
                  <TableRow hover key={row._id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      if (column.id === "action") {
                        return (
                          <TableCell
                            sx={{ textAlign: "center" }}
                            key={{ key: row._id }}
                          >
                            <Button
                              variant="contained"
                              startIcon={<EditIcon />}
                              onClick={() => {
                                setEdit_id(row._id);
                                setUpdPopupButton(true);
                                setEditDepartureTime(row.DepartureTime);
                                setEditDepartureTerminal(
                                  row.AirportDepartureTerminal
                                );
                                setEditArrivalTime(row.ArrivalTime);
                                setEditArrivalTermina(
                                  row.AirportArrivalTerminal
                                );
                                setEditDate(row.Date);
                                setEditEconomyClassSeats(row.EconomySeatsNo);
                                setEditFirstClassSeats(row.FirstSeatsNo);
                                setEditFlight(row.FlightNumber);
                                setEditFrom(row.From);
                                setEditTo(row.To);
                                setEditBusinessClassSeats(row.BusinessSeatsNo);
                                setX(true);
                              }}
                            >
                              Edit
                            </Button>
                            <br />
                            <br />
                            <Button
                              variant="contained"
                              color="error"
                              startIcon={<DeleteIcon />}
                              onClick={() => {
                                setX(true);
                                setDeletePopupButton(true);
                                setToBeDeletedFlight(row._id);
                              }}
                            >
                              Delete
                            </Button>
                          </TableCell>
                        );
                      } else {
                        return (
                          <TableCell
                            key={column.id}
                            sx={{ textAlign: "center" }}
                          >
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      }
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper> */}
      {/* <TableContainer sx={{ maxHeight: 500 }} component={Paper}>
        <Table aria-label="collapsible table" stickyHeader={x}>
          <TableHead>
            <TableRow style={{ backgroundColor: "#F0F0F0" }}>
              <TableCell />
              <TableCell style={{ fontWeight: "bold" }}>
                Flight Number
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }}>From</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>To</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>
                Departure Date
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {rows.map((row) => {
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
          })}



          </TableBody>
        </Table>
      </TableContainer> */}
    </div>
  );
};
export default AdminHomepage;
