import React from "react";

export default class EditButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return this.props.beingEdited ? (
      <button
        className="submitButton"
        onClick={(e) => {
          this.props.submitFunc(e);
        }}
      >
        ✓
      </button>
    ) : (
      <button
        className="editButton"
        onClick={(e) => {
          this.props.editFunc(e);
        }}
      >
        ✎
      </button>
    );
  }
}
