import axios from 'axios';

export async function getWeatherData() {
  const response = await axios.get(
    'https://api.open-meteo.com/v1/forecast?latitude=-6.2&longitude=106.8&hourly=temperature_2m'
  );
  return response.data;
}
