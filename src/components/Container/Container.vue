<template>
  <section class="container">
    <Card
      v-for="location in locations"
      :key="location.id"
      :id="location.id"
      :temperature="formatTemp(location)"
      :city="location.city"
      :state="location.state"
      :windSpeed="formatWindSpeed(location)"
      :timeStamp="formatTimeStamp(location)"
      :aqi="location.current.pollution.aqius"
      :humidity="location.current.weather.hu"
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
    formatTemp (location) {
      const temperature = location.current.weather.tp
      return parseFloat((temperature * 9 / 5 + 32).toFixed(1))
    },
    formatWindSpeed (location) {
      const windSpeed = location.current.weather.ws
      return parseFloat((windSpeed * 2.237).toFixed(1))
    },
    formatTimeStamp (location) {
      const timeStamp = location.current.weather.ts
      const date = new Date(timeStamp)
      return (date.toDateString() + ' ' + date.toLocaleTimeString())
    }
  }
}
</script>

<style src='./Container.css'></style>