import { useState } from "react";
import uniqid from "uniqid";

import Info from "./components/Info";
import NewInfoButton from "./components/NewInfoButton";

function App() {
  let [infoGroups, setInfoGroups] = useState({
    general: [
      {
        inputs: getInputs("general"),
        class: "generalInfo",
        key: uniqid(),
        editing: true,
      },
    ],
    education: [],
    work: [],
  });

  let updateInfoArray = (infoType, updatedArray) => {
    let clonedInfos = { ...infoGroups };
    clonedInfos[infoType] = updatedArray;
    setInfoGroups(clonedInfos);
  };

  function mapInfos(array) {
    return array.map((info) => {
      return (
        <Info
          inputs={info.inputs}
          class={info.class}
          id={info.key}
          key={info.key}
          deleteFunc={() => {
            deleteInfo(info.key);
          }}
          deletable={info.deletable}
          editing={info.editing}
          updateStateFunc={updateEditingState}
          group={array}
        />
      );
    });
  }

  function deleteInfo(key) {
    for (let infoGroup in infoGroups) {
      for (let info of infoGroups[infoGroup]) {
        if (info.key === key) {
          infoGroups[infoGroup].splice(infoGroups[infoGroup].indexOf(info), 1);
          setInfoGroups({ ...infoGroups });
        }
      }
    }
  }

  function groupBeingEdited(group) {
    for (let info of group) {
      if (info.editing === true) return true;
    }
    return false;
  }

  function updateEditingState(group, key, newState) {
    if (newState === true && groupBeingEdited(group)) return false;
    for (let info of group) {
      if (info.key === key) {
        info.editing = newState;
        setInfoGroups({ ...infoGroups });
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
        },
        {
          name: "address",
          value: "",
          inputValue: "",
          id: uniqid(),
          edit: "Address",
          noEdit: "Address",
          valid: true,
        },
        {
          name: "email",
          value: "",
          inputValue: "",
          id: uniqid(),
          edit: "Email",
          noEdit: "Email",
          valid: true,
        },
        {
          name: "phone",
          value: "",
          inputValue: "",
          id: uniqid(),
          edit: "Phone Number",
          noEdit: "Phone Number",
          valid: true,
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
        },
        {
          name: "school",
          value: "",
          inputValue: "",
          id: uniqid(),
          edit: "School",
          valid: true,
        },
        {
          name: "gradDate",
          value: "",
          inputValue: "",
          id: uniqid(),
          edit: "Graduation Date",
          valid: true,
          type: "date",
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
        },
        {
          name: "companyName",
          value: "",
          inputValue: "",
          id: uniqid(),
          edit: "Company",
          valid: true,
        },
        {
          name: "workedFrom",
          value: "",
          inputValue: "",
          id: uniqid(),
          edit: "Employed From",
          valid: true,
          type: "startDate",
        },
        {
          name: "workedTo",
          value: "",
          inputValue: "",
          id: uniqid(),
          edit: "Employed To",
          valid: true,
          type: "date",
        },
        {
          name: "jobDesc",
          value: "",
          inputValue: "",
          id: uniqid(),
          edit: "Job Description",
          valid: true,
          type: "textarea",
        },
      ];
  }

  return (
    <div className="App">
      {mapInfos(infoGroups.general)}
      <main>
        <div className="infoWrapper">
          <div className="infoHeader">
            <h2>Experience</h2>
            <NewInfoButton
              infoArray={infoGroups.work}
              infoInputs={getInputs("work")}
              infoClass="workInfo"
              className="newInfoButton"
              infoDeleteFunc={deleteInfo}
              infoDeletable={true}
              limit={3}
              infoType={"work"}
              setFunc={updateInfoArray}
              editing={groupBeingEdited(infoGroups.work)}
            />
          </div>
          <div className="infoGroup">{mapInfos(infoGroups.work)}</div>
        </div>
        <div className="infoWrapper">
          <div className="infoHeader">
            <h2>Education</h2>
            <NewInfoButton
              infoArray={infoGroups.education}
              infoInputs={getInputs("education")}
              infoClass="educationInfo"
              className="newInfoButton"
              infoDeleteFunc={deleteInfo}
              infoDeletable={true}
              limit={2}
              infoType={"education"}
              setFunc={updateInfoArray}
              editing={groupBeingEdited(infoGroups.education)}
            />
          </div>
          <div className="infoGroup">{mapInfos(infoGroups.education)}</div>
        </div>
      </main>
    </div>
  );
}

export default App;
