import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useState } from 'react';
import { createUseStyles } from 'react-jss';

const myStyle= createUseStyles({
    Card:{
        minWidth: "11vw",
        maxWidth: "14vw",
        maxHeight: "5vh",
        maxHeight:"7vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"        
    },    
    contents: {
        display: 'flex',
        justifyContent:"center",
        alignItems:"center",  
        minHeight:"5vh" ,
        maxHeight:"7vh",
        gap:"0.8vw"

    } ,
    datecontainer:{
      display:"flex",
      justifyContent:"center",
      width:"6vw"
    },
    date:{
         fontSize: '1vw' ,  
         color: "var(--Blue, #0463D1)",
    }
})


export default function UserDate() {
    // State to keep track of the displayed date
    const [displayedDate, setDisplayedDate] = useState(new Date());
    const classes = myStyle()
    
    const handleLeftChevronClick = () => {
        const previousDate = new Date(displayedDate);
        previousDate.setDate(displayedDate.getDate() - 1);
        setDisplayedDate(previousDate);
    };

    const handleRightChevronClick = () => {
        const nextDate = new Date(displayedDate);
        nextDate.setDate(displayedDate.getDate() + 1);
        setDisplayedDate(nextDate);
    };
    
    

    const isLeftChevronDisabled = displayedDate <= new Date();
    const isRightChevronDisabled = displayedDate.getDate() >= new Date().getDate() + 2;

    return (
        <Card className={classes.Card}>
            <div className={classes.contents}>
                {/* Left Chevron */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 20 20"
                    fill="none"
                    onClick={handleLeftChevronClick}
                    style={{ cursor: isLeftChevronDisabled ? 'not-allowed' : 'pointer', opacity: isLeftChevronDisabled ? 0.5 : 1 }}
                >
                    <path
                        d="M12.5742 16.6004L7.14088 11.1671C6.49922 10.5254 6.49922 9.47539 7.14088 8.83372L12.5742 3.40039"
                        stroke="#0463D1"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>

                {/* Displayed Date */}
                <div className={classes.datecontainer}>
                    <p className={classes.date}>

                    {`${displayedDate.toLocaleString('default', { month: 'short' })},${displayedDate.getDate()} ${displayedDate.toLocaleString('default', { weekday: 'short' })}`}
                    </p>
                </div>

                {/* Right Chevron */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                     width="15"
                    height="15"
                    viewBox="0 0 20 20"
                    fill="none"
                    onClick={handleRightChevronClick}
                    style={{ cursor: isRightChevronDisabled ? 'not-allowed' : 'pointer', opacity: isRightChevronDisabled ? 0.5 : 1 }}
                >
                    <path
                        d="M7.42578 16.6004L12.8591 11.1671C13.5008 10.5254 13.5008 9.47539 12.8591 8.83372L7.42578 3.40039"
                        stroke="#0463D1"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </div>
        </Card>
    );

}



