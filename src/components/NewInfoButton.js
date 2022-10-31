import React from "react";
import Info from "./Info";
import uniqid from "uniqid";

export default class NewInfoButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick(e) {
    e.preventDefault();
    let newInfo = (
      <Info
        inputs={this.props.infoInputs}
        class={this.props.infoClass}
        key={uniqid()}
      />
    );
    this.props.setFunc(this.props.infoArray.concat(newInfo));
  }

  render() {
    if (this.props.infoArray.length <= this.props.limit)
      return (
        <button
          className={this.props.className}
          onClick={(e) => {
            this.handleClick(e);
          }}
        >
          +
        </button>
      );
  }
}
