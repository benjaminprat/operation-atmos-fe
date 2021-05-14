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
      v-on:refreshLocale="retrieveLocale"
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
      this.retrieveLocalStorage()
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
      fetchAPI.getLocale(location.city, location.state).then(value => {
        value.data.id = Date.now()
        this.checkExistingLocations(value.data)
        this.updateLocalStorage()
      })
    },
    retrieveCurrent () {
      fetchAPI.getCurrent().then(location => {
        location.data.id = Date.now()
        this.checkExistingLocations(location.data)
        this.updateLocalStorage()
      })
    },
    removeLocation (id) {
      const thisLocation = this.locations.find(location => {
        return location.id === parseInt(id)
      })
      const thisLocationIndex = this.locations.indexOf(thisLocation)
      this.locations.splice(thisLocationIndex, 1)
      this.updateLocalStorage()
    },
    checkExistingLocations (newLocation) {
      const foundLocation = this.locations.find(location => {
        return location.city === newLocation.city && location.state === newLocation.state
      })
      if (foundLocation) {
        const foundLocationIndex = this.locations.indexOf(foundLocation)
        this.locations[foundLocationIndex] = newLocation
      } else {
        this.locations.push(newLocation)
      }
    },
    retrieveLocalStorage () {
      const saved = JSON.parse(localStorage.getItem('savedLocations'))

      if (saved.length > 0) {
        this.retrieveCurrent()
        this.locations = saved
      } else {
        this.locations = []
      }
    },
    updateLocalStorage () {
      const locationData = JSON.stringify(this.locations)
      localStorage.setItem('savedLocations', locationData)
    }
  }
}
</script>

<style src='./App.css'></style>