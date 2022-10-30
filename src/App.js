import { useState } from "react";

import Info from "./components/Info";
import uniqid from "uniqid";

import "./App.css";

function App() {
  const [inputs, setInputs] = useState({
    generalInputs: [
      {
        name: "name",
        value: "",
        inputValue: "",
        id: uniqid(),
        edit: "Name: ",
        valid: true,
        required: true,
      },
      {
        name: "address",
        value: "",
        inputValue: "",
        id: uniqid(),
        edit: "Address",
        noEdit: "🏠",
        valid: true,
        required: true,
      },
      {
        name: "email",
        value: "",
        inputValue: "",
        id: uniqid(),
        edit: "Email",
        noEdit: "📧",
        valid: true,
        required: true,
      },
      {
        name: "phone",
        value: "",
        inputValue: "",
        id: uniqid(),
        edit: "Phone Number",
        noEdit: "📞",
        valid: true,
        required: true,
      },
    ],
    educationInputs: [
      {
        name: "degree",
        value: "",
        inputValue: "",
        id: uniqid(),
      },
      {
        name: "school",
        value: "",
        inputValue: "",
        id: uniqid(),
      },
      {
        name: "minors",
        value: "",
        inputValue: "",
        id: uniqid(),
      },
      {
        name: "gradDate",
        value: "",
        inputValue: "",
        id: uniqid(),
      },
    ],
  });

  function loopThroughInputs(func, value = null, id = null) {
    let inputGroups = { ...inputs };
    for (let inputGroup in inputGroups) {
      for (let input of inputGroups[inputGroup]) {
        if (id && input.id === id) {
          func(input, value);
          setInputs(inputGroups);
          return true;
        } else if (!id) func(input, value);
      }
    }
    setInputs(inputGroups);
    return true;
  }

  return (
    <div className="App">
      <Info inputs={inputs.generalInputs} loop={loopThroughInputs} />
      <Info inputs={inputs.educationInputs} loop={loopThroughInputs} />
    </div>
  );
}

export default App;
