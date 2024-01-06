import React from "react";
import Typography from "@mui/material/Typography";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
  SupportingText: {
    fontFamily: "Plus Jakarta Sans",
    backgroundColor: "#F7FBFF",
    color: "#0463D1",
    fontSize: "0.800vw",
    fontWeight: "500",
    borderRadius: "176px",
    padding:"4px 16px"
  },
});

const SupportingText = props => {
  const { SupportingColor, SupportingTitle, SupportingVariant } = props;
  const classes = useStyle();
  return (
    <>
      <Typography
        variant={SupportingVariant}
        color={SupportingColor}
        className={`${classes.SupportingText} ${props.classes}`}
      >
        {SupportingTitle}
      </Typography>
    </>
  );
};

export default SupportingText;
