import React from "react";
import uniqid from "uniqid";

import "../styles/EducationInfo.css";
import { updateInputs, updateValue, toggleInputValidity } from "../utils";
import TextField from "./TextField";
import EditButton from "./EditButton";
import EditableLabel from "./EditableLabel";

export default class EducationalInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: true,
      inputs: {
        degree: {
          value: "",
          inputValue: "",
          id: uniqid(),
        },
        school: {
          value: "",
          inputValue: "",
          id: uniqid(),
        },
        minors: {
          value: "",
          inputValue: "",
          id: uniqid(),
        },
        gradDate: {
          value: "",
          inputValue: "",
          id: uniqid(),
        },
      },
    };

    this.updateInputs = updateInputs.bind(this);
    this.updateValue = updateValue.bind(this);
    this.toggleInputValidity = toggleInputValidity.bind(this);
  }

  submitButtonHandling = (e) => {
    e.preventDefault();
    if (!this.state.inputs.every((input) => input.valid === true)) return false;
    this.updateInputs();
    this.setState({ editing: false });
  };

  editButtonHandling = (e) => {
    e.preventDefault();
    this.setState({ editing: true });
  };

  render() {
    const { school, gradDate, degree, minors } = this.state.inputs;
    return (
      <form className="educationInfo">
        <h2>Education</h2>
        <div className="inputGroup degreeInput">
          {this.state.editing ? (
            <label htmlFor={degree.id}>Degree: </label>
          ) : (
            <></>
          )}
          <TextField
            class="name"
            value={degree.inputValue}
            id={degree.id}
            beingEdited={this.state.editing}
            updateFunc={this.updateValue}
          ></TextField>
        </div>
        <div className="inputGroup schoolInput">
          <EditableLabel
            htmlFor={school.id}
            editing={this.state.editing}
            edit="School: "
          />
          <TextField
            class="name"
            value={school.inputValue}
            id={school.id}
            beingEdited={this.state.editing}
            updateFunc={this.updateValue}
          ></TextField>
        </div>
        <div className="inputGroup minorsInput">
          {this.state.editing ? (
            <label htmlFor={minors.id}>Minors: </label>
          ) : (
            <></>
          )}
          <TextField
            class="name"
            value={minors.inputValue}
            id={minors.id}
            beingEdited={this.state.editing}
            updateFunc={this.updateValue}
          ></TextField>
        </div>
        <div className="inputGroup gradDateInput">
          {this.state.editing ? (
            <label htmlFor={minors.id}>Graduation date: </label>
          ) : (
            <></>
          )}
          <TextField
            class="name"
            value={gradDate.inputValue}
            id={gradDate.id}
            beingEdited={this.state.editing}
            updateFunc={this.updateValue}
          ></TextField>
        </div>
        <EditButton
          editing={this.state.editing}
          editFunc={this.editButtonHandling}
          submitFunc={this.submitButtonHandling}
        />
      </form>
    );
  }
}
