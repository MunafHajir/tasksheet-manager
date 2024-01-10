import { Button } from '@mui/material';
import React from 'react';

const ButtonComp = ({ variant, btntext, style, onClick, children }) => {
  return (
    <Button variant={variant} style={style} onClick={onClick}>
      {children}
      {btntext}
    </Button>
  );
};

export default ButtonComp;
