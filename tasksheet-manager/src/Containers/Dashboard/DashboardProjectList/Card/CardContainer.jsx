import Card from "Containers/Dashboard/DashboardProjectList/Card/Card";
import React from "react";
import { createUseStyles } from "react-jss";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const cardsData = [
    { title: "GetProject", users: "20 Users" },
    { title: "Klaxon", users: "20 Users" },
    { title: "Mandelics", users: "20 Users" },
    { title: "FundsUp", users: "20 Users" },
    { title: "DR Choksey", users: "20 Users" },
  ];

  // const cardsInRow = 4;
  // const rows = [];
  // for (let i = 0; i < cardsData.length; i += cardsInRow) {
  //   rows.push(cardsData.slice(i, i + cardsInRow));
  // }

  const handleProjectDetail = (value) => {
    navigate(`${value}`);
  };

  return (
    <>
      <div className={classes.flex}>
        {cardsData.map((card, cardIndex) => (
          <Card
            key={cardIndex}
            logic={handleProjectDetail}
            classesT={classes.titleText}
            variantT={"p"}
            title={card.title}
            variantU={"p"}
            classesU={classes.usersText}
            users={card.users}
          />
        ))}
      </div>
    </>
  );
};

export default CardContainer;
