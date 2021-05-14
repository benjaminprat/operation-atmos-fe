const key = '2ee2ed8e-4950-4027-9dfb-a2c0e35f3218'

export default {
  getStates () {
    return fetch(`http://api.airvisual.com/v2/states?country=USA&key=${key}`)
      .then(response => response.json())
      .catch(error => console.log(error))
  },

  getCities (state) {
    return fetch(`http://api.airvisual.com/v2/cities?state=${state}&country=USA&key=${key}`)
      .then(response => response.json())
      .catch(error => console.log(error))
  },

  getLocale (city, state) {
    return fetch(`http://api.airvisual.com/v2/city?city=${city}&state=${state}&country=USA&key=${key}`)
      .then(response => response.json())
      .catch(error => console.log(error))
  },

  getCurrent () {
    return fetch(`http://api.airvisual.com/v2/nearest_city?key=${key}`)
      .then(response => response.json())
      .catch(error => console.log(error))
  }
}