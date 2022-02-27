<template>
  <div class="app-2048">
    <div class="block text-center my-5">
      <h2 class="header">2048: {{ score }}</h2>
      <h3>Best score: {{ best2048score }}</h3>
    </div>
    <div class="game__square mx-auto">
      <div
        class="game__cell ratio ratio-1x1"
        v-for="(el, i) in currentPosition"
        :key="i"
        :style="{
          backgroundColor: bgColor[i],
        }"
      >
        <span class="game__value">{{ el.value }}</span>
      </div>
    </div>
    <div class="mx-auto d-table mt-3">
      <button @click="goDown">goDown</button>
      <button @click="goUp">goUp</button>
      <button @click="goLeft">goLeft</button>
      <button @click="goRight">goRight</button>
      <button @click="initGame">New Game</button>
    </div>
  </div>
</template>

<style lang="scss" src="./app2048.scss">
</style>

<script src="./app2048.js">
</script>