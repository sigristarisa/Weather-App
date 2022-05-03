const createWeatherPage = (data) => {
  const search = document.getElementById("search");
  const cityName = document.getElementById("cityName");
  const weather = document.getElementById("weather");
  const temperature = document.getElementById("temperature");
  const celcius = document.getElementById("celcius");
  const feelsLike = document.getElementById("feelsLike");
  const wind = document.getElementById("wind");
  const humidity = document.getElementById("humidity");

  cityName.innerText = `${data.name}, ${data.sys.country}`;
  weather.innerText = data.weather[0].main;
  temperature.innerText = Math.floor(data.main.temp - 273.15);
  celcius.innerText = `°C`;
  feelsLike.innerText = `Feels like: ${Math.floor(
    data.main.feels_like - 273.15
  )} °C`;
  wind.innerText = `Wind: ${Math.floor(data.wind.speed)} MPH`;
  humidity.innerText = `Humidity: ${data.main.humidity} %`;
  search.value = "";
};

export default createWeatherPage;
