import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {textData: ''};
    this.state = {
        yourName: '',
        numberOfFriends: 0
    };
  }

  handleChange = (event) => {
    // this.setState({textData: event.target.value});
    this.setState({
        [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    //   alert('You submitted text data: ' + this.state.textData);
      alert("You submitted data: " + this.state.yourName + ", " + this.state.numberOfFriends);
      event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="inputForm">
        <label>
          Name:
          <input type="text"
              value={this.state.textData}
              name="yourName"
              onChange={this.handleChange} />
        </label>
        <br></br>
        <label>
            Number of friends:
            <input type="number"
                name="numberOfFriends"
                value={this.state.numberOfFriends}
                onChange={this.handleChange}
            />
        </label>
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
ReactDOM.render(
  <FormComponent />,
  document.getElementById('root')
);
