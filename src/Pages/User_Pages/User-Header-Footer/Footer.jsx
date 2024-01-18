import React from 'react'
import { createUseStyles } from 'react-jss'
const Footer = () => {

  const useStyles = createUseStyles({
    '@global': {
      '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box', // Ensures padding and border are included in the element's total width and height
      },
    },
    footer: {
      display: "flex",
      justifyContent: "center",
      borderTop: "1px solid var(--Gray-5, #E0E0E0)",
      background: "#DCECFE",
      padding:"0.7% 0",
      position:"relative",
      bottom:"0",
      width:"100%",
    },

    footerContainer:{
    width:"87.5vw",
    display:"flex",
    justifyContent:"flex-end",
    },
    container: {
    display:"flex",
    gap:"0.5vw"
    },
    hours:{
      color: "var(--Green-1, #219653)",
      fontWeight: "700",
    }

  })


  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <div className={classes.footerContainer}>
      <div className={classes.container}>
        <p>Total Working Hours:</p>
        <h4 className={classes.hours}>9 hours</h4>
      </div>

      </div>
    </footer>
  )
}

export default Footer
