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
      Воспроизвести сигналы
    </button>
    <div id="graph"></div>
  </div>
</template>

<script>
// function to sound one note
import sound from "./sound";
// function to sound melody
import soundAllMelody from "./soundAllMelody";
// function to draw graph
import graph from "./graph";

export default {
  props: ["wasClicked"],
  data() {
    return {
      previousAllTime: undefined,
    };
  },
  methods: {
    soundAll() {
      if (
        (!this.previousAllTime || Date.now() - this.previousAllTime > 1000) &&
        this.wasClicked.length
      ) {
        this.previousAllTime = Date.now();
        soundAllMelody(this.wasClicked);
      }
    },
  },
  watch: {
    wasClicked() {
      if (this.wasClicked.length) {
        sound(this.wasClicked[this.wasClicked.length - 1] + "");
        graph(this.wasClicked[this.wasClicked.length - 1] + "");
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