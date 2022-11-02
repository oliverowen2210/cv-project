import React from "react";

export default class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      required: false,
    };
  }

  render() {
    let returnedElement = null;
    const input = this.props.input;
    if (this.props.beingEdited) {
      if (this.props.input.type === "textarea") {
        returnedElement = (
          <textarea
            value={input.inputValue}
            id={input.id}
            className={
              !input.valid
                ? `${input.name} textField invalid edit`
                : `${input.name} textField edit`
            }
            onChange={(e) => {
              this.props.update(input.id, e.target.value);
            }}
            onBlur={(e) => {
              this.props.validate(input, e.target.value);
            }}
          />
        );
      } else
        returnedElement = (
          <input
            value={input.inputValue}
            id={input.id}
            required={this.state.required}
            className={
              !input.valid
                ? `${input.name} textField invalid edit`
                : `${input.name} textField edit`
            }
            onChange={(e) => {
              this.props.update(input.id, e.target.value);
            }}
            onBlur={(e) => {
              this.setState({ required: true });
              this.props.validate(input, e.target.value);
            }}
            type={
              this.props.input.type === "startDate"
                ? "date"
                : this.props.input.type
            }
          />
        );
    } else
      returnedElement = (
        <span
          className={
            !input.valid
              ? `${input.name} textField invalid noEdit`
              : `${input.name} textField noEdit`
          }
        >
          {input.type === "startDate" ? `${input.value} -` : input.value}
          {}
        </span>
      );
    return returnedElement;
  }
}
