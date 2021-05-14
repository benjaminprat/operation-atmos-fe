<template>
  <section class="container">
    <Card
      v-for="(location, index) in locations"
      :key="index"/>
  </section>
</template>

<script>
import Card from '../Card/Card'

export default {
  name: 'Container',
  components: {
    Card
  },
  props: {
    locations: Array
  }
}
</script>

<style src='./Container.css'></style>