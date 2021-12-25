import { useState, memo } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BackspaceRoundedIcon from "@mui/icons-material/BackspaceRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import InputAdornment from "@mui/material/InputAdornment";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import FlightTakeoffRoundedIcon from "@mui/icons-material/FlightTakeoffRounded";
import FlightLandRoundedIcon from "@mui/icons-material/FlightLandRounded";

const SearchFlight = ({ onSearch, d }) => {
  const [FlightNo, setFlightNo] = useState("");
  const [From, setFrom] = useState("");
  const [To, setTo] = useState("");
  const [Date, setDate] = useState("");
  const [ArrivalDate, setArrivalDate] = useState("");
  const [DepartureTime, setDepartureTime] = useState("");
  const [ArrivalTime, setArrivalTime] = useState("");
  const [DepartureTerminal, setDepartureTerminal] = useState();
  const [ArrivalTerminal, setArrivalTerminal] = useState();
  const [BusinessClassSeatsNo, setBusinessClassSeatsNo] = useState(0);
  const [EconomyClassSeatsNo, setEconomyClassSeatsNo] = useState(0);
  const [FirstClassSeatsNo, setFirstClassSeatsNo] = useState(0);
  const [BusinessClassSeatsPrice, setBusinessClassSeatsPrice] = useState(0);
  const [EconomyClassSeatsPrice, setEconomyClassSeatsPrice] = useState(0);
  const [FirstClassSeatsPrice, setFirstClassSeatsPrice] = useState(0);
  const [BaggageAllowance, setBaggageAllowance] = useState(0);

  const onSubmit = (e) => {
    onSearch({
      FlightNo,
      From,
      To,
      Date,
      ArrivalDate,
      DepartureTime,
      ArrivalTime,
      DepartureTerminal,
      ArrivalTerminal,
      BusinessClassSeatsNo,
      EconomyClassSeatsNo,
      FirstClassSeatsNo,
      BusinessClassSeatsPrice,
      EconomyClassSeatsPrice,
      FirstClassSeatsPrice,
      BaggageAllowance,
    });
  };
  const resetSearch = (e) => {
    setFlightNo("");
    setFrom("");
    setTo("");
    setDate("");
    setArrivalDate("");
    setDepartureTime("");
    setArrivalTime("");
    setDepartureTerminal();
    setArrivalTerminal();
    setBusinessClassSeatsNo(0);
    setEconomyClassSeatsNo(0);
    setFirstClassSeatsNo(0);
    setBusinessClassSeatsPrice(0);
    setEconomyClassSeatsPrice(0);
    setFirstClassSeatsPrice(0);
    setBaggageAllowance(0);
    onSearch({
      FlightNo: "",
      From: "",
      To: "",
      Date: "",
      ArrivalDate: "",
      DepartureTime: "",
      ArrivalTime: "",
      DepartureTerminal: "",
      ArrivalTerminal: "",
      BusinessClassSeatsNo: "",
      EconomyClassSeatsNo: "",
      FirstClassSeatsNo: "",
      BusinessClassSeatsPrice: "",
      EconomyClassSeatsPrice: "",
      FirstClassSeatsPrice: "",
      BaggageAllowance: "",
    });
  };

  return (
    <Box
      sx={{
        p: 2,
        margin: "auto",
        maxWidth: "80%",
        my: 1,
      }}
    >
      {d ? (
        ""
      ) : (
        <Accordion>
          <AccordionSummary
            sx={{ backgroundColor: "#f7f7f7", "text-align": "center" }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ mx: "40%", width: 800 }} variant="h5">
              Search Criteria &nbsp;
              <SearchRoundedIcon />
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <hr />
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                spacing={2}
                alignItems="left"
                rowSpacing={3}
                columnSpacing={1}
              >
                {/*Flight No*/}
                <Grid item xs={1}></Grid>
                <Grid item xs={2}>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    component="h4"
                    align="center"
                    sx={{ textAlign: "left" }}
                  >
                    Flight Number:
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    size="small"
                    sx={{ width: "110%", height: "3ch", p: 0 }}
                    type="text"
                    label="Fligh Number"
                    required
                    value={FlightNo}
                    onChange={(e) => setFlightNo(e.target.value)}
                  />
                </Grid>
                <Grid
                  item
                  xs={1}
                  sx={{ borderRight: "0px solid #eeeeee" }}
                ></Grid>
                <Grid
                  item
                  xs={1}
                  sx={{ borderLeft: "0px solid #eeeeee" }}
                ></Grid>
                {/*Flight Date*/}
                <Grid item xs={2}>
                  {" "}
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    component="h4"
                    align="center"
                    sx={{ textAlign: "left" }}
                  >
                    Baggage Allowance:
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    size="small"
                    sx={{ width: "110%", height: "3ch", p: 0 }}
                    type="number"
                    required
                    label="Baggage Allowance"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">kg</InputAdornment>
                      ),
                    }}
                    value={BaggageAllowance}
                    onChange={(e) => setBaggageAllowance(e.target.value)}
                  />
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={1}></Grid>
                {/*From*/}
                <Grid item xs={2}>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    component="h4"
                    align="center"
                    sx={{ textAlign: "left" }}
                  >
                    From:
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    size="small"
                    sx={{ width: "110%", height: "3ch", p: 0 }}
                    type="text"
                    label="From"
                    required
                    value={From}
                    onChange={(e) => setFrom(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <FlightTakeoffRoundedIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid
                  item
                  xs={1}
                  sx={{ borderRight: "1px solid #eeeeee" }}
                ></Grid>
                <Grid
                  item
                  xs={1}
                  sx={{ borderLeft: "1px solid #eeeeee" }}
                ></Grid>
                {/*To*/}
                <Grid item xs={2}>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    component="h4"
                    align="center"
                    sx={{ textAlign: "left" }}
                  >
                    To:
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    size="small"
                    sx={{ width: "110%", height: "3ch", p: 0 }}
                    type="text"
                    label="To"
                    required
                    value={To}
                    onChange={(e) => setTo(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <FlightLandRoundedIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={2}>
                  {" "}
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    component="h4"
                    align="center"
                    sx={{ textAlign: "left" }}
                  >
                    Departure Date:
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    size="small"
                    sx={{ width: "110%", height: "3ch", p: 0 }}
                    InputProps={{
                      type: "date",
                    }}
                    required
                    value={Date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </Grid>
                <Grid
                  item
                  xs={1}
                  sx={{ borderRight: "1px solid #eeeeee" }}
                ></Grid>
                <Grid
                  item
                  xs={1}
                  sx={{ borderLeft: "1px solid #eeeeee" }}
                ></Grid>
                {/*Flight Date*/}
                <Grid item xs={2}>
                  {" "}
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    component="h4"
                    align="center"
                    sx={{ textAlign: "left" }}
                  >
                    Arrival Date:
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    size="small"
                    sx={{ width: "110%", height: "3ch", p: 0 }}
                    InputProps={{
                      type: "date",
                    }}
                    required
                    value={ArrivalDate}
                    onChange={(e) => setArrivalDate(e.target.value)}
                  />
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={1}></Grid>
                {/*Departure Time*/}
                <Grid item xs={2}>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    component="h4"
                    align="center"
                    sx={{ textAlign: "left" }}
                  >
                    Departure Time:
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    size="small"
                    sx={{ width: "110%", height: "3ch", p: 0 }}
                    type="time"
                    required
                    value={DepartureTime}
                    onChange={(e) => setDepartureTime(e.target.value)}
                  />
                </Grid>
                <Grid
                  item
                  xs={1}
                  sx={{ borderRight: "1px solid #eeeeee" }}
                ></Grid>
                <Grid
                  item
                  xs={1}
                  sx={{ borderLeft: "1px solid #eeeeee" }}
                ></Grid>
                {/*Arrival Time*/}
                <Grid item xs={2}>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    component="h4"
                    align="center"
                    sx={{ textAlign: "left" }}
                  >
                    Arrival Time:
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    size="small"
                    sx={{ width: "110%", height: "3ch", p: 0 }}
                    type="time"
                    required
                    value={ArrivalTime}
                    onChange={(e) => setArrivalTime(e.target.value)}
                  />
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={1}></Grid>
                {/*Departure Terminal*/}
                <Grid item xs={2}>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    component="h4"
                    align="center"
                    sx={{ textAlign: "left" }}
                  >
                    Departure Terminal:
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    size="small"
                    sx={{ width: "110%", height: "3ch", p: 0 }}
                    type="number"
                    required
                    label="Departure Terminal"
                    value={DepartureTerminal}
                    onChange={(e) => setDepartureTerminal(e.target.value)}
                  />
                </Grid>
                <Grid
                  item
                  xs={1}
                  sx={{ borderRight: "1px solid #eeeeee" }}
                ></Grid>
                <Grid
                  item
                  xs={1}
                  sx={{ borderLeft: "1px solid #eeeeee" }}
                ></Grid>
                {/*Arrival Terminal*/}
                <Grid item xs={2}>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    component="h4"
                    align="center"
                    sx={{ textAlign: "left" }}
                  >
                    Arrival Terminal:
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    size="small"
                    sx={{ width: "110%", height: "3ch", p: 0 }}
                    type="number"
                    label="Arrival Terminal"
                    required
                    value={ArrivalTerminal}
                    onChange={(e) => setArrivalTerminal(e.target.value)}
                  />
                </Grid>
                <Grid item xs={1}></Grid>
                {/*/--------------------------/*/}
                <Grid item xs={1}></Grid>
                {/*First Class Seats*/}
                <Grid item xs={4}>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    component="h4"
                    align="center"
                    sx={{ textAlign: "left" }}
                  >
                    First Class Seats:
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    label="No Of Seats"
                    size="small"
                    sx={{ width: "110%", height: "3ch", p: 0 }}
                    type="number"
                    required
                    value={FirstClassSeatsNo}
                    onChange={(e) => setFirstClassSeatsNo(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AirlineSeatReclineNormalIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    label="Price"
                    size="small"
                    sx={{ mx: 2, width: "110%", height: "3ch", p: 0 }}
                    type="number"
                    required
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">$</InputAdornment>
                      ),
                    }}
                    value={FirstClassSeatsPrice}
                    onChange={(e) => setFirstClassSeatsPrice(e.target.value)}
                  />
                </Grid>{" "}
                <Grid item xs={1}></Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={1}></Grid>
                {/*Business Class Seats*/}
                <Grid item xs={4}>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    component="h4"
                    align="center"
                    sx={{ textAlign: "left" }}
                  >
                    Business Class Seats:
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    label="No Of Seats"
                    size="small"
                    sx={{ width: "110%", height: "3ch", p: 0 }}
                    type="number"
                    required
                    value={BusinessClassSeatsNo}
                    onChange={(e) => setBusinessClassSeatsNo(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AirlineSeatReclineNormalIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    label="Price"
                    size="small"
                    sx={{ mx: 2, width: "110%", height: "3ch", p: 0 }}
                    type="number"
                    required
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">$</InputAdornment>
                      ),
                    }}
                    value={BusinessClassSeatsPrice}
                    onChange={(e) => setBusinessClassSeatsPrice(e.target.value)}
                  />
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={2} sx={{ textAlign: "center" }}></Grid>
                <Grid item xs={1}></Grid>
                {/*Economy Class Seats*/}
                <Grid item xs={4}>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    component="h4"
                    align="center"
                    sx={{ textAlign: "left" }}
                  >
                    Economy Class Seats:
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    label="No Of Seats"
                    size="small"
                    sx={{ width: "110%", height: "3ch", p: 0 }}
                    type="number"
                    required
                    value={EconomyClassSeatsNo}
                    onChange={(e) => setEconomyClassSeatsNo(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AirlineSeatReclineNormalIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    label="Price"
                    size="small"
                    sx={{ mx: 2, width: "110%", height: "3ch", p: 0 }}
                    type="number"
                    required
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">$</InputAdornment>
                      ),
                    }}
                    value={EconomyClassSeatsPrice}
                    onChange={(e) => setEconomyClassSeatsPrice(e.target.value)}
                  />
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={5} sx={{ textAlign: "center" }}>
                  <Button
                    startIcon={<BackspaceRoundedIcon />}
                    variant="contained"
                    color="secondary"
                    sx={{ width: "57%", height: "40px", mx: 7, my: 2 }}
                    onClick={resetSearch}
                  >
                    Reset
                  </Button>
                </Grid>
                <Grid item xs={5} sx={{ textAlign: "center" }}>
                  <Button
                    onClick={onSubmit}
                    sx={{ width: "57%", height: "40px", mx: 7, my: 2 }}
                    endIcon={<SearchRoundedIcon />}
                    variant="contained"
                    color="primary"
                  >
                    Search
                  </Button>
                </Grid>
                <Grid item xs={1}></Grid>
              </Grid>
            </Box>
          </AccordionDetails>
        </Accordion>
      )}
    </Box>
  );
};

export default memo(SearchFlight);
