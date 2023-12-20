import React from "react";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import AuthPage from "./pages/AuthPage/AuthPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={AuthPage} />
      </Routes>
    </>
  );
}

export default App;
