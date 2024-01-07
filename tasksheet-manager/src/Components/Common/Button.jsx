import { Button } from '@mui/material'
import React from 'react'

const ButtonComp = ({variant,btntext, buttonStyle , logic }) => {
  return (
    <Button variant={variant} className={buttonStyle} onClick={logic}>
      {btntext}
    </Button>
  )
}

export default ButtonComp;