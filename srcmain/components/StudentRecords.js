import React, { useState } from "react";
import "../styles/StudentRecords.css";

function App() {
  const [list, setList] = useState([]);
  const [itemValue, setItemValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [priorityValue, setpriorityValue] = useState("");

  const addItem = () => {
    if (itemValue.trim() && nameValue.trim() && priorityValue.trim()) {
      const updatedList = [...list, { item: itemValue, name: nameValue, priority: priorityValue}];
      setList(updatedList);
      setItemValue("");
      setNameValue("");
      setpriorityValue("");
    }
  };

  const removeItem = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  return (
    
    <div>
    <h1 style={{ textAlign: 'center' }}>Student Records</h1>

    <div className="inputs-container">
      
      <input
        type="text"
        value={itemValue}
        onChange={(e) => setItemValue(e.target.value)}
        placeholder="Student ID"
      />
      <input
        type="text"
        value={nameValue}
        onChange={(e) => setNameValue(e.target.value)}
        placeholder="Student Name"
      />
      <input
        type="text"
        value={priorityValue}
        onChange={(e) => setpriorityValue(e.target.value)}
        placeholder="Student Grade"
      />
      <button onClick={addItem}>Add Student</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Student Grade</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((entry, index) => (
            <tr key={index}>
              <td>{entry.item}</td>
              <td>{entry.name}</td>
              <td>{entry.priority}</td>
              <td>
                <button onClick={() => removeItem(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;