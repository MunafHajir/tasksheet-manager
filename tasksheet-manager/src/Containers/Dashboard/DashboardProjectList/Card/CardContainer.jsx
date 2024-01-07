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
  flex: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "16px",
    flexWrap: "wrap",
    marginTop: "16px",
    
  },
});

const CardContainer = () => {
  const classes = useStyle();

  const cardsData = [
    { title: "GetProject", users: "20 Users" },
    { title: "GetProject", users: "20 Users" },
    { title: "GetProject", users: "20 Users" },
    { title: "GetProject", users: "20 Users" },
    { title: "GetProject", users: "20 Users" },
    { title: "GetProject", users: "20 Users" },
    { title: "GetProject", users: "20 Users" },
  ];

  const cardsInRow = 4;
  const rows = [];
  for (let i = 0; i < cardsData.length; i += cardsInRow) {
    rows.push(cardsData.slice(i, i + cardsInRow));
  }

  return (
    <>
      {rows.map((row, index) => (
        <div className={classes.flex} key={index}>
          {row.map((card, cardIndex) => (
            <Card
              key={cardIndex}
              classesT={classes.titleText}
              variantT={"p"}
              title={card.title}
              variantU={"p"}
              classesU={classes.usersText}
              users={card.users}
            />
          ))}
        </div>
      ))}
    </>
  );
};

export default CardContainer;
