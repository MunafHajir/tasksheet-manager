import * as React from "react";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
} from "@mui/material";
import ButtonComp from "Components/Common/Button";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
  buttonStyle: {
    backgroundColor: "white",
    color: "black"
  },
  svg:{
    marginTop:"5px"
  }
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function PMTable() {
  const classes = useStyle();
  return (
    <TableContainer component={Paper}>
      <Box display="flex" justifyContent="space-between" padding="10px">
        TaskWise ETA Allocations
        <ButtonComp
          variant="contained"
          btntext="Export"
          buttonStyle={classes.buttonStyle}
          classesSvg={classes.svg}
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9.32031 6.50019L11.8803 3.94019L14.4403 6.50019"
                fill="white"
              />
              <path
                d="M9.32031 6.50019L11.8803 3.94019L14.4403 6.50019"
                stroke="#242424"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.8799 14.1803V4.01025"
                stroke="#242424"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4 12.0002C4 16.4202 7 20.0002 12 20.0002C17 20.0002 20 16.4202 20 12.0002"
                fill="white"
              />
              <path
                d="M4 12.0002C4 16.4202 7 20.0002 12 20.0002C17 20.0002 20 16.4202 20 12.0002"
                stroke="#242424"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9.32031 6.50019L11.8803 3.94019L14.4403 6.50019"
              fill="white"
            />
            <path
              d="M9.32031 6.50019L11.8803 3.94019L14.4403 6.50019"
              stroke="#242424"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.8799 14.1803V4.01025"
              stroke="#242424"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 12.0002C4 16.4202 7 20.0002 12 20.0002C17 20.0002 20 16.4202 20 12.0002"
              fill="white"
            />
            <path
              d="M4 12.0002C4 16.4202 7 20.0002 12 20.0002C17 20.0002 20 16.4202 20 12.0002"
              stroke="#242424"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </ButtonComp>
      </Box>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
