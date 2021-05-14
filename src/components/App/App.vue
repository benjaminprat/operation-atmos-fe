<template>
  <div>
    <!-- <p>{{debug(cities)}}</p> -->
    <Header />
    <Form :cities="cities" :states="states" />
    <Container :locations="locations" />
  </div>
</template>

<script>
import Header from '../Header/Header'
import Form from '../Form/Form'
import Container from '../Container/Container'
import data from '../../data/location-data'

export default {
  name: 'App',
  components: {
    Header,
    Form,
    Container
  },
  data: () => ({
    locations: data.locationData,
    cities: data.cityData.data,
    states: data.stateData.data
  }),
  methods: {
    debug (input) {
      console.log(input)
    }
  }
}
</script>

<style src='./App.css'></style>