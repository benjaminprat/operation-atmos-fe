<template>
  <div>
    <Header />
    <Form />
  </div>
</template>

<script>
import './App.css'
import Header from '../Header/Header'
import Form from '../Form/Form'

export default {
  name: 'App',
  components: {
    Header,
    Form
  }
}
</script>