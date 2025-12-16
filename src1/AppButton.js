import React, { useState } from "react";

function App() {
  // State to track button clicks
  const [count, setCount] = useState(0);

  // Function called when button is clicked
  const handleClick = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Button Click Counter</h1>
      <p>You clicked the button {count} {count === 1 ? "time" : "times"}</p>

      {/* Inline button, no separate MyButton component */}
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}

export default App;
