import React from "react";
import { createUseStyles } from "react-jss";
import { Box } from "@mui/material";
import PaticularUserProgessProjectDisplaySection from "./PaticularUser/PaticularUserSection/PaticularUserProgessProjectDisplaySection";
import PaticularUserPorjectSection from "./PaticularUser/PaticularUserSection/PaticularUserPorjectSection";
import PaticularUserProgressGraph from "./PaticularUser/PaticularUserSection/PaticularUserProgressGraph";
import BackAndSearchSection from "./PaticularUser/PaticularUserSection/BackAndSearchSection";
import TaskListHeaderPart from "./PaticularUser/TaskListInPaticularUserSection/TaskListHeaderPart";
import DateTabs from "Components/Common/DateTabs";
const useStyles =createUseStyles({
  chartContainer:{
    margin:"2rem 0rem",
    backgroundColor:"white",
    borderRadius:".5rem"
  },
  chartSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "1rem",
    width: "100%",
  },
});
export default function PaticularUserSection() {
  const classes = useStyles();
  return (
    <>
      <Box>
        <BackAndSearchSection />
        <PaticularUserPorjectSection />
        <Box className={classes.chartContainer}>
          <PaticularUserProgessProjectDisplaySection
            PaticularUserName={"Shubham Joshi"}
          />
          <Box className={classes.chartSection}>
            <PaticularUserProgressGraph
              sequence={"Weekly"}
              firstWorkText={"Work timeline"}
              secondWorkText={"Work progress"}
              firstWorkNumber={110}
              secondWorkNumber={310}
              sequenceDisplay={"Week"}
              sequenceDropDown={"Week"}
            />
            <PaticularUserProgressGraph
              sequence={"Monthly"}
              firstWorkText={"Work timeline"}
              secondWorkText={"Work progress"}
              firstWorkNumber={310}
              secondWorkNumber={110}
              sequenceDisplay={"Month"}
              sequenceDropDown={"Month"}
            />
          </Box>
          <TaskListHeaderPart userName={"Shubham Joshi"}/>
          <DateTabs/>
        </Box>
      </Box>
    </>
  );
}
