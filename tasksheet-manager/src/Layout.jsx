import Navbar from 'Pages/User_Pages/User-Header-Footer/Navbar'
import React from 'react'
import User from 'Pages/User_Pages/User'

const Layout = ({Children}) => {
  return (
    <>
    <User />
    {Children}
    </>
  )
}

export default Layout