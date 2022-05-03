const createWeatherIcon = (data) => {
  const weatherIcon = document.getElementById("weatherIcon");
  const weatherType = data.weather[0].main;
  const clearArr = ["Clear"];
  const cloudArr = ["Clouds", "Haze"];
  const rainArr = ["Rain", "Drizzle", "Mist"];

  if (clearArr.includes(weatherType)) {
    document.body.className = "clear";
    weatherIcon.src = "./assets/circle.svg";
  }
  if (cloudArr.includes(weatherType)) {
    document.body.className = "clouds";
    weatherIcon.src = "./assets/cloud.svg";
  }
  if (rainArr.includes(weatherType)) {
    document.body.className = "rain";
    weatherIcon.src = "./assets/raindrops.svg";
  }
};

export default createWeatherIcon;
