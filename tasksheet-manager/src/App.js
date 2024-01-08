import CreateNewProject from "Containers/CreateNewProject/CreateNewProject";
import DashboardProjectList from "Containers/Dashboard/DashboardProjectList/DashboardProjectList";
import ProjectDetail from "Containers/Dashboard/DashboardProjectList/ProjectDetail/ProjectDetail";
import DashboardUserDetails from "Containers/Dashboard/DashboardUserList/DashboardUserDetails/DashboardUserDetails";
import DashboardUserList from "Containers/Dashboard/DashboardUserList/DashboardUserList";
import Layout from "Layout";
import React from "react";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/ProjectList" element={<DashboardProjectList />} />
          <Route path="/ProjectList/:ProjectName" element={<ProjectDetail />} />
          <Route path="/UserList" element={<DashboardUserList />} />
          <Route
            path="/UserList/:ProjectName"
            element={<DashboardUserDetails />}
          />
          <Route path="/CreateNewProject" element={<CreateNewProject />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
