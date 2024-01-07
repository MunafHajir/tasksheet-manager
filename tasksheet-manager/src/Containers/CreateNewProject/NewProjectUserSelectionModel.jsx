import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Modal, Tab, Button } from "@mui/material";
import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import SearchBar from "../../Components/Common/SearchBar";
import NewProjectUserList from "./NewProjectUserList";
import ButtonComp from "Components/Common/Button";

const useStyles = createUseStyles({
  font: {
    fontFamily: "Plus Jakarta Sans",
    textTransform: "none",
    fontWeight: "600",
    fontSize: "16px",
    padding: "16px 8px",
    width: "33.3%",
  },
  tabPanel: {
    display: "flex",
    padding: "15px 0",
    flexDirection: "column",
    gap: "10px",
  },
  Lists: {
    padding: "10px 0",
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    height: "330px",
    overflowX: "hidden",
    overflowY: "scroll",
  },
  user: {
    flex: "0 0 49%",
    padding: "0 15px",
    borderBottom: "1px solid grey",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
  },
  btn: {
    width: "100%",
    padding: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const Users = [
  "BlueDragon92",
  "SwiftJester",
  "LunaShadow",
  "TechExplorer",
  "EpicNinja77",
  "MysticSphinx",
  "PixelPioneer",
  "SolarFlare23",
  "VelvetVortex",
  "NeonNomad",
  "GalacticGazer",
  "SapphireStrider",
];

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
              <Tab
                className={classes.font}
                label="Quality Assurancee"
                value="3"
              />
            </TabList>
          </Box>
          <TabPanel value="1" className={classes.tabPanel}>
            <SearchBar type={"text"} placeholder={"Search user"} />
            <Box className={classes.Lists}>
              {Users.map((user) => (
                <NewProjectUserList label={user} userStyle={classes.user} />
              ))}
            </Box>
            <ButtonComp
              variant="contained"
              btntext={"save"}
              buttonStyle={classes.btn}
            />
          </TabPanel>
          <TabPanel value="2" className={classes.tabPanel}>
            {/* <SearchBar type={"text"} placeholder={"Search user"} />
            <Box className={classes.Lists}>
              {Users.map((user) => (
                <NewProjectUserList label={user} userStyle={classes.user} />
              ))}
            </Box>
            <ButtonComp
              variant="contained"
              btntext={"save"}
              buttonStyle={classes.btn}
            /> */}
          </TabPanel>
          <TabPanel value="3" className={classes.tabPanel}>
            {/* <SearchBar type={"text"} placeholder={"Search user"} />
            <Box className={classes.Lists}>
              {Users.map((user) => (
                <NewProjectUserList label={user} userStyle={classes.user} />
              ))}
            </Box>
            <ButtonComp
              variant="contained"
              btntext={"save"}
              buttonStyle={classes.btn}
            /> */}
          </TabPanel>
        </TabContext>
      </Box>
    </Modal>
  );
};

export default NewProjectUserSelectionModel;
