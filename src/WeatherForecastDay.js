import React from "react";

export default function WeatherForecastDay(props) {
  function dayTemperature() {
    let temperature = Math.round(props.data.temp.day);

    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div>
      <h3 className="weekdays">{day()}</h3>

      <img
        className="icon"
        src={`https://raw.githubusercontent.com/KatGrenade/REACTappWeather/7ad61c8cdcac19d21173a5becebdf808fb174c10/icons/${props.data.weather[0].icon}.svg`}
        alt={props.data.weather[0].description}
      />

      <h3 className="temperature">{dayTemperature()} °C</h3>
    </div>
  );
}
