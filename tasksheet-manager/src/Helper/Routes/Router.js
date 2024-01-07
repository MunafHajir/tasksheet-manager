import CreateNewProject from 'Containers/CreateNewProject/CreateNewProject'
import ProjectDetail from 'Containers/Dashboard/DashboardProjectList/ProjectDetail/ProjectDetail'
import DashboardMain from 'Containers/Dashboard/DashboardTabs/DashboardMain'
import Layout from 'Layout'
import React from 'react'
import { Route , Routes } from 'react-router-dom'

const Router = () => {
  return (
   <Layout>
    <Routes>
        <Route path='/Dashboard' element={<DashboardMain />}/>
        <Route path='/Dashboard/:ProjectName' element={<ProjectDetail />}/>
    </Routes>
   </Layout>
  )
}

export default Router