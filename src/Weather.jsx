import { useState } from "react";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    // Fake data for demo instead of real API
    setWeather(Weather in ${city}: Sunny ☀, 25°C);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Weather Info</h2>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Get Weather</button>
      {weather && <p>{weather}</p>}
    </div>
  );
}

export default Weather;