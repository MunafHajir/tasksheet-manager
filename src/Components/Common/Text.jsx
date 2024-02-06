import React from "react";
import Typography from "@mui/material/Typography";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
  Text: {
    fontFamily: "Plus Jakarta Sans",
  },
});

const Text = props => {
  const classes = useStyle();
  return (
    <>
      <Typography
        // style={props.style}
        className={` ${classes.Text} ${props.classes}`}
        variant={props.TextVariant}
        color={props.TextColor}
      >
        {props.title}
      </Typography>
    </>
  );
};

export default Text;
