import GeneralInfo from "./components/GeneralInfo";
import EducationInfo from "./components/EducationInfo";
import uniqid from "uniqid";

function App() {
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
