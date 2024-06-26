import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function SearchBar({ onSearch, placeholder = "Search images..." }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleClear = () => {
    setSearchTerm("");
    onSearch("");
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end", my: 4 }}>
      <FormControl fullWidth sx={{ maxWidth: { sm: "300px" } }}>
        <TextField
          size="small"
          variant="outlined"
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleInputChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {searchTerm && (
                  <IconButton
                    aria-label="clear search"
                    onClick={handleClear}
                    edge="end"
                    size="small"
                  >
                    <ClearIcon />
                  </IconButton>
                )}
                <IconButton onClick={handleSearch} edge="end" size="small">
                  <SearchIcon color="action" />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </FormControl>
    </Box>
  );
}

export default SearchBar;
