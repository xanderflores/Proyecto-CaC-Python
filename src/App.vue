<template>
  <div id="app">
    <PaginaIndex></PaginaIndex>
  </div>
</template>

<script>

import PaginaIndex from './Pages/PaginaIndex.vue';
export default {
  name: 'App',
  components: {
    
    PaginaIndex
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
