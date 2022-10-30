import React from "react";

export default class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  validateLength(input) {
    if (this.props.minLength && input.length < this.props.minLength) {
      return false;
    } else if (this.props.maxLength && input.length > this.props.maxLength) {
      return false;
    }
    return true;
  }

  validatePattern(input) {
    if (this.props.pattern) {
      const pattern = new RegExp(this.props.pattern);
      return pattern.test(input);
    }
    return true;
  }

  validate = (input) => {
    if (!this.validateLength(input) || !this.validatePattern(input)) {
      return this.props.toggleValidity(this.props.id, false);
    }
    return this.props.toggleValidity(this.props.id, true);
  };

  render() {
    let returnedElement = null;
    if (this.props.beingEdited)
      returnedElement = (
        <input
          id={this.props.id}
          className={this.props.class}
          onChange={(e) => {
            this.props.updateFunc(e, this.props.id);
          }}
          value={this.props.value}
          onBlur={(e) => {
            this.validate(e.target.value);
          }}
        />
      );
    else
      returnedElement = (
        <span className={this.props.class}>{this.props.value}</span>
      );
    return returnedElement;
  }
}
