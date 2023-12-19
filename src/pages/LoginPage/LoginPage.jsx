import React from "react";
import s from "./LoginPage.module.css";
import photo from "./../../assets/grocery-cart.jpg";
import icon from "./../../assets/eye-disable.jpg";
import { useState, useEffect  } from "react";
import login from './../../api/api.js'

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  /* useEffect = (() => {
    axios.get('https://neobook.online/mobi-market/swagger/?format=openapi')
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }, []) */

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await login(username, password);
      // Обработка успешного входа - сохранение токена, перенаправление и т.д.
      console.log('Успешный вход:', response);
    } catch (error) {
      // Обработка ошибок входа
      console.error('Ошибка входа:', error);
    }
  };

  return (
    <div className={s.wrapp}>
      <div className={s.block_1}>
        <img src={photo}></img>
      </div>

      <div className={s.block_2}>
        <form className={s.container} onSubmit={handleSubmit}>
          <div className={s.username}>
            <input
              type="text"
              className={s.input}
              placeholder="Имя пользователя"
            />
          </div>
          <div className={s.password}>
            <input
              type="password"
              className={s.input}
              placeholder="Пароль"
            />
            <img src={icon} />
          </div>
          <div className={s.forgot_password}>Забыли пароль</div>
          <button type="submit" className={s.button}>
            Войти
          </button>
          <div className={s.sign_up}>Зарегистрироваться</div>
        </form>
      </div>
    </div>
  );
}
