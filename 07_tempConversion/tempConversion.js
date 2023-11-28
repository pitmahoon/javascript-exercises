const convertToCelsius = function(temperature) {
  let tempCelsius = (temperature - 32) * 5/9;
  tempCelsius = Math.round(tempCelsius * 10) / 10;
  return tempCelsius;
};

const convertToFahrenheit = function(temperature) {
  let tempFahrenheit = (temperature * 9/5 + 32);
  return Math.round(tempFahrenheit *10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
