import React, { useState } from "react";
import Button from "../components/Button";
import FormInput from "../components/FormInput";
import TodoStatus from "../components/TodoStatus";
import "./styles/page.css";
import { useNavigate, useParams } from "react-router-dom";

const setInitData = (id) => {
  const savedTodoList = localStorage.getItem("todo-list") || "[]";
  const parsedTodoList = JSON.parse(savedTodoList);
  const todoData = parsedTodoList.find((todo) => todo.id === id);
  return todoData;
};

export default function TodoDetailPage() {
  const params = useParams();
  const todoId = Number(params.id);
  const [editData, setEditData] = useState(() => setInitData(todoId));

  const navigate = useNavigate();
  const onClickBack = () => {
    navigate("/");
  };

  const onChangeTodoState = (todo) => {
    setEditData(todo);
  };

  const onClickUpdate = () => {
    const savedTodoList = localStorage.getItem("todo-list") || "[]";
    const parsedTodoList = JSON.parse(savedTodoList);
    parsedTodoList.find((todo) => {
      if (todo.id === todoId) {
        todo.title = editData.title;
        todo.content = editData.content;
      }
    });
    localStorage.setItem("todo-list", JSON.stringify(parsedTodoList));
    navigate("/");
  };

  const onClickDelete = () => {
    const savedTodoList = localStorage.getItem("todo-list") || "[]";
    const parsedTodoList = JSON.parse(savedTodoList);
    const removedTodoList = parsedTodoList.filter((todo) => todo.id !== todoId);
    localStorage.setItem("todo-list", JSON.stringify(removedTodoList));
    navigate("/");
  };

  return (
    <div className="page-wrapper">
      <div className="backbutton-wrapper">
        <Button
          onClickButton={onClickBack}
          label={"back"}
          size={"sm"}
          type={"normal"}
        ></Button>
      </div>
      <div className="page-title">
        <h2>Todo Detail</h2>
        <TodoStatus type={editData.isDone === false ? "todo" : "done"} />
      </div>
      <FormInput
        onChangeTodoState={onChangeTodoState}
        editData={editData}
      ></FormInput>
      <div className="tododetail-buttons-wrapper">
        <Button
          onClickButton={onClickUpdate}
          label={"Update"}
          size={"lg"}
          type={"primary"}
        ></Button>
        <Button
          onClickButton={onClickDelete}
          label={"Delete"}
          size={"lg"}
          type={"danger"}
        ></Button>
      </div>
    </div>
  );
}
