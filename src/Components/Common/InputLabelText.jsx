import { Typography } from "@mui/material";
import React from "react";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
  labelStyle: {
    fontFamily: "Plus Jakarta Sans",
    fontSize: "0.8vw",
    fontWeight:500,
    paddingBottom:"4px"
  },
});
const InputLabelText = ({ varient , labelText, inputLabelStyle , color }) => {
  const classes = useStyle();
  return (
    <Typography variant={varient} className={`${classes.labelStyle} ${inputLabelStyle}`} color={color}> 
      {labelText}
    </Typography>
  );
};

export default InputLabelText;
