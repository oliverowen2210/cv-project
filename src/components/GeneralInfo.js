import React from "react";
import uniqid from "uniqid";

import "../styles/GeneralInfo.css";
import { updateInputs, updateValue, toggleInputValidity } from "../utils";
import TextField from "./TextField";
import EditButton from "./EditButton";
import EditableLabel from "./EditableLabel";

export default class GeneralInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: true,
      inputs: {
        name: {
          value: "",
          inputValue: "",
          id: uniqid(),
          valid: true,
          required: true,
        },
        address: {
          value: "",
          inputValue: "",
          id: uniqid(),
          valid: true,
          required: true,
        },
        email: {
          value: "",
          inputValue: "",
          id: uniqid(),
          valid: true,
          required: true,
        },
        phone: {
          value: "",
          inputValue: "",
          id: uniqid(),
          valid: true,
          required: true,
        },
      },
    };
    this.updateInputs = updateInputs.bind(this);
    this.updateValue = updateValue.bind(this);
    this.toggleInputValidity = toggleInputValidity.bind(this);
  }

  submitButtonHandling = (e) => {
    e.preventDefault();
    this.updateInputs();
    this.setState({ editing: false });
  };

  editButtonHandling = (e) => {
    e.preventDefault();
    this.setState({ editing: true });
  };

  render() {
    const { name, address, email, phone } = this.state.inputs;
    return (
      <form className="generalInfo">
        <div className="inputGroup nameInput">
          <EditableLabel
            editing={this.state.editing}
            htmlFor={name.id}
            edit="Name: "
          />
          <TextField
            class="name"
            value={name.inputValue}
            id={name.id}
            beingEdited={this.state.editing}
            updateFunc={this.updateValue}
            toggleValidity={this.toggleInputValidity}
          ></TextField>
        </div>
        <div className="inputGroup addressInput">
          <EditableLabel
            editing={this.state.editing}
            htmlFor={address.id}
            edit="Address"
            noEdit="🏠"
          />
          <TextField
            class="address"
            value={address.inputValue}
            id={address.id}
            beingEdited={this.state.editing}
            updateFunc={this.updateValue}
            toggleValidity={this.toggleInputValidity}
          ></TextField>
        </div>
        <div className="inputGroup emailInput">
          <EditableLabel
            editing={this.state.editing}
            htmlFor={email.id}
            edit="Email"
            noEdit="📧"
          />
          <TextField
            class="email"
            value={email.inputValue}
            id={email.id}
            beingEdited={this.state.editing}
            updateFunc={this.updateValue}
            toggleValidity={this.toggleInputValidity}
          ></TextField>
        </div>
        <div className="inputGroup phoneInput">
          <EditableLabel
            editing={this.state.editing}
            htmlFor={phone.id}
            edit="Phone Number"
            noEdit="📞"
          />
          <TextField
            class="phone"
            value={phone.inputValue}
            id={phone.id}
            beingEdited={this.state.editing}
            updateFunc={this.updateValue}
            toggleValidity={this.toggleInputValidity}
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
