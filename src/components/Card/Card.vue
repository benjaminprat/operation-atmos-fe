<template>
  <article class="location-card">
    <h2>Denver, CO</h2>
    <!-- <img src="../../assets/01d.png" class="weather-icon"> -->
    <h3>Weather</h3>
    <p>{{ temperature }}</p>
    <h3>AirQ</h3>
  </article>
</template>

<script>
export default {
  name: 'Card',
  props: {
    temperature: Number
  }
}
</script>

<style src='./Card.css'></style>