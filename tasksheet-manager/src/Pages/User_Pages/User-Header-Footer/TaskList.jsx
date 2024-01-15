import React from 'react';
import { createUseStyles } from 'react-jss';
import TasklistMenu from 'Components/Common/TaklistMenu';
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
      gap: "2.5vw",
      width: "87.5vw",
    },
    ListDiv: {
      width: "11vw",
      height: "5.5vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "6vw",
      cursor: "pointer",
      border: "1px solid var(--Gray-5, #E0E0E0)",
      background: "#FFF",

      '&:hover': {
        backgroundColor: "var(--Blue, #0463D1)",
        boxShadow: "0px 2px 16px 0px rgba(0, 0, 0, 0.16)",
      
        '& $ListItem': {
            color: 'var(--hover-text-color, #FFFFFF)',
            fontWeight: 'bold',
          },

      },
    },
    ListItem: {
      margin: "0",
      padding: "0",
      fontWeight: "500",
      textTransform: "capitalize",
      color: "var(--text, #676C76)",
    },
    extraDiv:{
      width: "5vw",
      height: "5.5vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "6vw",
      cursor: "pointer",
      border: "1px solid var(--Blue, #0463D1)",
      background: "#FFF",
    },
    extraItem:{
      color: "var(--Blue, #0463D1)",
      margin: "0",
      padding: "0",
      fontWeight: "500",
      textTransform: "capitalize",
    }
  });

  const classes = useStyles();

  return (
    <div className={classes.List}>
      <div className={classes.container}>
        {Tasks.map((elem, id) => (
          <div key={id} className={classes.ListDiv}>
            <p className={classes.ListItem}>{elem}</p>
          </div>
        ))}
        <div className={classes.extraDiv}>
          {/* <p className={classes.extraItem}>+2</p> */}
          <TasklistMenu />
        </div>
      </div>
    </div>
  );
};

export default TaskList;