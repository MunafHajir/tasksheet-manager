import React, { useState } from "react";
import Button from "@mui/material/Button";
import MuiMenuItem from "./MuiMenuItem";

export default function MuiButton({ btnprops, btnsize, variant, btnheading, btnicon }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [status, setStatus] = useState('');

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (selectedStatus) => {
    setStatus(selectedStatus);
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        variant={variant}
        size={btnsize}
        sx={{ ...btnprops }}
        aria-controls={anchorEl ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={Boolean(anchorEl) ? 'true' : undefined}
        onClick={handleClick}
      >
        {status || btnheading}
        {btnicon}
      </Button>

      <MuiMenuItem
        menuprops={{ width: "100vw", margin:"10px 0",  }}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={(selectedStatus) => handleClose(selectedStatus)}
      />
    </>
  );
}
