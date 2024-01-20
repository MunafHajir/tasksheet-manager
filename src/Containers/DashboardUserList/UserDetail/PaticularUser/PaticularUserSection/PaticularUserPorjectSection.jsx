import {
  Box,
  Button,
  CssBaseline,
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
import ModalComp from "Components/Common/Model";
import Text from "Components/Common/Text";
import ButtonComp from "Components/Common/Button";
import InputLabelText from "Components/Common/InputLabelText";
import SelectBox from "Components/Common/SelectBox";

const useStyles = createUseStyles({
  PaticularUserPorjectSection: {
    padding: "20px 24px;",
    backgroundColor: "white",
    borderRadius: ".5rem",
    position: "relative",
    boxShadow: "0px 1px 3px 0px rgba(16, 24, 40, 0.10)",
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
  paticularUserName: {
    fontSize: "20px",
    fontWeight: "600",
    cursor: "pointer",
  },
  position: {
    color: "#828282",
    fontSize: "20px",
    fontWeight: 600,
    lineHeight: "28px",
  },
  Flex: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  ParticularProject: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  active: {
    backgroundColor: "#0463D1",
    color: "white",
    fontFamily: "Plus Jakarta Sans",
    cursor: "pointer",
    fontWeight: "600",
    color: "#fff",
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
  Button: {
    borderRadius: "8px",
    border: "1px solid #0463D1",
    background: "#FFF",
    display: "flex",
    width: "200px",
    padding: "12px 8px",
    justifyContent: "center",
    alignItems: "center",
    gap: "4px",
  },
  btnText: {
    color: "#0463D1",
    fontFamily: "Plus Jakarta Sans",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
    textTransform: "capitalize",
  },
  margin: {
    marginTop: "20px",
  },
  ModelContainer: {
    display: "flex",
    justifyContent: "center",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50% , -50%)",
    width: "30%",
    padding: "24px",
    flexDirection: "column",
    alignItems: "center",
    gap: "32px",
    borderRadius: "12px",
    background: "#FFF",
    boxShadow:
      "0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)",
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ModelFlexContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  Width: {
    width: "100%",
  },
  Text:{
    color: "var(--Black, #242424)",
    fontFamily: "Plus Jakarta Sans",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "28px",
  },
  closeIcon:{
    display: 'flex',
    justifyContent: 'center',
    alignItems:"center",
    cursor:"pointer"
  },
  SaveBtn:{
    display: "flex",
    padding: "15px 20px",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    borderRadius: "8px",
    background: "var(--Blue, #0463D1)",
    boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
  },
  BtnText:{
    color: "var(--White, #FFF)",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "20px",
    textTransform:"capitalize"
  }
});

export default function PaticularUserPorjectSection() {
  const classes = useStyles();
  const getFirstProject = useSelector(state => state.Reducer.ActiveProject);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeProject, setActiveProject] = useState("GetCredit");

  const [project, setProject] = React.useState("");
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

  const handleChange = event => {
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

  const projectName = [
    { value: "Get Credit" },
    { value: "Get Credit" },
    { value: "Get Credit" },
    { value: "Get Credit" },
    { value: "Get Credit" },
  ];

  return (
    <Box>
      <CssBaseline />
      <Box className={classes.PaticularUserPorjectSection}>
        <Box className={classes.Flex}>
          <Text classes={classes.paticularUserName} title={"Shubham Joshi"} />
          <Text classes={classes.position} title={"(UX/UI Designer)"} />
        </Box>

        <Box className={`${"ProjectList"} ${classes.margin}`}>
          <Box className={classes.ParticularProject}>
            <Box className={classes.Flex}>{projects}</Box>
            <ButtonComp
              btnTextStyle={classes.btnText}
              buttonStyle={classes.Button}
              logic={handleOpen}
              // variant={"outlined"}
              btntext={"+ Assign Project"}
            />
          </Box>
          {/* <ModalComp
            open={open}
            setOpen={setOpen}
            paticularUserName={"Shubham "}
          /> */}
          <ModelSelection open={open}>
            <Box className={classes.ModelContainer}>
              <Box className={classes.ModelFlexContainer}>
                <Text title={`Assign Project To Shubham`} classes={classes.Text}/>
                <Box onClick={handleClose} className={classes.closeIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M9.99837 1.66638C5.39004 1.66638 1.66504 5.39138 1.66504 9.99971C1.66504 14.608 5.39004 18.333 9.99837 18.333C14.6067 18.333 18.3317 14.608 18.3317 9.99971C18.3317 5.39138 14.6067 1.66638 9.99837 1.66638ZM13.5817 13.583C13.5046 13.6603 13.413 13.7216 13.3122 13.7634C13.2114 13.8052 13.1033 13.8268 12.9942 13.8268C12.8851 13.8268 12.777 13.8052 12.6762 13.7634C12.5754 13.7216 12.4838 13.6603 12.4067 13.583L9.99837 11.1747L7.59004 13.583C7.43422 13.7389 7.22289 13.8264 7.00254 13.8264C6.78218 13.8264 6.57085 13.7389 6.41504 13.583C6.25922 13.4272 6.17169 13.2159 6.17169 12.9955C6.17169 12.8864 6.19318 12.7784 6.23493 12.6776C6.27669 12.5768 6.33789 12.4852 6.41504 12.408L8.82337 9.99971L6.41504 7.59138C6.25922 7.43557 6.17169 7.22424 6.17169 7.00388C6.17169 6.78353 6.25922 6.5722 6.41504 6.41638C6.57085 6.26057 6.78218 6.17303 7.00254 6.17303C7.22289 6.17303 7.43422 6.26057 7.59004 6.41638L9.99837 8.82472L12.4067 6.41638C12.4839 6.33923 12.5754 6.27803 12.6763 6.23628C12.7771 6.19452 12.8851 6.17303 12.9942 6.17303C13.1033 6.17303 13.2114 6.19452 13.3122 6.23628C13.413 6.27803 13.5046 6.33923 13.5817 6.41638C13.6589 6.49353 13.7201 6.58513 13.7618 6.68593C13.8036 6.78673 13.8251 6.89477 13.8251 7.00388C13.8251 7.11299 13.8036 7.22103 13.7618 7.32183C13.7201 7.42264 13.6589 7.51423 13.5817 7.59138L11.1734 9.99971L13.5817 12.408C13.8984 12.7247 13.8984 13.258 13.5817 13.583Z"
                      fill="#242424"
                    />
                  </svg>
                </Box>
              </Box>

              <Box className={classes.Width}>
                <InputLabelText labelText={`Project`} />
                <SelectBox
                  title={"Select Project"}
                  menuList={projectName}
                  ContainerWidth={classes.Width}
                />
              </Box>

              <ButtonComp
                btntext={"Save"}
                variant={"contained"}
                buttonStyle={`${classes.Width} ${classes.SaveBtn}`}
                btnTextStyle={classes.BtnText}
                logic={handleClose}
              />
            </Box>
          </ModelSelection>
        </Box>
      </Box>
      {/* <Box className={classes.PaticularUserPorjectSection}>
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

            <Box className={classes.AssignProjecSection}>     
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
          </Box> */}

      {/* </Box> */}
      {/* </Box> */}
    </Box>
  );
}
