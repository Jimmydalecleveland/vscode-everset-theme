<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<template>
  <button @click="count++">Count is: {{ count }}</button>
</template>

<style scoped>
#app {
  font-family: Cartograph Mono CF, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  font-weight: bold;
}
</style>
