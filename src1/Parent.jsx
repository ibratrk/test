import React from 'react';
import Child from './Child'

const Parent = () => {
    return (<div>
                <h1>Welcome to our Parent Component!</h1>
                <Child name="Leyla" />
                {/* Pass the 'name' prop with value "Samer" */}
            </div>);
}

export default Parent