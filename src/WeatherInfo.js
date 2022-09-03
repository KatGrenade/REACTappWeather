import React from "react";
import ConvertTemperature from "./ConvertTemperature";
export default function WeatherInfo(props) {
  return (
    <div className="display-box">
      <div className="current-city-display">
        <br />

        <h1 className="city-name"> {props.weatherdata.city} </h1>
        <ul>
          <li id="description">{props.weatherdata.description}</li>
          <li>
            Wind: <span id="wind">{props.weatherdata.wind}</span> km/h
          </li>
          <li>
            {" "}
            Humidity: <span id="humidity">{props.weatherdata.humidity}</span>%
          </li>
        </ul>
      </div>
      <div className="weather-display">
        <ConvertTemperature celsius={props.weatherdata.temperature} />

        <img
          className="iconbig"
          src={`https://raw.githubusercontent.com/KatGrenade/REACTweatherApp/0f9b641fa802c4d80796b8990a1bbe206206fd90/src/images/${props.weatherdata.icon}.svg`}
          alt={props.weatherdata.description}
        />
      </div>
    </div>
  );
}
