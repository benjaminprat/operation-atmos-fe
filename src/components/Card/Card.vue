<template>
  <article class="location-card" :id="id">
    <div class="button-delete-container">
      <button class="card-button button-delete" type="button" name="button" v-on:click.prevent="deleteCard">X</button>
    </div>
    <h2>{{ formatLocation() }}</h2>
    <!-- <img :src="require(`../../assets/${formatWeatherIcon()}.png`)" class="weather-icon"> -->
    <h3>Weather</h3>
    <p>{{ temperature }}°F</p>
    <p>Wind Speed: {{ windSpeed }}mph</p>
    <p>Humidity: {{ humidity }}%</p>
    <hr>
    <h3>Air Quality</h3>
    <div>
      <div class="aqi-message" v-if="aqi <= 50">
        <div
          class="aqi-circle"
          style="
            background: linear-gradient(145deg, #23d284, #1eb06f);
            box-shadow: 10px 10px 20px #1ca769,
            -10px -10px 20px #26e18d;">
          <p>AQI: {{ aqi }}</p>
        </div>
        <p class="aqi-rating"><b>Good </b>
          <a href="https://www.airnow.gov/aqi-and-health/" target="_blank">
            <img src="https://img.icons8.com/metro/16/000000/info.png"/>
          </a>
        </p>
        <p class="aqi-text">It's a great day to be active outside!</p>
      </div>
      <div class="aqi-message" v-else-if="aqi >= 51 && aqi <= 100">
        <div
          class="aqi-circle"
          style="
            background: linear-gradient(145deg, #ffdd29, #dbba22);
            box-shadow:  10px 10px 20px #cfb020,
            -10px -10px 20px #ffee2c;">
          <p>AQI: {{ aqi }}</p>
        </div>
        <p class="aqi-rating"><b>Moderate </b>
          <a href="https://www.airnow.gov/aqi-and-health/" target="_blank">
            <img src="https://img.icons8.com/metro/16/000000/info.png"/>
          </a>
        </p>
        <p class="aqi-text">It's a good day to be active outside! People who are unusually sensitive to air pollution could have symptoms.</p>
      </div>
      <div class="aqi-message" v-else-if="aqi >= 101 && aqi <= 150">
        <div
          class="aqi-circle"
          style="
            background: linear-gradient(145deg, #ff7e23, #e66a1e);
            box-shadow:  10px 10px 20px #d9641c,
            -10px -10px 20px #ff8826;">
          <p>AQI: {{ aqi }}</p>
        </div>
        <p class="aqi-rating"><b>Unhealthy for Sensitive Groups </b>
          <a href="https://www.airnow.gov/aqi-and-health/" target="_blank">
            <img src="https://img.icons8.com/metro/16/000000/info.png"/>
          </a>
        </p>
        <p class="aqi-text">It's OK to be active outside for short durations. For longer activities, take more breaks and lower the intensity. 	Members of sensitive groups may experience health effects. Watch for symptoms and take action as needed.</p>
      </div>
      <div class="aqi-message" v-else-if="aqi >= 151 && aqi <= 200">
        <div
          class="aqi-circle"
          style="
            background: linear-gradient(145deg, #e42c88, #c02572);
            box-shadow:  10px 10px 20px #b5236c,
            -10px -10px 20px #f52f92;">
          <p>AQI: {{ aqi }}</p>
        </div>
        <p class="aqi-rating"><b>Unhealthy </b>
          <a href="https://www.airnow.gov/aqi-and-health/" target="_blank">
            <img src="https://img.icons8.com/metro/16/000000/info.png"/>
          </a>
        </p>
        <p class="aqi-text">For all outdoor activities, take more breaks and lower the intensity. Consider moving longer or more intense activities indoors or rescheduling them to another day or time. Some members of the general public may experience health effects; members of sensitive groups may experience more serious health effects.</p>
      </div>
      <div class="aqi-message" v-else-if="aqi >= 201 && aqi <= 300">
        <div
          class="aqi-circle"
          style="
            background: linear-gradient(145deg, #7e1ee3, #6a19bf);
            box-shadow:  10px 10px 20px #6418b4,
            -10px -10px 20px #8820f4;">
          <p>AQI: {{ aqi }}</p>
        </div>
        <p class="aqi-rating"><b>Very Unhealthy </b>
          <a href="https://www.airnow.gov/aqi-and-health/" target="_blank">
            <img src="https://img.icons8.com/metro/16/000000/info.png"/>
          </a>
        </p>
        <p class="aqi-text">Health alert: The risk of health effects is increased for everyone. Move all activities indoors or reschedule them to another day.</p>
      </div>
      <div class="aqi-message" v-else-if="aqi >= 301">
        <div
          class="aqi-circle"
          style="
            background: linear-gradient(145deg, #880225, #720220);
            box-shadow:  10px 10px 20px #6c021e,
            -10px -10px 20px #920228;">
          <p>AQI: {{ aqi }}</p>
        </div>
        <p class="aqi-rating"><b>Hazardous </b>
          <a href="https://www.airnow.gov/aqi-and-health/" target="_blank">
            <img src="https://img.icons8.com/metro/16/000000/info.png"/>
          </a>
        </p>
        <p class="aqi-text">Health warning of emergency conditions: everyone is more likely to be affected.</p>
      </div>
    </div>
    <hr>
    <button class="button-allTrails" type="button" name="button">
      <a :href="generateAllTrailsURL()" target="_blank" class="button-allTrails-text">Plan an activity in {{ city }} on AllTrails</a>
    </button>
    <hr>
    <p class="timeStamp">Last Update: {{ timeStamp }}
      <button class="card-button button-refresh" type="button" name="button" v-on:click.prevent="refreshLocation">Refresh</button>
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
    generateAllTrailsURL () {
      const formattedCity = this.city.toLowerCase()
      const formattedState = this.state.toLowerCase()
      return `https://www.alltrails.com/us/${formattedState}/${formattedCity}`
    }
  }
}
</script>

<style src='./Card.css'></style>