import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import CancelIcon from "@mui/icons-material/Cancel";
import ProjectBox from "./ProjectBox";
import { ProjectList } from "./ProjectList";
import { useDispatch, useSelector } from "react-redux";
import { ActiveProject } from "Stores/Action/Action";
import ModelSelection from "Components/Common/ModelSelection";
import ButtonComp from "Components/Common/Button";

const useStyles = createUseStyles({
  PaticularUserPorjectSection: {
    padding: "20px 24px;",
    backgroundColor: "white",
    borderRadius: ".5rem",
    position: "relative",
    boxShadow: "0px 0px 5px -2px gray",
  },
  ProjectList: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  paticularUserName: {
    fontSize: "1.6rem",
    fontWeight: "600",
  },
  position: {
    fontSize: ".7em",
    color: "gray",
  },
  active: {
    backgroundColor: "#0463D1",
    color: "white",
  },
  style: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: ".5rem",
    p: 4,
  },
  heading: {
    fontWeight: "600",
    fontSize: "1.2rem",
    paddingTop: "1rem",
  },
  AssignProjecSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
  },
  ModelSelectionContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: "30%",
    borderRadius: ".7rem",
    paddingBottom: "1rem",
  },
  ModelSelectionContainerHeaderPart: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  AssignProjectButton: {
    textTransform: "none",
  },
  CancelIcon: {
    fontSize: 17,
    color: "black",
    marginTop: "1.2rem",
    cursor: "pointer",
  },
});
export default function PaticularUserPorjectSection() {
  const dispatch = useDispatch();
  const getFirstProject = useSelector((state) => state.Reducer.ActiveProject);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeProject, setActiveProject] = useState("GetCredit");

  const [project, setProject] = React.useState("");
  const classes = useStyles();
  const projectLists = ProjectList;

  useEffect(() => {
    dispatch(ActiveProject(activeProject));
  }, [activeIndex]);

  const toggleButton = (index, projectName) => {
    setActiveIndex(index === activeIndex ? 0 : index);
    setActiveProject(projectName);
  };

  //projectList
  const projects = projectLists.map((item, index) => {
    const isActive = index === activeIndex;
    return (
      <ProjectBox
        projectName={item.projectName}
        value={index}
        key={index}
        className={isActive ? classes.active : ""}
        handleClick={toggleButton}
      />
    );
  });

  const handleChange = (event) => {
    setProject(event.target.value);
  };

  // projectList in dropDowm form
  const projectList = ProjectList;
  let projectDropDown = projectList.map((item, index) => {
    return (
      <MenuItem value={index + 1} key={index}>
        {item.projectName}
      </MenuItem>
    );
  });

  // handle cancel and handle save
  const handleClickCancelIcon = () => {
    setOpen(false);
  };
  const handleClickSaveButton = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Box className={classes.PaticularUserPorjectSection}>
        <Typography variant="p" className={classes.paticularUserName}>
          {"Shubham Joshi"}
          <span className={classes.position}> (UX/UI Designer)</span>
        </Typography>
        <Box className={classes.ProjectList}>
          <Box>{projects}</Box>
          <Box>
            <Button variant="outlined" onClick={handleOpen}>
              {"+ Add Project"}
            </Button>

            {/* <Box className={classes.AssignProjecSection}>      */}
            <ModelSelection
              open={open}
              setOpen={setOpen}
              modelStyle={classes.ModelSelectionContainer}
              paticularUserName={"Shubham "}
              children={
                <>
                  <Box sx={classes.style}>
                    <Box className={classes.ModelSelectionContainerHeaderPart}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        className={classes.heading}
                      >
                        Assign project to {"shivnarayn"}
                      </Typography>
                      <Box>
                        <CancelIcon
                          className={classes.CancelIcon}
                          onClick={handleClickCancelIcon}
                        />
                      </Box>
                    </Box>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                      <FormHelperText>Project</FormHelperText>
                      <Select
                        value={project}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                        style={{
                          width: "25rem",
                          marginBottom: "1rem",
                          height: "6vh",
                        }}
                      >
                        <MenuItem value="">
                          <em>Select project</em>
                        </MenuItem>
                        {projectDropDown}
                      </Select>
                      <ButtonComp
                        btntext={"Save"}
                        variant="contained"
                        logic={handleClickSaveButton}
                        buttonStyle={classes.AssignProjectButton}
                      />
                    </FormControl>
                  </Box>
                </>
              }
            />
          </Box>
        </Box>
      </Box>
      {/* </Box> */}
    </Box>
  );
}
