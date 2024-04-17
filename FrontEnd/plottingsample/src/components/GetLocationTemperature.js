const apiKey = '1243'; 

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