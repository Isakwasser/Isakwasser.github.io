<template>
  <div class="app-games">
    <div class="linker">
      <div class="link">
        <router-link
          :to="{
            name: $route.name == 'appGames_init' ? 'Main' : 'appGames_init',
          }"
          title="Назад на главную"
          class="oneHref"
          >Н</router-link
        >
      </div>
    </div>
    <div
      style="
        flex-shrink: 1;
        flex-grow: 1;
        padding-left: 10px;
        box-shadow: black 0px 0px 10px inset;
      "
    >
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" src="./appGames.scss">
</style>