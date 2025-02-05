import React from "react";
import "./styles/Button.css";

const mapButtonSizeToPixel = {
  sm: "60px",
  lg: "250px",
};

const mapButtonTypeToColor = {
  normal: "black",
  primary: "blue",
  danger: "red",
};

export default function ({ label, size, type, onClickButton }) {
  // size = "sm" | "lg"
  // color = "normal" | "primary" | "danger"

  const buttonSize = mapButtonSizeToPixel[size];
  const buttonColor = mapButtonTypeToColor[type];
  console.log(buttonSize + buttonColor);
  return (
    <button
      className="todo-button"
      style={{
        background: buttonColor,
        color: "white",
        width: buttonSize,
      }}
      onClick={onClickButton}
    >
      {label}
    </button>
  );
}
