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
      ></option>
    </select>
    <input type="submit" name="submit" value="Submit">
  </form>
</template>

<script>
import './Form.css'

export default {
  name: 'Form',
  props: {
    cities: Object
  }
}
</script>