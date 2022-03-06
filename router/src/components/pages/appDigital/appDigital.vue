<template>
  <div class="app-digital">
    <div class="linker">
      <div class="link">
        <router-link
          :to="{
            name: 'Main',
          }"
          title="Назад на главную"
          class="oneHref"
          >Назад на главную</router-link
        >
      </div>
      <div class="link" v-if="$route.name != 'appDigital_init'">
        <router-link
          :to="{
            name: 'appDigital_init',
          }"
          title="Назад на главную"
          class="oneHref"
          >К выбору задания</router-link
        >
      </div>
    </div>
    <div class="app-digital_content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" src="./appDigital.scss">
</style>