import React from "react";
import Button from "../components/Button";
import FormInput from "../components/FormInput";
import TodoStatus from "../components/TodoStatus";
import "./styles/page.css";

export default function TodoDetailPage() {
  return (
    <div className="page-wrapper">
      <div className="backbutton-wrapper">
        <Button label={"back"} size={"sm"} type={"normal"}></Button>
      </div>
      <div className="page-title">
        <h2>Todo Detail</h2>
        <TodoStatus type={"todo"} />
      </div>
      <FormInput></FormInput>
      <div className="tododetail-buttons-wrapper">
        <Button label={"Update"} size={"lg"} type={"primary"}></Button>
        <Button label={"Delete"} size={"lg"} type={"danger"}></Button>
      </div>
    </div>
  );
}
