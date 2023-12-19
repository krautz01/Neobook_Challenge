import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LoginPage from "./pages/LoginPage/LoginPage";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <>
      <LoginPage />
    </>
  );
}

export default App;
{
  /* BrowserRouter>
      <Route path='/users/login' component={LoginPage} />
    </BrowserRouter> */
}
