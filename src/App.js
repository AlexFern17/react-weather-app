import "./App.css";
import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8cd9be374c7c96c39a9fe73f4bf2f055&units=metric`;

  function showInfo(response) {
    setMessage(
      `Temperature: ${response.data.main.temp},
      Description: ${response.data.main.temp},
      Humidity: ${response.data.main.humidity},
      Wind: ${response.data.wind.speed},
      Icon: ${response.data.weather.icon}`
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (city.length > 0) {
      axios.get(url).then(showInfo);
      //     setMessage(`${city}`);
    } else {
      alert("Enter a city");
    }
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="App">
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="City" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <br />
      <div className="response">{message}</div>
    </div>
  );
}
