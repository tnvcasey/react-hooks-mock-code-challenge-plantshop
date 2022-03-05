import React from "react";

function Search( {search, filteredSearch}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={search}
        placeholder="Type a name to search..."
        onChange={(e) => filteredSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
