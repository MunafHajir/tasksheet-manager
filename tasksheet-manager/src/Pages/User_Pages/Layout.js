import React from "react";
import Navbar from "./User-Header-Footer/Navbar";
import TaskList from "./User-Header-Footer/TaskList";
import Footer from "./User-Header-Footer/Footer";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  layoutcontainer: {
    background: "#F7FBFF",
    height: "100vh",
    fontFamily: "Plus Jakarta Sans",
  },
});

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.layoutcontainer}>
        <Navbar />
        <TaskList />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
