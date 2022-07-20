import CheckIcon from '@mui/icons-material/Check';
import Fab from "@mui/material/Fab";
import React from "react";

const UpdateButton = ({cours, setDelteModall}) => {
  return (
    <Fab
      color="success"
      aria-label="add"
      onClick={()=>setDelteModall(true)}
      sx={{ maxHeight: 40, maxWidth: 40, m: 1, zIndex: 1 }}
    >
      <CheckIcon /> 
    </Fab>
  );
};

export default UpdateButton;
