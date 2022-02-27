import Vue from "vue";

export default {
  name: "app2048",
  data() {
    return {
      score: 0,
      size: 5,
      currentPosition: [],
      best2048score: 0,
    }
  },
  methods: {
    initGame() {
      this.currentPosition = [];
      this.score = 0;
      for (let i = 0; i < this.size*this.size; i++) {
        this.currentPosition.push({
          value: undefined,
        })
      }
    },
    goDown() {
      let isChanged = true;
      for (let i = 0; i < this.size; i++) {
        let arr = [];
        for (let j = 0; j < this.size; j++) {
          arr.push(this.currentPosition[i + this.size * j].value);
        }
        arr.reverse();
        arr = arr.filter(el => el != undefined);
        // console.log(arr);
        if (arr.length > 1) {
          for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] == arr[j + 1]) {
              arr[j] = arr[j] * 2;
              this.score += arr[j];
              arr[j + 1] = undefined;
              isChanged = true;
            }
          }
          let arr2 = arr;
          arr = arr.filter(el => el != undefined);
          if (arr2.length != this.size || arr2.length != arr.length) {
            isChanged = true;
          }
        
        }
        for (let j = 0; j < this.size; j++) {
          Vue.set(this.currentPosition[this.size * this.size - this.size + i - this.size * j], "value", arr[j] ? arr[j] : undefined);
        }
      }
      if (isChanged) {
        this.addNewValue();
      }
    },
    goUp() {
      let isChanged = true;
      for (let i = 0; i < this.size; i++) {
        let arr = [];
        for (let j = 0; j < this.size; j++) {
          arr.push(this.currentPosition[i + this.size * j].value);
        }
        arr = arr.filter(el => el != undefined);
        // console.log(arr);
        if (arr.length > 1) {
          for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] == arr[j + 1]) {
              arr[j] = arr[j] * 2;
              this.score += arr[j];
              arr[j + 1] = undefined;
            }
          }
          let arr2 = arr;
          arr = arr.filter(el => el != undefined);
          if (arr2.length != this.size || arr2.length != arr.length) {
            isChanged = true;
          }        
        }
        for (let j = 0; j < this.size; j++) {
          Vue.set(this.currentPosition[i + this.size * j], "value", arr[j] ? arr[j] : undefined);
        }
      }
      if (isChanged) {
        this.addNewValue();
      }
    },
    goLeft() {
      let isChanged = true;
      for (let i = 0; i < this.size; i++) {
        let arr = [];
        for (let j = 0; j < this.size; j++) {
          arr.push(this.currentPosition[this.size * i+j].value);
        }
        arr = arr.filter(el => el != undefined);
        if (arr.length > 1) {
          for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] == arr[j + 1]) {
              arr[j] = arr[j] * 2;
              this.score += arr[j];
              arr[j + 1] = undefined;
            }
          }
          let arr2 = arr;
          arr = arr.filter(el => el != undefined);
          if (arr2.length != this.size || arr2.length != arr.length) {
            isChanged = true;
          }
        }
        for (let j = 0; j < this.size; j++) {
          Vue.set(this.currentPosition[j + this.size * i], "value", arr[j] ? arr[j] : undefined);
        }
      }
      if (isChanged) {
        this.addNewValue();
      }
    },
    goRight() {
      let isChanged = true;
      for (let i = 0; i < this.size; i++) {
        let arr = [];
        for (let j = 0; j < this.size; j++) {
          arr.push(this.currentPosition[j + this.size * i].value);
        }
        arr.reverse();
        arr = arr.filter(el => el != undefined);
        // console.log(arr);
        if (arr.length > 1) {
          for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] == arr[j + 1]) {
              arr[j] = arr[j] * 2;
              this.score += arr[j];
              arr[j + 1] = undefined;
            }
          }
          let arr2 = arr;
          arr = arr.filter(el => el != undefined);
          if (arr2.length != this.size || arr2.length != arr.length) {
            isChanged = true;
          }
        }
        arr = arr.filter(el => el != undefined);
        // console.log(arr);
        for (let j = 0; j < this.size; j++) {
          // console.log(this.size * this.size - this.size * i - 1 - j);
          Vue.set(this.currentPosition[this.size * (i + 1) - 1 - j], "value", arr[j] ? arr[j] : undefined);
        }
      }
      if (isChanged) {
        this.addNewValue();
      }
    },
    addNewValue() {
      let index = [];
      for (let i = 0; i < this.currentPosition.length; i++) {
        if (this.currentPosition[i].value == undefined) {
          index.push(i);
        }
      }
      // console.log(index)
      if (index.length) {
        Vue.set(this.currentPosition[index[Math.floor(Math.random()*index.length)]], "value", 2);
        // Vue.set(this.currentPosition[this.size-1], "value", 2);
      } else {
        // alert('Вы проиграли :(');
      }
    },
  },
  computed: {
    bgColor: function () {
      let color = [];
      for (let i = 0; i < this.currentPosition.length; i++) {
        if (this.currentPosition[i].value) {
          let red, green;
          if (this.currentPosition[i].value >= 64) {
            red = 255;
            green = 0;
          } else {
            red = Math.floor(this.currentPosition[i].value * 255 / 64);
            green = Math.floor(255 - this.currentPosition[i].value * 255 / 64);
          }
          color.push(`rgb(${red},${green},0)`)
        } else {
          color.push('transparent');
        }
      }
      if (this.score > this.best2048score) {
        this.best2048score = this.score;
        localStorage.setItem('best2048score', this.best2048score);
      }
      return color;
    },
  },
  created() {
    this.initGame();
    for (let i = 0; i < 3; i++) {
      this.currentPosition[Math.floor(this.currentPosition.length * Math.random())].value = 2;
    }
    let bestScore = localStorage.getItem('best2048score');
    if (bestScore) {
      this.best2048score = bestScore;
    }
  },
  mounted() {
    window.addEventListener('keydown', moves.bind(this));
  },
  beforeUnmount() {
    window.removeEventListener('keydown', moves.bind(this));
  }
}

function moves  (event)  {
  // console.log(event)
  switch (event.code) {
    case 'ArrowLeft':
      this.goLeft();
      break;
    case 'ArrowRight':
      this.goRight();
      break;
    case 'ArrowUp':
      this.goUp();
      break;
    case 'ArrowDown':
      this.goDown();
      break;
  }
}
