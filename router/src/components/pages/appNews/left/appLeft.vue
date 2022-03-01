<template>
  <div class="left">
    <router-link :to="{ name: 'Main' }" class="exit text-nowrap">
      <span>Назад на главную</span>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.left {
  background-color: #336;
  border-radius: 0 5px 5px 0;
  color: #fff;
  * {
    color: inherit;
    text-decoration: none;
  }
  .exit {
    padding: 10px 20px;
    transition: all 0.3s;
    position: relative;
    display: block;
    &:hover {
      transform: scale(1.01);
      color: inherit;
    }
  }
}
</style>