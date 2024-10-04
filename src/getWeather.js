


function getWeather()
{


const weatherData = response.results;
  const city = weatherData.name;
  const temp = weatherData.main.temp;
  const hiTemp = weatherData.main.temp_max;
  const lowTemp = weatherData.main.temp_min;
  const description = weatherData.weather[0].description;
  const icon = weatherData.weather[0].icon;

  return {
    city,
    temp,
    hiTemp,
    lowTemp,
    description,
    icon
  }
}

export default function fetchCurrentWeather()
{
    const HOST_URL = "http://localhost:3000";

};