<template>
  <div>
    <Header />
    <Form :cities="cities" />
    <Container />
  </div>
</template>

<script>
import './App.css'
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
    cities: data.cityData
  })
}
</script>