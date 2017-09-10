//Nguyen Duc Hoang- email: sunlight4d@gmail.com
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class PaneComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                {this.props.children}
                {this.props.up}                
                {this.props.down}

            </div>
        );
    }
}

function UpComponent(props) {
    return (
        <div className="red">
            This is RED
        </div>
    );
}

function DownComponent(props) {
    return (
        <div className="green">
            This is GREEN
        </div>
    );
}

ReactDOM.render(
  <PaneComponent
        up={<UpComponent />}
        down={<DownComponent />}>
        <p>This is the children part</p>
    </PaneComponent>,
  document.getElementById('root')
);
