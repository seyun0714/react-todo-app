import React, { useEffect, useState } from "react";
import TabMenu from "../components/TabMenu";
import TodoItem from "../components/TodoItem";
import Button from "../components/Button";
import "./styles/page.css";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const navigate = useNavigate();
  const [todoList, setTodoList] = useState([]);

  const initRender = () => {
    const savedData = localStorage.getItem("todo-list") || "[]";
    const parsedData = JSON.parse(savedData);
    setTodoList(parsedData);
  };

  useEffect(() => {
    initRender();
  }, []);

  const onClickAdd = () => {
    navigate("/add");
  };
  return (
    <div className="page-wrapper">
      <TabMenu></TabMenu>
      <div className="page-title">
        <h2>Todo List</h2>
      </div>
      <div className="todoitemlist-wrapper">
        {todoList.map((data, index) => {
          return (
            <TodoItem
              title={data.title}
              key={`todolist-key-${index}`}
            ></TodoItem>
          );
        })}
      </div>
      <div className="todomain-buttons-wrapper">
        <Button
          onClickButton={onClickAdd}
          label={"Add"}
          size={"lg"}
          type={"primary"}
        ></Button>
      </div>
    </div>
  );
}
