<template>
  <div class="app-funnyImage">
    <router-link :to="{ name: 'Main' }" class="goToMain"
      >Перейти на главную</router-link
    >
    <div class="container p-5">
      <div class="input-group mb-3">
        <button class="input-group-text" @click="useDefaultImage">
          Использовать встроенное изображение
        </button>
        <input
          type="file"
          class="form-control"
          id="fileUploadInput"
          @change="showFileAsJpg"
          ref="fileIn"
        />
      </div>
      <div class="row images" v-show="isImagesShowed">
        <div class="col-6">
          <div class="ratio ratio-1x1" ref="showImage"></div>
        </div>
        <div class="col-6">
          <div class="ratio ratio-1x1 bg-overlay" ref="showOverlayImage"></div>
        </div>
        <div class="col-6">
          <div class="ratio ratio-1x1 bg-overlay" ref="showCanvasImage"></div>
        </div>
        <div class="col-6">
          <div class="ratio ratio-1x1 bg-retro" ref="showRetroImage"></div>
        </div>
        <div class="col-6">
          <div class="ratio ratio-1x1 bg-meshed" ref="showMeshedImage"></div>
        </div>
        <div class="col-6">
          <div class="ratio ratio-1x1 bg-diff" ref="showDiffImage"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./appFunnyImage.js">
</script>

<style lang="scss" src="./appFunnyImage.scss">
</style>