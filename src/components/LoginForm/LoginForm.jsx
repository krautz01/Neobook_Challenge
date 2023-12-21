import React, { useState, useEffect } from "react";
import s from "./LoginForm.module.css";
import d from "./../../assets/eye-disable.jpg";
import { useDispatch } from "react-redux";
import { loginUser } from "../../api/authAPI";
import { loginStart, loginSuccess, loginFailure } from "../../slices/authSlice";
import axios from 'axios';

export default function LoginForm() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    dispatch(loginStart());

    try {
      const userData = { username, password };
      const user = await loginUser(userData);
      dispatch(loginSuccess(user));
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };

///////////////////////////////////////////

  const [data, setData] = useState(null);

  useEffect(() => {
    // Функция для отправки GET-запроса
    const fetchData = async () => {
      try {
        // Используйте метод axios.get для отправки GET-запроса
        const response = await axios.get('https://neobook.online/mobi-market/swagger/?format=openapi');
        // Устанавливаем полученные данные в состояние
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        // Обработка ошибок, если запрос не удался
        console.error('Error fetching data:', error);
      }
    };

    // Вызов функции для отправки GET-запроса
    fetchData();
  }, []); // Пустой массив зависимостей означает выполнение эффекта только при монтировании компонента


///////////////////////////////////////////////

  return (
    <form className={s.container} onSubmit={handleLogin}>
      <div className={s.username}>
        <input
          type="text"
          className={s.input}
          placeholder="Имя пользователя"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className={s.password}>
        <input
          type="password"
          className={s.input}
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <img src={d} />
      </div>
      <div className={s.forgot_password}>Забыли пароль</div>
      <button type="submit" className={s.button}>
        Войти
      </button>
    </form>
  );
}
