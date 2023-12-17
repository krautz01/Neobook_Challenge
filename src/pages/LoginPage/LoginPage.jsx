import React from "react";
import s from "./LoginPage.module.css";
import photo from "./../../assets/grocery-cart.jpg";
import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={s.wrapp}>
      
      <div className={s.block_1}>
        <img src={photo}></img>
      </div>

      <div className={s.block_2}>
        <form className={s.container}>
          <div className={s.login_name}>
            <label htmlFor="username">Имя пользователя</label>
            <input type="text" />
          </div>
          <div className={s.login_password}>
            <label htmlFor="password">Пароль</label>
            <input type="password" />
          </div>
          <button type="submit">Войти</button>
        </form>
      </div>

    </div>
  );
}
