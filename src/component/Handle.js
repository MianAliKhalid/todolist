import React from 'react';
import "../App.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const Handle = ({ name, email, index, removeData }) => {
  return (
    <div className="data_val">
      <h4>{name}</h4>
      <h4>{email}</h4>
      <Button 
        variant="contained" 
        color="secondary" 
        onClick={() => removeData(index)}
      >
        <DeleteIcon />
      </Button>
    </div>
  );
}

export default Handle;
