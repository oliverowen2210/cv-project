import uniqid from "uniqid";

export default function createObj(data) {
  return {
    name: data.name,
    value: "",
    inputValue: "",
    id: uniqid(),
    edit: data.editText,
    noEdit: data.noEditText,
    valid: true,
    type: data.type,
    pattern: data.pattern,
  };
}
