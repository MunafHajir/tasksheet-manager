import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import MuiButton from "./Common/MuiButton";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";

export default function MuiDrawer({ tasks }) {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
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
          backgroundColor: "blue",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <Typography variant="h6" color="white">
            View Task
          </Typography>
          <Typography variant="body1" color="white">
            Here you can view task.
          </Typography>
        </div>
        <MuiButton
          variant="outlined"
          btnsize="small"
          btnprops={{
            color: "#fff",
            border: "2px solid #fff",
            borderRadius: "50%",
            height: "50px", // Updated height
          }}
          // onClose={toggleDrawer(anchor, false)}
          btnicon={<CloseIcon fontSize="small" sx={{ width: "20px" }} />}
        />
      </Box>

      <Container
        fixed
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <Box
          sx={{ display: "flex", flexDirection: "column", padding: "25px 0" }}
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
          />
          <Typography variant="h6" color="#999" fontSize="14px">
            Notes
          </Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            placeholder="Enter notes here"
            multiline
            maxRows={4}
          />
        </Box>

        <Box sx={{ marginTop: "auto", marginBottom: "20px" }}>
          <MuiButton variant="contained" btnheading="Done" />
        </Box>
      </Container>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
