import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

import { setSearchTerm } from "../features/characters/characterSlice.js";

function SearchBar() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.characters.searchTerm);

  return (
    <TextField
      fullWidth
      label="Search character"
      placeholder="Mickey Mouse"
      margin="normal"
      value={searchTerm}
      onChange={(event) => dispatch(setSearchTerm(event.target.value))}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}

export default SearchBar;
