import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  header: {
    background: "#DCECFE",
  },
  headingText: {
    fontSize: "14px",
    fontFamily: "Plus Jakarta Sans",
    fontWeight: 600,
  },
  ColumnStyle: {
    fontFamily: "Plus Jakarta Sans",
    fontSize: "14px",
  },
  hoverEffect: {
    "&:hover": {
      backgroundColor: "#E3F2FD",
      cursor: 'pointer'
    },
  },
});

export const CreateNewProjectModuleETATable = ({
  data,
  customizableColumns,
}) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customizable table">
        <TableHead className={classes.header}>
          <TableRow>
            {customizableColumns.map((column) => (
              <TableCell
                key={column.id}
                style={{ width: column.rowWidth, padding: "10px 24px" }}
              >
                <Typography variant="p" className={classes.headingText}>
                  {column.label}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              {customizableColumns.map((column) => (
                <TableCell
                  key={column.id}
                  sx={{ padding: "12px 24px" }}
                  className={column.id === "task" && row.id < 7 ? classes.hoverEffect : ""}
                  onClick={
                    column.id === 'task' && row.onTaskClick
                      ? () => row.onTaskClick(row)
                      : null
                  }
                >
                  <Typography variant="p" className={classes.ColumnStyle}>
                    {row[column.id]}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
