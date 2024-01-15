import Card from "./Card";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  titleText: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#101828",
  },
  numberText: {
    fontSize: "28px",
    fontWeight: "600",
   
  },
  flex: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: "16px",
    flexWrap: "wrap",
    width:'100%'
  },
});

const CardContainer = () => {
  const classes = useStyles(); 

  const cardsData = [
    { title: "Total number of projects", number: "06" },
    { title: "Total users under your project", number: "30" },
    { title: "Projects completed", number: "02" },
  ];

  return (
    <>
      <div className={classes.flex}>
        {cardsData.map((card, cardIndex) => (
          <Card
            key={cardIndex}
            classesT={classes.titleText}
            variantT={"p"}
            title={card.title}
            variantU={"p"}
            classesU={classes.numberText}
            number={card.number}
          />
        ))}
      </div>
    </>
  );
};

export default CardContainer;
