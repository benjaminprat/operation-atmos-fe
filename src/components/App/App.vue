<template>
  <div>
    <Header />
    <Form />
    <Container />
  </div>
</template>

<script>
import './App.css'
import Header from '../Header/Header'
import Form from '../Form/Form'
import Container from '../Container/Container'

export default {
  name: 'App',
  components: {
    Header,
    Form,
    Container
  }
}
</script>