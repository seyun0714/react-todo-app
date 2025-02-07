import React from "react";
import "./styles/TodoItem.css";

export default function TodoItem({ title, id, isDone, setTodoList }) {
  const onClickCheckbox = (event) => {
    event.stopPropagation();
  };

  const onChangeCheckbox = () => {
    const savedData = localStorage.getItem("todo-list") || "[]";
    const parsedData = JSON.parse(savedData);

    parsedData.find((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
    });
    localStorage.setItem("todo-list", JSON.stringify(parsedData));
    setTodoList(parsedData);
  };
  const onClickDelete = (event) => {
    event.stopPropagation();
    const savedData = localStorage.getItem("todo-list") || "[]";
    const parsedData = JSON.parse(savedData);

    const removedList = parsedData.filter((todo) => todo.id !== id);
    localStorage.setItem("todo-list", JSON.stringify(removedList));
    setTodoList(removedList);
  };

  return (
    <div className="todoitem-wrapper">
      <input
        className="todoitem-checkbox"
        type="checkbox"
        checked={isDone}
        onClick={onClickCheckbox}
        onChange={onChangeCheckbox}
      ></input>
      <div className="todoitem-title">{title}</div>
      <div className="todoitem-delete-wrapper" onClick={onClickDelete}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
  );
}
