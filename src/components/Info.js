import React from "react";

import TextField from "./TextField";
import EditButton from "./EditButton";
import EditableLabel from "./EditableLabel";
export default class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: true,
    };
  }

  getInputHTML() {
    return this.props.inputs.map((input) => (
      <div
        className={`inputGroup ${input.name}Input`}
        key={`${input.id} wrapper`}
      >
        <EditableLabel
          //* this is because useState is async, so checking for
          /* validity status after submitting doesn't work. will revisit once
        i learn how to use hooks*/
          beingEdited={this.props.allInputsValid ? this.state.editing : true}
          htmlFor={input.id}
          edit={input.edit}
          noEdit={input.noEdit}
          key={`${input.id} label`}
          required={input.required}
        />
        <TextField
          input={input}
          beingEdited={this.props.allInputsValid ? this.state.editing : true}
          update={this.props.update}
          validate={this.validate}
          key={`${input.id} field`}
        ></TextField>
      </div>
    ));
  }

  validateRequired(input, inputValue) {
    if (input.required) {
      if (!inputValue) {
        return false;
      }
    }
    return true;
  }

  validateLength(input, inputValue) {
    if (input.minLength && inputValue.length < input.minLength) {
      return false;
    } else if (input.maxLength && inputValue.length > input.maxLength) {
      return false;
    }
    return true;
  }

  validatePattern(input, inputValue) {
    if (input.pattern) {
      const pattern = new RegExp(input.pattern);
      return pattern.test(inputValue);
    }
    return true;
  }

  validate = (input, inputValue) => {
    if (
      !this.validateLength(input, inputValue) ||
      !this.validatePattern(input, inputValue) ||
      !this.validateRequired(input, inputValue)
    ) {
      return this.props.toggle(input.id, false);
    }
    return this.props.toggle(input.id, true);
  };

  updateValues() {
    this.props.loop((input) => {
      input.value = input.inputValue;
    });
  }

  submitButtonHandling = (e) => {
    e.preventDefault();
    this.props.inputs.forEach((input) => {
      this.validate(input, input.inputValue);
    });
    if (!this.props.allInputsValid)
      throw new Error("One or more input fields are invalid!");
    this.updateValues();
    this.setState({ editing: false });
    setTimeout(() => {
      if (!this.props.allInputsValid) this.setState({ editing: true });
    }, 1000);
  };

  editButtonHandling = (e) => {
    e.preventDefault();
    this.setState({ editing: true });
  };

  render() {
    return (
      <div className={this.props.class}>
        {this.getInputHTML()}

        <EditButton
          beingEdited={this.props.allInputsValid ? this.state.editing : true}
          editFunc={this.editButtonHandling}
          submitFunc={this.submitButtonHandling}
        />
      </div>
    );
  }
}
