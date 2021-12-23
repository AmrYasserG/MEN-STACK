import { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BackspaceRoundedIcon from "@mui/icons-material/BackspaceRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const editSearchFlight = ({ onSearch, hide }) => {
  const [DepartureDate, setDepartureDate] = useState("");
  const [SeatClass, setSeatClass] = useState("");
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

  const reset = (e) => {
    setSeatClass("");
    setDepartureDate(new Date());
    onSearch(null);
  };

  const search = (e) => {
    console.log("Clicked");
    onSearch({
      DepartureDate,
      SeatClass,
    });
  };
  const handleDdate = (e) => {
    setDepartureDate(e.target.value);
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
      {!hide && (
        <Accordion>
          <AccordionSummary
            sx={{ "text-align": "center" }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ mx: "40%", width: 800 }} variant="h5">
              Search Criteriea <SearchRoundedIcon />
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ mx: 5, "text-align": "center" }}>
              <TextField
                sx={{ width: "35%", height: "20%", mx: 7, my: 3 }}
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
                sx={{ width: "35%", height: "20%", mx: 7, my: 3 }}
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
              />
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
                disabled={SeatClass === "" || DepartureDate === ""}
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

export default editSearchFlight;