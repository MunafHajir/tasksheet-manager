import React from "react";
import { createUseStyles } from "react-jss";
import { Box } from "@mui/material";
import PaticularUserProgessProjectDisplaySection from "./PaticularUser/PaticularUserSection/PaticularUserProgessProjectDisplaySection";
import PaticularUserPorjectSection from "./PaticularUser/PaticularUserSection/PaticularUserPorjectSection";
import PaticularUserProgressGraph from "./PaticularUser/PaticularUserSection/PaticularUserProgressGraph";
import BackAndSearchSection from "./PaticularUser/PaticularUserSection/BackAndSearchSection";
import TaskListHeaderPart from "./PaticularUser/TaskListInPaticularUserSection/TaskListHeaderPart";
import DateTabs from "Components/Common/DateTabs";
import CreateNewProject from "Containers/CreateNewProject/CreateNewProject";
import { CreateNewProjectModuleETATable } from "Components/Table/CreateNewProjectTable";
import ButtonComp from "Components/Common/Button";
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
  const tableData = [
    {
      id: 1,
      moduleName: "Developer module",
      task: "Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ",
      expectedDateTime: "Sept 23, 2023 - 4 hrs",
      // assignedTaskTo: AssignedUsers(),
      moduleETA: "80 Hours",
    },
    {
      id: 2,
      moduleName: null,
      task: "Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ",
      expectedDateTime: "Sept 23, 2023 - 4 hrs",
      // assignedTaskTo: AssignedUsers(),
      moduleETA: "80 Hours",
    },
    {
      id: 3,
      moduleName: null,
      task: "Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ",
      expectedDateTime: "Sept 23, 2023 - 4 hrs",
      // assignedTaskTo: AssignedUsers(),
      moduleETA: "80 Hours",
    },
    {
      id: 4,
      moduleName: null,
      task: "Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ",
      expectedDateTime: "Sept 23, 2023 - 4 hrs",
      // assignedTaskTo: AssignedUsers(),
      moduleETA: "80 Hours",
    },
    {
      id: 5,
      moduleName: "Admin module",
      task: "Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ",
      expectedDateTime: "Sept 23, 2023 - 4 hrs",
      // assignedTaskTo: AssignedUsers(),
      moduleETA: "80 Hours",
    },
    {
      id: 6,
      moduleName: null,
      task: "Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ",
      expectedDateTime: "Sept 23, 2023 - 4 hrs",
      // assignedTaskTo: AssignedUsers(),
      moduleETA: "80 Hours",
    },
    {
      id: 7,
      moduleName: <ButtonComp variant={"outlined"} btntext={"Module"} />,
      task: <ButtonComp variant={"outlined"} btntext={"Task"} />,
      expectedDateTime: null,
      assignedTaskTo: null,
      moduleETA: null,
    },
  ];

  const columns = [
    { id: "moduleName", label: "Module Name", rowWidth: "200px" },
    { id: "task", label: "Task", rowWidth: "440px" },
    {
      id: "expectedDateTime",
      label: "Expected Date and Time",
      rowWidth: "200px",
    },
    { id: "assignedTaskTo", label: "Assigned Task To", rowWidth: "250px" },
    { id: "moduleETA", label: "Module ETA", rowWidth: "130px" },
  ];
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
          <CreateNewProjectModuleETATable 
           data={tableData}
           customizableColumns={columns}/>
        </Box>
      </Box>
    </>
  );
}
