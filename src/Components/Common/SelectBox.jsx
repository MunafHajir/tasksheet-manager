import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { createUseStyles } from "react-jss";
import { Box, CssBaseline } from "@mui/material";

const useStyle = createUseStyles({
  p: {
    margin: "0px",
    fontWeight: "600",
    fontSize: "14px",
    fontFamily: "Plus Jakarta Sans",
    color: "#242424",
  },
  MainContainer: {
    fontFamily: "Plus Jakarta Sans",
  },
  Icon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "8px 16px",
    paddingLeft: "0px",
    cursor: "pointer",
  },
  icon: {
    fill: "black",
    height: "16px",
    marginBottom: "4px",
  },
});

const SelectBox = props => {
  const classes = useStyle();
  const [select, setSelect] = useState("");

  const handleChange = event => {
    setSelect(event.target.value);
  };

  return (
    <>
      <CssBaseline />
      <FormControl
        className={`${classes.MainContainer} ${props.ContainerWidth}`}
      >
        <Select
          sx={{
            overflow: "hidden",
          }}
          value={select}
          className={props.selectHeight}
          onChange={handleChange}
          displayEmpty
          IconComponent={() => (
            <Box className={`${classes.Icon}`}>
              <svg
                className={classes.icon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M8.00039 13.137L13.8184 7.47569C13.8653 7.42908 13.9209 7.39223 13.9822 7.36728C14.0434 7.34232 14.1089 7.32975 14.1751 7.3303C14.2412 7.33085 14.3065 7.34451 14.3673 7.37047C14.4281 7.39644 14.4831 7.43421 14.5293 7.4816C14.5754 7.52898 14.6116 7.58504 14.6359 7.64652C14.6602 7.70801 14.6721 7.7737 14.6708 7.8398C14.6695 7.9059 14.6552 7.9711 14.6286 8.03161C14.602 8.09213 14.5636 8.14676 14.5157 8.19236L8.34905 14.1924C8.25571 14.2832 8.13062 14.334 8.00039 14.334C7.87016 14.334 7.74506 14.2832 7.65172 14.1924L1.48506 8.19236C1.43718 8.14676 1.39882 8.09213 1.3722 8.03161C1.34558 7.9711 1.33123 7.9059 1.32997 7.8398C1.32871 7.7737 1.34057 7.70801 1.36487 7.64652C1.38917 7.58504 1.42542 7.52898 1.47152 7.4816C1.51763 7.43421 1.57267 7.39644 1.63347 7.37047C1.69427 7.34451 1.75961 7.33085 1.82572 7.3303C1.89183 7.32975 1.9574 7.34232 2.01862 7.36728C2.07984 7.39223 2.1355 7.42908 2.18239 7.47569L8.00039 13.137Z"
                  fill={props.dropDownIconColor}
                />
              </svg>
            </Box>
          )}
        >
          <MenuItem value="">
            <p className={`${classes.p} ${props.classesP} ${classes.padding} `}>
              {props.title}
            </p>
          </MenuItem>

          {props.menuList.map((item, index) => (
            <MenuItem key={index} value={`${item.value}`}>
              {item.value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default SelectBox;
