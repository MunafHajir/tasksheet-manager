import Card from "Containers/Dashboard/DashboardProjectList/Card/Card";
import React from "react";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
  titleText: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#101828",
  },
  usersText: {
    fontSize: "14px",
    fontWeight: "500",
    color: "#676C76",
  },
  flex:{
    display: 'flex',
    justifyContent: 'center',
    alignItems:"center",
    gap:"16px",
    flexWrap:"wrap"
  }
});

const CardContainer = () => {
  const classes = useStyle();
  return (
    <>
      <div className={classes.flex}>
        <Card
          classesT={classes.titleText}
          variantT={"p"}
          title={"GetProject"}
          variantU={"p"}
          classesU={classes.usersText}
          users={"20 Users"}
        />
        <Card
          classesT={classes.titleText}
          variantT={"p"}
          title={"GetProject"}
          variantU={"p"}
          classesU={classes.usersText}
          users={"20 Users"}
        />
        <Card
          classesT={classes.titleText}
          variantT={"p"}
          title={"GetProject"}
          variantU={"p"}
          classesU={classes.usersText}
          users={"20 Users"}
        />
        <Card
          classesT={classes.titleText}
          variantT={"p"}
          title={"GetProject"}
          variantU={"p"}
          classesU={classes.usersText}
          users={"20 Users"}
        />
      </div>
    </>
  );
};

export default CardContainer;
