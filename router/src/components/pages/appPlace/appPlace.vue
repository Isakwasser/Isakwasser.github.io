<template>
  <div class="app-place">
    <router-link :to="{ name: 'Main' }" class="goToMain"
      >Перейти на главную</router-link
    >
    <div
      class="bg"
      :style="{
        backgroundImage: 'url(' + require('@/assets/img/earth.jpg') + ')',
      }"
    ></div>
    <div class="content">
      <div
        class="
          content__ans
          position-absolute
          top-50
          start-50
          translate-middle
          bg-light
          p-3
          border
          rounded
          border-2
        "
      >
        <div v-if="navigator">
          <h6>Ваше местоположение, полученное методом window.navigator:</h6>

          <table class="ans__table">
            <thead class="">
              <th></th>
              <th></th>
            </thead>
            <tr>
              <td>Точность</td>
              <td>{{ navigator.coords.accuracy }}</td>
            </tr>
            <tr>
              <td>Широта</td>
              <td>{{ navigator.coords.latitude }}</td>
            </tr>
            <tr>
              <td>Долгота</td>
              <td>{{ navigator.coords.longitude }}</td>
            </tr>
            <tr>
              <td colspan="2" class="text-center">
                <a
                  :href="`https://yandex.ru/maps/?pt=${navigator.coords.longitude},${navigator.coords.latitude}&z=15`"
                  target="_blank"
                  class="border btn btn-sm"
                  >Перейти к точке на карте</a
                >
              </td>
            </tr>
          </table>
        </div>

        <div v-if="ipwhois" :class="{ 'mt-4': navigator }">
          <h6>Ваше местоположение, полученное по IP:</h6>

          <table class="ans__table position-relative">
            <thead class="">
              <th></th>
              <th></th>
            </thead>
            <tr>
              <td>Ваш IP</td>
              <td>{{ ipwhois.type }}: {{ ipwhois.ip }}</td>
            </tr>
            <tr>
              <td>Широта</td>
              <td>{{ ipwhois.latitude }}</td>
            </tr>
            <tr>
              <td>Долгота</td>
              <td>{{ ipwhois.longitude }}</td>
            </tr>
            <tr>
              <td colspan="2" class="text-center">
                <a
                  :href="`https://yandex.ru/maps/?pt=${ipwhois.longitude},${ipwhois.latitude}&z=15`"
                  target="_blank"
                  class="border btn btn-sm"
                  >Перейти к точке на карте</a
                >
              </td>
            </tr>
            <tr v-show="ipwhois__more">
              <td>Континент</td>
              <td>{{ ipwhois.continent_code }}: {{ ipwhois.continent }}</td>
            </tr>
            <tr v-show="ipwhois__more">
              <td>Страна</td>
              <td>
                <span> {{ ipwhois.country_code }}: {{ ipwhois.country }} </span>
                <span class="country-flag border">
                  <img :src="ipwhois.country_flag" style="width: 40px" />
                </span>
              </td>
            </tr>
            <tr v-show="ipwhois__more">
              <td>Регион</td>
              <td>{{ ipwhois.region }}</td>
            </tr>
            <tr v-show="ipwhois__more">
              <td>Город</td>
              <td>{{ ipwhois.city }}</td>
            </tr>
          </table>
          <button
            class="ans__showMore text-center d-block btn col-12 border mt-2"
            @click="ipwhois__more = !ipwhois__more"
          >
            <span v-if="!ipwhois__more">Показать больше</span>
            <span v-if="ipwhois__more">Скрыть</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./appPlace.js">
</script>

<style lang="scss" src="./appPlace.scss">
</style>