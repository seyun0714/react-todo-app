import React from "react";
import "./styles/TodoItem.css";

export default function TodoItem({ title }) {
  return (
    <div className="todoitem-wrapper">
      <div className="todoitme-title">{title}</div>
    </div>
  );
}
