import { Box } from "@mui/material";
import DashboardMain from "Containers/Dashboard/DashboardTabs/DashboardMain";
import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  width: {
    width: "100%",
    padding: "30px 72px",
    background: "#F7FBFF",
    minHeight:"90vh"
  },
  style: {
    borderRadius: "8px",
    border: "1px solid #ECECEC",
    background: "#FFF",
    boxShadow: "0px 1px 3px 0px rgba(16, 24, 40, 0.10)",
    padding:"20px 24px"
  },
});

const Layout = props => {
  const classes = useStyles();
  return (
    <>
      <DashboardMain />
      <Box className={classes.width}>
        <Box className={classes.style}>{props.children}</Box>
      </Box>
    </>
  );
};

export default Layout;
