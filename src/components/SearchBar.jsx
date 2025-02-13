import React, { useState } from "react";

const SearchBar = ({ callback }) => {
   const [inputValue, setInputValue] = useState("");
   const handleSubmit = (e) => {
      e.preventDefault();
      callback(inputValue);
   };
   return (
      <form className="searchBar" onSubmit={handleSubmit}>
         <input
            type="text"
            className="searchBarInput"
            value={inputValue}
            onChange={(e) => {
               setInputValue(e.target.value);
            }}
         />
      </form>
   );
};

export default SearchBar;
