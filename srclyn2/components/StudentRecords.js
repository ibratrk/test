import React, { useState } from "react";
//import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [StudentIDValue, setStudentIDValue] = useState("");
  const [StudentNameValue, setStudentNameValue] = useState("");
  const [StudentGradeValue, setStudentGradeValue] = useState("");

  const addItem = () => {
    if (StudentIDValue.trim() && StudentNameValue.trim() && StudentGradeValue.trim()) {
      const updatedList = [...list, { StudentID: StudentIDValue, StudentName: StudentNameValue, StudentGrade: StudentGradeValue}];
      setList(updatedList);
      setStudentIDValue("");
      setStudentNameValue("");
      setStudentGradeValue("");
    }
  };

  const removeItem = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  return (
    
    <div style={{textAlign: "center"  }}>
        <h1  colSpan="4" style={{ textAlign: "center"}} >Student Records</h1>
      
      <input
        type="number"
        value={StudentIDValue}
        onChange={(e) => setStudentIDValue(e.target.value)}
        placeholder="Student ID"
      />
      <br/>
      <input
        type="text"
        value={StudentNameValue}
        onChange={(e) => setStudentNameValue(e.target.value)}
        placeholder="Student Name"
      />
      <br/>
     
      <input
        type="text"
        value={StudentGradeValue}
        onChange={(e) => setStudentGradeValue(e.target.value)}
        placeholder="Student Grade"
        
      />
      <br/>
      <br/>
      <button onClick={addItem} style={{backgroundColor:"green"}}>Add Student</button>
       <br/>
     <table border="1" cellPadding="4" style={{ width: "100%"}} >
        <thead>
          <tr>
            <th>StudentID</th>
           
            <th>StudentName</th>

            <th>StudentGrade</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((entry, index) => (
            <tr key={index}>
              <td>{entry.StudentID}</td>
              <td>{entry.StudentName}</td>
              <td>{entry.StudentGrade}</td>
              <td>
                <button onClick={() => removeItem(index) }  style={{backgroundColor:"red"}}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      
      </table>
    </div>
  );
}

export default App;