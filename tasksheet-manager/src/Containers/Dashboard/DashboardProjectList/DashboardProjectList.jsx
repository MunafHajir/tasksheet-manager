import { CssBaseline } from "@mui/material";
import SearchBar from "Components/Common/SearchBar";
import SupportingText from "Components/Common/SupportingText";
import Text from "Components/Common/Text";
import React from "react";
import { createUseStyles } from "react-jss";
import CardContainer from "Containers/Dashboard/DashboardProjectList/Card/CardContainer";
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
    width:'18vw'
  }
});

const DashboardProjectList = () => {
  const classes = useStyle();
  return (
    <>
      <CssBaseline />
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
        <SearchBar placeholder={"Search Project"} styleSearch={classes.searchWidth}/>
      </div>

      <Border />

      <CardContainer />
    </>
  );
};

export default DashboardProjectList;
