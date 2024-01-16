import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { createUseStyles } from "react-jss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MuiButton from "../../../Components/Common/MuiButton";
import MuiDrawer from "../../../Components/Common/MuiDrawer";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontFamily: "Plus Jakarta Sans",
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // hide last border

  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(modulename, task, eta) {
  return { modulename, task, eta };
}

const rows = [
  createData(
    "Developer Module",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione eius maxime nulla explicabo ad, perspiciatis sapiente unde expedita quia vel atque quo aperiam delectus sunt et quis ducimus necessitatibus quas!",
    "20h"
  ),
  createData(
    "",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione eius maxime nulla explicabo ad,!",
    ""
  ),
  createData(
    "Superadmin module",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione eius",
    "12h"
  ),
  createData(
    "",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, laborum?",
    ""
  ),
  createData(
    "Sales Manager module",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione eius maxime nulla explicabo ad, perspiciatis sapiente unde expedita quia vel atque",
    "15h"
  ),
  createData(
    "",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, laborum?",
    ""
  ),
  createData(
    "",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, laborum?",
    ""
  ),
];

const useStyles = createUseStyles({
  table: {
   
  },
  tablesection: {
    padding:"0px 100px",
    boxShadow: "none",
    display: "flex",
    justifyContent: "center",
    
  },
  headingcell: {
    backgroundColor: "#DCECFE",
  },
  modulecell: {
    padding: "20px 24px",
    width: "220px"
  },
  etacell: {
    padding: "20px 24px",
  },
  tabcell: {
    padding: "20px 24px ",
  },
  statuscell: {
    padding: "20px 24px ",
    width: "195px",
  },
  hoverEffect: {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#EFF6FF', 
    },
  },
});

export default function CustomizedTables() {
  const classes = useStyles();
  return (
    <TableContainer component={Paper} className={classes.tablesection}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead className={classes.headingcell}>
          <TableRow>
            <StyledTableCell className={classes.headingcell}>
              Module name
            </StyledTableCell>
            <StyledTableCell className={classes.headingcell} align="left">
              Task
            </StyledTableCell>
            <StyledTableCell className={classes.headingcell} align="left">
              ETA
            </StyledTableCell>
            <StyledTableCell className={classes.headingcell} align="left">
              Status
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.modulename}>
              <StyledTableCell
                className={classes.modulecell} 
                component="th"
                scope="row"
              >
                {row.modulename}
              </StyledTableCell>
              <StyledTableCell className={`${classes.tabcell} ${classes.hoverEffect}`} align="left">
                {row.task}
                {/* <MuiDrawer tasks={row.task}/> */}
              </StyledTableCell>
              <StyledTableCell className={classes.etacell} align="left">
                {row.eta}
              </StyledTableCell>
              <StyledTableCell align="left" className={classes.statuscell}>
              <MuiButton
                  btnsize="small"
                  variant="outlined"
                  btnheading="Select Status"
                  btnprops={{
                    textTransform: "capitalize",
                    fontFamily: "Plus Jakarta Sans",
                      
                  }}
                  btnicon={<KeyboardArrowDownIcon />}
                />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}