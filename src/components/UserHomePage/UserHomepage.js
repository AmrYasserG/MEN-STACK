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
import SearchToReserve from "../SearchToReserve/SearchToReserve.js";

const searchToReserve = async (flight) => {
  await axios.post("Link").then((result) => console.log("Balabizo"));
};

const UserHomepage = () => {
  return (
    <div>
      <div>
        <SearchToReserve onSearch={searchToReserve} />
      </div>
    </div>
  );
};
export default UserHomepage;
