import { Box, Typography } from "@mui/material";
import React from "react";
import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
    container : {
        border: '1px solid #c7c1c1',
        display : 'flex',
        justifyContent : 'space-between',
        alignItems: 'center',
        padding: '16px',
        borderRadius : 8,    
        fontFamily: "Plus Jakarta Sans",
        fontSize: '1vw'
    },
    center : {
        display: 'flex',
        justifyContent : 'center',
        alignItems: 'center',
    }
})
const NewProjectUserSelection = ({logic,title ,children, paddingTB , paddingLR}) => {
    const classes = useStyles();
  return (
    <>
      <Box sx={{padding: `${paddingTB} ${paddingLR}`}} className={classes.container} onClick={logic}>
        <Box>
            <Typography variant="p" color="initial">{title}</Typography>
        </Box>
        <Box className={classes.center}>
          {children}
        </Box>
      </Box>
    </>
  );
};

export default NewProjectUserSelection;
