import React, { useState} from "react";
import '../styles/counter.css';
function Counter(props){
    const[count, setCount] = useState(props.startValue);
  const increment = () => { setCount(count + 1);};

   const decrement = () => { setCount(count - 1);};

   return <div>
       Count: {count}
       <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
   </div>
}
export default Counter;