import axios from 'axios'
const API_KEY = 'b9477d1b205c2a0697e56d6ff054f4cc';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = city:string => {

  const url = `${ROOT_URL}&q=${city},us`;
  const request= axios.get(url);

  console.log(request);

  return (
    type: 'FETCH_WEATHER',
    payload: request,
  );
} 