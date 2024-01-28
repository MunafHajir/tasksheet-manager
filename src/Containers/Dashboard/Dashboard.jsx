import React from "react";
import CardContainer from "./Card/CardContainer";
import { Box, CssBaseline } from "@mui/material";
import DashboardProjectTimeline from "Components/Graph/DashboardProjectTimeline";
import { createUseStyles } from "react-jss";
import Text from "Components/Common/Text";
import SelectBox from "Components/Common/SelectBox";
import SearchBar from "Components/Common/SearchBar";
import { Link } from "react-router-dom";

const useStyle = createUseStyles({
  margin: {
    marginBottom: "24px",
  },
  DashboardContainer: {
    padding: "31px 30px",
    borderRadius: "8px",
    border: "1px solid #E7E7E7",
    background: "#FFF",
    boxShadow: "0px 1px 3px 0px rgba(16, 24, 40, 0.10)",
  },
  Text: {
    color: "var(--Text-5, #1D2129)",
    fontFamily: "Plus Jakarta Sans",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "28px",
  },
  TimeLine: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  Date: {
    display: "flex",
    gap: "8px",
  },
  Height: {
    height: "40px",
  },
  TimelineColor: {
    width: "39px",
    height: "21px",
    borderRadius: "6px",
    background: "#0463D1",
  },
  ProgressColor: {
    width: "39px",
    height: "21px",
    borderRadius: "6px",
    background: "#E5C85F",
  },
  CompletedColor: {
    width: "39px",
    height: "21px",
    borderRadius: "6px",
    background: "#219653",
  },
  DelayColor: {
    width: "39px",
    height: "21px",
    borderRadius: "6px",
    background: "#EB5757",
  },
  TimeLineContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  Flex: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
  },
  Content: {
    display: "flex",
    gap: "40px",
  },
  SearchWidth: {
    width: "25vw",
  },
  AllProject: {
    color: "var(--Blue, #0463D1)",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "28px",
  },
  Link: {
    textDecoration: "none",
  },
  AllProduct:{
    display: 'flex',
    justifyContent: 'center',
  }
});

const Week = [
  { value: "Week 1" },
  { value: "Week 2" },
  { value: "Week 3" },
  { value: "Week 4" },
];

const Month = [
  { value: "January" },
  { value: "February" },
  { value: "March" },
  { value: "April" },
  { value: "May" },
  { value: "June" },
  { value: "July" },
  { value: "August" },
  { value: "September" },
  { value: "October" },
  { value: "November" },
  { value: "December" },
];

const Dashboard = () => {
  const classes = useStyle();
  return (
    <>
      <CssBaseline />
      <Box className={classes.margin}>
        <CardContainer />
      </Box>
      <Box className={`${classes.DashboardContainer}`}>
        <Box className={`${classes.TimeLine} ${classes.margin}`}>
          <Text classes={classes.Text} title={`Project timeline`} />
          <Box className={classes.Date}>
            <SelectBox
              selectHeight={classes.Height}
              title={"Week"}
              menuList={Week}
            />
            <SelectBox
              selectHeight={classes.Height}
              title={"Month"}
              menuList={Month}
            />
          </Box>
        </Box>
        <Box className={classes.TimeLineContainer}>
          <Box className={classes.Content}>
            <Box className={classes.Flex}>
              <Box className={classes.TimelineColor}></Box>
              <Text title={`Timeline`} />
            </Box>
            <Box className={classes.Flex}>
              <Box className={classes.ProgressColor}></Box>
              <Text title={`Progress`} />
            </Box>
            <Box className={classes.Flex}>
              <Box className={classes.CompletedColor}></Box>
              <Text title={`Completed`} />
            </Box>
            <Box className={classes.Flex}>
              <Box className={classes.DelayColor}></Box>
              <Text title={`Delayed`} />
            </Box>
          </Box>
          <SearchBar
            styleSearch={classes.SearchWidth}
            placeholder={"Search project"}
          />
        </Box>
        <DashboardProjectTimeline />
        <Box className={classes.AllProduct}>
          <Link className={classes.Link} to="/ProjectList">
            <Text classes={classes.AllProject} title={"View all 20 Projects"} />
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
