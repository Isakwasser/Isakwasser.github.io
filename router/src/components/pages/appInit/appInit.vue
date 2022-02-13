<template>
  <div class="app-init">
    <div class="form">
      <h3 class="form__title d-flex align-items-center justify-content-center">
        Выберите цвет
        <span
          class="check_btn form__item"
          :style="{ backgroundColor: correctOption }"
        ></span>
      </h3>
      <div class="row">
        <div
          v-for="(el, i) in options"
          class="form__item d-flex align-items-center justify-content-center"
          :key="i"
          :style="{
            backgroundColor: el.color,
          }"
          @click="checkClick(el.color)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "appInit",
  data() {
    return {
      numOfOptions: 3,
      options: [],
      correctOption: "",
    };
  },
  methods: {
    getRandomColor() {
      let str = "0123456789ABCDEFG";
      let ans = "";
      for (let i = 0; i < 6; i++) {
        ans += str[Math.floor(Math.random() * str.length)];
      }
      return "#" + ans;
    },
    checkClick(color) {
      if (color == this.correctOption) {
        console.log("true");
        this.$router.push({ name: "Main" });
      } else {
        console.log("false");
        this.updateOptions();
      }
    },
    updateOptions() {
      this.options = [];
      for (let i = 0; i < this.numOfOptions; i++) {
        this.options.push({
          color: this.getRandomColor(),
        });
      }
      this.correctOption =
        this.options[Math.floor(Math.random() * this.options.length)].color;
    },
  },
  created() {
    this.updateOptions();
  },
};
</script>

<style lang="scss">
.app-init {
  width: 100vw;
  height: 100vh;
  .form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .form__item {
      width: 30px;
      height: 30px;
      margin: 5px;
      border-radius: 5px;
      border: 1px solid #555;
    }
  }
}
</style>