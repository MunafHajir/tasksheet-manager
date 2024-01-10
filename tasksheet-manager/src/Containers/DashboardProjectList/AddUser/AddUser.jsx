import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import SvgIcon from "@mui/material/SvgIcon";
import ButtonComp from "Components/Common/Button";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const AddUser = props => {
  const generateListItems = () => {
    return props.AddUserData.map((user, index) => (
      <ListItem key={index}>
        <ListItemText primary={user.userName} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
        >
          <path
            d="M10.3324 1.66626C5.72402 1.66626 1.99902 5.39126 1.99902 9.99959C1.99902 14.6079 5.72402 18.3329 10.3324 18.3329C14.9407 18.3329 18.6657 14.6079 18.6657 9.99959C18.6657 5.39126 14.9407 1.66626 10.3324 1.66626ZM13.9157 13.5829C13.8386 13.6602 13.747 13.7215 13.6462 13.7633C13.5454 13.8051 13.4373 13.8266 13.3282 13.8266C13.219 13.8266 13.111 13.8051 13.0102 13.7633C12.9094 13.7215 12.8178 13.6602 12.7407 13.5829L10.3324 11.1746L7.92402 13.5829C7.76821 13.7387 7.55688 13.8263 7.33652 13.8263C7.11617 13.8263 6.90484 13.7387 6.74902 13.5829C6.59321 13.4271 6.50567 13.2158 6.50567 12.9954C6.50567 12.8863 6.52716 12.7783 6.56892 12.6775C6.61067 12.5767 6.67187 12.4851 6.74902 12.4079L9.15736 9.99959L6.74902 7.59126C6.59321 7.43544 6.50567 7.22411 6.50567 7.00376C6.50567 6.7834 6.59321 6.57207 6.74902 6.41626C6.90484 6.26044 7.11617 6.17291 7.33652 6.17291C7.55688 6.17291 7.76821 6.26044 7.92402 6.41626L10.3324 8.82459L12.7407 6.41626C12.8178 6.33911 12.9094 6.27791 13.0102 6.23615C13.111 6.1944 13.2191 6.17291 13.3282 6.17291C13.4373 6.17291 13.5453 6.1944 13.6461 6.23615C13.7469 6.27791 13.8385 6.33911 13.9157 6.41626C13.9928 6.49341 14.054 6.585 14.0958 6.68581C14.1375 6.78661 14.159 6.89465 14.159 7.00376C14.159 7.11287 14.1375 7.22091 14.0958 7.32171C14.054 7.42252 13.9928 7.51411 13.9157 7.59126L11.5074 9.99959L13.9157 12.4079C14.2324 12.7246 14.2324 13.2579 13.9157 13.5829Z"
            fill="#4F4F4F"
          />
        </svg>
      </ListItem>
    ));
  };

  return (
    <Box>
      <Box className={`${props.UserContainer}`}>
        <Box className={`${props.TitleContainer}`}>{props.title}</Box>
        <Box className={`${props.UserCountContainer}`}>{props.userCount}</Box>
      </Box>
      <Demo>
        <List>{generateListItems()}</List>
      </Demo>
      <ButtonComp btntext={"+ Add User"}/>
    </Box>
  );
};

export default AddUser;
