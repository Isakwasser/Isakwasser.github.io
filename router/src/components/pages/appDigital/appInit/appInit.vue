<template>
  <div class="appDigitalInit">
    <div class="appDigitalInit_content">
      <h2>Выберите задание</h2>
      <div class="row g-2">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <div class="appDigitalInit__link">
            <router-link
              :to="{
                name: 'appDigital_s04',
              }"
              class="link"
              >Самостоятельная работа №4</router-link
            >
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <div class="appDigitalInit__link">
            <router-link
              :to="{
                name: 'appDigital_s05',
              }"
              class="link"
              >Самостоятельная работа №5</router-link
            >
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <div class="appDigitalInit__link">
            <router-link
              :to="{
                name: 'appDigital_s06',
              }"
              class="link"
              >Самостоятельная работа №6</router-link
            >
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <div class="appDigitalInit__link">
            <router-link
              :to="{
                name: 'appDigital_s07',
              }"
              class="link"
              >Самостоятельная работа №7</router-link
            >
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <div class="appDigitalInit__link">
            <router-link
              :to="{
                name: 'appDigital_s08',
              }"
              class="link"
              >Самостоятельная работа №8</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.appDigitalInit {
  padding: 20px;
  height: 100%;
  overflow-y: auto;
  &__link {
    .link {
      display: block;
      padding: 10px 30px;
      border-radius: 10px;
      border: 1px solid black;
      text-decoration: none;
      text-align: center;
      color: black;
      &:hover {
        background-color: #eee;
      }
    }
  }
}
</style>

<script>
export default {
  data() {
    return {};
  },
};
</script>