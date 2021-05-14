<template>
  <section class="container">
    <Card
      v-for="(location, index) in locations"
      :key="index"
      :temperature="formatTemp(location)"
      :locale="formatLocation(location)"
      :aqi="location.current.pollution.aqius"
      :windSpeed="formatWindSpeed(location)"
      :humidity="location.current.weather.hu"
      :timeStamp="formatTimeStamp(location)"
      :weatherIconSrc="location.current.weather.ic"
      />
  </section>
</template>

<script>
import Card from '../Card/Card'

export default {
  name: 'Container',
  components: {
    Card
  },
  props: {
    locations: Array
  },
  methods: {

    formatTemp: function (location) {
      const temperature = location.current.weather.tp
      return (temperature * 9 / 5 + 32)
    },

    formatLocation: function (location) {
      return `${location.city}, ${location.state}`
    },

    formatWindSpeed: function (location) {
      const windSpeed = location.current.weather.ws
      return parseInt((windSpeed * 2.237).toFixed(2))
    },

    formatTimeStamp: function (location) {
      const timeStamp = location.current.weather.ts
      const date = new Date(timeStamp)
      return (date.toDateString() + ' ' + date.toLocaleTimeString())
    }

  }
}
</script>

<style src='./Container.css'></style>