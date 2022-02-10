<template>
  <div class="app-test d-flex justify-content-center align-items-center">
    <router-link :to="{ name: 'Main' }" class="goToMain">
      Перейти на главную
    </router-link>
    <div class="quection__container container text-center" v-if="questions">
      <div class="d-flex justify-content-center">
        <transition name="trans">
          <h2 class="question__title mb-5" :key="currentQuestionIndex">
            {{ questions[currentQuestionIndex].question }}
          </h2>
        </transition>
      </div>
      <div class="question__options d-flex flex-wrap justify-content-between">
        <div
          v-for="(el, i) in questions[currentQuestionIndex].options"
          :key="i"
          class="question__option"
          :class="{
            wasClicked: el.wasClicked,
            'fail-choose': !el.isCorrect,
            'success-choose': el.isCorrect,
          }"
          :style="{
            animationDuration: el.animationDuration,
          }"
          ref="options"
          @click="chooseOption(i)"
        >
          <div class="d-flex justify-content-center">
            <transition name="transToBottom">
              <span :key="currentQuestionIndex">{{ el.text }}</span>
            </transition>
          </div>
        </div>
      </div>
      <div
        class="question__buttons d-flex justify-content-between mt-5"
        v-if="questions.length > 1"
      >
        <div class="questions__goBack">
          <button @click="goBackQuestion" ref="goBack">Назад</button>
        </div>
        <div class="questions__goForward">
          <button @click="goForwardQuestion" ref="goForward">Вперед</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./appTest.js">
</script>

<style lang="scss" src="./appTest.scss">
</style>