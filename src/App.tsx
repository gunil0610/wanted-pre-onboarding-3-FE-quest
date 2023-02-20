import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Header />
      <main className="flex w-full">
        <Sidebar />
        <Outlet />
      </main>
    </>
  );
}

export default App;
