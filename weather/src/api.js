var rootUrl = 'http://api.openweathermap.org/data/2.5/weather?APPID=8af519aa641da8d261b298438b1c81e5';

var kelvinToF = function(kelvin) {
  return Math.round((kelvin - 273.15) * 1.8 + 32) + ' ˚F'
}

module.exports = function(latitude, longitude) {
  var url = `${rootUrl}&lat=${latitude}&lon=${longitude}`;

  return fetch(url)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      return {
        city: json.name,
        temperature: kelvinToF(json.main.temp),
        description: json.weather[0].description
      }
    });
}
