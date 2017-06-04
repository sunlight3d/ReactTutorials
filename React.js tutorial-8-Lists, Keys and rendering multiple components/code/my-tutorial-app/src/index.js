import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*
class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false};
    }
    handleLogout = () => {
        this.setState({isLoggedIn: false});
    }

    handleLogin = () => {
        this.setState({isLoggedIn: true});
    }

    render() {
        let myButton = null;
        let title = null;
        if(this.state.isLoggedIn) {
            myButton = <button onClick={this.handleLogout}>Logout</button>
        } else {
            myButton = <button onClick={this.handleLogin}>Login</button>
        }
        title = this.state.isLoggedIn ? <h1>Logged in</h1>:<h1>Logged out</h1>
        return (
            <div>
                {title}
                {myButton}
            </div>
        );
    }
}
*/
class MailComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h1>Mail statistics</h1>
                {this.props.newMessages.length > 0 &&
                    <h2>
                        You have {this.props.newMessages.length} new messages.
                    </h2>
                }
            </div>
        );
    }

}

ReactDOM.render(
  <MailComponent newMessages={[]}/>,
  document.getElementById('root')
);
