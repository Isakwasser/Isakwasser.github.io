<template>
  <div class="appOnProduction">
    <router-link :to="{ name: 'Main' }" class="goToMain"
      >Перейти на главную</router-link
    >
    <div class="box text-center">
      <h1 class="title">Страница в разработке</h1>
      <h5 class="undertitle">Возможно она появится в ближайшем будущем?</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "appOnProduction",
};
</script>

<style lang="scss">
.appOnProduction {
  width: 100vw;
  height: 100vh;
  background-color: #bbf;
  background: radial-gradient(#bbf, #9ffff9);
  .box {
    position: absolute;
    top: 50vh;
    left: 50vw;
    transform: translate(-50%, -50%);
  }
}
</style>