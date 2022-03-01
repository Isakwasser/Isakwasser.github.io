<template>
  <div class="col-12 col-lg-6 col-xl-4 news__item">
    <div class="border rounded-3 w-100 h-100 item">
      <h6 class="item__title">{{ item.title }}</h6>
      <!-- <p>{{ item.content }}</p> -->
      <p>{{ item.description }}</p>
      <!-- <p>{{ item.content }}</p> -->
      <button
        class="btn btn-secondary btn-sm"
        @click="showContent"
        v-if="item.content"
      >
        Читать полностью
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {};
  },
  methods: {
    showContent() {
      let myModalEl = document.querySelector("#news_content");
      // console.log(this.item.content);
      $(myModalEl).find(".modal-body").text(this.item.content);
      let modal = bootstrap.Modal.getOrCreateInstance(myModalEl); // Returns a Bootstrap modal instance
      modal.show();
    },
  },
};
</script>

<style lang="scss">
</style>