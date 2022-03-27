import { useEffect, useState } from 'react';
import axios from 'axios';
import './WeatherApi.css';
import location from '../../img/location.svg';

export function WeatherApi() {
  const [temperature, setTemperature] = useState('');
  const [desc, setDesc] = useState('');
  const [city, setCity] = useState('Saint Petersburg');

  const getWeatherData = (city) => {
    axios({
      method: 'GET',
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=9563a1b4990c88e627f33542fa8f6735`,
    })
      .then((response) => {
        setTemperature(response.data.main.temp - 273.15);
        setDesc(response.data.weather[0].main);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getWeatherData(city);
  }, [desc, city, temperature]);

  const weather = () => {
    if (desc === 'Clouds') {
      return '🌥';
    } if (desc === 'Clear') {
      return '🌞';
    } if (desc === 'Atmosphere') {
      return '🌬';
    } if (desc === 'Snow') {
      return '🌨';
    } if (desc === 'Rain') {
      return '🌧';
    } if (desc === 'Drizzle') {
      return '🌦';
    } if (desc === 'Thunderstorm') {
      return '🌪';
    }
  };

  return (
    <div className="api-weather-container">
      <p>
        <img className="location-logo" src={location} alt="" />
        <span>Санкт-Петербург : </span>
        {Math.round(Math.round(temperature * 100) / 100)}
        ℃
        <span>
          {weather()}
        </span>
      </p>
    </div>
  );
}
