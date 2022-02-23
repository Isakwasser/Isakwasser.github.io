<template>
  <div class="app-TicTacToe">
    <div class="block text-center my-5">
      <h2 class="header">Крестики-нолики</h2>
      <div class="gameTable mx-auto flex-wrap position-relative">
        <div class="d-flex flex-wrap">
          <div
            class="item"
            :style="{
              backgroundImage: state.bg,
            }"
            v-for="state in states"
            :key="state.i"
            @click="selectState(state.i)"
          >
            {{ state.text }}
          </div>
        </div>
        <div class="whoIsNext d-flex justify-content-between mt-3">
          <img
            class="whoIsNext__option"
            :src="require('@/assets/img/x.jpg')"
            @click="changePlayer(0)"
          />
          <img
            class="whoIsNext__arrow"
            :class="{
              'whoIsNext__arrow-rotate': nextStepIs != 0,
            }"
            :src="require('@/assets/img/arrow.png')"
            @click="changePlayer"
          />
          <img
            class="whoIsNext__option"
            :src="require('@/assets/img/0.jpeg')"
            @click="changePlayer(1)"
          />
        </div>
        <button class="btn btn-outline-danger btn-sm mt-3" @click="resetGame">
          Начать заново
        </button>
        <button class="btn btn-outline-dark btn-sm mt-3" @click="resetScore">
          Сбросить счет
        </button>
        <div
          class="position-absolute d-flex flex-wrap top-0 end-100 win_counter"
        >
          <img
            :src="require('@/assets/img/flag.jpg')"
            alt=""
            v-for="(el, i) in winners.x"
            :key="i"
          />
        </div>
        <div
          class="position-absolute d-flex flex-wrap top-0 start-100 win_counter"
        >
          <img
            :src="require('@/assets/img/flag.jpg')"
            alt=""
            v-for="(el, i) in winners.o"
            :key="i"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./appTicTacToe.scss">
</style>

<script src="./appTicTacToe.js">
</script>