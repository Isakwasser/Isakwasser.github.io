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
<style lang="scss">
.goToMain {
  padding: 10px 20px;
  color: #fff;
  text-decoration: none;
  background-color: blue;
  box-shadow: 0 0 25px #fff inset;
  border-radius: 10px;
  display: inline-block;
  overflow: hidden;
}
</style>
