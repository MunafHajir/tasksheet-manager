import { CssBaseline } from "@mui/material";
import SearchBar from "Components/Common/SearchBar";
import SupportingText from "Components/Common/SupportingText";
import Text from "Components/Common/Text";
import React from "react";
import { createUseStyles } from "react-jss";
import CardContainer from "Containers/Dashboard/DashboardProjectList/Card/CardContainer"

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
  border:{
    height: "1px",
    background:"#ECECEC",
    margin: "10px -24px",    
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
          <SupportingText SupportingTitle={"12 Project"} />
        </div>
        <SearchBar placeholder={"Search Project"} />
      </div>

      <div className={classes.border}></div>

    <CardContainer />
    </>
  );
};

export default DashboardProjectList;
