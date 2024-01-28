import React, { useState } from "react";
import {
  Box,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  Drawer,
} from "@mui/material";
import Text from "Components/Common/Text";
import InputLabelText from "Components/Common/InputLabelText";
import Input from "Components/Common/Input";
import NewProjectUserSelection from "Containers/CreateNewProject/NewProjectUserSelection";
import Border from "Components/Common/Border";
import ModelSelection from "Components/Common/ModelSelection";
import ProjectUserSelection from "./ProjectUserSelection";
import { CreateNewProjectModuleETATable } from "Components/Table/CreateNewProjectTable";
import ButtonComp from "Components/Common/Button";
import SupportingText from "Components/Common/SupportingText";
import TaskDrawer from "Components/Drawer/TaskDrawer";
import { makeStyles } from "@mui/styles";
import { createUseStyles } from "react-jss";
import ModelDrawer from "Components/Drawer/ModuleDrawer";
import AddTAskDrawer from "Components/Drawer/AddTAskDrawer";
import AddTask from "Components/Drawer/AddTask";

const useStyle = createUseStyles({
  CustomTextStyle: {
    fontFamily: "Plus Jakarta Sans",
    fontSize: "1vw",
    fontWeight: "600",
    color: "#101828",
    padding: "10px 0",
  },
  Main: {
    fontFamily: "Plus Jakarta Sans",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  MainContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    fontFamily: "Plus Jakarta Sans",
    outline: "none",
    borderRadius: "10px",
  },
  inputBox: {
    fontFamily: "Plus Jakarta Sans",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    fontSize: 16,
    flex: "0 0 48%",
  },
  conatiner: {
    width: "100%",
    padding: "10px 0",
    display: "flex",
    gap: "4%",
  },
  selectBox: {
    flex: "0 0 48%",
    fontFamily: "Plus Jakarta Sans",
    fontSize: 16,
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  model: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40%",
    height: "550px",
    background: "#FFFFFF",
    border: " none",
    outline: "none",
    padding: "24px",
    borderRadius: "8px",
  },
  SupportingText: {
    fontFamily: "Plus Jakarta Sans",
    backgroundColor: "#EEEEEE",
    color: "#595959",
    fontSize: "11px",
    fontWeight: 500,
    borderRadius: "16px",
    padding: "4px 8px",
  },
  title: {
    fontFamily: "Plus Jakarta Sans",
    fontSize: "16px",
    fontWeight: 600,
  },
  cnpContainer: {
    background: "#fff",
    padding: "20px 24px",
    borderRadius: "8px",
    boxShadow: "0px 1px 3px 0px rgba(16, 24, 40, 0.10)",
    border: "1px solid #ECECEC",
  },
  borderWidth: {
    margin: "10px -24px",
  },
  labelMargin: {
    margin: "36px 0px",
  },
  drawerPaper: {
    width: "30%",
  },
});

const AssignedUsers = () => {
  const classes = useStyle();

  let users = ["Rahul Sharma", "Jay Tiwari", "+4"];
  return (
    <>
      <Box sx={{ display: "flex", gap: "5px" }}>
        {users.map((user, index) => (
          <SupportingText
            classes={classes.SupportingText}
            SupportingTitle={user}
            key={index}
            SupportingVariant={"p"}
          />
        ))}
      </Box>
    </>
  );
};

