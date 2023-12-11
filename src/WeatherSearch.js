import axios from "axios";
import React, { useState } from "react";
export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function handleSearch(event) {
    let apiKey = "dfe55254099b96bf9592c69aca42d6f5";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    event.preventDefault();
    axios.get(url).then(displayWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form name="weather search" onSubmit={handleSearch}>
      <input
        type="search"
        placeholder="Enter your city"
        onChange={updateCity}
      />
      <input type="submit" value="Search" />
    </form>
  );
  if (loaded) {
    return (
      <div className="WeatherForecast">
        {form}
        <ul>
          <li>Temperature: {weather.temperature} ℃</li>
          <li>Description: {weather.description}</li>
          <li>Wind: {weather.wind} km/h</li>
          <li>Humidity: {weather.humidity} %</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return <div className="WeatherForecast">{form}</div>;
  }
}
