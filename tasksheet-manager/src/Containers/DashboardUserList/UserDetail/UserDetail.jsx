import DashboardMain from "Containers/Dashboard/DashboardTabs/DashboardMain";
import React from "react";
import { useParams } from "react-router-dom";

const ProjectDetail = () => {
  const { ProjectName } = useParams();
  return (
    <>
       <h1>{ProjectName}</h1>
    </>
  );
};

export default ProjectDetail;
