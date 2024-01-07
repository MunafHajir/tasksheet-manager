import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Modal, Tab } from "@mui/material";
import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import SearchBar from "./Common/SearchBar";

const useStyles = createUseStyles({
  font: {
    fontFamily: "Plus Jakarta Sans",
    textTransform: "none",
    fontWeight: "600",
    fontSize: "18px",
    padding: "16px 8px",
    width: "33.3%",
  },
});

const NewProjectUserSelectionModel = ({ open, logic, modelStyle }) => {
  const classes = useStyles();
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Modal open={open} onClose={logic}>
      <Box className={modelStyle}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab className={classes.font} label="Developers" value="1" />
              <Tab className={classes.font} label="Designers" value="2" />
              <Tab className={classes.font} label="Quality Assurancee" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1"><SearchBar type={'text'} placeholder={'Search user'}/></TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
      </Box>
    </Modal>
  );
};

export default NewProjectUserSelectionModel;
