import React, { useState } from "react";
export default function ConvertTemperature(props) {
  const [unit, setUnit] = useState(`celsius`);

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit(`fahrenheit`);
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit(`celsius`);
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === `celsius`) {
    return (
      <div>
        <h1 className="current-temperature" id="temperature">
          {props.celsius}
        </h1>
        <span className="units">
          °C |{" "}
          <a
            href="/"
            id="fahrenheit-link"
            onClick={showFahrenheit}
            className="active"
          >
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="current-temperature" id="temperature">
          {Math.round(fahrenheit())}
        </h1>
        <span className="units">
          <a
            href="/"
            id="celsius-link"
            className="active"
            onClick={showCelsius}
          >
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
