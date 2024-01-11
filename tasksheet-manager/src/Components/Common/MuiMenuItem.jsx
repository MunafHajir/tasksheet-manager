import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function MuiMenuItem({ anchorEl, open, onClose, menuprops }) {
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
        <MenuItem onClick={() => handleClose("In progress")}>
          In progress
        </MenuItem>
        <MenuItem onClick={() => handleClose("Completed")}>Completed</MenuItem>
      </Menu>
    </div>
  );
}
