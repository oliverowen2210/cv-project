import React from "react";

export default class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let returnedElement = null;
    const input = this.props.input;
    if (this.props.beingEdited)
      returnedElement = (
        <input
          value={input.inputValue}
          id={input.id}
          className={!input.valid ? `${input.name} invalid` : input.name}
          onChange={(e) => {
            this.props.update(input.id, e.target.value);
          }}
          onBlur={(e) => {
            this.props.validate(input, e.target.value);
          }}
        />
      );
    else
      returnedElement = (
        <span className={!input.valid ? `${input.name} invalid` : input.name}>
          {input.value}
        </span>
      );
    return returnedElement;
  }
}
