import GeneralInfo from "./components/GeneralInfo";
import EducationInfo from "./components/EducationInfo";
import uniqid from "uniqid";

function App() {
  function updateInputs() {
    let inputs = { ...this.state.inputs };
    Object.values(inputs).forEach((input) => {
      input.value = input.inputValue;
    });
    this.setState({ inputs: inputs });
  }

  function updateValue(e, id) {
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

  function toggleInputValidity(id, newState) {
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

  const inputs = {
    generalInputs: {
      name: {
        value: "",
        inputValue: "",
        id: uniqid(),
        valid: true,
        required: true,
      },
      address: {
        value: "",
        inputValue: "",
        id: uniqid(),
        valid: true,
        required: true,
      },
      email: {
        value: "",
        inputValue: "",
        id: uniqid(),
        valid: true,
        required: true,
      },
      phone: {
        value: "",
        inputValue: "",
        id: uniqid(),
        valid: true,
        required: true,
      },
    },
    educationInputs: {
      degree: {
        value: "",
        inputValue: "",
        id: uniqid(),
      },
      school: {
        value: "",
        inputValue: "",
        id: uniqid(),
      },
      minors: {
        value: "",
        inputValue: "",
        id: uniqid(),
      },
      gradDate: {
        value: "",
        inputValue: "",
        id: uniqid(),
      },
    },
  };
  return (
    <div className="App">
      <GeneralInfo></GeneralInfo>
      <EducationInfo></EducationInfo>
    </div>
  );
}

export default App;
