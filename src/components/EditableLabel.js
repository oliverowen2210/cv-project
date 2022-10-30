import React from "react";

export default class EditableLabel extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return this.props.editing ? (
      <label htmlFor={this.props.htmlFor}>{this.props.edit}</label>
    ) : (
      <span>{this.props.noEdit}</span>
    );
  }
}
