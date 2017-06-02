import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function updateTimer() {
    const element = (
        <div>
            <h1>Timer update example</h1>
            <h2>Current timer is: {new Date().toLocaleTimeString()}</h2>
        </div>
    );
    ReactDOM.render(
        element,
        document.getElementById('root')
    );
    // console.log("counting ..." + counter);
}

setInterval(updateTimer, 1000);
// registerServiceWorker();
