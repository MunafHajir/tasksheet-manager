import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import ProjectBox from "./ProjectBox";
import { ProjectList } from "./ProjectList";
import { useDispatch } from "react-redux";
import { ActiveProject } from "Stores/Action/Action";
import ModalComp from "Components/Common/Model";

const useStyles = createUseStyles({
  PaticularUserPorjectSection: {
    padding: "20px 24px;",
    backgroundColor: "white",
    borderRadius: ".5rem",
    position: "relative",
boxShadow:"0px 0px 5px -2px gray"
  },
  paticularUserName: {
    fontSize: "1.6rem",
    fontWeight:"600"
  },
  position: {
    fontSize: ".7em",
    color: "gray",
  },
  active: {
    backgroundColor: "#0463D1",
    color: "white",
  },
});
export default function PaticularUserPorjectSection() {
  const dispatch = useDispatch();
//  const getFirstProject = useSelector((state)=>state.Reducer.ActiveProject);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeProject, setActiveProject] = useState("GetCredit");
  const classes = useStyles();
  const projectLists = ProjectList;
  useEffect(() => {
    dispatch(ActiveProject(activeProject));
  }, [activeIndex]);
 
  const toggleButton = (index, projectName) => {
    setActiveIndex(index === activeIndex ? 0 : index);
    setActiveProject(projectName);
  };

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

  return (
    <Box>
      <Box className={classes.PaticularUserPorjectSection}>
        <Typography variant="p" className={classes.paticularUserName}>
          {"Shubham Joshi"}
          <span className={classes.position}> (UX/UI Designer)</span>
        </Typography>

        <Box className="ProjectList">
          {projects}
          <Button
            variant="outlined"
            sx={{
              padding: ".5rem 1rem",
              border: "2px solid #0463D1",
              marginLeft: "5%",
              fontWeight: "600",
              fontSize: ".8rem",
              position:"absolute",
              right: "4rem",
              top: "4.8rem",
              borderRadius: ".5rem",
            }}onClick={handleOpen} >
            {"+ Add Project"}
          </Button>
          <ModalComp open={open} setOpen={setOpen} paticularUserName={"Shubham "}/>
        </Box>
      </Box>
    </Box>
  );
}
