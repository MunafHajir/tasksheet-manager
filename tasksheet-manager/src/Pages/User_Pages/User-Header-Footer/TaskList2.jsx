import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { createUseStyles } from 'react-jss';


const TaskList2 = () => {
    const [alignment, setAlignment] = React.useState('0');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const Tasks = ["task1", "task2", "task3", "task4", "task5", "task6"];

    const useStyles = createUseStyles({
        container: {
          display: "flex",
          justifyContent: "flex-start",
          gap: "0.6vw",
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
        },
        ListItem: {
          margin: "0",
          padding: "0",
          fontWeight: "500",
          textTransform: "capitalize",
          color: "var(--text, #676C76)",
        },
      });
    
      const classes = useStyles();

    return (
        <ToggleButtonGroup
            color="info"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
            className={classes.container}
        >
            {
                Tasks.map((elem, id) => {
                    return (

                        <ToggleButton className={classes.ListDiv} value={id}>
                            <p>{elem}</p>
                        </ToggleButton>
                    )
                })

            }

        </ToggleButtonGroup>
    );
}

export default TaskList2
