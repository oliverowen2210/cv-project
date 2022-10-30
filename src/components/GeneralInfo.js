import React from "react";
import uniqid from "uniqid";

import { updateInputs, updateValue } from "../utils";
import TextField from "./TextField";

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
        },
        address: {
          value: "",
          inputValue: "",
          id: uniqid(),
        },
        email: {
          value: "",
          inputValue: "",
          id: uniqid(),
        },
        phone: {
          value: "",
          inputValue: "",
          id: uniqid(),
        },
      },
    };
    this.updateInputs = updateInputs.bind(this);
    this.updateValue = updateValue.bind(this);
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
          {this.state.editing ? <label htmlFor={name.id}>Name: </label> : <></>}
          <TextField
            class="name"
            value={name.inputValue}
            id={name.id}
            beingEdited={this.state.editing}
            updateFunc={this.updateValue}
          ></TextField>
        </div>
        <div className="inputGroup addressInput">
          {this.state.editing ? (
            <label htmlFor={address.id}>Address</label>
          ) : (
            <span>🏠</span>
          )}
          <TextField
            class="address"
            value={address.inputValue}
            id={address.id}
            beingEdited={this.state.editing}
            updateFunc={this.updateValue}
          ></TextField>
        </div>
        <div className="inputGroup emailInput">
          {this.state.editing ? (
            <label htmlFor={email.id}>Email</label>
          ) : (
            <span>📧</span>
          )}
          <TextField
            class="email"
            value={email.inputValue}
            id={email.id}
            beingEdited={this.state.editing}
            updateFunc={this.updateValue}
          ></TextField>
        </div>
        <div className="inputGroup phoneInput">
          {this.state.editing ? (
            <label htmlFor={phone.id}>Phone Number</label>
          ) : (
            <span>📞</span>
          )}
          <TextField
            class="phone"
            value={phone.inputValue}
            id={phone.id}
            beingEdited={this.state.editing}
            updateFunc={this.updateValue}
          ></TextField>
        </div>
        {this.state.editing ? (
          <button
            className="submitButton"
            onClick={(e) => {
              this.submitButtonHandling(e);
            }}
          >
            ✓
          </button>
        ) : (
          <button
            className="editButton"
            onClick={(e) => {
              this.editButtonHandling(e);
            }}
          >
            ✎
          </button>
        )}
      </form>
    );
  }
}
