import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
//import DeleteIcon from "@mui/icons-material/Delete";
//import EditIcon from "@mui/icons-material/Edit";
import { Link } from 'react-router-dom';

function scratch() {
  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        maxWidth: "80%",
        flexGrow: 1,
        marginTop: "10%",
      }}
    >
      <Link to={{
      pathname: '/ReservedFlights',
      state: [{id: "618ba4fffe6644777d199219"}],
      }}
      style= {{backgroundColor: "#111"}}> Your Page </Link>

      <Grid container spacing={2}>
        <Grid item xs={12} sm container>
          <Grid item container spacing={2}>
            <Grid
              item
              container
              direction="column"
              xs={3}
              style={{ color: "white", backgroundColor: "#111" }}
            >
              <Typography gutterBottom variant="subtitle1" component="div">
                Standard license
              </Typography>
              <Typography variant="body2" gutterBottom>
                Full resolution 1920x1080 • JPEG
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1030114
              </Typography>
            </Grid>
            <Grid
              item
              container
              direction="column"
              xs={3}
              style={{ color: "white", backgroundColor: "#333" }}
            >
              <Typography sx={{ cursor: "pointer" }} variant="body2">
                Remove
              </Typography>
            </Grid>
            <Grid
              item
              container
              direction="column"
              xs={5}
              style={{ color: "white", backgroundColor: "#777" }}
            ></Grid>
            <Grid
              item
              xs={1}
              container
              direction="column"
              style={{ color: "white", backgroundColor: "#333" }}
            >
              <Button
                variant="contained"
                color="error"
                style={{ right: "16%", top: "3%" }}
              >
                Delete
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
export default scratch;
