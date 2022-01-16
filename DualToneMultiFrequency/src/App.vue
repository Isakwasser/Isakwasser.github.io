<template>
  <div id="app">
    <app-interaction :datatable="datatable" v-on:wasClicked="clickButton">
    </app-interaction>
    <app-answer
      :wasClicked="wasClicked"
      @clearHistory="clearClickHistory"
    ></app-answer>
  </div>
</template>

<script>
// components
import Interaction from "./components/Interaction/Interaction.vue";
import Answer from "./components/Answer/Answer.vue";
// input data container
import dataJSON from "./assets/data-tongenerator.json";

export default {
  name: "app",
  components: {
    "app-interaction": Interaction,
    "app-answer": Answer,
  },
  data() {
    return {
      datatable: dataJSON.table,
      wasClicked: [],
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
