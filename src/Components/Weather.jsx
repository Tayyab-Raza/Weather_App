import React, { useEffect, useRef, useState } from "react";
import "./Weather.css";
import search_icon from "../assets/search.png";
import cloudsun from "../assets/cloudandsun.webp";
import cloudsnow from "../assets/cloudsnow.png";
import humidity from "../assets/humidity.png";
import rainy from "../assets/rainy.png";
import sun from "../assets/sun.png";
import wind from "../assets/wind.png";
import moment from "moment";

const Weather = () => {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(false);
  const [currentTime, setCurrentTime] = useState(moment().format('h:mm:ss a'));
  const [currentDate, setCurrentDate] = useState(moment().format('Do MMMM YYYY'));
  const [currentDay, setCurrentDay] = useState(moment().format('dddd'));
  const [unit, setUnit] = useState('C'); // State to track the temperature unit

  const allIcons = {
    "01d": sun,
    "01n": sun,
    "02d": cloudsun,
    "02n": cloudsun,
    "03d": cloudsun,
    "03n": cloudsun,
    "04d": wind,
    "04n": wind,
    "09d": rainy,
    "09n": rainy,
    "10d": rainy,
    "10n": rainy,
    "13d": cloudsnow,
    "13n": cloudsnow,
  };

  const API_KEY = "fe0c8f06fd40441727c6536d6f8e52c0";

  const convertTemperature = (tempCelsius) => {
    if (unit === 'F') {
      return Math.floor((tempCelsius * 9/5) + 32);
    }
    return Math.floor(tempCelsius);
  };

  const search = async (city) => {
    if (city === "") {
      alert('Please enter a city name');
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      console.log(data);

      const icon = allIcons[data.weather[0].icon] || sun;

      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperatureCelsius: data.main.temp,
        location: data.name,
        icon: icon,
      });
    } catch (error) {
      setWeatherData(false);
      console.error("Error in fetching weather data");
    }
  };

  const toggleUnit = () => {
    setUnit(prevUnit => prevUnit === 'C' ? 'F' : 'C');
  };

  useEffect(() => {
    search("Lucknow");
  }, []); 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment().format('h:mm:ss a'));
      setCurrentDate(moment().format('Do MMMM YYYY'));
      setCurrentDay(moment().format('dddd'));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="datetime">
        <p>{currentDate}, {currentDay}</p>
        <p>{currentTime}</p>
        <p>Asia/Kolkata, IN</p>
      </div>
      <div className="weather">
        <div className="search-bar">
          <input ref={inputRef} type="text" placeholder="Search" />
          <img src={search_icon} alt="Search" onClick={() => search(inputRef.current.value)} />
        </div>
        {weatherData ? (
          <>
            <img src={weatherData.icon} alt="Weather Icon" className="weather-icon" />
            <p className="temperature">
              {convertTemperature(weatherData.temperatureCelsius)}&#176;{unit}
            </p>
            <p className="location">{weatherData.location}</p>
            <div className="weather-data">
              <div className="col">
                <img src={humidity} alt="Humidity" className="img1" />
                <div>
                  <p>{weatherData.humidity}%</p>
                  <span>Humidity</span>
                </div>
              </div>
              <div className="col">
                <img src={wind} alt="Wind Speed" className="img2" />
                <div>
                  <p>{weatherData.windSpeed} kmph</p>
                  <span>Wind Speed</span>
                </div>
              </div>
            </div>
            <div className="toggle">
              <button onClick={toggleUnit} className="unit-toggle">
                Switch to &#176;{unit === 'C' ? 'F' : 'C'}
              </button>
            </div>
          </>
        ) : <></>}
      </div>
    </>
  );
};

export default Weather;
