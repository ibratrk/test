import React, { useContext } from 'react';
import { MessageContext } from '../pages/About';

function Hook2() {

    const message = useContext(MessageContext);
      return (
        <div>
            <h2>Hook2 - useContext Consumer</h2>
            <div> 
                <h3>Message from about page</h3>
                <p>Attenttion!{message}</p>
                </div>
        </div>
      );
}
export default Hook2;



























































