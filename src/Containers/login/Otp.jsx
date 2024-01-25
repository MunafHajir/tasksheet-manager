import React from 'react'
import { createUseStyles } from 'react-jss'
import { Box } from '@mui/material';
import correctLogo from '../Assets/correctLogo.png'


const mystyle = createUseStyles({
    '@global': {
        '*': {
            margin: 0,
            padding: 0,
            boxSizing: 'border-box',
        },
    },
    containerStyle: {
        display: 'flex',
        height: '100vh',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        width: '100%'
    },

    firstBox: {
        width: '50%',
        border: '1px solid #ddd',
        background: 'linear-gradient(180deg, #0575E6 0%, #02298A 84.79%, #021B79 100%)'
    },

    secondBox: {
        width: '50%',
        border: '1px solid #ddd',

    },

    title: {
        color: 'white',
        textAlign:"center",
        marginTop: '20vh',
    },

    description: {
        color: 'white',
        textAlign:"center",
        marginTop: '2vh'
    },

    shadow: {
        width: '252px',
        height: '25px',
        flexShrink: '0',
        borderRadius: '392px',
        background: '#242424',
        filter: 'blur(26px)',
        border: "2px solid red",
        position: "relative",
        bottom: "5vh",
        left: "10vw",
         
    },

    correctLogo: {
       
       objectFit:"cover",
        zIndex: '1',
        position: "absolute",
    },

    imgContainer: {
        display:"flex",
        justifyContent:"center",
        marginTop:"10vh"
    }


})


const Otp = () => {

    const classes = mystyle()
    return (
        <Box className={classes.containerStyle}>
            <Box className={classes.firstBox}>
                <h1 className={classes.title}>Tasksheet Management</h1>
                <p className={classes.description}>lora lesun lora lesun lora lesun lora lesun lora lesun.</p>
                <Box className={classes.imgContainer}>
                    <img src={correctLogo} className={correctLogo} />
                </Box>
                <div className={classes.shadow}>
                    
                </div>




            </Box>
            <Box className={classes.secondBox}>

            </Box>
        </Box>
    );
};


export default Otp


