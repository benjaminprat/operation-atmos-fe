<template>
  <div class="main">
    <Header />
    <Form
      :cities="cities"
      :states="states"
      v-on:updateState="retrieveCities"
      v-on:updateLocale="retrieveLocale"
      v-on:findNearest="retrieveCurrent"
    />
    <Container
      :locations="locations"
      v-on:removeCard="removeLocation"
    />
  </div>
</template>

<script>
import Header from '../Header/Header'
import Form from '../Form/Form'
import Container from '../Container/Container'
import fetchAPI from '../../fetchAPI'

export default {
  name: 'App',
  components: {
    Header,
    Form,
    Container
  },
  data: () => ({
    locations: [],
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
    retrieveLocale (location) {
      fetchAPI.getLocale(location.city, location.state).then(data => {
        data.data.id = Date.now()
        this.locations.push(data.data)
      })
    },
    retrieveCurrent () {
      fetchAPI.getCurrent().then(data => {
        data.data.id = Date.now()
        this.locations.unshift(data.data)
      })
    },
    removeLocation (id) {
      const thisLocation = this.locations.find(location => {
        return location.id === parseInt(id)
      })
      const thisLocationIndex = this.locations.indexOf(thisLocation)
      this.locations.splice(thisLocationIndex, 1)
    }
  }
}
</script>

<style src='./App.css'></style>