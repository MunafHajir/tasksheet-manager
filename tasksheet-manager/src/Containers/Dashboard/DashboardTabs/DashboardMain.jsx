// import React from "react";
// import { CssBaseline } from "@mui/material";
// import PropTypes from "prop-types";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import { createUseStyles } from "react-jss";
// import DashboardProjectList from "../DashboardProjectList/DashboardProjectList";
// import CreateNewProject from "Containers/CreateNewProject/CreateNewProject";
// import ProjectDetail from "../DashboardProjectList/ProjectDetail/ProjectDetail";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const useStyle = createUseStyles({
//   tabs: {
//     position: "relative",
//   },
//   absolute: {
//     position: "absolute",
//     right: "0vw",
//     color: "#0463D1",
//     width: "15vw !important",
//   },
//   font: {
//     fontFamily: "Plus Jakarta Sans",
//     textTransform: "none",
//     fontWeight: "600",
//     fontSize: "0.9375vw",
//     padding: "16px 8px",
//     width: "10vw",
//   },
//   content: {
//     width: "90%",
//     backgroundColor: "white",
//     padding: "15px 24px",
//     borderRadius: "0px 8px",
//   },
//   customTabPanel: {
//     display: "flex",
//     justifyContent: "center",
//   },
// });

// function CustomTabPanel(props) {
//   const classes = useStyle();
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !=== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//       className={classes.CustomTabPanel}
//     >
//       {value ==== index && (
//         <Box sx={{ p: 3, minHeight: "90vh" }}>
//           <Typography className={classes.customTabPanel}>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// CustomTabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

// const DashboardMain = () => {
//   const navigate = useNavigate();
//   const rendering = useSelector(state => state.Reducer.reRendering);
//   // console.log(rendering);
//   const [value, setValue] = React.useState(0);
//   const classes = useStyle();
//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const handleNavigate = value => {
//     navigate(value);
//   };

//   return (
//     <>
//       <CssBaseline />
//       <Box sx={{ width: "100%", backgroundColor: "#F7FBFF" }}>
//         <Box
//           sx={{
//             borderBottom: 1,
//             borderColor: "divider",
//             backgroundColor: "#FFF",
//             padding: "0 7%",
//           }}
//           className={classes.tabs}
//         >
//           <Tabs sx={{ display: "flex" }} value={value} onChange={handleChange}>
//             <Tab className={classes.font} label="Dashboard" {...a11yProps(0)} />
//             <Tab className={classes.font} label="User list" {...a11yProps(1)} />

//             <Tab
//               className={classes.font}
//               label="Project list"
//               // component={Link}
//               // to="/ProjectList"
//               onClick={()=>handleNavigate("/ProjectList")}
//               {...a11yProps(2)}
//             />
//             <Tab
//               className={`${classes.absolute} ${classes.font}`}
//               label="+ Create New Project"
//               {...a11yProps(3)}
//             />
//           </Tabs>
//         </Box>
//         <CustomTabPanel value={value} index={0}>
//           <Box className={classes.content}>
//             <Typography>Item One</Typography>
//           </Box>
//         </CustomTabPanel>
//         <CustomTabPanel value={value} index={1}>
//           <Box className={classes.content}>
//             <Typography>Item Two</Typography>
//           </Box>
//         </CustomTabPanel>
//         <CustomTabPanel value={value} index={2}>
//           <Box className={classes.content}>
//             {!rendering ? <DashboardProjectList /> : <ProjectDetail />}
//           </Box>
//         </CustomTabPanel>
//         <CustomTabPanel value={value} index={3}>
//           <Box className={classes.content}>
//             <CreateNewProject />
//           </Box>
//         </CustomTabPanel>
//       </Box>
//     </>
//   );
// };

// export default DashboardMain;

import { Box, CssBaseline } from "@mui/material";
import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

const useStyle = createUseStyles({
  DasboardMain: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "56px",
    padding: "0 72px",
    borderTop: "0.2px solid #4F4F4F",
    borderBottom: "0.2px solid #4F4F4F",
  },
  width: {
    width: "170px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  creteProjectWidth: {
    width: "232px",
    display: "flex",
    color: "#0463D1",
    justifyContent: "center",
    height: "56px",
  },
  flex: {
    display: "flex",
    padding: "15px",
    justifyContent: "center",
  },
  activeLink: {
    color: "#828080",
    textDecoration: "none",
    height: "56px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  actLink:{
    color: "#0463D1",
    textDecoration: "none",
    height: "56px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  focusedTab: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    height: "100%",
    borderBottom: "3px solid #0463D1",
    color: "#0463D1",
    // padding:'15px 0',
    alignItems: "center",
    textDecoration: "none",
  },
});

const DashboardMain = () => {
  const classes = useStyle();
  const [currentTab, setCurrentTab] = useState("Dashboard");
  const handleFocus = tab => {
    setCurrentTab(`${tab}`);
  };
  return (
    <>
      <CssBaseline />
      <Box className={classes.DasboardMain}>
        <Box className={classes.flex}>
          <Box
            className={classes.width}
            onClick={() => handleFocus("Dashboard")}
          >
            <Link
              to="/"
              className={
                currentTab === "Dashboard"
                  ? classes.focusedTab
                  : classes.activeLink
              }
            >
              Dashboard
            </Link>
          </Box>
          <Box
            className={classes.width}
            onClick={() => handleFocus("UserList")}
          >
            <Link
              to="/UserList"
              className={
                currentTab === "UserList"
                  ? classes.focusedTab
                  : classes.activeLink
              }
            >
              UserList
            </Link>
          </Box>
          <Box
            className={classes.width}
            onClick={() => handleFocus("ProjectList")}
          >
            <Link
              to="/ProjectList"
              className={
                currentTab === "ProjectList"
                  ? classes.focusedTab
                  : classes.activeLink
              }
            >
              ProjectList
            </Link>
          </Box>
        </Box>
        <Box
          className={classes.creteProjectWidth}
          onClick={() => handleFocus("Create New Project")}
        >
          <Link
            to="/CreateNewProject"
            className={
              currentTab === "Create New Project"
                ? classes.focusedTab
                : classes.actLink
            }
          >
            + Create New Project
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default DashboardMain;
