import axios from 'axios';

const baseURL = 'https://neobook.online/mobi-market/swagger/?format=openapi'; // Замените на ваш базовый URL

const axiosInstance = axios.create({
  baseURL,
});

export const loginUser = async (userData) => {
  try {
    const response = await axiosInstance.post('/users/login', userData);
    const responseData = response.data;
    console.log('Данные, полученные с сервера:', responseData); // Вывод полученных данных в консоль
    return responseData;
  } catch (error) {
    throw error.response.data;
  }
};