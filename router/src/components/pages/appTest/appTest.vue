<template>
  <div class="app-test d-flex justify-content-center align-items-center">
    <router-link :to="{ name: 'Main' }" class="goToMain">
      Перейти на главную
    </router-link>
    <div class="quection__container container text-center" v-if="questions">
      <h2 class="question__title mb-5">
        {{ questions[currentQuestionIndex].question }}
      </h2>
      <div class="question__options d-flex flex-wrap justify-content-around">
        <div
          class="question__option"
          v-for="(el, i) in questions[currentQuestionIndex].options"
          :key="i"
          ref="options"
          @click="chooseOption(i)"
        >
          {{ el.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./appTest.js">
</script>

<style lang="scss" src="./appTest.scss">
</style>