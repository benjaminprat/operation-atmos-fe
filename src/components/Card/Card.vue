<template>
  <article class="location-card" :id="id">
    <div class="button-container">
      <button class="button button-refresh" type="button" name="button" v-on:click.prevent="refreshLocation">🔄</button>
      <button class="button" type="button" name="button" v-on:click.prevent="deleteCard">X</button>
    </div>
    <h2>{{ locale }}</h2>
    <!-- <img :src="require(`../../assets/${formatWeatherIcon()}.png`)" :alt="weatherIconAlt" class="weather-icon"> -->
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
  data: () => ({
    weatherIcons: [
      { id: '01d', desc: 'Clear skies sunny weather icon' },
      { id: '01n', desc: 'Clear skies moon weather icon' },
      { id: '02d', desc: 'Few clouds sun weather icon' },
      { id: '02n', desc: 'Few clounds moon weather icon' },
      { id: '03d', desc: 'Scattered clouds weather icon' },
      { id: '04d', desc: 'Broken clouds weather icon' },
      { id: '09d', desc: 'Shower rain weather icon' },
      { id: '10d', desc: 'Rainy day weather icon' },
      { id: '10n', desc: 'Rainy night weather icon' },
      { id: '11d', desc: 'Thunderstorm weather icon' },
      { id: '13d', desc: 'Snow weather icon' },
      { id: '50d', desc: 'Misty Weather Icon' }
    ],
    weatherIconAlt: ''
  }),
  methods: {
    formatWeatherIcon () {
      const foundIcon = this.weatherIcons.find(icon => {
        return icon.id === this.weatherIconSrc
      })

      if (foundIcon) {
        this.weatherIconAlt = foundIcon.desc
        return this.weatherIconSrc
      } else if (!foundIcon) {
        const nums = this.weatherIcons.find(icon => {
          this.weatherIconAlt = icon.desc
          return this.weatherIconSrc.slice(0, 2) === icon.id.slice(0, 2)
        })
        return nums
      } else if (this.weatherIconSrc.includes('n')) {
        return this.weatherIcons[1]
      } else {
        return this.weatherIcons[0]
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