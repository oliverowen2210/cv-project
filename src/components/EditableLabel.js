import React from "react";

export default class EditableLabel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return this.props.beingEdited ? (
      <label
        htmlFor={this.props.htmlFor}
        className={
          this.props.required ? `required infoLabel edit` : "infoLabel edit"
        }
      >
        {this.props.edit}
      </label>
    ) : (
      <span className="infoLabel noEdit">{this.props.noEdit}</span>
    );
  }
}
