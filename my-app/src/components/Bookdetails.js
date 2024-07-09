// src/components/SearchBar.js
import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="Search for books" onChange={handleSearch} />
    </div>
  );
};

export default SearchBar;
