import * as React from 'react'
import Button from "@mui/material/Button";
import './Popup.css';

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
             { props.children }
            <Button variant="contained" className="close-btn" onClick={()=> props.setTrigger(false)}>Cancel</Button>
            </div>
        </div>
    ) : "";
}

export default Popup
