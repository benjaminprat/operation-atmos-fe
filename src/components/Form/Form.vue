<template>
  <form class="form">
    <input class="button" type="submit" name="nearestLocation" value="Nearest Location" v-on:click.prevent="findNearestLocation">
    <label for="states">States:</label>
    <select class="dropdown" id="dropdown-states" @change="selectState">
      <option selected disabled>Choose a State</option>
      <option
        v-for="(state, index) in states"
        :key="index"
        :value="state.state"
      >{{state.state}}</option>
    </select>
    <label for="cities">Cities:</label>
    <select class="dropdown" id="dropdown-cities" @change="selectCity" disabled>
      <option selected disabled>Choose a City</option>
      <option
        v-for="(city, index) in cities"
        :key="index"
        :value="city.city"
      >{{city.city}}</option>
    </select>
    <p>{{ dropdownErrorMessage }}</p>
    <input class="button" type="submit" name="submit" value="Submit" id="submit" v-on:click.prevent="submitLocation" disabled>
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
    findNearestLocation () {
      this.$emit('findNearest')
    },
    selectState (dropdown) {
      this.selectedState = dropdown.target.value
      this.$emit('updateState', this.selectedState)
      document.getElementById('dropdown-cities').removeAttribute('disabled')
    },
    selectCity (dropdown) {
      if (!this.selectedState) {
        document.getElementById('dropdown-cities').setAttribute('disabled')
      } else {
        this.selectedCity = dropdown.target.value
        document.getElementById('submit').removeAttribute('disabled')
      }
    },
    submitLocation () {
      const location = { state: this.selectedState, city: this.selectedCity }
      this.$emit('updateLocale', location)
      this.resetCitiesDropdown()
      this.resetStatesDropdown()
    },
    resetCitiesDropdown () {
      this.selectCity = ''
      document.getElementById('dropdown-cities').selectedIndex = null
    },
    resetStatesDropdown () {
      this.selectState = ''
      document.getElementById('dropdown-states').selectedIndex = null
    }
  }
}
</script>

<style src='./Form.css'></style>