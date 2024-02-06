import { Box, Typography, styled } from "@mui/material";
import InputLabelText from "Components/Common/InputLabelText";
import SupportingText from "Components/Common/SupportingText";
import React from "react";
import { createUseStyles } from "react-jss";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import NewProjectUserSelection from "Containers/CreateNewProject/NewProjectUserSelection";
import ButtonComp from "Components/Common/Button";

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
  Data: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
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

const TaskDrawer = ({ selectedTask, Close }) => {
  const classes = userStyles();
  let date = selectedTask.expectedDateTime.split("-");
  return (
    <Box className={classes.container}>
      <Box className={classes.title}>
        <Box>
          <Typography variant="p">Developer module task</Typography>
          <SupportingText
            SupportingTitle={"Here you can view the task."}
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
      {selectedTask && (
        <Box className={classes.flex}>
          <Box className={classes.Data}>
            <Box className={classes.InputBox}>
              <InputLabelText
                varient={"p"}
                labelText={"Task completion expected date"}
              />
              <Textarea
                maxRows={4}
                value={selectedTask.task}
                style={{ resize: "none" }}
                readOnly
              />
            </Box>
            <Box className={classes.InputBox}>
              <InputLabelText
                varient={"p"}
                labelText={"Task completion expected date"}
              />
              <Textarea value={date[0]} style={{ resize: "none" }} readOnly />
            </Box>
            <Box className={classes.InputBox}>
              <InputLabelText
                varient={"p"}
                labelText={"Task completion expected time (in hours)"}
              />
              <Textarea value={date[1]} style={{ resize: "none" }} readOnly />
            </Box>
            <Box className={classes.InputBox}>
              <InputLabelText
                varient={"p"}
                labelText={"Module ETA (in hours)"}
              />
              <Textarea
                value={selectedTask.moduleETA}
                style={{ resize: "none" }}
                readOnly
              />
            </Box>
            <Box className={classes.InputBox}>
              <InputLabelText varient={"p"} labelText={"Assign task to"} />
              <NewProjectUserSelection
                title={"Select employees"}
                paddingTB={"12px"}
                paddingLR={"12px"}
              >
                <svg
                  width="12"
                  height="6"
                  viewBox="0 0 14 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.00039 6.13702L12.8184 0.475692C12.8653 0.429081 12.9209 0.392232 12.9822 0.367276C13.0434 0.342319 13.1089 0.329752 13.1751 0.330301C13.2412 0.33085 13.3065 0.344505 13.3673 0.370475C13.4281 0.396445 13.4831 0.434214 13.5293 0.481597C13.5754 0.52898 13.6116 0.585036 13.6359 0.646522C13.6602 0.708007 13.6721 0.773702 13.6708 0.839802C13.6695 0.905902 13.6552 0.971097 13.6286 1.03161C13.602 1.09213 13.5636 1.14676 13.5157 1.19236L7.34905 7.19236C7.25571 7.28317 7.13062 7.33398 7.00039 7.33398C6.87016 7.33398 6.74506 7.28317 6.65172 7.19236L0.485055 1.19236C0.43718 1.14676 0.398823 1.09213 0.372202 1.03161C0.345581 0.971097 0.331226 0.905902 0.329969 0.839802C0.32871 0.773702 0.340572 0.708007 0.36487 0.646521C0.389168 0.585036 0.425418 0.52898 0.471522 0.481597C0.517628 0.434213 0.572673 0.396445 0.633471 0.370475C0.694268 0.344505 0.759614 0.33085 0.825724 0.330301C0.891833 0.329752 0.957397 0.342319 1.01862 0.367276C1.07984 0.392232 1.1355 0.429081 1.18239 0.475692L7.00039 6.13702Z"
                    fill="black"
                  />
                </svg>
              </NewProjectUserSelection>
              <InputLabelText
                varient={"p"}
                labelText={"10 employees added"}
                color={"#219653"}
              />
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
      )}
    </Box>
  );
};

export default TaskDrawer;
