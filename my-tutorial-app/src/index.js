import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var numbers = [1,2,3,4];
var squaredNumbers = numbers.map((eachNumber) => {eachNumber * eachNumber});

ReactDOM.render(<h1>sss</h1>,
                document.getElementById('root'));
// registerServiceWorker();
