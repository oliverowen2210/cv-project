import { useState } from "react";

export default function TextField(props) {
  let [required, setRequired] = useState(false);

  let returnedElement = null;
  const input = props.input;
  if (props.beingEdited) {
    if (props.input.type === "textarea") {
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
            props.update(input.id, e.target.value);
          }}
          onBlur={(e) => {
            props.validate(input, e.target.value);
          }}
        />
      );
    } else
      returnedElement = (
        <input
          value={input.inputValue}
          id={input.id}
          required={required}
          className={
            !input.valid
              ? `${input.name} textField invalid edit`
              : `${input.name} textField edit`
          }
          onChange={(e) => {
            props.update(input.id, e.target.value);
          }}
          onBlur={(e) => {
            setRequired(true);
            props.validate(input, e.target.value);
          }}
          type={props.input.type === "startDate" ? "date" : props.input.type}
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
