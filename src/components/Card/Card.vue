<template>
  <article class="location-card" :id="id">
    <div class="button-container">
      <button class="button button-refresh" type="button" name="button" v-on:click.prevent="refreshLocation">🔄</button>
      <button class="button" type="button" name="button" v-on:click.prevent="deleteCard">X</button>
    </div>
    <h2>{{ locale }}</h2>
    <img :src="require(`../../assets/${formatWeatherIcon()}.png`)" class="weather-icon">
    <h3>Weather</h3>
    <p>{{ temperature }}°F</p>
    <p>Wind Speed: {{ windSpeed }}mph</p>
    <p>Humidity: {{ humidity }}%</p>
    <h3>Air Quality</h3>
    <p>{{ aqi }} AQI</p>
    <p>{{ determineAqiMessage() }}</p>
    <p>{{ timeStamp }}</p>
  </article>
</template>

<script>
export default {
  name: 'Card',
  props: {
    temperature: Number,
    locale: String,
    aqi: Number,
    windSpeed: Number,
    humidity: Number,
    timeStamp: String,
    weatherIconSrc: String,
    id: Number
  },
  methods: {
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
    }
  }
}
</script>

<style src='./Card.css'></style>