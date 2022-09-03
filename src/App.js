import "./styles.css";
import Weatherdisplay from "./Weatherdisplay";

export default function App(props) {
  return (
    <div className="App">
      <div className="application-body-wrapper">
        <div className="application-body">
          <Weatherdisplay defaultCity="Seoul" />
        </div>
        <small>
          <a
            className="githublink"
            href="https://github.com/KatGrenade/weather_app_SheCodes"
          >
            Open-source code
          </a>{" "}
          by Ola
        </small>
      </div>
    </div>
  );
}
