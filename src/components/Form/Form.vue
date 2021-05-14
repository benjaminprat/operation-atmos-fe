<template>
  <form class="form">
    <input
      class="button"
      type="submit"
      name="nearestLocation"
      value="Nearest Location"
      v-on:click.prevent="findNearestLocation">
    <select
      class="dropdown"
      id="dropdown-states"
      @change="selectState"
      aria-label="dropdown to select a state">
      <option selected disabled>Choose a State</option>
      <option
        v-for="(state, index) in states"
        :key="index"
        :value="state.state">
        {{state.state}}
      </option>
    </select>
    <select
      class="dropdown"
      id="dropdown-cities"
      @change="selectCity"
      aria-label="dropdown to select a city"
      disabled>
      <option selected disabled>Choose a City</option>
      <option
        v-for="(city, index) in cities"
        :key="index"
        :value="city.city">
        {{city.city}}
      </option>
    </select>
    <p class="error-message">{{ dropdownErrorMessage }}</p>
    <input
      class="button"
      id="submit"
      type="submit"
      name="submit"
      value="Submit"
      v-on:click.prevent="submitLocation"
      disabled>
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
      document.getElementById('dropdown-cities').selectedIndex = null
      document.getElementById('dropdown-cities').removeAttribute('disabled')
    },
    selectCity (dropdown) {
      if (!this.selectedState) {
        document.getElementById('dropdown-cities').setAttribute('disabled', 'true')
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
      document.getElementById('submit').setAttribute('disabled', 'true')
    },
    resetCitiesDropdown () {
      this.selectedCity = ''
      document.getElementById('dropdown-cities').selectedIndex = null
      document.getElementById('dropdown-cities').setAttribute('disabled', 'true')
    },
    resetStatesDropdown () {
      this.selectedState = ''
      document.getElementById('dropdown-states').selectedIndex = null
    }
  }
}
</script>

<style src='./Form.css'></style>