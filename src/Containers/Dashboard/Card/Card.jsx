import React from "react";
import { createUseStyles } from "react-jss";
import { Box, Typography } from "@mui/material";

const useStyles = createUseStyles({
  container: {
    border: "1px solid #e7e7e7",
    borderRadius: "8px",
    padding: 20,
    // margin: 20,
    flex: "0 0 28.3%",
    background: "#fff",
    textAlign: "center",
    boxShadow: "0 1px 3px 0px rgba(16, 24, 40, 0.10)",
    fontFamily: "Plus Jakarta Sans,",
  },
  Text: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    alignItems: "flex-start",
    fontFamily: "Plus Jakarta Sans",
  },
});

const Card = ({ variantT, variantU, title, number, classesT, classesU }) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.Text}>
        <Typography variant={variantT} className={`${classesT}`}>
          {title}
        </Typography>
        <Typography variant={variantU} className={`${classesU}`}>
          {number}
        </Typography>
      </Box>
    </Box>
  );
};

export default Card;
