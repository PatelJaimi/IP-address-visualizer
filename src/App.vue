<template>
  <div id="app">
    <cidr></cidr>
  </div>
</template>

<script>
import cidr from './view/CIDR.vue'

export default {
  name: 'App',
  components: {
    cidr
  }
}
</script>

<style>
#app {
    background: #f5f5f5;
    width: 100%;
    height: 100vh;
}
</style>
