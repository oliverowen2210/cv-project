import uniqid from "uniqid";

export default function NewInfoButton(props) {
  let handleClick = (e) => {
    e.preventDefault();
    if (props.editing) return false;
    let newInfoKey = uniqid();
    let newInfo = {
      inputs: props.infoInputs,
      class: props.infoClass,
      key: newInfoKey,
      deleteFunc: props.infoDeleteFunc(newInfoKey),
      deletable: props.infoDeletable,
      editing: true,
    };
    let newArray = props.infoArray.concat(newInfo);
    props.setFunc(props.infoType, newArray);
  };

  if (props.infoArray.length <= props.limit)
    return (
      <button
        className="newInfoButton"
        onClick={(e) => {
          handleClick(e);
        }}
      >
        +
      </button>
    );
}
