<template>
  <div class="main text-center">
    <div class="container my-5">
      <h1 class="mb-5">Главная страница</h1>
      <div class="hrefs__container mx-auto">
        <div class="hrefs__item">
          <router-link :to="{ name: 'appSnow' }" class="href w-100">
            Перейти на страницу снега
          </router-link>
        </div>
        <div class="hrefs__item">
          <router-link :to="{ name: 'appTest' }" class="href w-100">
            Перейти на страницу теста
          </router-link>
        </div>
        <div class="hrefs__item">
          <router-link :to="{ name: 'appBuffer' }" class="href w-100">
            Перейти на страницу буфера
          </router-link>
        </div>
        <div class="hrefs__item">
          <router-link :to="{ name: 'appFunnyImage' }" class="href w-100">
            Перейти на страницу картинки
          </router-link>
        </div>
        <div class="hrefs__item">
          <router-link :to="{ name: 'appGames' }" class="href w-100">
            Перейти на страницу игр
          </router-link>
        </div>
        <div class="hrefs__item">
          <router-link :to="{ name: 'appPlace' }" class="href w-100">
            Узнать местоположение
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "./scss/variables/_variables.scss";
.goToMain {
  padding: 10px 20px;
  color: #fff !important;
  text-decoration: none;
  background-color: blue;
  box-shadow: 0 0 25px #fff inset;
  border-radius: 10px;
  display: inline-block;
  overflow: hidden;
  z-index: 10;
  opacity: 0.5;
  transition: $transitionStandart;
  position: absolute;
  top: 5px;
  left: 5px;
  &:hover {
    opacity: 1;
  }
}
.hrefs__container {
  max-width: max-content;
  .hrefs__item {
    margin-bottom: 10px;
    .href {
      text-decoration: none;
      display: block;
      padding: 10px 30px;
      background: $hrefBgColor;
      border-radius: 10px;
      color: $hrefColor;
      transition: $transitionStandart;

      &:hover {
        background: $hrefBgColor - #555;
        color: $hrefColor - #555;
      }
    }
  }
}
</style>
