import React from "react";
import { useState } from "react";
import "./styles/TabMenu.css";

export default function TabMenu({ onChangeTab }) {
  const [activeTab, setActiveTab] = useState("todo");

  const handleClickTab = (menu) => {
    // 메뉴에 따라서 해당 탭 메뉴 UI 활성화
    if (activeTab !== menu) {
      setActiveTab(menu);
      onChangeTab(menu);
    }
  };

  return (
    <div className="tabmenu-wrapper">
      <div
        className="tabmenu"
        style={{
          color: activeTab === "todo" ? "cornflowerblue" : "silver",
          borderColor: activeTab === "todo" ? "cornflowerblue" : "silver",
        }}
        onClick={() => handleClickTab("todo")}
      >
        Todo
      </div>
      <div
        className="tabmenu"
        style={{
          color: activeTab === "done" ? "cornflowerblue" : "silver",
          borderColor: activeTab === "done" ? "cornflowerblue" : "silver",
        }}
        onClick={() => handleClickTab("done")}
      >
        Done
      </div>
    </div>
  );
}
