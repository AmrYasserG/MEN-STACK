import React from 'react'
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
import rows from '../AdminHomepage/AdminHomepage'
import setRows from '../AdminHomepage/AdminHomepage'
import setDeleteOpenResponse from '../AdminHomepage/AdminHomepage'
import { Alert } from '@mui/material';


const DeleteButton = ({ row }) => {
    const [toBeDeletedFlight, setToBeDeletedFlight] = useState("");
    const [deletePopupButton, setDeletePopupButton] = useState(false);
    const [deleteOpenResponse, setDeleteOpenResponse] = useState(false);
    function DeleteRow(values) {
        axios
            .delete("http://localhost:3005/flights/deleteFlight/" + values)
            .then((res) => {
                setDeleteOpenResponse(true);
                setRows(
                    rows.filter((rows) => {  //problem here
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


    return (

        <div>
            <Button
                style={{
                    width :'100px',
                    height : '35px'
                }}
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
        </div>


    )
}

export default DeleteButton
