import React, { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [itemValue, setItemValue] = useState("");
  const [nameValue, setNameValue] = useState("");

  const addItem = () => {
    if (itemValue.trim() && nameValue.trim()) {
      const updatedList = [...list, { item: itemValue, name: nameValue }];
      setList(updatedList);
      /* Make a shallow copy of the current list
    const updatedList = [...list];
    
    // Push a new object into the copied list
    updatedList.push({ item: itemValue, name: nameValue });
      */
      setItemValue("");
      setNameValue("");
    }
  };

  const removeItem = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  const sortItemAsc = () => {
    const updatedList = [...list].sort((a, b) =>
      a.item.localeCompare(b.item)
    );
    setList(updatedList);
  };

  const sortItemDesc = () => {
    const updatedList = [...list].sort((a, b) =>
      b.item.localeCompare(a.item)
    );
    setList(updatedList);
  };

  return (
    <div>
      <input
        type="text"
        value={itemValue}
        onChange={(e) => setItemValue(e.target.value)}
        placeholder="Add an item"
      />
      <input
        type="text"
        value={nameValue}
        onChange={(e) => setNameValue(e.target.value)}
        placeholder="Add a name"
      />
      <button onClick={addItem}>Add</button>
      <button onClick={sortItemAsc}>Sort Asc</button>
      <button onClick={sortItemDesc}>Sort Desc</button>

      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Item</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((entry, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{entry.item}</td>
              <td>{entry.name}</td>
              <td>
                <button onClick={() => removeItem(index)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;