const CreateNewProject = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [modelDrawer, setModelDrawer] = useState(false);
  const [addTaskDrawer, setAddTaskDrawer] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const classes = useStyle();

  // const HandleTaskClick = (taskId) => {
  //   // Perform actions when a task is clicked, using the taskId
  //   alert(`Task ${taskId} clicked`);
  // };

  const handelModelClick = () => {
    setSelectedTask(null);
    setModelDrawer(true);
    setAddTaskDrawer(false);
    setOpenDrawer(true);
  };

  const handelAddTaskClick = () => {
    setSelectedTask(null);
    setModelDrawer(false);
    setAddTaskDrawer(true);
    setOpenDrawer(true);
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
    // setSelectedTask(' ');
  };

  const tableData = [
    {
      id: 1,
      moduleName: "Developer module",
      task: "Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ",
      expectedDateTime: "Sept 23, 2023 - 4 hrs",
      assignedTaskTo: AssignedUsers(),
      moduleETA: "80 Hours",
      onTaskClick: function HandleTaskClick(taskId) {
        setSelectedTask(taskId);
        setModelDrawer(false);
        setAddTaskDrawer(false);
        setOpenDrawer(true);
      },
    },
    {
      id: 2,
      moduleName: null,
      task: "Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ",
      expectedDateTime: "Sept 23, 2023 - 4 hrs",
      assignedTaskTo: AssignedUsers(),
      moduleETA: "80 Hours",
      onTaskClick: function HandleTaskClick(taskId) {
        setModelDrawer(false);
        setAddTaskDrawer(false);
        setSelectedTask(taskId);
        setOpenDrawer(true);
      },
    },
    {
      id: 3,
      moduleName: null,
      task: "Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ",
      expectedDateTime: "Sept 23, 2023 - 4 hrs",
      assignedTaskTo: AssignedUsers(),
      moduleETA: "80 Hours",
      onTaskClick: function HandleTaskClick(taskId) {
        setSelectedTask(taskId);
        setModelDrawer(false);
        setAddTaskDrawer(false);
        setOpenDrawer(true);
      },
    },
    {
      id: 4,
      moduleName: null,
      task: "Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ",
      expectedDateTime: "Sept 23, 2023 - 4 hrs",
      assignedTaskTo: AssignedUsers(),
      moduleETA: "80 Hours",
      onTaskClick: function HandleTaskClick(taskId) {
        setModelDrawer(false);
        setSelectedTask(taskId);
        setAddTaskDrawer(false);
        setOpenDrawer(true);
      },
    },
    {
      id: 5,
      moduleName: "Admin module",
      task: "Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ",
      expectedDateTime: "Sept 23, 2023 - 4 hrs",
      assignedTaskTo: AssignedUsers(),
      moduleETA: "80 Hours",
      onTaskClick: function HandleTaskClick(taskId) {
        setModelDrawer(false);
        setAddTaskDrawer(false);
        setSelectedTask(taskId);
        setOpenDrawer(true);
      },
    },
    {
      id: 6,
      moduleName: null,
      task: "Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ",
      expectedDateTime: "Sept 23, 2023 - 4 hrs",
      assignedTaskTo: AssignedUsers(),
      moduleETA: "80 Hours",
      onTaskClick: function HandleTaskClick(taskId) {
        setModelDrawer(false);
        setAddTaskDrawer(false);
        setSelectedTask(taskId);
        setOpenDrawer(true);
      },
    },
    {
      id: 7,
      moduleName: (
        <ButtonComp
          variant={"outlined"}
          btntext={"Module"}
          logic={() => handelModelClick()}
        />
      ),
      task: (
        <ButtonComp
          variant={"outlined"}
          btntext={"Task"}
          logic={() => handelAddTaskClick()}
        />
      ),
      expectedDateTime: null,
      assignedTaskTo: null,
      moduleETA: null,
    },
  ];

  const columns = [
    { id: "moduleName", label: "Module Name", rowWidth: "180px" },
    { id: "task", label: "Task", rowWidth: "400px" },
    {
      id: "expectedDateTime",
      label: "Expected Date and Time",
      rowWidth: "225px",
    },
    { id: "assignedTaskTo", label: "Assigned Task To", rowWidth: "250px" },
    { id: "moduleETA", label: "Module ETA", rowWidth: "130px" },
  ];

  return (
    <>
      <CssBaseline>
        <Box className={classes.cnpContainer}>
          <Box className={classes.MainContainer}>
            <Box className={classes.Main}>
              <Text
                TextVariant={"h5"}
                title={"Create new project"}
                classes={classes.CustomTextStyle}
              />
            </Box>
          </Box>
          <Border borderWidth={classes.borderWidth} />
          <Box className={classes.conatiner}>
            <Box className={classes.inputBox}>
              <InputLabelText varient="p" labelText="Project name" />
              <Input type={"text"} placeholder={"Enter project name"} />
            </Box>
            <Box className={classes.inputBox}>
              <InputLabelText varient={"p"} labelText={"Project start date"} />
              <Input type={"date"} placeholder={"Select date"} />
            </Box>
          </Box>
          <Box className={classes.conatiner}>
            <ModelSelection
              logic={handleClose}
              open={open}
              modelStyle={classes.model}
            >
              <ProjectUserSelection logic={handleClose} />
            </ModelSelection>
            <Box className={classes.selectBox}>
              <InputLabelText varient={"p"} labelText={"Users"} />
              <NewProjectUserSelection title={"Project tech stack"}>
                <svg
                  width="14"
                  height="8"
                  viewBox="0 0 14 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.99961 6.13702L1.18161 0.475692C1.13473 0.429081 1.07906 0.392232 1.01784 0.367276C0.956621 0.342319 0.891058 0.329752 0.824948 0.330301C0.758838 0.33085 0.693493 0.344505 0.632695 0.370475C0.571897 0.396445 0.516853 0.434214 0.470748 0.481597C0.424643 0.52898 0.388392 0.585036 0.364095 0.646522C0.339797 0.708007 0.327934 0.773702 0.329192 0.839802C0.330451 0.905902 0.344806 0.971097 0.371426 1.03161C0.398047 1.09213 0.436405 1.14676 0.48428 1.19236L6.65095 7.19236C6.74429 7.28317 6.86938 7.33398 6.99961 7.33398C7.12984 7.33398 7.25494 7.28317 7.34828 7.19236L13.5149 1.19236C13.5628 1.14676 13.6012 1.09213 13.6278 1.03161C13.6544 0.971097 13.6688 0.905903 13.67 0.839802C13.6713 0.773702 13.6594 0.708007 13.6351 0.646522C13.6108 0.585036 13.5746 0.52898 13.5285 0.481597C13.4824 0.434214 13.4273 0.396445 13.3665 0.370475C13.3057 0.344505 13.2404 0.33085 13.1743 0.330301C13.1082 0.329752 13.0426 0.34232 12.9814 0.367276C12.9202 0.392232 12.8645 0.429081 12.8176 0.475692L6.99961 6.13702Z"
                    fill="black"
                  />
                </svg>
              </NewProjectUserSelection>
            </Box>
            <Box className={classes.selectBox}>
              <InputLabelText varient={"p"} labelText={"Users"} />
              <NewProjectUserSelection
                logic={handleOpen}
                title={"Select users"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M13.137 7.99961L7.47569 2.18161C7.42908 2.13473 7.39223 2.07906 7.36728 2.01784C7.34232 1.95662 7.32975 1.89106 7.3303 1.82495C7.33085 1.75884 7.34451 1.69349 7.37047 1.6327C7.39644 1.5719 7.43421 1.51685 7.4816 1.47075C7.52898 1.42464 7.58504 1.38839 7.64652 1.3641C7.70801 1.3398 7.7737 1.32793 7.8398 1.32919C7.9059 1.33045 7.9711 1.34481 8.03161 1.37143C8.09213 1.39805 8.14676 1.43641 8.19236 1.48428L14.1924 7.65095C14.2832 7.74429 14.334 7.86938 14.334 7.99961C14.334 8.12984 14.2832 8.25494 14.1924 8.34828L8.19236 14.5149C8.14676 14.5628 8.09213 14.6012 8.03161 14.6278C7.9711 14.6544 7.9059 14.6688 7.8398 14.67C7.7737 14.6713 7.70801 14.6594 7.64652 14.6351C7.58504 14.6108 7.52898 14.5746 7.4816 14.5285C7.43421 14.4824 7.39645 14.4273 7.37048 14.3665C7.34451 14.3057 7.33085 14.2404 7.3303 14.1743C7.32975 14.1082 7.34232 14.0426 7.36728 13.9814C7.39223 13.9202 7.42908 13.8645 7.47569 13.8176L13.137 7.99961Z"
                    fill="black"
                  />
                </svg>
              </NewProjectUserSelection>
              <InputLabelText
                varient={"p"}
                labelText={"12 Developer, 3 Designers, 6 QA have been selected"}
                color={"#219653"}
              />
            </Box>
          </Box>
          <Box className={classes.labelMargin}>
            <FormControlLabel
              // sx={{margin: }}
              control={<Checkbox defaultChecked />}
              label="Is this a resource based project"
            />
          </Box>
          <Box>
            <Text
              TextVariant={"p"}
              classes={classes.title}
              title={"Module wise ETA allocation"}
            />
            <CreateNewProjectModuleETATable
              data={tableData}
              customizableColumns={columns}
            />
            <Drawer
              anchor="right"
              open={openDrawer}
              onClose={handleCloseDrawer}
              classes={{ paper: classes.drawerPaper }}
            >
              {selectedTask && (
                <TaskDrawer
                  selectedTask={selectedTask}
                  Close={handleCloseDrawer}
                />
              )}

              {modelDrawer && <ModelDrawer Close={handleCloseDrawer} />}

              {addTaskDrawer && <AddTask Close={handleCloseDrawer} />}
            </Drawer>
          </Box>
        </Box>
      </CssBaseline>
    </>
  );
};

export default CreateNewProject;
