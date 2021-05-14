<template>
  <section class="container">
    <Card
      v-for="(location, index) in locations"
      :key="index"
      :temperature="formatTemp(location)"
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
    }

  }
}
</script>

<style src='./Container.css'></style>