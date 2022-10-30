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
          editing={this.state.editing}
          htmlFor={input.id}
          edit={input.edit}
          noEdit={input.noEdit}
          key={`${input.id} label`}
        />
        <TextField
          class={input.name}
          value={input.inputValue}
          id={input.id}
          beingEdited={this.state.editing}
          loop={this.props.loop}
          key={`${input.id} field`}
        ></TextField>
      </div>
    ));
  }

  updateInputValues() {
    this.props.loop((input) => {
      input.value = input.inputValue;
    });
  }

  submitButtonHandling = (e) => {
    e.preventDefault();
    this.updateInputValues();
    this.setState({ editing: false });
  };

  editButtonHandling = (e) => {
    e.preventDefault();
    this.setState({ editing: true });
  };

  render() {
    return (
      <div className="generalInfo">
        {this.getInputHTML()}

        <EditButton
          editing={this.state.editing}
          editFunc={this.editButtonHandling}
          submitFunc={this.submitButtonHandling}
        />
      </div>
    );
  }
}
