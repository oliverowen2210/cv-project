import { useState } from "react";

import Info from "./components/Info";
import uniqid from "uniqid";

function App() {
  function getInputs(type) {
    if (type === "general") {
      return [
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
          pattern: "^[\\d*#+]+$",
        },
      ];
    } else if (type === "education") {
      return [
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
          name: "gradDate",
          value: "",
          inputValue: "",
          id: uniqid(),
          edit: "Graduation Date/Range",
          valid: true,
          required: true,
        },
      ];
    }
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
        <div className="infoGroup">
          <Info
            inputs={[...inputs.educationInputs]}
            loop={loopThroughInputs}
            class="educationInfo"
            allInputsValid={checkValidity(inputs.educationInputs)}
            update={updateInputValue}
            toggle={toggleValidity}
          />
          <Info
            inputs={[...inputs.educationInputs]}
            loop={loopThroughInputs}
            class="educationInfo"
            allInputsValid={checkValidity(inputs.educationInputs)}
            update={updateInputValue}
            toggle={toggleValidity}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
