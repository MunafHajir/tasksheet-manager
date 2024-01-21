import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ButtonComp from "Components/Common/Button";
import { createUseStyles } from "react-jss";
import ModelSelection from "Components/Common/ModelSelection";
import Text from "Components/Common/Text";
import InputLabelText from "Components/Common/InputLabelText";
import SelectBox from "Components/Common/SelectBox";
import { CssBaseline } from "@mui/material";

const useStyle = createUseStyles({
  border: {
    borderTop: "1px solid #D6D6D6",
    borderRight: " 1px solid #D6D6D6",
    borderLeft: "1px solid #D6D6D6",
    background: "#FFF",
    // padding: "10px 24px",
    padding: "0px",
  },
  padding: {
    padding: "0px !important",
  },
  borderButton: {
    borderRadius: "0px 0px 8px 8px",
    border: "1px solid #D6D6D6",
    background: "#FFF",
    padding: "10px 24px",
  },
  userMainContainer: {
    flex: "0 0 31%",
  },
  ModelContainer: {
    display: "flex",
    justifyContent: "center",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50% , -50%)",
    width: "32%",
    padding: "24px",
    flexDirection: "column",
    alignItems: "center",
    gap: "24px",
    borderRadius: "12px",
    background: "#FFF",
    boxShadow:
      "0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)",
  },
  ModelFlexContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  width: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "25px",
  },
  ContainerWidth: {
    width: "100%",
  },
  selectHeight: {
    height: "56px",
  },
  buttonStyle: {
    background: "#0463D1",
    color: "#fff",
    fontFamily: "Poppins",
    fontSize: "16px",
    padding: "10px 20px",
    letterSpacing: "1px",
    borderRadius: "8px",
  },
  Text: {
    color: "#242424",
    fontFamily: "Plus Jakarta Sans",
    fontSize: "20px",
    fontWeight: 600,
    lineHeight: "28px",
  },
  labelStyle: {
    color: "#242424",
    fontFamily: "Plus Jakarta Sans",
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "20px",
  },
  SelectorBoxText: {
    color: "#676C76",
    fontFamily: "Plus Jakarta Sans",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
  },
  listItem: {
    cursor: "pointer",
  },
  textHover: {
    transition: "color 0.3s, transform 0.5s",
    padding: "15px 24px",
    paddingRight: "0",
    margin: "0px",
    "&:hover": {
      color: "blue",
      transform: "scale(1.0050)",
    },
  },
  IconPadding: {
    paddingRight: "24px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  innerColorWarning: {
    background: "#FEF0C7",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "8px",
    borderRadius: "50%",
  },
  outterColorWarning: {
    background: "#FFFAEB",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "8px",
    borderRadius: "50%",
  },
  UserRemoveTextContainer:{
    display: 'flex',
    justifyContent: 'center',
    alignItems:"center",
    flexDirection:"column",
    gap:"8px"
  },
  RemoveUserTextStyle:{
    textAlign:"center",
    color: "var(--Grey-Dark-grey, #667085)",
    textAlign: "center",
    fontFamily: "Plus Jakarta Sans",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "20px",
  },
  noBtnStyle:{
    display: "flex",
    padding: "18px 20px",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    flex: "1 0 0",
    borderRadius: "8px",
    border: "1px solid var(--Blue, #0463D1)",
    background: "#FFF",
    boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
  },
  yesButtonStyle:{
    display: "flex",
    padding: "18px 20px",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    flex: "1 0 0",
    borderRadius: "8px",
    color:"#fff",
    background: "var(--Blue, #0463D1)",
    boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
  },
  ButtonContainer:{
    display: 'flex',
    justifyContent: 'center',
    alignItems:"center",
    gap:"8px",
    width:"100%"
  }
});

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const userName = [
  { value: "Master" },
  { value: "Master" },
  { value: "Master" },
  { value: "Master" },
];

