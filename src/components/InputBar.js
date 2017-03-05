import React, { Component } from 'react';

class InputBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <div className="form-group">
        <input
          className="form-control"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default InputBar;
