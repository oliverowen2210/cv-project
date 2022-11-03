import React from "react";

export default class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return this.props.toggled ? (
      <button
        className={this.props.toggledClassName}
        onClick={(e) => {
          this.props.toggledFunc(e);
        }}
      >
        {this.props.toggledText}
      </button>
    ) : (
      <button
        className={
          this.props.untoggledClassName
            ? this.props.untoggledClassName
            : this.props.toggledClassName
        }
        onClick={(e) => {
          this.props.untoggledFunc
            ? this.props.untoggledFunc(e)
            : this.props.toggledFunc(e);
        }}
      >
        {this.props.untoggledText}
      </button>
    );
  }
}
