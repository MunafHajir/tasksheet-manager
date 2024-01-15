import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  menuitem_col: {
    fontFamily: "Plus Jakarta Sans",
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
