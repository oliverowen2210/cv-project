import React from "react";

export default class DeleteButton extends React.Component {
  render() {
    return (
      <button
        onClick={(e) => {
          this.props.deleteFunc(e);
        }}
        className="deleteButton"
      >
        x
      </button>
    );
  }
}
