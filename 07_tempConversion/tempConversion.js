const convertToCelsius = function(degree) {
  let result = (degree - 32)*5/9;
  result = +result.toFixed(1);
  return result;
};

const convertToFahrenheit = function(degree) {
  let result = (degree * 9/5) + 32;
  result = +result.toFixed(1);
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
