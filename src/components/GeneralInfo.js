import React from "react";
import uniqid from "uniqid";

export default class GeneralInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {
        name: {
          value: "",
          editing: false,
          id: uniqid(),
        },
        address: {
          value: "",
          editing: false,
          id: uniqid(),
        },
        email: {
          value: "",
          editing: false,
          id: uniqid(),
        },
        phone: {
          value: "",
          editing: false,
          id: uniqid(),
        },
      },
    };
  }
  render() {
    return (
      <div>
        <h1 className="name">{this.state.inputs.name.value}Placeholder Name</h1>
        <div>
          <span className="address">🏠: {this.state.inputs.address.value}</span>
          <span className="email">📧: {this.state.inputs.email.value}</span>
          <span className="phone">📞: {this.state.inputs.phone.value}</span>
        </div>
      </div>
    );
  }
}
