<template>
  <div id="app">
    <div class="form-check float-end">
      <input
        class="form-check-input"
        type="checkbox"
        value=""
        v-model="showUpdated"
        id="flexCheckDefault"
      />
      <label class="form-check-label" for="flexCheckDefault">
        Показать другие значения
      </label>
    </div>
    <div v-if="!showUpdated">
      <app-interaction :datatable="datatable" v-on:wasClicked="clickButton">
      </app-interaction>
      <app-answer
        :wasClicked="wasClicked"
        @clearHistory="clearClickHistory"
      ></app-answer>
    </div>
    <div v-else>
      <app-interaction2 :datatable="datatable" v-on:wasClicked="clickButton">
      </app-interaction2>
      <app-answer2
        :wasClicked="wasClicked"
        @clearHistory="clearClickHistory"
      ></app-answer2>
    </div>
  </div>
</template>

<script>
// components
import Interaction from "./components/Interaction/Interaction.vue";
import Answer from "./components/Answer/Answer.vue";
import Interaction2 from "./components/Interaction2/Interaction.vue";
import Answer2 from "./components/Answer2/Answer.vue";
// input data container
import dataJSON from "./assets/data-tongenerator.json";

export default {
  name: "app",
  components: {
    "app-interaction": Interaction,
    "app-answer": Answer,
    "app-interaction2": Interaction2,
    "app-answer2": Answer2,
  },
  data() {
    return {
      datatable: dataJSON.table,
      wasClicked: [],
      showUpdated: false,
    };
  },
  methods: {
    clickButton(value) {
      if (value >= 0 && value <= 9) {
        this.wasClicked.push(value);
      }
    },
    clearClickHistory() {
      this.wasClicked.splice(0, this.wasClicked.length);
      document.getElementById("graph").innerHTML = "";
    },
  },
};
</script>

<style lang="scss">
#app {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  // background-color: #999;
}
</style>
