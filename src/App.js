import { useState } from "react";
import uniqid from "uniqid";

import Info from "./components/Info";
import NewInfoButton from "./components/NewInfoButton";

function App() {
  let [generalInfos, setGeneralInfos] = useState([
    {
      inputs: getInputs("general"),
      class: "generalInfo",
      key: uniqid(),
    },
  ]);
  let [educationInfos, setEducationInfos] = useState([
    {
      inputs: getInputs("education"),
      class: "educationInfo",
      key: uniqid(),
      deletable: true,
    },
  ]);
  let [workInfos, setWorkInfos] = useState([
    {
      inputs: getInputs("work"),
      class: "workInfo",
      key: uniqid(),
      deletable: true,
    },
  ]);

  let infos = [educationInfos, workInfos];

  function mapInfos(infoGroup) {
    return infoGroup.map((info) => {
      return (
        <Info
          inputs={info.inputs}
          class={info.class}
          key={info.key}
          deleteFunc={() => {
            deleteInfo(info.key);
          }}
          deletable={info.deletable}
        />
      );
    });
  }

  function deleteInfo(key) {
    for (let infoGroup of infos) {
      for (let info of infoGroup) {
        if (info.key === key) {
          infoGroup.splice(infoGroup.indexOf(info), 1);
          setEducationInfos([...educationInfos]);
        }
      }
    }
  }

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
    } else if (type === "work")
      return [
        {
          name: "workTitle",
          value: "",
          inputValue: "",
          id: uniqid(),
          edit: "Position Title",
          valid: true,
          required: true,
        },
        {
          name: "companyName",
          value: "",
          inputValue: "",
          id: uniqid(),
          edit: "Company",
          valid: true,
          required: true,
        },
        {
          name: "workDates",
          value: "",
          inputValue: "",
          id: uniqid(),
          edit: "Employment Dates",
          valid: true,
          required: true,
        },
        {
          name: "jobDesc",
          value: "",
          inputValue: "",
          id: uniqid(),
          edit: "Job description",
          valid: true,
          required: false,
          textarea: true,
        },
      ];
  }

  return (
    <div className="App">
      {mapInfos(generalInfos)}
      <main>
        <div className="infoWrapper">
          <h2>Experience</h2>
          <NewInfoButton
            infoArray={workInfos}
            setFunc={setWorkInfos}
            infoInputs={getInputs("work")}
            infoClass="workInfo"
            className="newInfoButton"
            infoDeleteFunc={deleteInfo}
            infoDeletable={true}
            limit={3}
          />
          <div className="infoGroup">{mapInfos(workInfos)}</div>
        </div>
        <div className="infoWrapper">
          <h2>Education</h2>
          <NewInfoButton
            infoArray={educationInfos}
            setFunc={setEducationInfos}
            infoInputs={getInputs("education")}
            infoClass="educationInfo"
            className="newInfoButton"
            infoDeleteFunc={deleteInfo}
            infoDeletable={true}
            limit={2}
          />
          <div className="infoGroup">{mapInfos(educationInfos)}</div>
        </div>
      </main>
    </div>
  );
}

export default App;
