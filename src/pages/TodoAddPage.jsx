import React, { useState } from "react";
import Button from "../components/Button";
import FormInput from "../components/FormInput";
import "./styles/page.css";
import { useNavigate } from "react-router-dom";

export default function TodoAddPage() {
  const navigate = useNavigate();
  const [todo, setTodo] = useState({
    title: "",
    content: "",
  });
  const onChangeTodoState = (data) => {
    setTodo(data);
    console.log(data);
  };
  const onClickSubmit = () => {
    console.log("clicked");
    // 1. 기존 데이터를 가져와서 배열로 변환
    // 2. 배열에 새로운 아이템 추가
    // 3. 배열을 stringify하여 localstorage에 저장
    const savedData = localStorage.getItem("todo-list") || "[]";
    const parsedData = JSON.parse(savedData);
    parsedData.unshift(todo);
    localStorage.setItem("todo-list", JSON.stringify(parsedData));

    // main page로 이동
    navigate("/");
  };

  return (
    <div className="page-wrapper">
      <div className="backbutton-wrapper">
        <Button label={"back"} size={"sm"} type={"normal"}></Button>
      </div>
      <div className="page-title">
        <h2>Todo Add</h2>
      </div>
      <FormInput onChangeTodoState={onChangeTodoState}></FormInput>
      <div className="todoadd-buttons-wrapper">
        <Button
          onClickButton={onClickSubmit}
          label={"submit"}
          size={"lg"}
          type={"primary"}
        ></Button>
      </div>
    </div>
  );
}
