import { CssBaseline } from "@mui/material";
import SearchBar from "Components/Common/SearchBar";
import SupportingText from "Components/Common/SupportingText";
import Text from "Components/Common/Text";
import React from "react";
import  createUseStyles  from "react-jss";
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
    width:'30vw'
  }
});

const DashboardUserList = () => {
  const classes = useStyle();
  return (
    <>
      <CssBaseline />
      <box className={classes.MainContainer}>
        <div className={classes.Main}>
          <Text
            TextVariant={"h5"}
            title={"User list"}
            classes={classes.CustomTextStyle}
          />
          <SupportingText
            classes={classes.SupportingText}
            SupportingTitle={"12 User"}
          />
          
        </div>
        
      </box>
      <box className={classes.Main} >
        <SearchBar placeholder={"Search User"} styleSearch={classes.searchWidth}/>
      </box>

      <Border />

      <CardContainer />
    </>
  );
};

export default DashboardUserList;
