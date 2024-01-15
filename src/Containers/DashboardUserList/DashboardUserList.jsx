import { Box, CssBaseline } from "@mui/material";
import Border from "Components/Common/Border";
import ButtonComp from "Components/Common/Button";
import SearchBar from "Components/Common/SearchBar";
import SupportingText from "Components/Common/SupportingText";
import Text from "Components/Common/Text";
import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import CardContainer from "./Card/CardContainer";

const useStyle = createUseStyles({
  userMainContainer: {
    background: "#fff",
    padding: "20px 24px",
    borderRadius: "8px",
  },
  MainContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  CustomTextStyle: {
    color: "#101828",
    fontFamily: "Plus Jakarta Sans",
    fontSize: "18px",
    fontWeight: "600",
    lineHeight: "28px" /* 155.556% */,
  },
  SupportingText: {
    fontFamily: "Plus Jakarta Sans",
    backgroundColor: "#F7FBFF",
    color: "#0463D1",
    fontSize: "0.800vw",
    fontWeight: "500",
    borderRadius: "176px",
    padding: "4px 16px",
  },
  Main: {
    fontFamily: "Plus Jakarta Sans",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  buttonStyle: {
    fontFamily: "Plus Jakarta Sans",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    border: "1px solid #0463D1",
    borderRadius: "8px",
    padding: "7px 15px",
  },
  btnTextStyle: {
    color: "#0463D1",
    fontFamily: "Plus Jakarta Sans",
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "normal",
  },
  classesSvg: {
    marginTop: "6px",
  },
  AddNewUser: {
    borderRadius: "8px",
    fontFamily: "Plus Jakarta Sans",
    background: "#0463D1",
    color: "#fff",
    display: "flex",
    width: "172px",
    height: "48px",
    padding: "14px 8px",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
  },
  flex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "16px",
  },
  FilterButtonStyle: {
    color: "var(--text, #676C76)",
    fontFamily: "Plus Jakarta Sans",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
    textTransform: "capitalize",
    borderRadius: "160px",
    width: "148px",
    border: "1px solid var(--Gray-5, #E0E0E0)",
    padding: "14px 8px",
    background: "#FFF",
  },
  FocusFilterButtonStyle: {
    borderRadius: "160px",
    border: "1px solid #0463D1",
    background: "#FFF",
    color: "#0463D1",
    fontFamily: "Plus Jakarta Sans",
    fontSize: "16px",
    fontWeight: 600,
    textTransform: "capitalize",
    padding: "10px 8px",
    width: "148px",
  },
  filterButtonGap: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "12px",
  },
  FilterContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "24px 0px",
  },
  searchWidth: {
    width: "25vw",
    padding: "13px",
    // color: "var(--Grey, #828282)",
    fontFamily: "Plus Jakarta Sans",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  },
});

