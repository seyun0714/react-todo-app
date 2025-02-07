import React, { useEffect, useState } from "react";
import TabMenu from "../components/TabMenu";
import TodoItem from "../components/TodoItem";
import Button from "../components/Button";
import "./styles/page.css";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const navigate = useNavigate();
  const [tab, setTab] = useState("todo");
  const [todoList, setTodoList] = useState([]);

  const initRender = () => {
    const savedData = localStorage.getItem("todo-list") || "[]";
    const parsedData = JSON.parse(savedData);
    setTodoList(parsedData);
  };

  const onChangeTab = (menu) => {
    setTab(menu);
  };

  useEffect(() => {
    initRender();
  }, [tab]);

  const onClickAdd = () => {
    navigate("/add");
  };

  const handleClickTodoItem = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="page-wrapper">
      <TabMenu onChangeTab={onChangeTab}></TabMenu>
      <div className="page-title">
        <h2>{tab === "todo" ? `Todo List` : `Done List`}</h2>
      </div>
      <div className="todoitemlist-wrapper">
        {tab === "todo"
          ? todoList
              .filter((todo) => todo.isDone === false)
              .map((todo, index) => (
                <div
                  className="todoitem-main-wrapper"
                  key={`todolist-key-${index}`}
                  onClick={() => handleClickTodoItem(todo.id)}
                >
                  <TodoItem
                    title={todo.title}
                    id={todo.id}
                    key={todo.id}
                    isDone={todo.isDone}
                    setTodoList={setTodoList}
                  />
                </div>
              ))
          : todoList
              .filter((todo) => todo.isDone === true)
              .map((todo, index) => (
                <div
                  className="todoitem-main-wrapper"
                  key={`todolist-key-${index}`}
                  onClick={() => handleClickTodoItem(todo.id)}
                >
                  <TodoItem
                    title={todo.title}
                    id={todo.id}
                    isDone={todo.isDone}
                    setTodoList={setTodoList}
                  />
                </div>
              ))}
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
