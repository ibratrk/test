import React from "react";

class Car {
  constructor(name) {
    this.brand = name;
  }

  present() {
    return "I have this " + this.brand;
  }
}

function App() {
  const myCar = new Car("Mercedes");

  return (
    <div>
      <h1>My React App</h1>
      <p>{myCar.present()}</p>
    </div>
  );
}

export default App;
