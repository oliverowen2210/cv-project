export function updateInputs() {
  let inputs = { ...this.state.inputs };
  Object.values(inputs).forEach((input) => {
    input.value = input.inputValue;
  });
  this.setState({ inputs: inputs });
}

export function updateValue(e, id) {
  let inputs = { ...this.state.inputs };
  Object.values(inputs).some((input) => {
    if (input.id === id) {
      input.inputValue = e.target.value;
      this.setState({ inputs: inputs });
      return true;
    }
    return false;
  });
}

export function toggleInputValidity(id, newState) {
  let inputs = { ...this.state.inputs };
  Object.values(inputs).some((input) => {
    if (input.id === id) {
      input.valid = newState;
      this.setState({ inputs: inputs });
      return true;
    }
    return false;
  });
}
