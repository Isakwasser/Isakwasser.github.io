<template>
  <div class="content">
    <div class="wrapper">
      <div class="container">
        <div class="row" v-if="status == 'show'">
          <div class="col-12">
            <span>Статус: {{ news.status }}.</span>
            <span>Всего результатов: {{ news.totalResults }}</span>
            <span>Следующая страница: {{ news.nextPage }}</span>
          </div>
          <appNewsItem
            v-for="(el, i) in news.results"
            :key="i"
            :item="el"
          ></appNewsItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import appNewsItem from "./item/appNewsItem.vue";
export default {
  props: ["news", "status"],
  components: {
    appNewsItem: appNewsItem,
  },
};
</script>

<style lang="scss">
.content {
  flex-grow: 1;
  padding-left: 36px;
  padding-right: 36px;
  display: flex;
  flex-flow: column nowrap;
  // background-color: #fff;
  .wrapper {
    flex-grow: 1;
    background-color: #fff;
  }
}
</style>