import { Box, Typography } from "@mui/material";
import ButtonComp from "Components/Common/Button";
import DropDown from "Components/Common/DropDownWeekAndMonth";
import React, { useState } from "react";
import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
  TaskListHeaderPart: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
  },
  TaskListHeaderText:{
    fontSize:"1.1rem",
   fontWeight:"600",
  },
  TaskListButtonsSection: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
  },
  ExploreTaskListBtn: {
    marginTop: "3.7%",
  },
  btn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: ".8rem",
    fontWeight: "600",
  },
  svg: {
    height: "auto",
    marginTop: "5px",
    marginRight: "3px",
  },
});
export default function TaskListHeaderPart({ userName }) {
  const [active, setActive] = useState(true);
  const classes = useStyles();
  return (
    <Box className={classes.TaskListHeaderPart}>
      <Box className={classes.TaskListHeaderText}>
      <Typography variant="p">Task list of {userName}</Typography>
      </Box>
      <Box className={classes.TaskListButtonsSection}>
        <Box>
          <DropDown
            sequenceDisplay={"Week"}
            sequenceDropDown={"Week"}
            active={active}
          />
        </Box>
        <Box>
          <DropDown sequenceDisplay={"Month"} sequenceDropDown={"Month"} />
        </Box>
        <Box className={classes.ExploreTaskListBtn}>
          <ButtonComp
            variant={"outlined"}
            btntext={"Explore"}
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="auto"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9.32031 6.49994L11.8803 3.93994L14.4403 6.49994"
                  fill="white"
                />
                <path
                  d="M9.32031 6.49994L11.8803 3.93994L14.4403 6.49994"
                  stroke="#242424"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.8799 14.18V4.01001"
                  stroke="#242424"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4 12C4 16.42 7 20 12 20C17 20 20 16.42 20 12"
                  fill="white"
                />
                <path
                  d="M4 12C4 16.42 7 20 12 20C17 20 20 16.42 20 12"
                  stroke="#242424"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
            buttonStyle={classes.btn}
            classesSvg={classes.svg}
            classesButton={classes.ExportButton}
          />
        </Box>
      </Box>
    </Box>
  );
}
