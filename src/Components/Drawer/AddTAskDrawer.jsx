import { Box } from "@mui/material";
import SupportingText from "Components/Common/SupportingText";
import Text from "Components/Common/Text";
import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
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
  FontBold:{
    fontFamily: "Plus Jakarta Sans",
    fontWeight:"600"
  }
});

const AddTAskDrawer = ({ Close }) => {
  const classes = useStyles();
  return (
    <Box className={classes.title}>
      <Box>
        {/* <Typography variant="h1">Developer module task</Typography> */}
        <Text classes={classes.FontBold} title={"Developer module task"} />
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
  );
};

export default AddTAskDrawer;
