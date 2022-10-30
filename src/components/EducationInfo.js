import React from "react";
import uniqid from "uniqid";

import { updateInputs, updateValue } from "../utils";
import TextField from "./TextField";

export default class EducationalExperience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.updateInputs = updateInputs.bind(this);
    this.updateValue = updateValue.bind(this);
  }
  render() {
    return <></>;
  }
}
