<template>
  <form class="form">
    <input class="button" type="submit" name="nearestLocation" value="Nearest Location" v-on:click.prevent="findNearestLocation">
    <label for="states">States:</label>
    <select class="dropdown" id="states" @change="selectState">
      <option selected disabled>Choose a State</option>
      <option
        v-for="(state, index) in states"
        :key="index"
        :value="state.state"
      >{{state.state}}</option>
    </select>
    <label for="cities">Cities:</label>
    <select class="dropdown" id="cities" @change="selectCity">
      <option selected disabled>Choose a City</option>
      <option
        v-for="(city, index) in cities"
        :key="index"
        :value="city.city"
      >{{city.city}}</option>
    </select>
    <p>{{ dropdownErrorMessage }}</p>
    <input class="button" type="submit" name="submit" value="Submit" v-on:click.prevent="submitLocation">
  </form>
</template>

<script>
export default {
  name: 'Form',
  props: {
    cities: Array,
    states: Array,
    dropdownErrorMessage: String
  },
  data: () => ({
    selectedState: '',
    selectedCity: ''
  }),
  methods: {
    selectState (dropdown) {
      this.selectedState = dropdown.target.value
      this.$emit('updateState', this.selectedState)
    },
    selectCity (dropdown) {
      this.selectedCity = dropdown.target.value
    },
    submitLocation () {
      const location = { state: this.selectedState, city: this.selectedCity }
      this.$emit('updateLocale', location)
    },
    findNearestLocation () {
      this.$emit('findNearest')
    }
  }
}
</script>

<style src='./Form.css'></style>