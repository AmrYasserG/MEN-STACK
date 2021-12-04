import * as React from "react";
import Button from "@mui/material/Button";
import "./UpdateOver.css";

function UpdateOver(props) {
  return props.trigger ? (
    <div className="upd">
      <div className="upd-inner">{props.children}</div>
     
    </div>
  ) : (
    ""
  );
}

export default UpdateOver;
