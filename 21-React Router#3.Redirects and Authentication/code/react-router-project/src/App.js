import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import News from './components/News';
import Contact from './components/Contact';
import About from './components/About';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
/*
class App extends Component {
  render() {
    return (
       <Router>
           <div>
               <ul>
                   <li><a href="#Home">Home</a></li>
                   <li><a href="#News">News</a></li>
                   <li><a href="#Contact">Contact</a></li>
                   <li><a href="#About">About</a></li>
               </ul>
           </div>
       </Router>
    );
  }
}
*/
const App = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            <Route exact path="/" component={Home}/>
            <Route path="/news/:categoryName" component={News}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/about" component={About}/>

        </div>
    </Router>
);
export default App;
