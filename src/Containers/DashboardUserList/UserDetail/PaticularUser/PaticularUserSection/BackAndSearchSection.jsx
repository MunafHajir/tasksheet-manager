import { Box, Typography } from "@mui/material";
import SearchBar from "Components/Common/SearchBar";
import React from "react";
import { createUseStyles } from "react-jss";
import { useNavigate } from "react-router-dom";

const useStyles = createUseStyles({
  BackAndSearchSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: "1.5rem",
    color: "black",
    fontWeight: "600",
  },
  backSection: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },
  backSvg: {
    marginTop: ".5rem",
    marginRight: "2rem",
    cursor: "pointer",
  },
  searchBox:{
    flexBasis:"15rem",
  },
  Border:{
    backgroundColor:"white",
    width:"28.64vw"
  }
});
export default function BackAndSearchSection() {
  const navigator = useNavigate();
    const classes = useStyles();
    const handleBack =()=>{
        navigator("/UserList")
    }
  return (
    <Box className={classes.BackAndSearchSection}>
      <Box className={classes.backSection}>
        <Box className={classes.backSvg} onClick={handleBack}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5.25 11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H5.25C5.05109 12.75 4.86032 12.671 4.71967 12.5303C4.57902 12.3897 4.5 12.1989 4.5 12C4.5 11.8011 4.57902 11.6103 4.71967 11.4697C4.86032 11.329 5.05109 11.25 5.25 11.25Z"
              fill="black"
            />
            <path
              d="M5.56038 12L11.7809 18.219C11.9217 18.3598 12.0008 18.5508 12.0008 18.75C12.0008 18.9491 11.9217 19.1401 11.7809 19.281C11.64 19.4218 11.449 19.5009 11.2499 19.5009C11.0507 19.5009 10.8597 19.4218 10.7189 19.281L3.96888 12.531C3.89903 12.4613 3.84362 12.3785 3.80581 12.2874C3.768 12.1963 3.74854 12.0986 3.74854 12C3.74854 11.9013 3.768 11.8036 3.80581 11.7125C3.84362 11.6214 3.89903 11.5386 3.96888 11.469L10.7189 4.71897C10.8597 4.57814 11.0507 4.49902 11.2499 4.49902C11.449 4.49902 11.64 4.57814 11.7809 4.71897C11.9217 4.8598 12.0008 5.05081 12.0008 5.24997C12.0008 5.44913 11.9217 5.64014 11.7809 5.78097L5.56038 12Z"
              fill="black"
            />
          </svg>
        </Box>
        <Box>
          <Typography variant="p">Back to users list</Typography>
        </Box>
      </Box>
      <Box>
        <SearchBar placeholder={"Search another user"} styleSearch={classes.searchBox} BorderStyleExternal={classes.Border}/>
        {/* <Typography variant="p">I am search option...</Typography> */}
      </Box>
    </Box>
  );
}
