import { Box, CssBaseline } from "@mui/material";
import Text from "Components/Common/Text";
import React from "react";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
  navMainContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "17px 72px",
  },
  Text: {
    color: "#242424",
    fontFamily: "Plus Jakarta Sans",
    fontSize: "24px",
    fontWeight: "600",
    lineHeight: "38px",
  },
});

const Nav = () => {
  const classes = useStyle();
  return (
    <>
      <CssBaseline />
      <Box className={classes.navMainContainer}>
        <Box>
          <Text classes={classes.Text} title={`Hello, Pratik Chaudhari 👋`} />
        </Box>
        <Box>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12.0199 20.53C9.68987 20.53 7.35987 20.16 5.14987 19.42C4.30987 19.13 3.66987 18.54 3.38987 17.77C3.09987 17 3.19987 16.15 3.65987 15.39L4.80987 13.48C5.04987 13.08 5.26987 12.28 5.26987 11.81V8.91998C5.26987 5.19998 8.29987 2.16998 12.0199 2.16998C15.7399 2.16998 18.7699 5.19998 18.7699 8.91998V11.81C18.7699 12.27 18.9899 13.08 19.2299 13.49L20.3699 15.39C20.7999 16.11 20.8799 16.98 20.5899 17.77C20.2999 18.56 19.6699 19.16 18.8799 19.42C16.6799 20.16 14.3499 20.53 12.0199 20.53ZM12.0199 3.66998C9.12987 3.66998 6.76987 6.01998 6.76987 8.91998V11.81C6.76987 12.54 6.46987 13.62 6.09987 14.25L4.94987 16.16C4.72987 16.53 4.66987 16.92 4.79987 17.25C4.91987 17.59 5.21987 17.85 5.62987 17.99C9.80987 19.39 14.2399 19.39 18.4199 17.99C18.7799 17.87 19.0599 17.6 19.1899 17.24C19.3199 16.88 19.2899 16.49 19.0899 16.16L17.9399 14.25C17.5599 13.6 17.2699 12.53 17.2699 11.8V8.91998C17.2699 6.01998 14.9199 3.66998 12.0199 3.66998Z"
              fill="#242424"
            />
            <path
              d="M13.8806 3.93969C13.8106 3.93969 13.7406 3.92969 13.6706 3.90969C13.3806 3.82969 13.1006 3.76969 12.8306 3.72969C11.9806 3.61969 11.1606 3.67969 10.3906 3.90969C10.1106 3.99969 9.8106 3.90969 9.6206 3.69969C9.4306 3.48969 9.3706 3.18969 9.4806 2.91969C9.8906 1.86969 10.8906 1.17969 12.0306 1.17969C13.1706 1.17969 14.1706 1.85969 14.5806 2.91969C14.6806 3.18969 14.6306 3.48969 14.4406 3.69969C14.2906 3.85969 14.0806 3.93969 13.8806 3.93969Z"
              fill="#242424"
            />
            <path
              d="M12.0195 22.8105C11.0295 22.8105 10.0695 22.4105 9.36953 21.7105C8.66953 21.0105 8.26953 20.0505 8.26953 19.0605H9.76953C9.76953 19.6505 10.0095 20.2305 10.4295 20.6505C10.8495 21.0705 11.4295 21.3105 12.0195 21.3105C13.2595 21.3105 14.2695 20.3005 14.2695 19.0605H15.7695C15.7695 21.1305 14.0895 22.8105 12.0195 22.8105Z"
              fill="#242424"
            />
          </svg>
        </Box>
      </Box>
    </>
  );
};

export default Nav;