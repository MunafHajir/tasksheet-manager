import { Box } from "@mui/material";
import React from "react";
import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
  box: {
    color: "#242424",
    border: "1px solid gray",
    display: "inline-block",
    fontSize: ".88rem",
    letterSpacing:"1px",
    fontWeight: "600",
    width:"1rem",
    marginTop: "1.2rem",
    textAlign:"center",
    padding: "0 7rem 0 2rem",
    borderRadius: "2rem",
    marginLeft: ".5rem",
    cursor:"pointer"
  },
});
export default function ProjectBox({
  projectName,
  className,
  value,
  handleClick,
}) {
  const classes = useStyles();
  return (
    <Box
      className={`${classes.box}  ${className}`}
      onClick={() => handleClick(value ,projectName)}
    >
      <p>{projectName}</p>
    </Box>
  );
}
