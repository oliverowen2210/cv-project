import React from "react";

import TextField from "./TextField";
import ToggleButton from "./ToggleButton";
import DeleteButton from "./DeleteButton";
import EditableLabel from "./EditableLabel";
export default class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: this.props.editing,
      inputs: this.props.inputs,
    };
    this.updateStateFunc = (state) => {
      this.props.updateStateFunc(this.props.group, this.props.id, state);
    };
  }

  getInputHTML() {
    return this.state.inputs.map((input) => {
      if (!input.value && !this.props.editing) return null;
      else
        return (
          <div
            className={`inputGroup ${input.name}Input`}
            key={`${input.id} wrapper`}
          >
            <EditableLabel
              //* this is because useState is async, so checking for
              /* validity status after submitting doesn't work. will revisit once
        i learn how to use hooks*/
              beingEdited={this.allInputsValid() ? this.props.editing : true}
              htmlFor={input.id}
              edit={input.edit}
              noEdit={input.noEdit}
              key={`${input.id} label`}
              required={input.required}
            />
            <TextField
              input={input}
              beingEdited={this.allInputsValid() ? this.props.editing : true}
              update={this.updateInputValue}
              validate={this.validate}
              key={`${input.id} field`}
            ></TextField>
          </div>
        );
    });
  }

  updateInputValue = (id, newValue) => {
    this.loopThroughInputs(
      (input, newVal) => {
        input.inputValue = newVal;
      },
      newValue,
      id
    );
  };

  toggleValidity = (id, newValue) => {
    this.loopThroughInputs(
      (input, newVal) => {
        input.valid = newVal;
      },
      newValue,
      id
    );
  };

  allInputsValid = () => {
    return !this.state.inputs.some((input) => {
      return input.valid === false;
    });
  };

  loopThroughInputs = (func, value = null, id = null) => {
    let inputs = [...this.state.inputs];
    for (let input of inputs) {
      if (id && input.id === id) {
        func(input, value, inputs);
        this.setState({ inputs: inputs });
        return true;
      } else if (!id) func(input, value);
    }
    this.setState({ inputs: inputs });
    return true;
  };

  validateRequired(inputValue) {
    if (!inputValue) {
      return false;
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
      !this.validateRequired(inputValue)
    ) {
      return this.toggleValidity(input.id, false);
    }
    return this.toggleValidity(input.id, true);
  };

  updateValues() {
    this.loopThroughInputs((input) => {
      input.value = input.inputValue;
    });
  }

  deleteButtonHandling = (e) => {
    e.preventDefault();
    this.props.deleteFunc();
  };

  submitButtonHandling = (e) => {
    e.preventDefault();
    this.state.inputs.forEach((input) => {
      this.validate(input, input.inputValue);
    });
    if (!this.allInputsValid)
      throw new Error("One or more input fields are invalid!");
    this.updateValues();
    this.updateStateFunc(false);
    setTimeout(() => {
      if (!this.allInputsValid()) this.updateStateFunc(true);
    }, 5);
  };

  editButtonHandling = (e) => {
    e.preventDefault();
    this.updateStateFunc(true);
  };

  render() {
    return (
      <form className={this.props.class}>
        {this.getInputHTML()}
        {!this.props.noButtons ? (
          <ToggleButton
            toggled={this.allInputsValid() ? this.props.editing : true}
            untoggledFunc={this.editButtonHandling}
            toggledFunc={this.submitButtonHandling}
            untoggledText="✎"
            toggledText="✓"
            untoggledClassName="editButton"
            toggledClassName="submitButton"
          />
        ) : null}
        {this.props.deletable && !this.props.noButtons ? (
          <DeleteButton deleteFunc={this.deleteButtonHandling} />
        ) : null}
      </form>
    );
  }
}
