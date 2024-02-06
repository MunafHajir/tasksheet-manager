import { Box, Typography, styled } from "@mui/material";
import InputLabelText from "Components/Common/InputLabelText";
import SupportingText from "Components/Common/SupportingText";
import React from "react";
import { createUseStyles } from "react-jss";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import ButtonComp from "Components/Common/Button";
import Input from "Components/Common/Input";

const userStyles = createUseStyles({
  title: {
    fontFamily: "Plus Jakarta Sans",
    background: "#004596",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 24px",
    fontSize: "22px",
  },
  SubTitle: {
    fontSize: "13px",
    fontFamily: "Plus Jakarta Sans",
  },
  InputBox: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
  Input: {
    width: "100%",
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    padding: "10px 24px",
    height: "88%",
  },
  btnStyle: {
    display: "flex",
    padding: "15px 20px",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    flex: "1 0 0",
    borderRadius: "8px",
    background: "#004596",
    color: "#fff",
    width: "100%",
    boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
  },
  btn: {
    position: "absolute",
    bottom: "10px",
    borderRadius: "10px",
  },
  container: {
    height: "100%",
  },
  SelectTime: {
    position:"relative"
  },
  SelectTimeIcon:{
    position:"absolute",
    top:"27%",
    right:"5%"
  }
});

const Textarea = styled(BaseTextareaAutosize)(
  ({ theme }) => `
  width: 100%;
  font-family: 'Plus Jakarta Sans';
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  padding: 12px;
  border-radius: 8px;
  border: 0.1px solid grey;

  &:focus {
    border-color: #000
    box-shadow: 0 0 0 3px grey;
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`
);

const ModelDrawer = ({ Close }) => {
  const classes = userStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.title}>
        <Box>
          <Typography variant="p">Module Task</Typography>
          <SupportingText
            SupportingTitle={"Here you can add the new module."}
            classes={classes.SubTitle}
          />
        </Box>
        <Box onClick={Close}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
              fill="white"
            />
            <path
              d="M9.17035 15.58C8.98035 15.58 8.79035 15.51 8.64035 15.36C8.35035 15.07 8.35035 14.59 8.64035 14.3L14.3004 8.64C14.5904 8.35 15.0704 8.35 15.3604 8.64C15.6504 8.93 15.6504 9.41 15.3604 9.7L9.70035 15.36C9.56035 15.51 9.36035 15.58 9.17035 15.58Z"
              fill="white"
            />
            <path
              d="M14.8304 15.58C14.6404 15.58 14.4504 15.51 14.3004 15.36L8.64035 9.7C8.35035 9.41 8.35035 8.93 8.64035 8.64C8.93035 8.35 9.41035 8.35 9.70035 8.64L15.3604 14.3C15.6504 14.59 15.6504 15.07 15.3604 15.36C15.2104 15.51 15.0204 15.58 14.8304 15.58Z"
              fill="white"
            />
          </svg>
        </Box>
      </Box>

      <Box className={classes.flex}>
        <Box className={classes.InputBox}>
          <Box className={classes.InputBox}>
            <InputLabelText labelText={"Model Name"} />
            <Input
              placeholder={"Enter Module Name"}
              InputStyle={classes.Input}
              type={"text"}
            />
          </Box>
          <Box className={classes.InputBox}>
            <InputLabelText labelText={"Module ETA (in hours)"} />
            <Box className={classes.SelectTime}>
              <Input placeholder={"Select time"} InputStyle={classes.Input} />
              <Box className={classes.SelectTimeIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.0056 21.143C6.95612 21.143 2.86272 17.0496 2.86272 12.0001C2.86272 6.95064 6.95612 2.85724 12.0056 2.85724C17.055 2.85724 21.1484 6.95064 21.1484 12.0001C21.1484 17.0496 17.055 21.143 12.0056 21.143Z"
                    stroke="black"
                    stroke-width="1.14286"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.0039 8.57153V13.143H16.0039"
                    stroke="black"
                    stroke-width="1.14286"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Box>
            </Box>
          </Box>
        </Box>

        <ButtonComp
          logic={Close}
          // variant={"contained"}
          btntext={"Done"}
          buttonStyle={classes.btn}
          btnTextStyle={classes.btnStyle}
        />
      </Box>
    </Box>
  );
};

export default ModelDrawer;
