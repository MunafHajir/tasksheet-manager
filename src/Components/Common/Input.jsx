import { TextField, styled } from "@mui/material";
import React from "react";

const CustomizedTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    color: "#0e0e0e",
    fontSize: "1vw",
    fontFamily: "Plus Jakarta Sans",
  },
  "& .MuiInputLabel-root": {
    color: "black",
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "red",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "purple",
  },
  ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
    padding: "16px",
  },
  '.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root':{
    borderRadius: "8px",
  }
}));

const Input = ({ type, placeholder, logic }) => {
  return (
    <CustomizedTextField
      type={type}
      placeholder={placeholder}
      onFocus={(e) => (e.target.type = type)}
      onBlur={(e) => (e.target.type = "text")}
      onChange={logic}
    />
  );
};

export default Input;
