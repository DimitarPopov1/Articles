import React, { useState } from "react";
import "../css/searchBar.css";

const SearchBar = ({ callback }) => {
   const [inputValue, setInputValue] = useState("");
   const handleSubmit = (e) => {
      e.preventDefault();
      callback(inputValue);
   };
   return (
      <form className="searchBar" onSubmit={handleSubmit}>
         <input
            autoFocus
            type="text"
            className="searchBarInput"
            value={inputValue}
            onChange={(e) => {
               setInputValue(e.target.value);
            }}
         />
         <button>Search</button>
      </form>
   );
};

export default SearchBar;
