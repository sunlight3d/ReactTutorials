import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const user = {
    name: "Hoang",
    email: "sunlight4d@gmail.com"
};
// const element = <h1>Hello World, my name is: {user.name}, and email: {user.email}</h1>
const element = (
    <div className="hello">
        <h1>Hello World</h1>
        <h2>My name is: {user.name}, and email: {user.email}</h2>
    </div>
);
var numbers = [1,2,3,4];//2, 4, 6, 8
var doubleNumbers = numbers.map((eachNumber) => eachNumber * 2 + "; ");
ReactDOM.render(<h1>doubleNumbers is : {doubleNumbers}</h1>,
                document.getElementById('root'));
// registerServiceWorker();
