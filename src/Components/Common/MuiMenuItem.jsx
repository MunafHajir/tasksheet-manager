import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  menuitem_col: {
    fontFamily: "Plus Jakarta Sans",
    width: "135px",
  },
  menu_col: {
    borderRadius: "8px",
    border: "1px solid #D0D5DD",
    boxShadow: "0px 1px 3px 0px rgba(16, 24, 40, 0.10)",
  },
});

export default function MuiMenuItem({ anchorEl, open, onClose, menuprops }) {
  const classes = useStyles();

  const [status, setStatus] = React.useState("");

  const handleClose = (selectedStatus) => {
    setStatus(selectedStatus);
    onClose(selectedStatus);
  };

  return (
    <div>
      <Menu
        className={classes.menu_col}
        sx={{ ...menuprops }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose(status)}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          className={classes.menuitem_col}
          onClick={() => handleClose("In progress")}
        >
          In progress
        </MenuItem>
        <MenuItem
          className={classes.menuitem_col}
          onClick={() => handleClose("Completed")}
        >
          Completed
        </MenuItem>
      </Menu>
    </div>
  );
}
