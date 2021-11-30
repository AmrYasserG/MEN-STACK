import * as React from "react";
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

function Scratch() {
  var myMap = new Map([
    ["thing1", 1],
    ["thing2", 2],
    ["thing3", 3],
  ]);
  myMap.set("a", 1);

  return (
    // <div>
    <Box
      component="form"
      sx={{
        p: 2,
        margin: "auto",
        maxWidth: "80%",
        my: 10,
      }}
    >
      <Accordion>
        <AccordionSummary
          sx={{ "text-align": "center" }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ mx: "40%", width: 800 }} variant="h5">
            Search Criteriea &nbsp;
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
                />
              </Grid>
              <Grid
                item
                xs={1}
                sx={{ borderRight: "0px solid #eeeeee" }}
              ></Grid>
              <Grid item xs={1} sx={{ borderLeft: "0px solid #eeeeee" }}></Grid>
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
                  Flight Date:
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
                />
              </Grid>
              <Grid
                item
                xs={1}
                sx={{ borderRight: "1px solid #eeeeee" }}
              ></Grid>
              <Grid item xs={1} sx={{ borderLeft: "1px solid #eeeeee" }}></Grid>
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
                />
              </Grid>
              <Grid
                item
                xs={1}
                sx={{ borderRight: "1px solid #eeeeee" }}
              ></Grid>
              <Grid item xs={1} sx={{ borderLeft: "1px solid #eeeeee" }}></Grid>
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
                />
              </Grid>
              <Grid
                item
                xs={1}
                sx={{ borderRight: "1px solid #eeeeee" }}
              ></Grid>
              <Grid item xs={1} sx={{ borderLeft: "1px solid #eeeeee" }}></Grid>
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
                />
              </Grid>
              <Grid item xs={1}></Grid>
              {/*/--------------------------/*/}
              <Grid item xs={1}></Grid>
              {/*First Class Seats*/}
              <Grid item xs={2}>
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
                />
              </Grid>{" "}
              <Grid
                item
                xs={1}
                sx={{ borderRight: "1px solid #eeeeee" }}
              ></Grid>
              <Grid item xs={4}>
                {" "}
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  component="h4"
                  align="center"
                  sx={{ textAlign: "center" }}
                >
                  Baggage Allowance:
                </Typography>
              </Grid>
              <Grid item xs={1}></Grid>
              {/*Business Class Seats*/}
              <Grid item xs={2}>
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
                />
              </Grid>
              <Grid
                item
                xs={1}
                sx={{ borderRight: "1px solid #eeeeee" }}
              ></Grid>
              <Grid item xs={4} sx={{ textAlign: "center" }}>
                <TextField
                  size="small"
                  sx={{ width: "55%", height: "3ch", p: 0 }}
                  type="number"
                  required
                  label="Baggage Allowance"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">kg</InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={1}></Grid>
              {/*Economy Class Seats*/}
              <Grid item xs={2}>
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
                />
              </Grid>
              <Grid
                item
                xs={1}
                sx={{ borderRight: "1px solid #eeeeee" }}
              ></Grid>
              <Grid item xs={4}></Grid>
              <Grid item xs={1}></Grid>
              <Grid item xs={5} sx={{ textAlign: "center" }}>
                <Button
                  startIcon={<BackspaceRoundedIcon />}
                  variant="contained"
                  color="secondary"
                  sx={{ width: "57%", height: "40px", mx: 7, my: 2 }}
                >
                  Reset
                </Button>
              </Grid>
              <Grid item xs={5} sx={{ textAlign: "center" }}>
                <Button
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
    </Box>
  );
  {
    /* <br />
      {Array.from(myMap).map(([key, value]) => {
        return (
          <div>
            <h2>{key}1 </h2>
            <h5>{value}2</h5>
          </div>
        );
      })}
    </div> */
  }
}
export default Scratch;
