const convertToCelsius = function(numFahrnheit) {
  let numCelsius = (numFahrnheit - 32) * (5/9);
  let numCelsiusRounded = Math.round(numCelsius * 10) / 10;
  return numCelsiusRounded;
};

const convertToFahrenheit = function(numCelsius) {
  let numFahrnheit = (numCelsius * 9/5) + 32;
  let numFahrnheitRounded = Math.round(numFahrnheit * 10) / 10;
  return numFahrnheitRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
