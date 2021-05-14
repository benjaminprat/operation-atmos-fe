<template>
  <article class="location-card" :id="id">
    <div class="button-delete-container">
      <button
        class="card-button button-delete"
        type="button"
        name="button"
        v-on:click.prevent="deleteCard">
        X
      </button>
    </div>
    <h2>{{ formatLocation() }}</h2>
    <img :src="require(`../../assets/${formatWeatherIcon()}.png`)" class="weather-icon">
    <h3>Weather</h3>
    <p>{{ temperature }}°F</p>
    <p>Wind Speed: {{ windSpeed }}mph</p>
    <p>Humidity: {{ humidity }}%</p>
    <h3>Air Quality</h3>
    <p>{{ aqi }} AQI</p>
    <p>{{ determineAqiMessage() }}</p>
    <button class="button-allTrails" type="button" name="button">
      <a :href="generateAllTrailsURL()" target="_blank" class="button-allTrails-text">Plan an activity in {{ city }} on AllTrails</a>
    </button>
    <p class="timeStamp">Last Update: {{ timeStamp }}
      <button
        class="card-button button-refresh"
        type="button"
        name="button"
        v-on:click.prevent="refreshLocation">
        Refresh
      </button>
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
    deleteCard () {
      const locationID = event.target.closest('article').id
      this.$parent.$emit('removeCard', locationID)
    },
    refreshLocation () {
      const cityState = this.locale.split(', ')
      const location = { city: cityState[0], state: cityState[1] }
      this.$parent.$emit('refreshLocale', location)
    },
    determineAqiMessage () {
      if (this.aqi <= 50) {
        return '🟢 Good'
      } else if (this.aqi >= 51 && this.aqi <= 100) {
        return '🟡 Moderate'
      } else if (this.aqi >= 101 && this.aqi <= 150) {
        return '🟠 Unhealthy for Sensitive Groups'
      } else if (this.aqi >= 151 && this.aqi <= 200) {
        return '🔴 Unhealthy'
      } else if (this.aqi >= 201 && this.aqi <= 300) {
        return '🟣 Very Unhealthy'
      } else if (this.aqi >= 301) {
        return '💀 Hazardous'
      }
    },
    generateAllTrailsURL () {
      const formattedCity = this.city.toLowerCase()
      const formattedState = this.state.toLowerCase()
      return `https://www.alltrails.com/us/${formattedState}/${formattedCity}`
    }
  }
}
</script>

<style src='./Card.css'></style>