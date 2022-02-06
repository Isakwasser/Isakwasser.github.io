<template>
  <div class="app404">
    <div class="box text-center">
      <h1 class="title">ОШИБКА 404</h1>
      <h5 class="undertitle">Страницы не существует</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "app404",
};
</script>

<style lang="scss">
.app404 {
  width: 100vw;
  height: 100vh;
  background-color: #fbb;
  background: radial-gradient(#f99, #f99fff);
  .box {
    position: absolute;
    top: 50vh;
    left: 50vw;
    transform: translate(-50%, -50%);
  }
}
</style>