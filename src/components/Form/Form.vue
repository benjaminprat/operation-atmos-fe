<template>
  <form class="">
    <select class="" name="" @change="selectState">
      <option>Choose a State</option>
      <option
        v-for="(state, index) in states"
        :key="index"
        :value="state.state"
      >{{state.state}}</option>
    </select>
    <select class="" name="">
      <option>Choose a City</option>
      <option
        v-for="(city, index) in cities"
        :key="index"
        :value="city.city"
      >{{city.city}}</option>
    </select>
    <input type="submit" name="submit" value="Submit">
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
    selectedState: 'Choose a State'
  }),
  methods: {
    selectState (dropdown) {
      this.selectedState = dropdown.target.value
      this.$emit('updateState', this.selectedState)
    }
  }
}
</script>

<style src='./Form.css'></style>