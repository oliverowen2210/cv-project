import React from "react";

export default class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let returnedElement = null;
    if (this.props.beingEdited)
      returnedElement = (
        <input
          id={this.props.id}
          className={this.props.class}
          onChange={(e) => {
            this.props.updateFunc(e, this.props.id);
          }}
          value={this.props.value}
        />
      );
    else
      returnedElement = (
        <span className={this.props.class}>{this.props.value}</span>
      );
    return returnedElement;
  }
}
