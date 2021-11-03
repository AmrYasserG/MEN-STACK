import React, { Component } from "react";
import axios from "axios";
import Button from "@mui/material/Button";

class CreateUser extends Component {
  onSubmit= () =>{
    axios.post('http://localhost:3005/addUser')
    .then(res => {
      console.log("inserted successfully");
    }).catch(err=>{
      console.log(err);
    });
  }
  
  render() {
    return (
      <div className="CreateUsers">
        <div className="col-md-11">Hello from create user</div>
        <div>
          <Button
            variant="contained"
            onClick={() => {
              alert("clicked");
              this.onSubmit();
            }}
          >
            AddUser
          </Button>
        </div>
      </div>
    );
  }
}

export default CreateUser;
