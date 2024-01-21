import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "./Button";
import { Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  heading: {
    display: "flex",
    flexDirection: "column",
  },
  submitbtn: {
    width: "100%",
    backgroundColor: "#004596",
  },
});

export default function MuiDrawer({ tasks, open }) {
  const classes = useStyles();

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 500 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box
        sx={{
          width: "100%",
          padding: "20px 24px",
          backgroundColor: "#004596",
          display: "flex",
          justifyContent: "space-between",
          lineHeight: "32px",
        }}
      >
        <div className={classes.heading}>
          <Typography
            color="white"
            sx={{ fontSize: "24px", fontWeight: "600" }}
          >
            View Task
          </Typography>
          <Typography
            color="white"
            sx={{ fontSize: "14px", fontWeight: "400" }}
          >
            Here you can view task.
          </Typography>
        </div>
        <CloseIcon
          fontSize="small"
          sx={{
            width: "20px",
            color: "#fff",
            border: "2px solid #fff",
            borderRadius: "50%",
            cursor: "pointer", // Add cursor: pointer to indicate it's clickable
          }}
          onClick={toggleDrawer(anchor, false)} // Call toggleDrawer with "right" and false
        />
      </Box>

      <Container
        fixed
        sx={{
          height: "85vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "25px 0",
            gap: "5px",
          }}
        >
          <Typography variant="h6" color="#999" fontSize="14px">
            Task
          </Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            value={tasks}
            multiline
            maxRows={6}
            disabled
          />
          <Typography variant="h6" color="#999" fontSize="14px">
            Notes
          </Typography>

          <TextField
            id="outlined-basic"
            variant="outlined"
            // value={tasks}
            placeholder="Enter notes here"
            multiline
            maxRows={4}
            disabled
          />
        </Box>

        <Box
          sx={{
            marginTop: "auto",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            btntext="Done"
            buttonStyle={classes.submitbtn}
          />
        </Box>
      </Container>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={open}
            onClose={toggleDrawer(anchor, false)}
            
    
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
