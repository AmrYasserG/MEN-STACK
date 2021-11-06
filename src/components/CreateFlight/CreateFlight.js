import React, { Component } from "react";
import axios from "axios";
import Button from "@mui/material/Button";

class CreateFlight extends Component {
  onSubmit= () =>{
    axios.post('http://localhost:3005/createFlight')
    .then(res => {
      console.log("inserted successfully");
    }).catch(err=>{
      console.log(err);
    });
  }
  
  render() {
    return (
      <div className="createFlight">
        <div className="col-md-11">Hello from create Flight</div>
        hello
        <div>
          <Button
            variant="contained"
            onClick={() => {
              alert("clicked");
              this.onSubmit();
            }}
          >
            Flight
          </Button>
        </div>
      </div>
    );
  }
}

export default CreateFlight;
