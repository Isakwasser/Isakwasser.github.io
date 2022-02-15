<template>
  <div
    class="
      appGamesInit
      w-100
      h-100
      d-flex
      align-items-center
      justify-content-center
    "
  >
    <div class="container text-center">
      <h2>Выберите игру</h2>
      <div class="row">
        <router-link
          :to="{ name: 'appGames_shooting' }"
          class="
            item
            col-sm-6 col-md-4 col-xl-3 col-xxl-2
            d-flex
            flex-column
            justify-content-between
            position-relative
            overflow-hidden
          "
          :style="{
            backgroundImage: `url(${bgImage[0]})`,
          }"
        >
          <div class="shadow position-absolute top-0 start-0 w-100 h-100"></div>
          <span></span><span class="item__name">Shooter</span><span></span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.appGamesInit {
  .item {
    height: 100px;
    border-radius: 10px;
    background-color: rgba(255, 0, 0, 0.1);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    cursor: pointer;
    .shadow {
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s;
    }
    &:hover {
      .shadow {
        background-color: rgba(0, 0, 0, 0.1);
      }
    }
    .item__name {
      font-size: 20px;
      font-weight: bold;
      color: #fff;
      text-decoration: none;
    }
  }
}
</style>

<script>
import bg1 from "@/assets/img/appShootingPreview.jpeg";
export default {
  data() {
    return {
      bgImage: [bg1],
    };
  },
};
</script>