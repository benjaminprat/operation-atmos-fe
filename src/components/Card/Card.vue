<template>
  <article class="location-card" :id="id">
    <div class="button-delete-container">
      <button class="card-button button-delete" type="button" name="button" v-on:click.prevent="deleteCard">X</button>
    </div>
    <h2>{{ formatLocation() }}</h2>
    <img :src="require(`../../assets/${formatWeatherIcon()}.png`)" class="weather-icon">
    <h3>Weather</h3>
    <p>{{ temperature }}°F</p>
    <p>Wind Speed: {{ windSpeed }}mph</p>
    <p>Humidity: {{ humidity }}%</p>
    <hr>
    <h3>Air Quality</h3>
    <div class="aqi-message">
      <div class="aqi-circle" :style="determineAqiStyle()"><p>AQI: {{ aqi }}</p></div>
      <p class="aqi-rating"><b>{{ determineAqiRating() }} </b><a href="https://www.airnow.gov/aqi-and-health/" target="_blank"><img src="https://img.icons8.com/metro/16/000000/info.png"/></a></p>
      <p class="aqi-text">{{ determineAqiText() }}</p>
    </div>
    <hr>
    <button class="button-allTrails" type="button" name="button">
      <a :href="generateAllTrailsURL()" target="_blank" class="button-allTrails-text">Plan an activity in {{ city }} on AllTrails</a>
    </button>
    <hr>
    <p class="timeStamp">Last Update: {{ timeStamp }}
      <button class="card-button button-refresh" type="button" name="button" v-on:click.prevent="refreshLocation">Refresh</button>
    </p>
  </article>
</template>

<script>
export default {
  name: 'Card',
  props: {
    temperature: Number,
    city: String,
    state: String,
    aqi: Number,
    windSpeed: Number,
    humidity: Number,
    timeStamp: String,
    weatherIconSrc: String,
    id: Number
  },
  methods: {
    deleteCard () {
      const locationID = event.target.closest('article').id
      this.$parent.$emit('removeCard', locationID)
    },
    formatLocation () {
      return `${this.city}, ${this.state}`
    },
    formatWeatherIcon () {
      const weatherIcons = ['01d', '01n', '02d', '02n', '03d', '04d', '09d', '10d', '10n', '11d', '13d', '50d']
      if (weatherIcons.includes(this.weatherIconSrc)) {
        return this.weatherIconSrc
      } else if (!weatherIcons.includes(this.weatherIconSrc)) {
        const nums = weatherIcons.find(icon => {
          return this.weatherIconSrc.slice(0, 2) === icon.slice(0, 2)
        })
        return nums
      }
    },
    determineAqiStyle () {
      if (this.aqi <= 50) {
        return 'background: linear-gradient(145deg, #23d284, #1eb06f)'
      } else if (this.aqi >= 51 && this.aqi <= 100) {
        return 'background: linear-gradient(145deg, #ffdd29, #dbba22)'
      } else if (this.aqi >= 101 && this.aqi <= 150) {
        return 'background: linear-gradient(145deg, #ff7e23, #e66a1e)'
      } else if (this.aqi >= 151 && this.aqi <= 200) {
        return 'background: linear-gradient(145deg, #e42c88, #c02572)'
      } else if (this.aqi >= 201 && this.aqi <= 300) {
        return 'background: linear-gradient(145deg, #7e1ee3, #6a19bf)'
      } else if (this.aqi >= 301) {
        return 'background: linear-gradient(145deg, #880225, #720220)'
      }
    },
    determineAqiRating () {
      if (this.aqi <= 50) {
        return 'Good'
      } else if (this.aqi >= 51 && this.aqi <= 100) {
        return 'Moderate'
      } else if (this.aqi >= 101 && this.aqi <= 150) {
        return 'Unhealthy for Sensitive Groups'
      } else if (this.aqi >= 151 && this.aqi <= 200) {
        return 'Unhealthy'
      } else if (this.aqi >= 201 && this.aqi <= 300) {
        return 'Very Unhealthy'
      } else if (this.aqi >= 301) {
        return 'Hazardous'
      }
    },
    determineAqiText () {
      if (this.aqi <= 50) {
        return 'It\'s a great day to be active outside!'
      } else if (this.aqi >= 51 && this.aqi <= 100) {
        return 'It\'s a good day to be active outside! People who are unusually sensitive to air pollution could have symptoms.'
      } else if (this.aqi >= 101 && this.aqi <= 150) {
        return 'It\'s OK to be active outside for short durations. For longer activities, take more breaks and lower the intensity. Members of sensitive groups may experience health effects. Watch for symptoms and take action as needed.'
      } else if (this.aqi >= 151 && this.aqi <= 200) {
        return 'For all outdoor activities, take more breaks and lower the intensity. Consider moving longer or more intense activities indoors or rescheduling them to another day or time. Some members of the general public may experience health effects; members of sensitive groups may experience more serious health effects.'
      } else if (this.aqi >= 201 && this.aqi <= 300) {
        return 'Health alert: The risk of health effects is increased for everyone. Move all activities indoors or reschedule them to another day.'
      } else if (this.aqi >= 301) {
        return 'Health warning of emergency conditions: everyone is more likely to be affected.'
      }
    },
    generateAllTrailsURL () {
      const formattedCity = this.city.toLowerCase() // ACCOUNT FOR SPACES
      const formattedState = this.state.toLowerCase()
      return `https://www.alltrails.com/us/${formattedState}/${formattedCity}`
    },
    refreshLocation () {
      const cityState = this.locale.split(', ') // refactor this
      const location = { city: cityState[0], state: cityState[1] }
      this.$parent.$emit('refreshLocale', location)
    }
  }
}
</script>

<style src='./Card.css'></style>