import React from "react";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
  border: {
    height: "1px",
    background: "#ECECEC",
    // margin: "10px -24px",
  },
});

const Border = (props) => {
  const classes = useStyle();
  return <div className={`${classes.border} ${props.borderWidth}`}></div>;
};

export default Border;
