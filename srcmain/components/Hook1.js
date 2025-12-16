import { useState } from 'react';

function Hook1() {
  const [count, setCount] = useState(0);
  return (
    <div  >
      <div >
        <h1  >
          useState Hook
        </h1>
        <div >
          <h2 >
            Counter (Number State)
          </h2>
          <button onClick={() => setCount(count - 1)} >  Decrease </button>&nbsp;&nbsp;
          <button onClick={() => setCount(count + 1)} >  Increase </button>&nbsp;
          <button onClick={() => setCount(0)} >          Reset    </button>
          <br />
          <h1>Count: {count}</h1>
        </div>
      </div>
    </div>
  );
}

export default Hook1;