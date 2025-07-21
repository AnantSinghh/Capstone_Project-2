import React, { useState } from "react";
import "./styles/SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(input);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    if (onSearch) {
      onSearch(value); 
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter ingredients (e.g., tomato, cheese)"
        value={input}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
