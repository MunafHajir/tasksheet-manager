import { Box, Modal } from "@mui/material";
import React from "react";

const ModelSelection = ({ open, logic, modelStyle, children }) => {
  return (
    <Modal open={open} onClose={logic}>
      <Box className={modelStyle}>{children}</Box>
    </Modal>
  );
};

export default ModelSelection;
