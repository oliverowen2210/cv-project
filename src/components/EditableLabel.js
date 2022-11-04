export default function EditableLabel(props) {
  return props.beingEdited ? (
    <label
      htmlFor={props.htmlFor}
      className={props.required ? `required infoLabel edit` : "infoLabel edit"}
    >
      {props.edit}
    </label>
  ) : (
    <span className="infoLabel noEdit">{props.noEdit}</span>
  );
}
