const key = 'f5bb78f7-2da9-4639-9522-6e0786c72a31'

export default {
  getStates () {
    return fetch(`http://api.airvisual.com/v2/states?country=USA&key=${key}`)
      .then(response => response.json())
  },

  getCities (state) {
    return fetch(`http://api.airvisual.com/v2/cities?state=${state}&country=USA&key=${key}`)
      .then(response => response.json())
  },

  getLocale (city, state) {
    return fetch(`http://api.airvisual.com/v2/city?city=${city}&state=${state}&country=USA&key=${key}`)
      .then(response => response.json())
  },

  getCurrent () {
    return fetch(`http://api.airvisual.com/v2/nearest_city?key=${key}`)
      .then(response => response.json())
  }
}