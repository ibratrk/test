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

  const removeItem = (param) => {
    setList(list.filter((item) => item !== param));
    // Filter out the item to be removed
  };

  const sortItemAsc = () => {
    const updatedList = [...list]; // Create a copy of the current list
    updatedList.sort((a, b) => a.localeCompare(b)); // Sort
    setList(updatedList); // Update the state with the new list
  };

  const sortItemDesc = () => {
    const updatedList = [...list]; // Create a copy of the current list
    updatedList.sort((a, b) => b.localeCompare(a)); // Sort
    setList(updatedList); // Update the state with the new list
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
      <button onClick={sortItemAsc}>Sort Asc</button>
      <button onClick={sortItemDesc}>Sort Desc</button>
      <table>
        <thead>
        <tr>
          <th>index</th>
          <th>description</th>
        </tr>
        </thead>
        <tbody>
        {list.map((item, index) => (
            <tr key={index}>
              <td>{index}</td> 
              <td>{item}</td>
              <td>
                <button onClick={() => removeItem(item)}>Remove</button>
              </td>
            </tr>
          ))}
          </tbody>
      </table>
    </div>
  );
}

export default App;