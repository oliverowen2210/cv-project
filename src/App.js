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
        edit: "Name",
        valid: true,
        required: true,
        minLength: 4,
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
        edit: "Degree",
        valid: true,
        required: true,
      },
      {
        name: "school",
        value: "",
        inputValue: "",
        id: uniqid(),
        edit: "School",
        valid: true,
        required: true,
      },
      {
        name: "minors",
        value: "",
        inputValue: "",
        id: uniqid(),
        edit: "Minors",
        valid: true,
      },
      {
        name: "gradDate",
        value: "",
        inputValue: "",
        id: uniqid(),
        edit: "Graduation Date",
        valid: true,
        required: true,
      },
    ],
  });

  function updateInputValue(id, newValue) {
    loopThroughInputs(
      (input, newVal) => {
        input.inputValue = newVal;
      },
      newValue,
      id
    );
  }

  function toggleValidity(id, newValue) {
    loopThroughInputs(
      (input, newVal) => {
        input.valid = newVal;
      },
      newValue,
      id
    );
  }

  function checkValidity(inputGroup) {
    return !inputGroup.some((input) => {
      return input.valid === false;
    });
  }

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
      <Info
        inputs={inputs.generalInputs}
        loop={loopThroughInputs}
        class="generalInfo"
        allInputsValid={checkValidity(inputs.generalInputs)}
        update={updateInputValue}
        toggle={toggleValidity}
      />
      <div className="workInfoWrapper">
        {/**button that lets you add new Infos with startdate, enddate,
         * title and company inputs. startdate and enddate could be linked
         * for textfield validation.*/}
      </div>
      <div className="educationInfoWrapper">
        <h2>Education</h2>
        <Info
          inputs={inputs.educationInputs}
          loop={loopThroughInputs}
          class="educationInfo"
          allInputsValid={checkValidity(inputs.educationInputs)}
          update={updateInputValue}
          toggle={toggleValidity}
        />
      </div>
    </div>
  );
}

export default App;
