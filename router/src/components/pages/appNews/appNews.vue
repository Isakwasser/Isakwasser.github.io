<template>
  <div>
    <div class="app-news">
      <appNewsLeft></appNewsLeft>
      <appNewsContent :news="gotData" :status="status"></appNewsContent>
    </div>
    <appNewsModal></appNewsModal>
  </div>
</template>

<script src="./appNews.js">
</script>

<style lang="scss" src="./appNews.scss">
</style>