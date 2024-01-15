import { Box, CssBaseline } from "@mui/material";
import SearchBar from "Components/Common/SearchBar";
import SupportingText from "Components/Common/SupportingText";
import Text from "Components/Common/Text";
import React from "react";
import { createUseStyles } from "react-jss";
import CardContainer from "./Card/CardContainer";
import Border from "Components/Common/Border";

const useStyle = createUseStyles({
  CustomTextStyle: {
    fontFamily: "Plus Jakarta Sans",
    fontSize: "1vw",
    fontWeight: "600",
    color: "#101828",
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
  SupportingText: {
    fontFamily: "Plus Jakarta Sans",
    backgroundColor: "#F7FBFF",
    color: "#0463D1",
    fontSize: "0.800vw",
    fontWeight: "500",
    borderRadius: "176px",
    padding: "4px 16px",
  },
  searchWidth: {
    width: "18vw",
  },
  style: {
    borderRadius: "8px",
    border: "1px solid #ECECEC",
    background: "#FFF",
    boxShadow: "0px 1px 3px 0px rgba(16, 24, 40, 0.10)",
    padding: "20px 24px",
  },
  borderWidth:{
    margin:"20px -24px",
  }
});

const DashboardProjectList = () => {
  const classes = useStyle();
  return (
    <>
      <CssBaseline />
      <Box className={classes.style}>
        <div className={classes.MainContainer}>
          <div className={classes.Main}>
            <Text
              TextVariant={"h5"}
              title={"Project list"}
              classes={classes.CustomTextStyle}
            />
            <SupportingText
              classes={classes.SupportingText}
              SupportingTitle={"12 Project"}
            />
          </div>
          <SearchBar
            placeholder={"Search Project"}
            styleSearch={classes.searchWidth}
          />
        </div>

        <Border borderWidth={classes.borderWidth}/>

        <CardContainer />
      </Box>
    </>
  );
};

export default DashboardProjectList;
