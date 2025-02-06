import { Outlet } from "react-router-dom";
import "./styles/Layout.css";

export default function Layout() {
  return (
    <>
      <main className="layout-wrapper">
        <Outlet />
      </main>
    </>
  );
}
