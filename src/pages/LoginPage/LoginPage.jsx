import React from "react";
import s from "./LoginPage.module.css";
import photo from "./../../assets/grocery-cart.jpg";
import icon from './../../assets/eye-disable.jpg';
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
          <div className={s.username}>
            <input type="text" className={s.input} placeholder="Имя пользователя"/>
          </div>
          <div className={s.password}>
            <input type="password" className={s.input} placeholder="Пароль"/>
            <img src={icon}/>
          </div>
          <div className={s.forgot_password}>Забыли пароль</div>
          <button type="submit" className={s.button}>Войти</button>
          <div className={s.sign_up}>Зарегистрироваться</div>
        </form>
      </div>
    </div>
  );
}
