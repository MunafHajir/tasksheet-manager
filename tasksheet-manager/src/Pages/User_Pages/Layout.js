import React from 'react'
import Navbar from './User-Header-Footer/Navbar'
import TaskList from './User-Header-Footer/TaskList'
import Footer from './User-Header-Footer/Footer'



const Layout = ({ children }) => {
    return (
        <div>
            <div style={{ background: "#F7FBFF", height:"100vh"}}>
                <Navbar />
                <TaskList />
                {children}
                <Footer />
            </div>
        </div>
    )
}

export default Layout
