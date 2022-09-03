import React, { useState } from "react";
import axios from "axios";
import { Circles } from "react-loader-spinner";
import "./Weatherdisplay.css";
import Clock from "./Clock";
import WeatherForecast from "./WeatherForecast";
import WeatherInfo from "./WeatherInfo";
export default function Weatherdisplay(props) {
  const [query, setQuery] = useState(props.defaultCity);
  const [weatherinfo, setWeatherInfo] = useState({ ready: false });

  function displayWeatherInfo(response) {
    setWeatherInfo({
      ready: true,
      coordinates: response.data.coord,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,

      description: response.data.weather[0].description
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    apiSearch();
  }
  function updateSearch(event) {
    setQuery(event.target.value);
  }

  function apiSearch() {
    let apiKey = "0f380eeef06d6360d28eb090a2663364";

    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeatherInfo);
  }

  let visibleHeader = (
    <header>
      <form id="city-search-form" onSubmit={handleSubmit}>
        <div className="form-inline">
          <div className="col-6">
            <input
              id="city-input"
              type="search"
              className="form-control"
              placeholder="Type the city name"
              autoComplete="off"
              autoFocus="on"
              onChange={updateSearch}
            />
          </div>
          <div className="col-6">
            <input
              type="submit"
              value="What's the weather?"
              className="form-control btn btn-outline-info shadow-sm"
            ></input>
          </div>
        </div>
      </form>

      <Clock />
    </header>
  );
  if (weatherinfo.ready) {
    return (
      <div className="Weatherdisplay">
        {visibleHeader}
        <WeatherInfo weatherdata={weatherinfo} />

        <hr />
        <WeatherForecast coordinates={weatherinfo.coordinates} />
      </div>
    );
  } else {
    apiSearch();
    return (
      <div>
        {visibleHeader}
        <Circles
          color="#0dcaf0"
          wrapperClass="spinner"
          height={70}
          width={70}
        />{" "}
      </div>
    );
  }
}
