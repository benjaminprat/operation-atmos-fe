<template>
  <form class="">
    <select class="" name="">
      <option>Choose a State</option>
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
    cities: Array
  }
}
</script>

<style src='./Form.css'></style>