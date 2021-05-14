<template>
  <div>
    <!-- <p>{{debug(cities)}}</p> -->
    <Header />
    <Form
      :cities="cities"
      :states="states"
      v-on:updateState="retrieveCities"
    />
    <Container :locations="locations" />
  </div>
</template>

<script>
import Header from '../Header/Header'
import Form from '../Form/Form'
import Container from '../Container/Container'
import data from '../../data/location-data'
import fetchAPI from '../../fetchAPI'

export default {
  name: 'App',
  components: {
    Header,
    Form,
    Container
  },
  data: () => ({
    locations: data.locationData,
    cities: [],
    states: []
  }),
  mounted: function () {
    this.$nextTick(function () {
      fetchAPI.getStates().then(data => {
        this.states = data.data
      })
    })
  },
  methods: {
    retrieveCities (state) {
      fetchAPI.getCities(state).then(data => {
        this.cities = data.data
      })
    },
    debug (input) {
      console.log(input)
    }
  }
}
</script>

<style src='./App.css'></style>