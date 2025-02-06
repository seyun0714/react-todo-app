import React, { useState } from "react";
import "./styles/FormInput.css";

export default function FormInput({ onChangeTodoState }) {
  const [todoState, setTodoState] = useState({
    title: "",
    content: "",
  });
  const [input, setInput] = useState("");
  const [content, setContent] = useState("");

  const handleChangeInput = (e) => {
    const inputValue = e.target.value;
    setInput(inputValue);
    const resultTodoState = { ...todoState, title: inputValue };
    setTodoState(resultTodoState);
    onChangeTodoState(resultTodoState);
  };

  const handleChangeContent = (e) => {
    const contentValue = e.target.value;
    setContent(contentValue);
    const resultTodoState = { ...todoState, content: contentValue };
    setTodoState(resultTodoState);
    onChangeTodoState(resultTodoState);
  };

  return (
    <div className="forminput-wrapper">
      <label className="forminput-label">제목</label>
      <div className="forminput-title-wrapper">
        <input
          className="forminput-title-input"
          value={input}
          onChange={handleChangeInput}
        />
      </div>
      <label className="forminput-label">내용</label>
      <div className="forminput-content-wrapper">
        <textarea
          className="forminput-content-textarea"
          value={content}
          onChange={handleChangeContent}
        />
      </div>
    </div>
  );
}
