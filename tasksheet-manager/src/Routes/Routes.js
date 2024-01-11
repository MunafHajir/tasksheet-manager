import Login from 'Containers/Login'
import Layout from 'Layout'
import React from 'react'
import { Route , Routes } from 'react-router-dom'

const Routes = () => {
  return (
    
   <Layout>
    <Routes>

      <Route path='/' element={<Login/>}/>
        {/* <Route path='/Dashboard' element={}/> */}
    </Routes>
   </Layout>
  )
}

export default Routes