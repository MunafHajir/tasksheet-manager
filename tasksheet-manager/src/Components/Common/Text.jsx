import React from "react";
import Typography from "@mui/material/Typography";

const Text = props => {
  return (
    <>
      <Typography
        // style={props.style}
        className={`${props.classes}`}
        variant={props.TextVariant}
        color={props.TextColor}
      >
        {props.title}
      </Typography>
    </>
  );
};

export default Text;
