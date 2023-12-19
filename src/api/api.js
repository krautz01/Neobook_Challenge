// api.js

import axios from 'axios';

const API_BASE_URL = 'https://neobook.online/mobi-market/swagger/?format=openapi';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const login = async (username, password) => {
  try {
    const response = await api.post('/users/login/', {
      username,
      password,
    });
    return response.data; // Здесь обрабатывайте ответ на ваше усмотрение
  } catch (error) {
    throw error; // Можно обработать ошибку или передать выше для обработки в компоненте
  }
};
