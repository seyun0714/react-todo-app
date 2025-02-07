import React from "react";
import "./styles/Button.css";

export default function ({ label, size, type, onClickButton }) {
  // size = "sm" | "lg"
  // color = "normal" | "primary" | "danger"

  const buttonSize = size;
  const buttonColor = type;

  const buttonCli = `todo-button ${buttonSize} ${buttonColor}`;

  return (
    <button className={buttonCli} onClick={onClickButton}>
      {label}
    </button>
  );
}
