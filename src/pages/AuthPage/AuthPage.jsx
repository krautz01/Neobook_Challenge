import React from "react";
import s from "./AuthPage.module.css";
import photo from "./../../assets/grocery-cart.jpg";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function AuthPage() {
  return (
    <>
      <div className={s.container}>
        <div className={s.block_1}>
          <img src={photo} />
        </div>
        <div className={s.block_2}>
          <LoginForm/>
          <div>Зарегистрироваться</div>
        </div>
      </div>
    </>
  );
}
