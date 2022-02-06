import Vue from "vue";

export default {
  name: "appSnow",
  data() {
    return {
      currentBgUrl: undefined,
      findPhoto: "Зима",
      Snowflake: {
        number: 50,
        maxSpeedX: 100,
        maxSpeedY: 200,
        maxRotateSpeed: 20,
        isActive: true,
        time: 100,
        items: [],
      },
    };
  },
  methods: {
    changeBg() {
      fetch(
        `https://pixabay.com/api/?key=23909248-46987dab904e15ddebe9addff&q=${this.findPhoto}&image_type=photo`
      )
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          let i = Math.floor(data.hits.length * Math.random());
          this.currentBgUrl = data.hits[i].largeImageURL;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    initSnowflake() {
      let positionX = Math.floor(Math.random() * window.innerWidth);
      let positionY = -100;
      let speedX = Math.floor((Math.random() - 0.5) * this.Snowflake.maxSpeedX);
      let speedY =
        Math.floor((Math.random() + 0.5) * this.Snowflake.maxSpeedY) / 2;
      let rotateAngle = 0;
      let rotateSpeed = Math.floor(
        (Math.random() - 0.5) * this.Snowflake.maxRotateSpeed
      );
      let opacity = 1;

      return {
        positionX: positionX,
        positionY: positionY,
        speedX: speedX,
        speedY: speedY,
        rotateAngle: rotateAngle,
        rotateSpeed: rotateSpeed,
        opacity: opacity,
        transition: "none",
      };
    },
    rotateSnowflakes() {
      if (this.Snowflake.isActive) {
        let time = this.Snowflake.time;
        for (let i = 0; i < this.Snowflake.number; i++) {
          let nextAngle =
            this.Snowflake.items[i].rotateAngle +
            (this.Snowflake.items[i].rotateSpeed * time) / 100;
          Vue.set(this.Snowflake.items[i], "rotateAngle", nextAngle);
        }
        setTimeout(() => {
          this.rotateSnowflakes();
        }, time);
      }
    },
    fallSnowflakes() {
      if (this.Snowflake.isActive) {
        let time = this.Snowflake.time;
        for (let i = 0; i < this.Snowflake.number; i++) {
          let nextY =
            this.Snowflake.items[i].positionY +
            (this.Snowflake.items[i].speedY * time) / 1000;

          Vue.set(this.Snowflake.items[i], "positionY", nextY);
          if (nextY - 100 > window.innerHeight) {
            Vue.set(this.Snowflake.items, i, {});
            Vue.set(this.Snowflake.items, i, this.initSnowflake());
          } else {
            Vue.set(this.Snowflake.items[i], "transition", "all 1s linear");
          }
        }
        setTimeout(() => {
          this.fallSnowflakes();
        }, time);
      }
    },
    moveXSnowflakes() {
      if (this.Snowflake.isActive) {
        let time = this.Snowflake.time;
        for (let i = 0; i < this.Snowflake.number; i++) {
          let nextX =
            this.Snowflake.items[i].positionX +
                (this.Snowflake.items[i].speedX * time) / 1000;
            this.Snowflake.items[i].speedX += (Math.random() - 0.5) * this.Snowflake.maxSpeedX;
            if (this.Snowflake.items[i].speedX > 0.8 * this.Snowflake.maxSpeedX) this.Snowflake.items[i].speedX -= 0.3 * this.Snowflake.maxSpeedX;
            if (this.Snowflake.items[i].speedX < -0.8 * this.Snowflake.maxSpeedX) this.Snowflake.items[i].speedX += 0.3 * this.Snowflake.maxSpeedX;
            Vue.set(this.Snowflake.items[i], "positionX", nextX);
        }
        setTimeout(() => {
          this.moveXSnowflakes();
        }, time);
      }
    },
  },
  created() {
    this.changeBg();
  },
  mounted() {
    for (let i = 0; i < this.Snowflake.number; i++) {
      this.Snowflake.items.push(this.initSnowflake());
    }
    this.rotateSnowflakes();
    this.fallSnowflakes();
    this.moveXSnowflakes();
  },
};