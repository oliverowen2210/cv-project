import React from "react";

export default class EditButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return this.props.editing ? (
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