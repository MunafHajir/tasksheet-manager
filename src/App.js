import Emaill from "Containers/login/Auth";
import UserFlowDashboard from "Pages/User_Pages/UserFlowDashboard";
import CreateNewProject from "Containers/CreateNewProject/CreateNewProject";
import Dashboard from "Containers/Dashboard/Dashboard";
import DashboardProjectList from "Containers/DashboardProjectList/DashboardProjectList";
import ProjectDetail from "Containers/DashboardProjectList/ProjectDetail/ProjectDetail";
import DashboardUserList from "Containers/DashboardUserList/DashboardUserList";
import PaticularUserSection from "Containers/DashboardUserList/UserDetail/UserDetail";
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

          <Route path="/" element={<Dashboard />} />
          <Route
            path="/UserList/:ProjectName"
            element={<PaticularUserSection />}
          />
          <Route path="/CreateNewProject" element={<CreateNewProject />} />
        </Routes>
      </Layout>

      <Routes>
        <Route path="/" element={<Emaill />}/>
        <Route path="/User-Dashboard" element={<UserFlowDashboard />}/>
      </Routes>
    </>
  );
};

export default App;
