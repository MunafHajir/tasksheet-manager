import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Scrollbars from "react-custom-scrollbars-2";
import { createUseStyles } from "react-jss";

const StyledMenu = styled(props => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 230,
    maxWidth: 230,
    maxHeight: "30vh",
    overflowY: 'hidden',
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",

    "& .MuiMenu-list": {
      padding: "4px 0",

    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const mystyle = createUseStyles({
  scrollbar: {
    minHeight: "30vh",
    // minWidth: "10vw",
    overflow: "hidden",
  }
})

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = mystyle()
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const myTask = ["task1", "task1", "task1", "task1", "task1", "task1", "task1", "task1", "task1", "task1", "task1"]

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        disableElevation
        onClick={handleClick}
      >
        +2
      </Button>

      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <Scrollbars

          className={classes.scrollbar}
        >
          {myTask.map((elem, id) => {
            return (
              <MenuItem key={id} onClick={handleClose} disableRipple>
                {elem}
              </MenuItem>
            )
          })

          }

        </Scrollbars>
      </StyledMenu>
    </div>
  );
}
