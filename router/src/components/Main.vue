<template>
  <div class="main">
    <h1>Главная страница</h1>
    <router-link :to="{ name: 'appSnow' }"
      >Перейти на страницу снега</router-link
    >
  </div>
</template>

<script>
export default {
  name: "Main",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
