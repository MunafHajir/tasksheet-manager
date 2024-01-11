import React from 'react'
import Layout from './Layout'
import CurrentUserTable from "./UserTable/CurrentUserTable"



const User = () => {
  return (
    <Layout  >
      <CurrentUserTable/>
    </Layout>
  )
}

export default User