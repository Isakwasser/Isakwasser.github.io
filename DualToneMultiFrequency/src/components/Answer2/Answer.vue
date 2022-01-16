<template>
  <div class="container answer">
    <div class="row g-3 align-items-center">
      <div class="col-auto">
        <label class="col-form-label">Выберите частоту дискретизации:</label>
      </div>
      <div class="col-auto">
        <select
          class="form-select"
          aria-label="Default select example"
          v-model="sampleRate"
        >
          <option value="5909">5910</option>
          <option value="10000">10000</option>
          <option value="44000">44000</option>
        </select>
      </div>
    </div>
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
    <button @click="$emit('clearHistory')" class="btn btn-warning">
      Очистить
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
      sampleRate: 10000,
    };
  },
  methods: {
    soundAll() {
      if (
        (!this.previousAllTime || Date.now() - this.previousAllTime > 1000) &&
        this.wasClicked.length
      ) {
        this.previousAllTime = Date.now();
        soundAllMelody(this.wasClicked, 0, {
          sampleRate: +this.sampleRate || 10000,
          latencyHint: "interactive",
        });
      }
    },
  },
  watch: {
    wasClicked() {
      if (this.wasClicked.length) {
        sound(this.wasClicked[this.wasClicked.length - 1] + "", {
          sampleRate: +this.sampleRate || 10000,
          latencyHint: "interactive",
        });
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