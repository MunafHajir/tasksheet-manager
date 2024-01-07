import React from "react";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
  border: {
    height: "1px",
    background: "#ECECEC",
    margin: "10px -24px",
  },
});

const Border = () => {
  const classes = useStyle();
  return <div className={classes.border}></div>;
};

export default Border;
