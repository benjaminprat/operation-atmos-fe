export default {
  getStates() {
    return fetch('http://api.airvisual.com/v2/states?country=USA&key=f5bb78f7-2da9-4639-9522-6e0786c72a31')
      .then(response => response.json())
      .catch(error => console.log(error))
  },

  getCities(state) {
    return fetch(`http://api.airvisual.com/v2/cities?state=${state}&country=USA&key=f5bb78f7-2da9-4639-9522-6e0786c72a31`)
      .then(response => response.json())
      .catch(error => console.log(error))
  },

  getLocale(city, state) {
    return fetch(`http://api.airvisual.com/v2/city?city=${city}&state=${state}&country=USA&key=f5bb78f7-2da9-4639-9522-6e0786c72a31`)
      .then(response => response.json())
      .catch(error => console.log(error))
  }
}