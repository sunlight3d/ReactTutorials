import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {textData: ''};
  }

  handleChange = (event) => {
    this.setState({textData: event.target.value});
  }

  handleSubmit = (event) => {
      alert('You submitted text data: ' + this.state.textData);
      event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="inputForm">
        <label>
          Name:
          <input type="text" value={this.state.textData} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
ReactDOM.render(
  <FormComponent />,
  document.getElementById('root')
);
