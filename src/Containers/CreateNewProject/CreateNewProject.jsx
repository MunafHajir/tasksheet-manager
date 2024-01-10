import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { Box, CssBaseline } from "@mui/material";
import Text from "Components/Common/Text";
import InputLabelText from "Components/Common/InputLabelText";
import Input from "Components/Common/Input";
import NewProjectUserSelection from "Containers/CreateNewProject/NewProjectUserSelection";
import NewProjectUserSelectionModel from "Components/Common/ModelSelection";
import Border from "Components/Common/Border";

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
  },
  selectBox: {
    width: "48%",
    fontFamily: "Plus Jakarta Sans",
    fontSize: 16,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    gap: "8px",
  },
  model: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40%",
    height:'550px',
    background: "#FFFFFF",
    border: " none",
    outline:'none',
    padding:'24px',
    borderRadius:'8px'
  },
});

const CreateNewProject = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const classes = useStyle();
  return (
    <>
      <CssBaseline>
        <div className={classes.MainContainer}>
          <div className={classes.Main}>
            <Text
              TextVariant={"h5"}
              title={"Create new project"}
              classes={classes.CustomTextStyle}
            />
          </div>
        </div>
        <Border />
        <div className={classes.conatiner}>
          <Box sx={{ display: "flex", width: "100%", gap: "4%" }}>
            <Box className={classes.inputBox}>
              <InputLabelText varient="p" labelText="Project name" />
              <Input type={"text"} placeholder={"Enter project name"} />
            </Box>
            <Box className={classes.inputBox}>
              <InputLabelText varient={"p"} labelText={"Project start date"} />
              <Input type={"date"} placeholder={"Select date"} />
            </Box>
          </Box>
        </div>
        <div className={classes.conatiner}>
          <NewProjectUserSelectionModel logic={handleClose} open={open} modelStyle={classes.model}/>
          <Box className={classes.selectBox}>
            <InputLabelText varient={"p"} labelText={"Users"} />
            <NewProjectUserSelection logic={handleOpen} />
            <InputLabelText
              varient={"p"}
              labelText={"12 Developer, 3 Designers, 6 QA have been selected"}
              color={"#219653"}
            />
          </Box>
        </div>
      </CssBaseline>
    </>
  );
};

export default CreateNewProject;
