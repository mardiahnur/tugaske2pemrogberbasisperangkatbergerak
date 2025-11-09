import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.open-meteo.com/v1/forecast',
  timeout: 5000,
});

export async function getWeatherData() {
  const response = await apiClient.get(
    '?latitude=-6.2&longitude=106.8&hourly=temperature_2m'
  );
  return response.data;
}
