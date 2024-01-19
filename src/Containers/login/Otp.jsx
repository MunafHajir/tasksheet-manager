import React from 'react'
import { createUseStyles } from 'react-jss'
import { Box } from '@mui/material';

const mystyle = createUseStyles({
    '@global': {
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box', // Ensures padding and border are included in the element's total width and height
        },
      },
    containerStyle: {
        display: 'flex',
        height: '100vh', // 100% of the viewport height
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        width : '100%'
    },

    firstBox: {
        width : '50%',
        border: '1px solid #ddd', // Optional: add a border for visibility
        background: 'linear-gradient(180deg, #0575E6 0%, #02298A 84.79%, #021B79 100%)'
    },

    secondBox: {
        width : '50%',
        border: '1px solid #ddd', // Optional: add a border for visibility
        
    }


})


const Otp = () => {

    const classes = mystyle()
    return (
        <Box className={classes.containerStyle}>
            <Box className={classes.firstBox}>
 
                
            </Box>
            <Box className={classes.secondBox}>
                
            </Box>
        </Box>
    );
};


export default Otp


