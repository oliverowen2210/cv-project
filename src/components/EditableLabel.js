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
        className={this.props.required ? `required` : null}
      >
        {this.props.edit}
      </label>
    ) : (
      <span>{this.props.noEdit}</span>
    );
  }
}
