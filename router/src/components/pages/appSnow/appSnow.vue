<template>
  <div class="app-snow" :style="{ backgroundImage: `url(${currentBgUrl})` }">
    <router-link :to="{ name: 'Main' }" class="goToMain"
      >Перейти на главную</router-link
    >
    <div
      class="snowflake"
      v-for="(el, i) in Snowflake.items"
      v-bind:key="i"
      :style="{
        top: `${el.positionY}px`,
        left: `${el.positionX}px`,
        transform: `rotate(${el.rotateAngle}deg) scaleX(${el.scaleX})`,
        transition: el.transition,
        opacity: el.opacity,
        backgroundImage: `url(${el.image})`,
      }"
    ></div>
  </div>
</template>

<script src="./appSnow.js">
</script>

<style lang="scss" src="./appSnow.scss">
</style>