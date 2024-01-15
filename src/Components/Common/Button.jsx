import { Box, Button } from "@mui/material";
import React from "react";

const ButtonComp = ({
  variant,
  btntext,
  buttonStyle,
  logic,
  svg,
  classesSvg,
  btnTextStyle,
}) => {
  return (
    <Button variant={variant} className={buttonStyle} onClick={logic}>
      <Box className={`${classesSvg}`}>{svg}</Box>
      <Box className={`${btnTextStyle}`}>{btntext}</Box>
    </Button>
  );
};

export default ButtonComp;
