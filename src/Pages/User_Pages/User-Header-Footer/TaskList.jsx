import React from 'react';
import { createUseStyles } from 'react-jss';
import Tasklistmenu from "../../../Components/Common/TaklistMenu"
import { Box } from '@mui/material';

const TaskList = () => {
  const Tasks = ["task1", "task2", "task3", "task4", "task5", "task6",];

  const useStyles = createUseStyles({
    List:{
      display:"flex",
      justifyContent:"center",
      margin:"1vw 0"
    },
    container: {
      display: "flex",
      justifyContent: "flex-start",
      gap: "1.6vw",
      width: "87.5vw",
    },
    ListBox: {
      width: "11vw",
      height: "6.5vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "6vw",
      cursor: "pointer",
      border: "1px solid var(--Gray-5, #E0E0E0)",
      background: "#FFF",
    },
    ListItem: {
      margin: "0",
      padding: "0",
      fontWeight: "500",
      textTransform: "capitalize",
      color: "var(--text, #676C76)",
    },
    extralist:{
      border:" 1px solid var(--Blue, #0463D1)",
      width: "5vw",
      height: "6.5vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "6vw",
      cursor: "pointer",
      background: "#FFF",
    },
    
  });

  const classes = useStyles();

  return (
    <Box className={classes.List}>
      <Box className={classes.container}>
        {Tasks.map((elem, id) => (
          <Box key={id} className={classes.ListBox}>
            <p className={classes.ListItem}>{elem}</p>
          </Box>
        ))}
        <Box className={classes.extralist}>
          < Tasklistmenu />
        </Box>
      </Box>
    </Box>
  );
};

export default TaskList;