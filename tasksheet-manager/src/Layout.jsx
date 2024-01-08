import { Box } from "@mui/material";
import DashboardMain from "Containers/Dashboard/DashboardTabs/DashboardMain";
import React from "react";

const Layout = props => {
  return (
    <>
      <DashboardMain />
      <Box>{props.children}</Box>
    </>
  );
};

export default Layout;
