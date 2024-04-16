// import React from "react";

const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

const GetLocationTemperature = async (location) => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (response.ok) {
      const temperature = data.main.temp;
      return temperature;
    } else {
      throw new Error(data.message || 'Failed to fetch temperature data');
    }
  } catch (error) {
    console.error('Error:', error.message);
    return null;
  }
};
export default GetLocationTemperature;
// Example usage
const location = 'London';
GetLocationTemperature(location)
  .then(temperature => {
    if (temperature !== null) {
      console.log(`Current temperature in ${location}: ${temperature}°C`);
    } else {
      console.log('Failed to fetch temperature data');
    }
  });

