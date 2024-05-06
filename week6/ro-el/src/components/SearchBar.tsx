import React from "react";

const SearchBar = () => {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <label>
        <input type="checkbox" checked={false} />
        Only show products in stock
      </label>
    </form>
  );
};

export default SearchBar;
