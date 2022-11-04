export default function deleteButton(props) {
  return (
    <button
      onClick={(e) => {
        props.deleteFunc(e);
      }}
      className="deleteButton"
    >
      x
    </button>
  );
}
