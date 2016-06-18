import axios from 'axios';
import API_KEY from './../../.env';

const Root_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
// ACTION Creator
export function fetchWeather(city) {
  // api.openweathermap.org/data/2.5/forecast?q={city name},{country code}
  const url = `${Root_URL}&q=${city}, us`;

  const request = axios.get(url);
  // ACTION
  return {
    type: FETCH_WEATHER, 
    payload: request
  }
}