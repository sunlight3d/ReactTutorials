import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ToggleButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isOn: true};
        this.buttonClick = this.buttonClick.bind(this);
    }
    buttonClick() {
        this.setState(prevState => ({
                isOn: !prevState.isOn
            }
        ));
    }
    /*
    buttonClick = () => {
        this.setState(prevState => ({
                isOn: !prevState.isOn
            }
        ));
    }
    */

    render() {
        return (
            <button className="ToggleButton" onClick={this.buttonClick}>
                This is a toggle button:
                {this.state.isOn ? " ON": " OFF"}
            </button>
        );
    }
}

ReactDOM.render(
  <ToggleButton />,
  document.getElementById('root')
);
