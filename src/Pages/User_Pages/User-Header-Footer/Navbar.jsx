import React from 'react'
import UserDate from 'Components/Common/UserDate'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import TaskList from './TaskList';
import { createUseStyles } from 'react-jss';

const Navbar = () => {

  const useStyles = createUseStyles({
    '@global': {
      '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box', // Ensures padding and border are included in the element's total width and height
      },
    },
    universal: {
      margin: "0",
      padding: "0"
    },
    nav: {
      display: "flex",
      justifyContent: "center",
      borderBottom: "1px solid #E3E3E3",
      background: "#FFF",
      boxShadow: "0px 0px 36px 0px rgba(0, 0, 0, 0.06)",
    },
    navContainer: {
      width: "87.5vw",
    },
    outerdiv: {
      display: "flex",
      justifyContent: "space-between",
      margin: "0",
      padding: "0",
      alignItems: "center",
      padding: "0.8% 0",
      width: "100%",

},

  dateArea: {
    display: "flex",
    gap: "3vw",
    alignItems: "center"
  }
  })



const { outerdiv, nav, navContainer, dateArea, universal } = useStyles()

return (
  <nav className={nav}>

    <div className={navContainer}>
      <div className={outerdiv} >
        <h2 className={universal}>Hello, Danish Khan 👋</h2>

        <div className={dateArea}>
          <UserDate />
          <NotificationsNoneOutlinedIcon />
        </div>
      </div>
    </div>
  </nav>
)
}

export default Navbar