const DashboardUserList = () => {
  const classes = useStyle();
  const [currentTab, setCurrentTab] = useState("All");
  const handleFocus = tab => {
    setCurrentTab(tab);
  };
  return (
    <>
      <CssBaseline />
      <Box className={classes.userMainContainer}>
        <Box className={classes.MainContainer}>
          <Box className={classes.Main}>
            <Text
              TextVariant={"h5"}
              title={"User list"}
              classes={classes.CustomTextStyle}
            />
            <SupportingText
              classes={classes.SupportingText}
              SupportingTitle={"12 User"}
            />
          </Box>
          <Box className={classes.flex}>
            <ButtonComp
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1063_2449)">
                    <path
                      d="M13.8335 13.3333L10.5002 10M10.5002 10L7.16688 13.3333M10.5002 10V17.5M17.4919 15.325C18.3047 14.8819 18.9467 14.1807 19.3168 13.3322C19.6868 12.4836 19.7637 11.536 19.5354 10.6389C19.307 9.74179 18.7865 8.94626 18.0558 8.37787C17.3251 7.80948 16.4259 7.50061 15.5002 7.5H14.4502C14.198 6.52437 13.7278 5.61861 13.0752 4.85083C12.4225 4.08304 11.6042 3.47321 10.682 3.06717C9.75967 2.66114 8.75734 2.46947 7.75031 2.50657C6.74328 2.54367 5.75777 2.80858 4.86786 3.28139C3.97795 3.75419 3.2068 4.42259 2.6124 5.23632C2.01799 6.05005 1.61579 6.98795 1.43603 7.97949C1.25627 8.97104 1.30363 9.99044 1.57456 10.961C1.84548 11.9317 2.33291 12.8282 3.00021 13.5833"
                      stroke="#0463D1"
                      stroke-width="1.67"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1063_2449">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              }
              classesSvg={classes.classesSvg}
              btntext={"Bulk Upload"}
              btnTextStyle={classes.btnTextStyle}
              buttonStyle={classes.buttonStyle}
            />
            <ButtonComp
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M13.251 7.00006C13.251 6.80115 13.172 6.61039 13.0313 6.46973C12.8907 6.32908 12.6999 6.25006 12.501 6.25006C12.3021 6.25006 12.1113 6.32908 11.9706 6.46973C11.83 6.61039 11.751 6.80115 11.751 7.00006V11.2501H7.50098C7.30206 11.2501 7.1113 11.3291 6.97065 11.4697C6.82999 11.6104 6.75098 11.8012 6.75098 12.0001C6.75098 12.199 6.82999 12.3897 6.97065 12.5304C7.1113 12.671 7.30206 12.7501 7.50098 12.7501H11.751V17.0001C11.751 17.199 11.83 17.3897 11.9706 17.5304C12.1113 17.671 12.3021 17.7501 12.501 17.7501C12.6999 17.7501 12.8907 17.671 13.0313 17.5304C13.172 17.3897 13.251 17.199 13.251 17.0001V12.7501H17.501C17.6999 12.7501 17.8907 12.671 18.0313 12.5304C18.172 12.3897 18.251 12.199 18.251 12.0001C18.251 11.8012 18.172 11.6104 18.0313 11.4697C17.8907 11.3291 17.6999 11.2501 17.501 11.2501H13.251V7.00006Z"
                    fill="white"
                  />
                </svg>
              }
              variant={"contained"}
              btntext={"Add New User"}
              classesSvg={classes.classesSvg}
              buttonStyle={classes.AddNewUser}
            />
          </Box>
        </Box>
        <Box className={classes.FilterContainer}>
          <SearchBar
            placeholder={"Search user"}
            styleSearch={classes.searchWidth}
          />
          <Box className={classes.filterButtonGap}>
            <ButtonComp
              btntext={"All"}
              buttonStyle={
                currentTab === "All"
                  ? classes.FocusFilterButtonStyle
                  : classes.FilterButtonStyle
              }
              logic={() => handleFocus("All")}
            />
            <ButtonComp
              btntext={"Developers"}
              buttonStyle={
                currentTab === "Developers"
                  ? classes.FocusFilterButtonStyle
                  : classes.FilterButtonStyle
              }
              logic={() => handleFocus("Developers")}
            />
            <ButtonComp
              btntext={"Designers"}
              buttonStyle={
                currentTab === "Designers"
                  ? classes.FocusFilterButtonStyle
                  : classes.FilterButtonStyle
              }
              logic={() => handleFocus("Designers")}
            />
            <ButtonComp
              btntext={"QA"}
              buttonStyle={
                currentTab === "QA"
                  ? classes.FocusFilterButtonStyle
                  : classes.FilterButtonStyle
              }
              logic={() => handleFocus("QA")}
            />
          </Box>
        </Box>
        <Border />
        <CardContainer />
      </Box>
    </>
  );
};

export default DashboardUserList;

// import { Box, CssBaseline } from "@mui/material";
// import SearchBar from "Components/Common/SearchBar";
// import SupportingText from "Components/Common/SupportingText";
// import Text from "Components/Common/Text";
// import React from "react";
// import createUseStyles from "react-jss";
// import CardContainer from "./Card/CardContainer";
// import Border from "Components/Common/Border";
// import Button from "Components/Common/Button";

// const useStyles = createUseStyles({
//   CustomTextStyle: {
//     color: "#101828",
//     fontFamily: "Plus Jakarta Sans",
//     fontSize: "18px",
//     fontWeight: "600",
//     lineHeight: "28px" /* 155.556% */,
//   },
//   Main: {
//     fontFamily: "Plus Jakarta Sans",
//     display: "flex",
//     alignItems: "center",
//     gap: "8px",
//   },
//   MainContainer: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   SupportingText: {
//     fontFamily: "Plus Jakarta Sans",
//     backgroundColor: "#F7FBFF",
//     color: "#0463D1",
//     fontSize: "0.800vw",
//     fontWeight: "500",
//     borderRadius: "176px",
//     padding: "4px 16px",
//   },
//   SearchContainer: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     alignSelf: "stretch",
//   },
//   SearchBar: {
//     marginTop: "20px",
//   },
//   searchWidth: {
//     width: "30vw",
//   },
//   UserMainContainer: {
//     backgroundColor: "#000",
//     padding: "20px 24px",
//     borderRadius: "8px",
//   },
// });

// const DashboardUserList = () => {
//   const classes = useStyles();

//   return (
//     <>
//       <CssBaseline />
//       <div className={classes.UserMainContainer}>
//         <Box className={classes.MainContainer}>
//           <Box className={classes.Main}>
//             <Text
//               TextVariant={"h5"}
//               title={"User list"}
//               classes={classes.CustomTextStyle}
//             />
//             <SupportingText
//               classes={classes.SupportingText}
//               SupportingTitle={"12 User"}
//             />
//           </Box>
//           <Button />
//         </Box>

//         <Box className={classes.SearchContainer}>
//           <SearchBar
//             placeholder={"Search User"}
//             styleSearch={classes.searchWidth}
//           />
//         </Box>

//         <Border />

//         <CardContainer />
//       </div>
//     </>
//   );
// };

// export default DashboardUserList;
