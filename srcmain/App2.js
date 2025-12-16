import './App.css';
import React, { useState } from "react";

function App()
{
  const [list, setList] = useState([]); // Initialize an empty list
  const [inputValue, setInputValue] = useState(""); // Track input field value

  const addItem = () => {
    const updatedList = [...list]; // Create a copy of the current list
    updatedList.push(inputValue); // Add the new item to the copied list
    setList(updatedList); // Update the state with the new list
    setInputValue(""); // Clear the input field
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add an item"
      />
      <button onClick={addItem}>Add</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;