import React from "react";
import { createUseStyles } from "react-jss";
import { CssBaseline } from "@mui/material";
import Text from "Components/Common/Text";

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
});

const CreateNewProject = () => {
  const classes = useStyle();
  return (
    <>
      <CssBaseline>
        <div className={classes.MainContainer}>
          <div className={classes.Main}>
            <Text
              TextVariant={"h5"}
              title={"Create new project"}
              classes={classes.CustomTextStyle}
            />
          </div>
        </div>
      </CssBaseline>
    </>
  );
};

export default CreateNewProject;
