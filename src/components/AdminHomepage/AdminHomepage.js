import { useState, useEffect, forwardRef } from "react";
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
  const [showFlight, setShowFlight] = useState(false);

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
      .post("http://localhost:3005/flights/searchFlights2", {
        FlightNumber: flight.Flight,
        From: flight.From,
        To: flight.To,
        ArrivalTime: flight.ArrivalTime,
        DepartureTime: flight.DepartureTime,
        EconomySeatsNo: flight.EconomyClassSeats,
        BusinessSeatsNo: flight.BusinessClassSeats,
        FirstSeatsNo: flight.FirstClassSeats,
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
          }}
        >
          Update
        </Button>
        <Button
          variant="contained"
          style={{ left: "5%", top: "7%" }}
          onClick={() => {
            setUpdPopupButton(false);
          }}
        >
          Cancel
        </Button>
        
      </UpdateOver>
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        color="success"
        style={{ marginLeft: "91.5%", marginTop: "5%" }}
        onClick={() => {
          window.location.href = "/createFlight";
        }}
      >
        {"Create"}
      </Button>

      <div className="SearchFlight">
        <SearchFlight onSearch={searchFlight} />
        {/* <Link to="/signup" className="btn btn-primary">Sign up</Link> */}
      </div>

      <Paper sx={{ width: "100%", overflow: "hidden", marginTop: "1%" }}>
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
      </Paper>
    </div>
  );
};
export default AdminHomepage;
