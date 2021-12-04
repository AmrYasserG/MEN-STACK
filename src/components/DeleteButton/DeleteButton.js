import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const DeleteButton = ({
  row,
  setX,
  setDeletePopupButton,
  setToBeDeletedFlight,
}) => {
  return (
    <Button
      style={{ width: 100, height: 35 }}
      variant="contained"
      color="error"
      startIcon={<DeleteIcon />}
      onClick={() => {
        setX(true);
        setDeletePopupButton(true);
        setToBeDeletedFlight(row._id);
      }}
    >
      Delete
    </Button>
  );
};

export default DeleteButton;
