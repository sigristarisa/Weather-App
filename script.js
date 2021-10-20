const weatherForecast = (() => {
  // get all the elements from HTML
  const search = document.getElementById("search");
  const cityName = document.getElementById("cityName");
  const weather = document.getElementById("weather");
  const temperature = document.getElementById("temperature");
  const celcius = document.getElementById("celcius");
  const feelsLike = document.getElementById("feelsLike");
  const wind = document.getElementById("wind");
  const humidity = document.getElementById("humidity");
  const weatherIcon = document.getElementById("weatherIcon");

  // fetch when user types in and press "enter"
  search.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=b75119bca09124d69520a444216b1db2`
      )
        .then((response) => response.json())
        .then((data) => {
          cityName.innerText = `${data.name}, ${data.sys.country}`;
          weather.innerText = data.weather[0].main;
          temperature.innerText = Math.floor(data.main.temp - 273.15);
          celcius.innerText = `°C`;
          feelsLike.innerText = `Feels like: ${Math.floor(
            data.main.feels_like - 273.15
          )} °C`;
          wind.innerText = `Wind: ${Math.floor(data.wind.speed)} MPH`;
          humidity.innerText = `Humidity: ${data.main.humidity} %`;
          console.log(data);

          // changing the color scheme according to the weather
          if (data.weather[0].main === "Clear") {
            document.body.className = "clear";
            weatherIcon.src = "./assets/circle.svg";
          } else if (
            data.weather[0].main === "Clouds" ||
            data.weather[0].main === "Haze"
          ) {
            document.body.className = "clouds";
            weatherIcon.src = "./assets/cloud.svg";
          } else if (
            data.weather[0].main === "Rain" ||
            data.weather[0].main === "Drizzle"
          ) {
            document.body.className = "rain";
            weatherIcon.src = "./assets/raindrops.svg";
          }
        });
      search.value = "";
    }
  });
})();
