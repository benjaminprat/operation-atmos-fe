<template>
  <section class="container">
    <Card
      v-for="(location, index) in locations"
      :key="index"
      :temperature="formatTemp(location)"
      :locale="formatLocation(location)"
      :aqi="location.data.current.pollution.aqius"
      :windSpeed="formatWindSpeed(location)"
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
      const temperature = location.data.current.weather.tp
      return (temperature * 9 / 5 + 32)
    },

    formatLocation: function (location) {
      return `${location.data.city}, ${location.data.state}`
    },

    formatWindSpeed: function (location) {
      const windSpeed = location.data.current.weather.ws
      return parseInt((windSpeed * 2.237).toFixed(2))
    }

  }
}
</script>

<style src='./Container.css'></style>