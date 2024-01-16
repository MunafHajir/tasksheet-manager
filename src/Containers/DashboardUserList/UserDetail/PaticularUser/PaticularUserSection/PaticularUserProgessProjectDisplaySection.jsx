import { Box, Typography } from "@mui/material";
import ButtonComp from "Components/Common/Button";
import React from "react";
import { createUseStyles } from "react-jss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useStyles = createUseStyles({
  chartSectionHeaderPart: {
    backgroundColor: "#DCECFE",
    width: "100%",
    color: "#0463D1",
    padding: "18px 24px",
    borderTopLeftRadius: ".5rem",
    borderTopRightRadius: ".5rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  designSection: {
    backgroundColor: "white",
    borderRadius: "2rem",
    fontSize: ".85rem",
    padding: "0rem .8rem",
    cursor: "pointer",
    fontWeight: "600",
  },
  displayProjectName: {
    fontWeight: "600",
    display: "inline-block",
    lineHeight: "28px",
    marginRight: "1rem",
  },
  performnacePercentage: {
    color: "#219653",
    fontWeight: "600",
    fontSize: ".9rem",
    backgroundColor: "#e4f5e4",
    padding: ".05rem 1rem",
    borderRadius: "1rem",
    wordSpacing: ".1rem",
  },
  progressSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding:"1rem 2rem 0 0"
  },
  btn: {
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    fontSize:".8rem",
    fontWeight:"600",
  },
  svg:{
    height:"auto",
    marginTop:"5px",
    marginRight:"3px"
  }
});
export default function PaticularUserProgessProjectDisplaySection({
  PaticularUserName,
}) {
  const currentProjectOpen = useSelector(
    (state) => state.Reducer.ActiveProject
  );
  const navigator = useNavigate();
  const handleClick = (event) => {
    navigator(`/ProjectList/${event}`);
  };

  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.chartSectionHeaderPart}>
        <Box>
          <Typography variant="p" className={classes.displayProjectName}>
            {currentProjectOpen} Dashboard
          </Typography>
          <span className={classes.performnacePercentage}>
            {90}% work efficiency on this project till date
          </span>
        </Box>
        <Box
          className={classes.designSection}
          onClick={() => handleClick(currentProjectOpen)}
        >
          <Typography variant="p">
            {" "}
            <Typography
              variant="p"
              sx={{ fontSize: "1rem", fontWeight: "900" }}
            >
              .
            </Typography>{" "}
            Design stage
          </Typography>
        </Box>
      </Box>
      <Box className={classes.progressSection}>
        <Box sx={{ marginLeft: "1.5%", fontWeight: "600", marginTop: "1%"  ,fontSize:"1.2rem"}}>
          <Typography variant="p">Progress of {PaticularUserName} </Typography>
        </Box>
        <Box>
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
