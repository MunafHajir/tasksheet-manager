import ProjectDetail from 'Containers/Dashboard/DashboardProjectList/ProjectDetail/ProjectDetail'
import DashboardMain from 'Containers/Dashboard/DashboardTabs/DashboardMain'
import Layout from 'Layout'
import React from 'react'
import { Route , Routes } from 'react-router-dom'
// import HightChart from 'Components/HightChart'

const Router = () => {
  return (
   <Layout>
    <Routes>
        <Route path='/Dashboard' element={<DashboardMain />}/>
        <Route path='/Dashboard/:ProjectName' element={<ProjectDetail />}/>
        {/* <Route path='/Chart' element={<HightChart/>}/> */}
        
    </Routes>
   </Layout>
  )
}

export default Router