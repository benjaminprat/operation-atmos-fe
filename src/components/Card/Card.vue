<template>
  <article class="location-card">
    <h2>{{ locale }}</h2>
    <!-- <img src="../../assets/01d.png" class="weather-icon"> -->
    <h3>Weather</h3>
    <p>{{ temperature }}°F</p>
    <h3>Air Quality</h3>
    <p>{{ quality }} AQI</p>
  </article>
</template>

<script>
export default {
  name: 'Card',
  props: {
    temperature: Number,
    locale: String,
    quality: String
  }
}
</script>

<style src='./Card.css'></style>