import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function DateTabs() {
  const [value, setValue] = React.useState(0);
  const [timeDateArray, setTimeDateArray] = React.useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getNextSevenDays = () => {
    const currentDate = new Date();
    const dayArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthArray = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    // Generate an array of date objects for the next seven days
    const nextSevenDays = Array.from({ length: 7 }, (_, index) => {
      const nextDay = new Date(currentDate);
      nextDay.setDate(currentDate.getDate() + index );
      return nextDay;
    });

    // Format the date objects into strings and update the state
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


  let dateAndTime=timeDateArray.map((item ,index)=>{
    return(
      <Tab label={item} key={index} />
    )
  })


  return (
    <Box
      sx={{
        flexGrow: 1,
        maxWidth: { xs: 1020, sm: 1380 },
        bgcolor: 'background.paper',
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="visible arrows tabs example"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.3 },
          },
        }}
      >
        {
          dateAndTime
        }
      </Tabs>
      <button onClick={getNextSevenDays}>Next 7 Days</button>
    </Box>
  );
}