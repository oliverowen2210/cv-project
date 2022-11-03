import { useState } from "react";
import uniqid from "uniqid";

import Info from "./components/Info";
import NewInfoButton from "./components/NewInfoButton";
import createInput from "./inputObj";
import ToggleButton from "./components/ToggleButton";

function App() {
  let [showingButtons, setShowingButtons] = useState(true);
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
    skills: [],
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
          noButtons={!showingButtons}
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
        createInput({ name: "name", editText: "Name" }),
        createInput({
          name: "address",
          editText: "Address",
          noEditText: "Address",
        }),
        createInput({
          name: "phone",
          editText: "Phone Number",
          noEditText: "Phone Number",
          pattern: "^[\\d*#+]+$",
        }),
        createInput({ name: "email", editText: "Email", noEditText: "Email" }),
        createInput({
          name: "linkedin",
          editText: "LinkedIn",
          noEditText: "LinkedIn",
        }),
      ];
    } else if (type === "education") {
      return [
        createInput({ name: "degree", editText: "Degree" }),
        createInput({ name: "school", editText: 'School"' }),
        createInput({
          name: "gradDate",
          editText: "Graduation Date",
          type: "date",
        }),
      ];
    } else if (type === "work") {
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
    } else if (type === "skills") {
      return [createInput({ name: "skill", editText: "Skill" })];
    }
  }
  let toggleButtonVisibility = (e) => {
    e.preventDefault();
    setShowingButtons(!showingButtons);
  };

  return (
    <div className="App">
      <ToggleButton
        toggled={showingButtons}
        toggledFunc={(e) => {
          toggleButtonVisibility(e);
        }}
        toggledText="Hide Buttons"
        untoggledText="Show Buttons"
        toggledClassName="hideButton"
      />
      {mapInfos(infoGroups.general)}
      <main>
        <div className="infoWrapper">
          <div className="infoHeader">
            <h2>Skills</h2>
            {showingButtons ? (
              <NewInfoButton
                infoArray={infoGroups.skills}
                infoInputs={getInputs("skills")}
                infoClass="skillsInfo"
                infoDeleteFunc={deleteInfo}
                infoDeletable={true}
                limit={10}
                infoType={"skills"}
                setFunc={updateInfoArray}
                editing={groupBeingEdited(infoGroups.skills)}
              />
            ) : null}
          </div>
          <div className="infoGroup">{mapInfos(infoGroups.skills)}</div>
        </div>
        <div className="infoWrapper">
          <div className="infoHeader">
            <h2>Experience</h2>
            {showingButtons ? (
              <NewInfoButton
                infoArray={infoGroups.work}
                infoInputs={getInputs("work")}
                infoClass="workInfo"
                infoDeleteFunc={deleteInfo}
                infoDeletable={true}
                limit={6}
                infoType={"work"}
                setFunc={updateInfoArray}
                editing={groupBeingEdited(infoGroups.work)}
              />
            ) : null}
          </div>
          <div className="infoGroup">{mapInfos(infoGroups.work)}</div>
        </div>
        <div className="infoWrapper">
          <div className="infoHeader">
            <h2>Education</h2>
            {showingButtons ? (
              <NewInfoButton
                infoArray={infoGroups.education}
                infoInputs={getInputs("education")}
                infoClass="educationInfo"
                infoDeleteFunc={deleteInfo}
                infoDeletable={true}
                limit={6}
                infoType={"education"}
                setFunc={updateInfoArray}
                editing={groupBeingEdited(infoGroups.education)}
              />
            ) : null}
          </div>
          <div className="infoGroup">{mapInfos(infoGroups.education)}</div>
        </div>
      </main>
    </div>
  );
}

export default App;
