import {
  Box,
  MenuItem,
  Typography,
} from "@mui/material";
import ProgressGraph from "Components/Graph/ProgressGraph";
import React from "react";
import { createUseStyles } from "react-jss";
import { MonthList, WeekList, weekList } from "./PaticularGraphMonthAndWeekDatalist";
import DropDown from "Components/Common/DropDownWeekAndMonth";
const useStyles = createUseStyles({
  graphBoxSection: {
    width: "85%",
    margin:"0rem 1rem",
    padding:".5rem",    
    marginBottom:"1rem",
    boxShadow:"0px 0px 5px -2px  gray ",
    borderRadius:".2rem"
  },
  graphTopInformationSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0rem 2rem",
  },
  TextSection: {
    marginLeft:".5%",
  },
  DifferentWorkSection: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: "1rem",
    width: "100%",
  },
  firstWork: {
    marginRight: "2rem",
  },
  secondWork: {
    marginRight: "1rem",
  },
  firstColor:{
    width: ".8rem",
    height: ".8rem",
    borderRadius: "50%",
    backgroundColor: "#142E56",
    display: "inline-block",
    marginRight: "0.5rem",
  },
  secondColor: {
    width: ".8rem",
    height: ".8rem",
    borderRadius: "50%",
    backgroundColor: "#9FC4FF",
    display: "inline-block",
    marginRight: "0.5rem",
  },
  sequence:{
  fontSize:"1rem",
  fontWeight:"600",
  },
});
export default function PaticularUserProgressGraph({sequence ,firstWorkText ,secondWorkText ,firstWorkNumber , secondWorkNumber ,sequenceDisplay ,sequenceDropDown}) {
  const classes = useStyles();
  const [week, setWeek] = React.useState("");

  const handleChange = (event) => {
    setWeek(event.target.value);
  };
  const weekListData =WeekList;
const Day =weekListData.map((day ,index)=>{
    return(
        <MenuItem value={index+1} key={index}>{day.Day}</MenuItem>
        )
    })
    
    const monthListData =MonthList;
    const Month = monthListData.map((item,index)=>{
        return(       
            <MenuItem value={index+1} key={index}>{item}</MenuItem>  
    )
})
  return (
    <Box className={classes.graphBoxSection}>
      <Box className={classes.graphTopInformationSection}>
        <Box className={classes.TextSection}>
          <Typography variant="body1" className={classes.sequence}>{sequence} progress</Typography>
          <Box className={classes.DifferentWorkSection}>
            <Box className={classes.firstWork}>
              <Typography variant="body2">
                <span className={classes.firstColor}></span>
                {firstWorkText}
              </Typography>
            </Box>
            <Box className={classes.secondWork}>
              <Typography variant="body2">
                <span className={classes.secondColor}></span>
                {secondWorkText}
              </Typography>
            </Box>
          </Box>
        </Box>
        <DropDown sequence={sequence} sequenceDisplay={sequenceDisplay} sequenceDropDown={sequenceDropDown}/>
        {/* <Box>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              value={week}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <em>{sequenceDisplay}</em>
              </MenuItem>
              {
               sequence ==="Week" ? Day : Month              // take the input sequence and distribute the value just like month and week
              }
            </Select>
          </FormControl>
        </Box> */}
      </Box>
      <ProgressGraph timeline={firstWorkNumber} progress={secondWorkNumber} />
    </Box>
  );
}
