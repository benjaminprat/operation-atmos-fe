<template>
  <article class="location-card">
    <h2>{{ locale }}</h2>
    <!-- <img src="../../assets/01d.png" class="weather-icon"> -->
    <h3>Weather</h3>
    <p>{{ temperature }}°F</p>
    <p>Wind Speed: {{ windSpeed }}mph</p>
    <p>Humidity: {{ humidity }}%</p>
    <h3>Air Quality</h3>
    <p>{{ aqi }} AQI</p>
    <div v-if="aqi <= 50">
      🟢 Good
    </div>
    <div v-else-if="aqi >= 51 && aqi <= 100">
      🟡 Moderate
    </div>
    <div v-else-if="aqi >= 101 && aqi <= 150">
      🟠 Unhealthy for Sensitive Groups
    </div>
    <div v-else-if="aqi >= 151 && aqi <= 200">
      🔴 Unhealthy
    </div>
    <div v-else-if="aqi >= 201 && aqi <= 300">
      🟣 Very Unhealthy
    </div>
    <div v-else-if="aqi >= 301">
      💀 Hazardous
    </div>
    <p>{{ timeStamp }}</p>
  </article>
</template>

<script>
export default {
  name: 'Card',
  props: {
    temperature: Number,
    locale: String,
    aqi: String,
    windSpeed: Number,
    humidity: String,
    timeStamp: String
  }
}
</script>

<style src='./Card.css'></style>