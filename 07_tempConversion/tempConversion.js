const convertToCelsius = function(temperature) {
  let tempCelsius = (temperature - 32) * 5/9;
  tempCelsius = Math.round(tempCelsius * 10) / 10;
  return tempCelsius;
};

const convertToFahrenheit = function(temperature) {
  return (temperature * 5/9 + 32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
