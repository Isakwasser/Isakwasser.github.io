<template>
  <div class="app-funnyImage">
    <router-link :to="{ name: 'Main' }" class="goToMain"
      >Перейти на главную</router-link
    >
    <div class="container p-5">
      <div class="input-group mb-3">
        <label class="input-group-text" for="inputGroupFile01">Upload</label>
        <input
          type="file"
          class="form-control"
          id="fileUploadInput"
          @change="showFileAsJpg"
          ref="fileIn"
        />
      </div>
      <div class="row">
        <div class="col-6">
          <img class="w-100" ref="showImage" />
        </div>
        <div class="col-6">
          <img class="w-100" ref="showChangedImage" />
        </div>
      </div>
      <input type="number" v-model="currentDeleted" />
    </div>
  </div>
</template>

<script src="./appFunnyImage.js">
</script>

<style lang="scss" src="./appFunnyImage.scss">
</style>