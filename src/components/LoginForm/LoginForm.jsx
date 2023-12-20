import React from "react";
import s from "./LoginForm.module.css";
import d from "./../../assets/eye-disable.jpg";

export default function LoginForm() {
  return (
    <form className={s.container}>
      <div className={s.username}>
        <input type="text" className={s.input} placeholder="Имя пользователя" />
      </div>
      <div className={s.password}>
        <input type="password" className={s.input} placeholder="Пароль" />
        <img src={d} />
      </div>
      <div className={s.forgot_password}>Забыли пароль</div>
      <button type="submit" className={s.button}>
        Войти
      </button>
    </form>
  );
}
