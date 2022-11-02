import React from "react";
import uniqid from "uniqid";

export default class NewInfoButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick(e) {
    e.preventDefault();
    if (this.props.editing) return false;
    let newInfo = {
      inputs: this.props.infoInputs,
      class: this.props.infoClass,
      key: uniqid(),
      deleteFunc: this.props.infoDeleteFunc(this.key),
      deletable: this.props.infoDeletable,
      editing: true,
    };
    let newArray = this.props.infoArray.concat(newInfo);
    this.props.setFunc(this.props.infoType, newArray);
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
