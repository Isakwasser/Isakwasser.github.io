<template>
  <div class="container answer">
    <h1>Введенные данные:</h1>
    <h2 class="clicked">
      <span v-for="(el, i) in wasClicked" :key="i">{{ el }}</span>
    </h2>
    <button
      @click="soundAll"
      :disabled="!wasClicked.length"
      class="btn btn-success"
    >
      Играть мелодию
    </button>
  </div>
</template>

<script>
// function to sound one note
import sound from "./sound";
// function to sound melody
import soundAllMelody from "./soundAllMelody";

export default {
  props: ["wasClicked"],
  data() {
    return {};
  },
  methods: {
    soundAll() {
      if (this.wasClicked.length) {
        soundAllMelody(this.wasClicked);
      }
    },
  },
  watch: {
    wasClicked() {
      if (this.wasClicked.length) {
        sound(this.wasClicked[this.wasClicked.length - 1] + "");
      }
    },
  },
};
</script>

<style lang="scss">
.answer {
  .clicked {
    &::before {
      content: "[";
    }
    &::after {
      content: "]";
    }
    span {
      &::after {
        content: ", ";
      }
      &:last-child {
        color: red;
        font-size: larger;

        &::after {
          content: "";
        }
      }
    }
  }
}
</style>