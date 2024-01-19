import { Box } from "@mui/material";
import DashboardMain from "Containers/Dashboard/DashboardMain";
import React from "react";
import { createUseStyles } from "react-jss";
import Otp from "Containers/login/Otp";

// const useStyles = createUseStyles({
//   width: {
//     width: "100%",
//     padding: "30px 72px",
//     background: "#F7FBFF",
//     minHeight: "82vh",
//   },
  
// });

const Layout = props => {
  // const classes = useStyles();
  return (
    <>
      {/* <DashboardMain /> */}
      <Otp/>
      {/* <Box className={classes.width}>
        {props.children}
      </Box> */}
    </>
  );
};

export default Layout;
