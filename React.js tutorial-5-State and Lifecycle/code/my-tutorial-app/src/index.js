import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {seconds: 0};
    }
    incrementCounter() {
        this.setState(
            (prevState, props) => ({
                seconds: prevState.seconds + 1
            })
        );
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.incrementCounter(),
            1000
        );
    }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div>
                <h1>This is a counting machine!</h1>
                <h2>Seconds: {this.state.seconds} s </h2>
            </div>
        );
    }
}

ReactDOM.render(
  <Counter />,
  document.getElementById('root')
);
