import React from "react";
import { CssBaseline } from "@mui/material";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
  tabs: {
    // display: "flex",
    // alignItems: "center",
    position:"relative"
  },
  absolute:{
    position:"absolute",
    right:"0vw"
  }
});

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const DashboardMain = () => {
  const [value, setValue] = React.useState(0);
  const classes = useStyle();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <CssBaseline />
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{ borderBottom: 1, borderColor: "divider" }}
          className={classes.tabs}
        >
          <Tabs
          sx={{display:"flex"}}
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Dashboard" {...a11yProps(0)} />
            <Tab label="User List" {...a11yProps(1)} />
            <Tab label="Project List" {...a11yProps(2)} />
            <Tab
            className={classes.absolute}
              label="+Create New Project"
              {...a11yProps(3)}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          Item One
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          Item four
        </CustomTabPanel>
      </Box>
    </>
  );
};

export default DashboardMain;
