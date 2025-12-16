import React from "react";

const fruitlist = ['apple', 'banana', 'cherry'];

const MyList = () => {
  return (
    <ul>
      {fruitlist.map((fruit, index) => (
        <li key={index}>{fruit}</li> // add key for each item
      ))}
    </ul>
  );
}

function App() {
  return (
    <div>
      <h1>Fruit List</h1>
      <MyList /> {/* Use component as JSX tag */}
    </div>
  );
}

export default App;
