import React from "react";
import "./Forecastdays.css";
import search_icon from "../assets/search.png";
import cloudsun from "../assets/cloudandsun.webp";
import cloudsnow from "../assets/cloudsnow.png";
import humidity from "../assets/humidity.png";
import rainy from "../assets/rainy.png";
import sun from "../assets/sun.png";
import wind from "../assets/wind.png";

function forecast() {
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

  return (
    <div class="future-forecast">
      <div class="weather-forecast" id="weather-forecast">
        <div class="weather-forecast-item">
          <div class="day">Tue</div>
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt="weather icon"
            class="w-icon"
          />
          <div class="temp">Night - 25.6&#176; C</div>
          <div class="temp">Day - 35.6&#176; C</div>
        </div>
        <div class="weather-forecast-item">
          <div class="day">Wed</div>
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt="weather icon"
            class="w-icon"
          />
          <div class="temp">Night - 25.6&#176; C</div>
          <div class="temp">Day - 35.6&#176; C</div>
        </div>
        <div class="weather-forecast-item">
          <div class="day">Thur</div>
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt="weather icon"
            class="w-icon"
          />
          <div class="temp">Night - 25.6&#176; C</div>
          <div class="temp">Day - 35.6&#176; C</div>
        </div>
        <div class="weather-forecast-item">
          <div class="day">Fri</div>
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt="weather icon"
            class="w-icon"
          />
          <div class="temp">Night - 25.6&#176; C</div>
          <div class="temp">Day - 35.6&#176; C</div>
        </div>
        <div class="weather-forecast-item">
          <div class="day">Sat</div>
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt="weather icon"
            class="w-icon"
          />
          <div class="temp">Night - 25.6&#176; C</div>
          <div class="temp">Day - 35.6&#176; C</div>
        </div>
      </div>
    </div>
  );
}

export default forecast;
