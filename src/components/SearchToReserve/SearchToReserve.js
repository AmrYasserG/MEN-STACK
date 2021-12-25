import { useState, useLayoutEffect } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import FlightTakeoffRoundedIcon from "@mui/icons-material/FlightTakeoffRounded";
import FlightLandRoundedIcon from "@mui/icons-material/FlightLandRounded";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BackspaceRoundedIcon from "@mui/icons-material/BackspaceRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const SearchToReserve = ({ onSearch, d }) => {
  const [From, setFrom] = useState("");
  const [To, setTo] = useState("");
  const [DepartureDate, setDepartureDate] = useState("");
  const [ReturnDate, setReturnDate] = useState("");
  const [SeatClass, setSeatClass] = useState("");
  const [SeatsNo, setSeatsNo] = useState(1);
  const [validSeatNo, setvalidSeatNo] = useState(true);
  const [validDate, setvalidDate] = useState(true);

  const seatClasses = [
    {
      value: "Business",
      label: "Business Class",
    },
    {
      value: "First",
      label: "First Class",
    },
    {
      value: "Economy",
      label: "Economy Class",
    },
  ];
  useLayoutEffect(() => {
    setvalidSeatNo(Number(SeatsNo) >= 1);
  }, [SeatsNo]);

  useLayoutEffect(() => {
    setvalidDate(new Date(DepartureDate) < new Date(ReturnDate));
  }, [DepartureDate, ReturnDate]);

  const reset = (e) => {
    setFrom("");
    setTo("");
    setSeatClass("");
    setSeatsNo(1);
    setDepartureDate(new Date());
    setReturnDate(new Date());
    setvalidSeatNo(true);
    setvalidDate(true);
    onSearch(null);
  };

  const search = (e) => {
    console.log("Clicked");
    onSearch({
      From,
      To,
      DepartureDate,
      ReturnDate,
      SeatClass,
      SeatsNo,
    });
  };
  const handlSeatChange = (e) => {
    setSeatsNo(e.target.value);
  };
  const handleDdate = (e) => {
    setDepartureDate(e.target.value);
  };
  const handleRdate = (e) => {
    setReturnDate(e.target.value);
  };
  return (
    <Box
      sx={{
        p: 2,
        margin: "auto",
        maxWidth: "80%",
        mb: 1,
      }}
    >
      {!d && (
        <Accordion>
          <AccordionSummary
            sx={{ textAlign: "center" }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ mx: "40%", width: 800 }} variant="h5">
              Search Criteriea <SearchRoundedIcon />
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ mx: 5, textAlign: "center" }}>
              <TextField
                sx={{ width: "35%", height: "40px", mx: 7, my: 3 }}
                id="outlined-basic"
                required
                label="Origin"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FlightTakeoffRoundedIcon />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
                onChange={(e) => {
                  setFrom(e.target.value);
                }}
                value={From}
              />
              <TextField
                sx={{ width: "35%", height: "40px", mx: 7, my: 3 }}
                id="outlined-basic"
                required
                label="Destination"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FlightLandRoundedIcon />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
                onChange={(e) => {
                  setTo(e.target.value);
                }}
                value={To}
              />
              <br />
              <TextField
                sx={{ width: "35%", height: "40px", mx: 7, my: 3 }}
                id="Class"
                required
                select
                label="Class"
                value={SeatClass}
                onChange={(e) => {
                  setSeatClass(e.target.value);
                }}
                helperText="Please select your Prefered Class"
              >
                {seatClasses.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                sx={{ width: "35%", height: "40px", mx: 7, my: 3 }}
                required
                label="Number Of Seats"
                id="NoOfSeats"
                error={!validSeatNo}
                type="number"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AirlineSeatReclineNormalIcon />
                    </InputAdornment>
                  ),
                  type: "number",
                }}
                variant="outlined"
                onChange={handlSeatChange}
                value={SeatsNo}
                helperText={
                  validSeatNo ? "" : "Number should be greater than 0"
                }
              />

              <br />
              <TextField
                sx={{ width: "35%", height: "40px", mx: 7, my: 3 }}
                error={!validDate}
                required
                label="Departure Date"
                id="dDate"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                  type: "date",
                }}
                variant="outlined"
                value={DepartureDate}
                onChange={handleDdate}
                helperText={
                  validDate
                    ? ""
                    : "Return Date shoud be earlier than Departure Date"
                }
              />
              <TextField
                sx={{ width: "35%", height: "40px", mx: 7, my: 3 }}
                required
                error={!validDate}
                label="Return Date"
                id="rDate"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                  type: "date",
                }}
                variant="outlined"
                value={ReturnDate}
                onChange={handleRdate}
              />
              <br />
              <Button
                startIcon={<BackspaceRoundedIcon />}
                variant="contained"
                color="secondary"
                onClick={reset}
                sx={{ width: "15%", height: "40px", mx: 7, my: 2 }}
              >
                Reset
              </Button>
              <Button
                sx={{ width: "15%", height: "40px", mx: 7, my: 2 }}
                endIcon={<SearchRoundedIcon />}
                variant="contained"
                color="primary"
                disabled={
                  !validDate ||
                  !validSeatNo ||
                  From === "" ||
                  To === "" ||
                  SeatClass === "" ||
                  DepartureDate === "" ||
                  ReturnDate === ""
                }
                onClick={search}
              >
                Search
              </Button>
            </Box>
          </AccordionDetails>
        </Accordion>
      )}
    </Box>
  );
};

export default SearchToReserve;
