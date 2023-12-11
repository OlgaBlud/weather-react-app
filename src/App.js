import React from "react";
import "./App.css";
import WeatherSearch from "./WeatherSearch";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherSearch />
      <p>
        Coded by Olga Blud,{" "}
        <a href="https://github.com/OlgaBlud/weather-react-app">
          view code here
        </a>
      </p>
    </div>
  );
}

export default App;
