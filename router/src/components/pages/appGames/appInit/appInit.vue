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
        <!-- <router-link
          :to="{ name: 'appGames_shooting' }"
          class="col-sm-6 col-md-4 col-xl-3 col-xxl-2"
        >
          <div class="position-relative overflow-hidden h-100 w-100 item">
            <div
              class="position-absolute top-0 start-0 w-100 h-100"
              :style="{
                backgroundImage:
                  'url(' +
                  require('@/assets/img/appShootingPreview.jpeg') +
                  ')',
              }"
              style="background-size: cover; background-position: center"
            ></div>
            <div
              class="
                position-relative
                d-flex
                flex-column
                justify-content-between
                h-100
              "
            >
              <span></span><span class="item__name">Shooting</span><span></span>
            </div>
            <div
              class="shadow position-absolute top-0 start-0 w-100 h-100"
            ></div>
          </div>
        </router-link> -->
        <router-link
          :to="{ name: 'appGames_ticTacToe' }"
          class="col-sm-6 col-md-4 col-xl-3 col-xxl-2"
        >
          <div class="position-relative overflow-hidden h-100 w-100 item">
            <div
              class="position-absolute top-0 start-0 w-100 h-100"
              :style="{
                backgroundImage:
                  'url(' +
                  require('@/assets/img/appTicTacToePreview.jpg') +
                  ')',
              }"
              style="background-size: cover; background-position: center"
            ></div>
            <div
              class="
                position-relative
                d-flex
                flex-column
                justify-content-between
                h-100
              "
            >
              <span></span><span class="item__name">Крестики-нолики</span
              ><span></span>
            </div>
            <div
              class="shadow position-absolute top-0 start-0 w-100 h-100"
            ></div>
          </div>
        </router-link>
        <router-link
          :to="{ name: 'appGames_2048' }"
          class="col-sm-6 col-md-4 col-xl-3 col-xxl-2"
        >
          <div class="position-relative overflow-hidden h-100 w-100 item">
            <div
              class="position-absolute top-0 start-0 w-100 h-100"
              :style="{
                backgroundImage:
                  'url(' + require('@/assets/img/app2048Preview.jpg') + ')',
              }"
              style="background-size: cover; background-position: center"
            ></div>
            <div
              class="
                position-relative
                d-flex
                flex-column
                justify-content-between
                h-100
              "
            >
              <span></span><span class="item__name">2048</span><span></span>
            </div>
            <div
              class="shadow position-absolute top-0 start-0 w-100 h-100"
            ></div>
          </div>
        </router-link>
        <router-link
          :to="{ name: 'appGames_sudoku' }"
          class="col-sm-6 col-md-4 col-xl-3 col-xxl-2"
        >
          <div class="position-relative overflow-hidden h-100 w-100 item">
            <div
              class="position-absolute top-0 start-0 w-100 h-100"
              :style="{
                backgroundImage:
                  'url(' +
                  require('@/assets/img/appSudokuPreview.jpg') +
                  ')',
              }"
              style="background-size: cover; background-position: center"
            ></div>
            <div
              class="
                position-relative
                d-flex
                flex-column
                justify-content-between
                h-100
              "
            >
              <span></span><span class="item__name text-dark">Судоку</span
              ><span></span>
            </div>
            <div
              class="shadow position-absolute top-0 start-0 w-100 h-100"
            ></div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.appGamesInit {
  .item {
    min-height: 100px;
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