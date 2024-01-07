import React, { useState } from "react";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
  Search: {
    padding: "9px",
    border: "0px",
    borderRadius: "8px",
    outline: "0px",
    width: "16vw",
  },
  Border: {
    borderRadius: "8px",
    border: "1px solid #CBCBCB",
    display: "flex",
    alignItems: "center",
    position:"relative"
  },
  Icon: {
    padding: "0px 15px",
    cursor: "pointer",
    display:"flex",
    alignItems:"center",
    position:"absolute",
    right:"0px"
  },
});

const SearchBar = ({ placeholder, type, logic }) => {
  const [search, setSearch] = useState("");
  const classes = useStyle();

  const handleChanges = e => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className={classes.Border}>
        <input
          className={`${classes.Search}`}
          type={type}
          name="search"
          id="search"
          placeholder={placeholder}
          value={search}
          onChange={handleChanges}
        />
        <div className={classes.Icon} onClick={logic}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M9.58366 17.5C13.9559 17.5 17.5003 13.9556 17.5003 9.58333C17.5003 5.21108 13.9559 1.66667 9.58366 1.66667C5.2114 1.66667 1.66699 5.21108 1.66699 9.58333C1.66699 13.9556 5.2114 17.5 9.58366 17.5Z"
              stroke="#101828"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.3337 18.3333L16.667 16.6667"
              stroke="#101828"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
