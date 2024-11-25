<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  components: {
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

body {
  /* font-family: var(--font-family-monospace); */
  font-display: var(--font-family-monospace);
  font-weight: 300 !important;
  margin: 0;
  padding: 0;
}

/* custom toast style */
.v-toast.v-toast--bottom {
  margin-right: 10px;
}
</style>