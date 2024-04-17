import GetLocationTemperature from "./GetLocationTemperature";

const Location =  () => {

const location = 'London';
GetLocationTemperature(location)
  .then(temperature => {
    if (temperature !== null) {
      console.log(`Current temperature in ${location}: ${temperature}°C`);
    } else {
      console.log('Failed to fetch temperature data');
    }
  });
};

export default Location;