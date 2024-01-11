import { CssBaseline } from "@mui/material";
import SearchBar from "Components/Common/SearchBar";
import SupportingText from "Components/Common/SupportingText";
import Text from "Components/Common/Text";
import React from "react";
import  createUseStyles  from "react-jss";
import CardContainer from "./Card/CardContainer";
import Border from "Components/Common/Border";
import Button from "Components/Common/Button";

const useStyles = createUseStyles({
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
  SearchContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
  },
  SearchBar: {
    marginTop: "20px",
  },
  searchWidth: {
    width: '30vw',
  },
});

const DashboardUserList = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <div className={classes.MainContainer}>
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
        <Button/>
      </div>
      
      <div className={classes.SearchContainer}>
        <SearchBar placeholder={"Search User"} styleSearch={classes.searchWidth} />
      </div>

      <Border />

      <CardContainer />
    </>
  );
};

export default DashboardUserList;
