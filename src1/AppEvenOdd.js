import React from "react";

const num = [4, 7, 2, 8];

// Define EvenList as a component
const EvenList = () => {
  return (
    <ul>
      {num.map((d, index) => (
        <li key={index}>
          {d} is {d % 2 === 0 ? "even" : "odd"}
        </li>
      ))}
    </ul>
  );
};

function App() {
  return (
    <div style={{ textAlign: "left", marginTop: "50px" }}>
      <h1>Number Even/Odd List</h1>
      
      {/* Use the component as JSX */}
      <EvenList />
    </div>
  );
}

export default App;
