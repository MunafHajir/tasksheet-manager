import { CssBaseline } from "@mui/material";
import SupportingText from "Components/Common/SupportingText";
import Text from "Components/Common/Text";
import React from "react";
import { createUseStyles } from "react-jss";

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
});

const DashboardProjectList = () => {
  const classes = useStyle();
  return (
    <>
      <CssBaseline />
      <div className={classes.Main}>
        <Text
          TextVariant={"h5"}
          title={"Project list"}
          classes={classes.CustomTextStyle}
        />
        <SupportingText SupportingTitle={"12 Project"} />
      </div>
    </>
  );
};

export default DashboardProjectList;
