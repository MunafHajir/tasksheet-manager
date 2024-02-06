import { useState,useEffect } from "react";
import Card from "./Card";
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

const CardContainer = ({ currentTab }) => {
  const classes = useStyle();
  const navigate = useNavigate();

  const cardsData = [
    { title: "jeetu Gupta", role: "Developer" },
    { title: "jeetu Gupta", role: "Developer" },
    { title: "jeetu Gupta", role: "Developer" },
    { title: "jeetu Gupta", role: "Developer" },
    { title: "jeetu Gupta", role: "Developer" },
    { title: "jeetu Gupta", role: "Developer" },
    { title: "jeetu Gupta", role: "Developer" },
    { title: "jeetu Gupta", role: "Developer" },
    { title: "jeetu Gupta", role: "Developer" },
    { title: "jeetu Gupta", role: "QA" },
    { title: "jeetu Gupta", role: "Designer" },
    
  ];

  const [filteredList, setFilteredList] = useState(cardsData);

  useEffect(() => {
    filterData(currentTab);
  }, [currentTab]);

  const handleProjectDetail = (value) => {
    navigate(`${value}`);
  };

  const filterData = (role) => {
    if (role === "All") {
      setFilteredList(cardsData);
    } else {
      const filteredData = cardsData.filter((data) => data.role === role);
      setFilteredList(filteredData);
    }
  };

  return (
    <>
      <div className={classes.flex}>
        {filteredList.map((card, cardIndex) => (
          <Card
            key={cardIndex}
            logic={handleProjectDetail}
            classesT={classes.titleText}
            variantT={"p"}
            title={card.title}
            variantU={"p"}
            classesU={classes.usersText}
            users={card.role}
          />
        ))}
      </div>
    </>
  );
};

export default CardContainer;