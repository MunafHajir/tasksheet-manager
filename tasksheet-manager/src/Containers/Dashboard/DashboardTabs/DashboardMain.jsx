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
    position: "relative",
  },
  absolute: {
    position: "absolute",
    right: "0vw",
    color: "#0463D1",
    width: "15vw !important",
  },
  font: {
    fontFamily: "Plus Jakarta Sans",
    textTransform: "none",
    fontWeight: "600",
    fontSize: "0.9375vw",
    padding: "16px 8px",
    width: "10vw",
  },
  content: {
    width: "90%",
    backgroundColor: "white",
    padding: "0px 70px",
    margin: "0 auto",
  },
  customTabPanel: {
    display: "flex",
    justifyContent: "center",
  },
  
});

function CustomTabPanel(props) {
  const classes = useStyle();
  const { children, value, index, ...other } = props;
  
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className={classes.CustomTabPanel}
      >
      {value === index && (
        <Box sx={{ p: 3 , minHeight:"90vh" }}>
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
      <Box sx={{ width: "100%", backgroundColor: "#F7FBFF" }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            backgroundColor: "#FFF",
            padding: "0px 72px",
          }}
          className={classes.tabs}
        >
          <Tabs sx={{ display: "flex" }} value={value} onChange={handleChange}>
            <Tab className={classes.font} label="Dashboard" {...a11yProps(0)} />
            <Tab className={classes.font} label="User list" {...a11yProps(1)} />
            <Tab
              className={classes.font}
              label="Project list"
              {...a11yProps(2)}
            />
            <Tab
              className={`${classes.absolute} ${classes.font}`}
              label="+ Create New Project"
              {...a11yProps(3)}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0} className={classes.flex}>
          <Box className={classes.content}>
            <Typography>Item One</Typography>
          </Box>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1} className={classes.flex}>
          <Box className={classes.content}>
            <Typography>Item Two</Typography>
          </Box>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2} className={classes.flex}>
          <Box className={classes.content}>
            <Typography>Item Three</Typography>
          </Box>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3} className={classes.flex}>
          <Box className={classes.content}>
            <Typography>Item four</Typography>
          </Box>
        </CustomTabPanel>
      </Box>
    </>
  );
};

export default DashboardMain;
