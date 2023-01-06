import { SearchRounded } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import React from "react";
import { Search } from "@mui/icons-material";
const SearchBar = () => (
  <Paper
    component="form"
    onSubmit={() => {}}
    sx={{
      borderRadius: 20,
      border: "1px solid #e3e3e3",
      pl: 2,
      boxShadow: "none",
      mr: { sm: 5 },
    }}
  >
    <input
      type="text"
      className="search-bar"
      placeholder="Search..."
      value=""
      onChange={() => {}}
    />

    <IconButton type="submit" sx={{ color: "red", p:"10px"}}>
      <Search />
    </IconButton>
  </Paper>
);

export default SearchBar;
