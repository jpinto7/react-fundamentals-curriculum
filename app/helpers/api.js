import axios from 'axios';

const API_KEY = '95f1ba1a121349b54e26faa1aaeac6ca'

const getCurrentWeather = (place) =>
  axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + place + '&type=accurate&APPID=' + API_KEY);

const getFiveDayForecast = (place) =>
  axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + place + '&type=accurate&APPID=' + API_KEY + '&cnt=5');

const helpers = {
  forecast(place) {
    const currentWeatherData = getCurrentWeather(place);
  	const fiveDayForecastData = getFiveDayForecast(place);
    return axios.all([currentWeatherData, fiveDayForecastData])
      .then((info) =>
        info.map(u => u.data)
      )
      .catch((err) =>
        console.warn('Error in forecast', err)
      )
  }
};

export default helpers;
