import { useState } from "react";
import TextField from "./TextField";
import ToggleButton from "./ToggleButton";
import DeleteButton from "./DeleteButton";
import EditableLabel from "./EditableLabel";
export default function Info(props) {
  let updateStateFunc = (state) => {
    props.updateStateFunc(props.group, props.id, state);
  };

  let [inputs, setInputs] = useState(props.initialInputs);

  let getInputHTML = () => {
    return inputs.map((input) => {
      if (!input.value && !props.editing) return null;
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
              beingEdited={allInputsValid() ? props.editing : true}
              htmlFor={input.id}
              edit={input.edit}
              noEdit={input.noEdit}
              key={`${input.id} label`}
              required={input.required}
            />
            <TextField
              input={input}
              beingEdited={allInputsValid() ? props.editing : true}
              update={updateInputValue}
              validate={validate}
              key={`${input.id} field`}
            ></TextField>
          </div>
        );
    });
  };

  let updateInputValue = (id, newValue) => {
    loopThroughInputs(
      (input, newVal) => {
        input.inputValue = newVal;
      },
      newValue,
      id
    );
  };

  let toggleValidity = (id, newValue) => {
    loopThroughInputs(
      (input, newVal) => {
        input.valid = newVal;
      },
      newValue,
      id
    );
  };

  let allInputsValid = () => {
    return !inputs.some((input) => {
      return input.valid === false;
    });
  };

  let loopThroughInputs = (func, value = null, id = null) => {
    let clonedInputs = [...inputs];
    for (let input of clonedInputs) {
      if (id && input.id === id) {
        func(input, value, inputs);
        setInputs(clonedInputs);
        return true;
      } else if (!id) func(input, value);
    }
    return true;
  };

  let validateRequired = (inputValue) => {
    if (!inputValue) {
      return false;
    }
    return true;
  };

  let validateLength = (input, inputValue) => {
    if (input.minLength && inputValue.length < input.minLength) {
      return false;
    } else if (input.maxLength && inputValue.length > input.maxLength) {
      return false;
    }
    return true;
  };

  let validatePattern = (input, inputValue) => {
    if (input.pattern) {
      const pattern = new RegExp(input.pattern);
      return pattern.test(inputValue);
    }
    return true;
  };

  let validate = (input, inputValue) => {
    if (
      !validateLength(input, inputValue) ||
      !validatePattern(input, inputValue) ||
      !validateRequired(inputValue)
    ) {
      return toggleValidity(input.id, false);
    }
    return toggleValidity(input.id, true);
  };

  let updateValues = () => {
    loopThroughInputs((input) => {
      input.value = input.inputValue;
    });
  };

  let deleteButtonHandling = (e) => {
    e.preventDefault();
    props.deleteFunc();
  };

  let submitButtonHandling = (e) => {
    e.preventDefault();
    inputs.forEach((input) => {
      validate(input, input.inputValue);
    });
    if (!allInputsValid)
      throw new Error("One or more input fields are invalid!");
    updateValues();
    updateStateFunc(false);
    setTimeout(() => {
      if (!allInputsValid()) updateStateFunc(true);
    }, 5);
  };

  let editButtonHandling = (e) => {
    e.preventDefault();
    updateStateFunc(true);
  };
  return (
    <form className={props.class}>
      {getInputHTML()}
      {!props.noButtons ? (
        <ToggleButton
          toggled={allInputsValid() ? props.editing : true}
          untoggledFunc={editButtonHandling}
          toggledFunc={submitButtonHandling}
          untoggledText="✎"
          toggledText="✓"
          untoggledClassName="editButton"
          toggledClassName="submitButton"
        />
      ) : null}
      {props.deletable && !props.noButtons ? (
        <DeleteButton deleteFunc={deleteButtonHandling} />
      ) : null}
    </form>
  );
}
