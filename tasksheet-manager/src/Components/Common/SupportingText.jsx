import React from "react";
import Typography from "@mui/material/Typography";
import { createUseStyles } from "react-jss";

const SupportingText = props => {
  const { SupportingColor, SupportingTitle, SupportingVariant, classes } =
    props;
  return (
    <>
      <Typography
        variant={SupportingVariant}
        color={SupportingColor}
        className={`${classes}`}
      >
        {SupportingTitle}
      </Typography>
    </>
  );
};

export default SupportingText;
