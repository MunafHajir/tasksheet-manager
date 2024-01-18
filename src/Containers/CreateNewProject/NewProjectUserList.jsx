import { Box, Checkbox, FormControlLabel } from "@mui/material";
import InputLabelText from "Components/Common/InputLabelText";
import React from "react";

const NewProjectUserList = ({label , userStyle}) => {
  return (
    <Box className={userStyle}>
      <Checkbox size="small"/>
      <InputLabelText varient={'p'} labelText={label} />
    </Box>
  )
};

export default NewProjectUserList;
