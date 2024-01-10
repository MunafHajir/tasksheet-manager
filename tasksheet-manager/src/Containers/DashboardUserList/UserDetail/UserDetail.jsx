import React from 'react'
import { createUseStyles } from 'react-jss'
import { Box, CssBaseline } from '@mui/material'
import { ClassNames } from '@emotion/react'
import PaticularUserProgessProjectDisplaySection from './PaticularUser/PaticularUserSection/PaticularUserProgessProjectDisplaySection'
import PaticularUserPorjectSection from './PaticularUser/PaticularUserSection/PaticularUserPorjectSection'
import { Charts } from 'Components/Common/Chart';
import ProgressGraph from 'Components/Graph/ProgressGraph'
const useStyles =createUseStyles({
  chartContainer:{
    margin:"2rem 0rem",
    backgroundColor:"white",
    borderRadius:".5rem"
  },
  chartSection:{
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    marginTop:"1rem"
  }
})
export default function PaticularUserSection() {
  const classes =useStyles();
  return(
    <>
      {/* <CssBaseline/> */}
    <Box>
      <PaticularUserPorjectSection/>
     <Box className={classes.chartContainer}>
      <PaticularUserProgessProjectDisplaySection PaticularUserName={"Shubham Joshi"}/>
      <Box className={classes.chartSection}>
        <ProgressGraph timeline={180} progress={110}/>
        <ProgressGraph timeline={400} progress={370}/>
      </Box>
     </Box>
    </Box>
    </>
  )
  }
  



  

