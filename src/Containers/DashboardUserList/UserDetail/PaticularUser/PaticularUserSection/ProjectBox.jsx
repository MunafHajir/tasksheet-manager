import { Box } from "@mui/material";
import React from "react";
import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
  box: {
    // color: "#242424",
    // border: "1px solid gray",
    // fontSize: "1rem",
    // fontWeight: "600",
    // width:"1rem",
    // textAlign:"center",
    // padding: "0 7rem 0 2rem",
    // borderRadius: "2rem",
    // cursor:"pointer"
    display: "flex",
    padding: "0px 8px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    flex: "1 0 0",
    width: "148px",
    borderRadius: "120px",
    border: "1px solid #E0E0E0",
    cursor: "pointer",
    fontFamily: "Plus Jakarta Sans",
    fontWeight:"500",
    color:"#676C76"
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
      onClick={() => handleClick(value, projectName)}
    >
      <p>{projectName}</p>
    </Box>
  );
}
