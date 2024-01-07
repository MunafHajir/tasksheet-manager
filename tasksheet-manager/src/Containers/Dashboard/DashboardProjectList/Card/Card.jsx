import { Box, Typography } from "@mui/material";
import React from "react";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
  container: {
    fontFamily: "Plus Jakarta Sans",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flex: "1 0 0",
    boxShadow: "0px 1px 3px 0px rgba(16, 24, 40, 0.10)",
    padding: "16px",
    borderRadius: "8px",
    maxWidth: "280px",
    cursor: "pointer",
    border: "1px solid #ECECEC",
  },
  Text: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
});

const Card = ({ variantT, variantU, title, users, classesT, classesU , logic}) => {
  const classes = useStyle();
  return (
    <>
      <Box className={classes.container} onClick={() => logic(title)} >
        <box className={classes.Text}>
          <Typography variant={variantT} className={`${classesT}`}>
            {title}
          </Typography>
          <Typography variant={variantU} className={`${classesU}`}>
            {users}
          </Typography>
        </box>
        <Box>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M13.137 7.99961L7.47569 2.18161C7.42908 2.13473 7.39223 2.07906 7.36728 2.01784C7.34232 1.95662 7.32975 1.89106 7.3303 1.82495C7.33085 1.75884 7.34451 1.69349 7.37047 1.6327C7.39644 1.5719 7.43421 1.51685 7.4816 1.47075C7.52898 1.42464 7.58504 1.38839 7.64652 1.3641C7.70801 1.3398 7.7737 1.32793 7.8398 1.32919C7.9059 1.33045 7.9711 1.34481 8.03161 1.37143C8.09213 1.39805 8.14676 1.43641 8.19236 1.48428L14.1924 7.65095C14.2832 7.74429 14.334 7.86938 14.334 7.99961C14.334 8.12984 14.2832 8.25494 14.1924 8.34828L8.19236 14.5149C8.14676 14.5628 8.09213 14.6012 8.03161 14.6278C7.9711 14.6544 7.9059 14.6688 7.8398 14.67C7.7737 14.6713 7.70801 14.6594 7.64652 14.6351C7.58504 14.6108 7.52898 14.5746 7.4816 14.5285C7.43421 14.4824 7.39645 14.4273 7.37048 14.3665C7.34451 14.3057 7.33085 14.2404 7.3303 14.1743C7.32975 14.1082 7.34232 14.0426 7.36728 13.9814C7.39223 13.9202 7.42908 13.8645 7.47569 13.8176L13.137 7.99961Z"
              fill="black"
            />
          </svg>
        </Box>
      </Box>
    </>
  );
};

export default Card;
