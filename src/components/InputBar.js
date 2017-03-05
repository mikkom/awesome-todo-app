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

  handleKeyPress = e => {
    if (e.charCode === 13) {
      const value = this.state.value;
      this.setState({
        value: ''
      });
      this.props.onSubmit(value);
    }
  }

  render() {
    return (
      <div className="form-group">
        <input
          className="form-control"
          value={this.state.value}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
      </div>
    );
  }
}

export default InputBar;
