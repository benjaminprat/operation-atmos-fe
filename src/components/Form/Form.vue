<template>
  <form class="">
    <select class="" name="" @change="selectState">
      <option selected disabled>Choose a State</option>
      <option
        v-for="(state, index) in states"
        :key="index"
        :value="state.state"
      >{{state.state}}</option>
    </select>
    <select class="" name="" @change="selectCity">
      <option selected disabled>Choose a City</option>
      <option
        v-for="(city, index) in cities"
        :key="index"
        :value="city.city"
      >{{city.city}}</option>
    </select>
    <input type="submit" name="submit" value="Submit" v-on:click.prevent="submitLocation">
  </form>
</template>

<script>
export default {
  name: 'Form',
  props: {
    cities: Array,
    states: Array
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
    }
  }
}
</script>

<style src='./Form.css'></style>