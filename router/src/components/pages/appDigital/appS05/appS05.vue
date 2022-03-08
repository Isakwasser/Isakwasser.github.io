<template>
  <div class="appDigitalInit">
    <div class="appDigitalInit_content">
      <h2 class="text-center">Самостоятельная работа №5</h2>
      <button class="btn btn-secondary btn-sm" @click="calculate">
        Начать расчет
      </button>

      <div class="row g-2 text-center">
        <div class="col-lg-6" ref="appDigital__initialSignal">
          <h5>Исходный сигнал</h5>
          <div id="appDigital__initialSignal"></div>
        </div>
        <div class="col-lg-6" ref="appDigital__initialSignal_positive">
          <h5>Исходный сигнал при t>=0</h5>
          <div id="appDigital__initialSignal_positive"></div>
        </div>
        <div class="col-lg-6" ref="appDigital__initialSignal__Hs">
          <h5>H(s)</h5>
          <div id="appDigital__initialSignal__Hs"></div>
        </div>
        <div class="col-lg-6" ref="appDigital__initialSignal__Hz">
          <h5>Z(s)</h5>
          <div id="appDigital__initialSignal__Hz"></div>
        </div>
        <div class="col-12" ref="appDigital__initialSignal__3D">
          <h5>3D</h5>
          <div id="appDigital__initialSignal__3D"></div>
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
}
</style>

<script src="./js/appS04.js">
</script>