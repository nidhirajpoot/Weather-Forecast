const apiKey = "e92abea924b96ff49217a0d4bc41f358"; // Replace with your OpenWeatherMap API key
const searchButton = document.getElementById("search-button");
const cityInput = document.getElementById("city-input");
const weatherInfo = document.getElementById("weather-info");

searchButton.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) {
    getWeather(city);
  } else {
    alert("Please enter a city name!");
  }
});

async function getWeather(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("City found");
    }

    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    weatherInfo.innerHTML = `<p style="color: red;">${error.message}</p>`;
  }
}

function displayWeather(data) {
  const { name, main, weather } = data;
  const temperature = main.temp;
  const description = weather[0].description;
  const humidity = main.humidity;

  weatherInfo.innerHTML = `
    <p><strong>City:</strong> ${name}</p>
    <p><strong>Temperature:</strong> ${temperature}°C</p>
    <p><strong>Condition:</strong> ${description}</p>
    <p><strong>Humidity:</strong> ${humidity}%</p>
  `;
}
