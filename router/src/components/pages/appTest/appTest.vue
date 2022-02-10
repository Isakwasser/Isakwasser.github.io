<template>
  <div class="app-snow" :style="{ backgroundImage: `url(${currentBgUrl})` }">
    <router-link :to="{ name: 'Main' }" class="goToMain">
      Перейти на главную
    </router-link>
  </div>
</template>

<script src="./appTest.js">
</script>

<style lang="scss" src="./appTest.scss">
</style>