const AddUser = props => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [userRemove, setUserRemove] = useState(false);
  const handleUserOpen = () => setUserRemove(true);
  const handleUserClose = () => setUserRemove(false);

  const generateListItems = () => {
    return props.AddUserData.map((user, index) => (
      <ListItem key={index} className={`${classes.border} ${classes.listItem}`}>
        <ListItemText primary={user.userName} className={classes.textHover} />
        <Box className={classes.IconPadding} onClick={handleUserOpen}>
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
        </Box>
      </ListItem>
    ));
  };

  return (
    <>
      <CssBaseline>
        <Box className={classes.userMainContainer}>
          <Box className={`${props.UserContainer}`}>
            <Box className={`${props.TitleContainer}`}>{props.title}</Box>
            <Box className={`${props.UserCountContainer}`}>
              {props.userCount}
            </Box>
          </Box>
          <Demo>
            <List className={classes.padding}>{generateListItems()}</List>
          </Demo>
          <Box className={classes.borderButton}>
            <ButtonComp logic={handleOpen} btntext={"+ Add User"} />
          </Box>
        </Box>

        <ModelSelection
          open={open}
          logic={handleClose}
          modelStyle={classes.ModelContainer}
        >
          <Box className={classes.width}>
            <Box className={classes.ModelFlexContainer}>
              <Text title={"Select User"} classes={classes.Text} />
              <Box sx={{ cursor: "pointer" }} onClick={handleClose}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M9.99837 1.66638C5.39004 1.66638 1.66504 5.39138 1.66504 9.99971C1.66504 14.608 5.39004 18.333 9.99837 18.333C14.6067 18.333 18.3317 14.608 18.3317 9.99971C18.3317 5.39138 14.6067 1.66638 9.99837 1.66638ZM13.5817 13.583C13.5046 13.6603 13.413 13.7216 13.3122 13.7634C13.2114 13.8052 13.1033 13.8268 12.9942 13.8268C12.8851 13.8268 12.777 13.8052 12.6762 13.7634C12.5754 13.7216 12.4838 13.6603 12.4067 13.583L9.99837 11.1747L7.59004 13.583C7.43422 13.7389 7.22289 13.8264 7.00254 13.8264C6.78218 13.8264 6.57085 13.7389 6.41504 13.583C6.25922 13.4272 6.17169 13.2159 6.17169 12.9955C6.17169 12.8864 6.19318 12.7784 6.23493 12.6776C6.27669 12.5768 6.33789 12.4852 6.41504 12.408L8.82337 9.99971L6.41504 7.59138C6.25922 7.43557 6.17169 7.22424 6.17169 7.00388C6.17169 6.78353 6.25922 6.5722 6.41504 6.41638C6.57085 6.26057 6.78218 6.17303 7.00254 6.17303C7.22289 6.17303 7.43422 6.26057 7.59004 6.41638L9.99837 8.82472L12.4067 6.41638C12.4839 6.33923 12.5754 6.27803 12.6763 6.23628C12.7771 6.19452 12.8851 6.17303 12.9942 6.17303C13.1033 6.17303 13.2114 6.19452 13.3122 6.23628C13.413 6.27803 13.5046 6.33923 13.5817 6.41638C13.6589 6.49353 13.7201 6.58513 13.7618 6.68593C13.8036 6.78673 13.8251 6.89477 13.8251 7.00388C13.8251 7.11299 13.8036 7.22103 13.7618 7.32183C13.7201 7.42264 13.6589 7.51423 13.5817 7.59138L11.1734 9.99971L13.5817 12.408C13.8984 12.7247 13.8984 13.258 13.5817 13.583Z"
                    fill="#242424"
                  />
                </svg>
              </Box>
            </Box>
            <Box>
              <InputLabelText
                labelText={"User"}
                inputLabelStyle={classes.labelStyle}
              />
              <SelectBox
                title={"Select User"}
                menuList={userName}
                ContainerWidth={classes.ContainerWidth}
                classesP={classes.SelectorBoxText}
                selectHeight={classes.selectHeight}
              />
            </Box>
            <ButtonComp
              buttonStyle={classes.buttonStyle}
              variant={"contained"}
              btntext={"Save"}
              logic={handleClose}
            />
          </Box>
        </ModelSelection>
      </CssBaseline>

      {/* User Model Selection */}
      <ModelSelection open={userRemove}>
        <Box className={classes.ModelContainer}>

          <Box className={classes.outterColorWarning}>
            <Box className={classes.innerColorWarning}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M12.4998 7.99996V12M12.4998 16H12.5098M10.7898 2.85996L2.31978 17C2.14514 17.3024 2.05274 17.6453 2.05177 17.9945C2.05079 18.3437 2.14127 18.6871 2.3142 18.9905C2.48714 19.2939 2.7365 19.5467 3.03748 19.7238C3.33847 19.9009 3.68058 19.9961 4.02978 20H20.9698C21.319 19.9961 21.6611 19.9009 21.9621 19.7238C22.2631 19.5467 22.5124 19.2939 22.6854 18.9905C22.8583 18.6871 22.9488 18.3437 22.9478 17.9945C22.9468 17.6453 22.8544 17.3024 22.6798 17L14.2098 2.85996C14.0315 2.56607 13.7805 2.32308 13.481 2.15444C13.1814 1.98581 12.8435 1.89722 12.4998 1.89722C12.156 1.89722 11.8181 1.98581 11.5186 2.15444C11.2191 2.32308 10.968 2.56607 10.7898 2.85996Z"
                  stroke="#DC6803"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  color="#DC6803"
                />
              </svg>
            </Box>
          </Box>

          <Box className={classes.UserRemoveTextContainer}>
            <Text classes={classes.Text} title={`Are you sure you want to remove this user ?`}/>
            <Text classes={classes.RemoveUserTextStyle} title={`By clicking on the yes button you are making sure that you want to remove this user.`}/>
          </Box>

          <Box className={classes.ButtonContainer}>
            <ButtonComp logic={handleUserClose} buttonStyle={classes.noBtnStyle} btntext={"No"}/>
            <ButtonComp logic={handleUserClose} variant={"contained"} buttonStyle={classes.yesButtonStyle} btntext={"Yes, remove"}/>
          </Box>
        </Box>
      </ModelSelection>
    </>
  );
};

export default AddUser;
