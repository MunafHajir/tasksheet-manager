import * as React from "react";
import Box from "@mui/material/Box";
import { createUseStyles } from "react-jss";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  dayArray,
  monthArray,
} from "Containers/DashboardUserList/UserDetail/PaticularUser/PaticularUserSection/PaticularGraphMonthAndWeekDatalist";

const useStyle = createUseStyles({
  DateContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    marginLeft: "4rem",
    padding: "0rem 1.5rem",
    borderRadius: ".5rem",
    boxShadow: "0px 0px 5px -1px  gray",
    marginBottom: "1rem",
  },
  DateBox: {
    display: "inline-block",
    textAlign: "center",
    width: "10rem",
    color: "black",
  },
  active: {
    padding: "1rem 1.5rem",
    color: "white",
    backgroundColor: "#0463D1",
  },
  icons: {
    color: "#0463D1",
  },
});
export default function DateTabs() {
  const classes = useStyle();
  const [value, setValue] = React.useState(0);
  const [activeDate, setActiveDate] = React.useState(0);
  const [timeDateArray, setTimeDateArray] = React.useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getNextSevenDays = () => {
    const currentDate = new Date();

    const nextSevenDays = Array.from({ length: 7 }, (_, index) => {
      const nextDay = new Date(currentDate);
      nextDay.setDate(currentDate.getDate() + index);
      return nextDay;
    });

    const formattedDates = nextSevenDays.map((date) => {
      const month = monthArray[date.getMonth()];
      const day = dayArray[date.getDay()];
      const formattedDate = `${month} ${date.getDate()}, ${day}`;
      return formattedDate;
    });

    setTimeDateArray(formattedDates);
  };

  React.useEffect(() => {
    getNextSevenDays();
  }, []); // Initial load

  let handleSetDate =(index)=>{
 setActiveDate(index)
  }
  let dateAndTime = timeDateArray.map((item, index) => {
    let activeDateBox = index === activeDate;
    return (
      <Box className={activeDateBox ? classes.active : classes.DateBox} key={index} onClick={()=>handleSetDate(index)}>
        {item}
      </Box>
    );
  });

  const handleBack = () => {
    setActiveDate((prevDate) => (prevDate > 0 ? prevDate - 1 : prevDate));
  };

  const handleArrow = () => {
    setActiveDate((prevDate) => (prevDate < timeDateArray.length - 1 ? prevDate + 1 : prevDate));
  };

  return (
    <>
      <Box className={classes.DateContainer}>
        <ArrowBackIosIcon className={classes.icons} style={{fontSize:"1rem"}} onClick={handleBack} />
        {dateAndTime}
        <ArrowForwardIosIcon className={classes.icons} style={{fontSize:"1rem"}} onClick={handleArrow} />
      </Box>
    </>
  );
}