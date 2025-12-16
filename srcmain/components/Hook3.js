import { useState, useEffect } from 'react';

function Hook3() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => { setCount((X) => X + 1); }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div>
            <h1>Timer: {count} seconds</h1>
            <p>This component demonstrates useEffect with cleanup</p>
        </div>
    );
}

export default Hook3;