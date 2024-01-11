import { Box } from "@mui/material";
import SearchBar from "Components/Common/SearchBar";
import SelectBox from "Components/Common/SelectBox";
import SupportingText from "Components/Common/SupportingText";
import Text from "Components/Common/Text";
import ProjectTimelineGraph from "Components/Graph/ProjectTimelineGraph";
import PMTable from "Components/Table/PMTable";
import React from "react";
import { createUseStyles } from "react-jss";
import { useNavigate, useParams } from "react-router-dom";

const useStyle = createUseStyles({
  Back: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#F7FBFF",
  },
  fontsize: {
    fontSize: "16px",
  },
  searchWidth: {
    width: "25vw",
  },
  ContainerWidth: {
    minWidth: "17vw",
    backgroundColor: "#fff",
  },
  weekContainer: {
    backgroundColor: "#0463D1",
    borderRadius: "8px",
    color: "#fff",
  },
  colorWhite: {
    color: "#fff",
  },
  Container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#E6F3FF",
    borderRadius: "8px 8px 0px 0px",
    padding: "5px 24px",
  },
  textContainer: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  supportingText: {
    color: "#0463D1",
    fontFamily: "Plus Jakarta Sans",
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "20px",
  },
  SupportingContainer: {
    padding: "4px 16px",
    background: "#F7FBFF",
    borderRadius: "216px",
  },
  projectName: {
    color: "#242424",
    fontFamily: "Poppins",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "28px",
  },
  TimelineGap: {
    display: "flex",
    gap: "12px",
  },
  timeline: {
    color: "#1D2129",
    fontFamily: "Plus Jakarta Sans",
    fontSize: "20px",
    fontWeight: 600,
    lineHeight: "28px",
  },
  MonthContainer: {
    background: "#fff",
  },
  TimelineContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#fff",
    borderRadius: "8px 8px 0px 0px",
    padding: "35px 30px",
  },
  projectGap: {
    // display: "flex",
    // gap: "45px",
    margin: "45px 0px",
    width:"100%",
    backgroundColor: "#fff",
  },
  graphGap: {
    display: "flex",
    flexDirection: "column",
  },
  GraphWidth:{
    padding:"20px",
    backgroundColor:"#fff"
  }
});

const ProjectDetail = () => {
  const classes = useStyle();
  const { ProjectName } = useParams();
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  const data = [
    { value: "Design State" },
    { value: "Development Stage" },
    { value: "Testing Stage" },
    { value: "Project Completed" },
  ];

  const week = [
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

  return (
    <>
      {/* <h1>hello</h1>
      <h1>{ProjectName}</h1>
      <button onClick={handleBack}>back</button> */}
      <Box className={classes.Back}>
        <Box
          sx={{ display: "flex", alignItems: "center", gap: "16px" }}
          onClick={handleBack}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5.25 11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H5.25C5.05109 12.75 4.86032 12.671 4.71967 12.5303C4.57902 12.3897 4.5 12.1989 4.5 12C4.5 11.8011 4.57902 11.6103 4.71967 11.4697C4.86032 11.329 5.05109 11.25 5.25 11.25Z"
              fill="black"
            />
            <path
              d="M5.56086 12L11.7814 18.219C11.9222 18.3598 12.0013 18.5508 12.0013 18.75C12.0013 18.9491 11.9222 19.1401 11.7814 19.281C11.6405 19.4218 11.4495 19.5009 11.2504 19.5009C11.0512 19.5009 10.8602 19.4218 10.7194 19.281L3.96936 12.531C3.89952 12.4613 3.84411 12.3785 3.8063 12.2874C3.76849 12.1963 3.74902 12.0986 3.74902 12C3.74902 11.9013 3.76849 11.8036 3.8063 11.7125C3.84411 11.6214 3.89952 11.5386 3.96936 11.469L10.7194 4.71897C10.8602 4.57814 11.0512 4.49902 11.2504 4.49902C11.4495 4.49902 11.6405 4.57814 11.7814 4.71897C11.9222 4.8598 12.0013 5.05081 12.0013 5.24997C12.0013 5.44913 11.9222 5.64014 11.7814 5.78097L5.56086 12Z"
              fill="black"
            />
          </svg>
          <p className={classes.fontsize}>Back To Project</p>
        </Box>
        <Box>
          <SearchBar
            placeholder={"Search another project"}
            styleSearch={classes.searchWidth}
          />
        </Box>
      </Box>

      <Box classname={classes.projectGap}>
        <Box className={classes.Container}>
          <Box className={classes.textContainer}>
            <p className={classes.projectName}>{`${ProjectName} Dashboard`}</p>
            <Box className={classes.SupportingContainer}>
              <SupportingText
                classes={classes.supportingText}
                SupportingTitle={`Project start date : Sept 23, 2023`}
              />
            </Box>
          </Box>
          <SelectBox
            menuList={data}
            title={"Select Stage Of Project"}
            ContainerWidth={classes.ContainerWidth}
            dropDownIconColor={"Black"}
          />
        </Box>
        <Box className={classes.graphGap}>
          <Box className={classes.TimelineContainer}>
            <Box>
              <Text title={"Project timeline"} classes={classes.timeline} />
            </Box>
            <Box className={classes.TimelineGap}>
              <SelectBox
                menuList={week}
                title={"weeks"}
                ContainerWidth={classes.weekContainer}
                classesP={classes.colorWhite}
                dropDownIconColor={"white"}
              />
              <SelectBox
                menuList={Month}
                title={"Months"}
                ContainerWidth={classes.MonthContainer}
                // classesP={classes.colorWhite}
                dropDownIconColor={"black"}
              />
            </Box>
          </Box>
          <Box className={classes.GraphWidth}>
            <ProjectTimelineGraph />
          </Box>
        </Box>
      </Box>
      <PMTable />
    </>
  );
};

export default ProjectDetail;
