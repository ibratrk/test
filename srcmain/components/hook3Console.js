import { useRef, useEffect } from 'react';

function Hook3() {
  const countRef = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
     intervalRef.current = setInterval(() => {
      countRef.current += 1;
      console.log(`Timer: ${countRef.current} seconds`);
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []); 
  return (
    <div>
      <h1>Timer running (check console for count)  </h1>
    </div>
  );
}

export default Hook3;