<template>
  <NavigationBar />
  <main class="main" id="main">
    <router-view />
  </main>
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue'

export default {
  components: {
    NavigationBar
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main {
  margin-top: 100px;

  @media (min-width: 800px) {
    margin-left: auto;
    margin-right: auto;
    max-width: 800px;
  }
}
</style>
