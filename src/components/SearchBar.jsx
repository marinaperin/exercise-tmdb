import { useState } from "react";

export default function ({ onSearch }) {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("movie");

  return (
    <div className="input-container">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <select
        value={selectValue}
        onChange={(e) => setSelectValue(e.target.value)}
      >
        <option value="movie">Movie</option>
        <option value="tv">Tv Series</option>
        <option value="person">Person</option>
      </select>
      <button
        onClick={() => {
          onSearch(inputValue, selectValue);
        }}
      >
        Search
      </button>
    </div>
  );
}
