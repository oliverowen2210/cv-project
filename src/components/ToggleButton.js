import React from "react";

export default function ToggleButton(props) {
  return props.toggled ? (
    <button
      className={props.toggledClassName}
      onClick={(e) => {
        props.toggledFunc(e);
      }}
    >
      {props.toggledText}
    </button>
  ) : (
    <button
      className={
        props.untoggledClassName
          ? props.untoggledClassName
          : props.toggledClassName
      }
      onClick={(e) => {
        props.untoggledFunc ? props.untoggledFunc(e) : props.toggledFunc(e);
      }}
    >
      {props.untoggledText}
    </button>
  );
}
