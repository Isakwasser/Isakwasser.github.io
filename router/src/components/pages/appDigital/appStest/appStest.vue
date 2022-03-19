<template>
  <div class="appDigitalInit">
    <div class="appDigitalInit_content">
      <h2 class="text-center">Страница для тестирования алгоритмов</h2>
      <div class="">
        <div class="d-flex">
          <label for="staticEmail" class="col-2">Время, [с]</label>
          <div class="">
            <input type="text" class="" v-model="time" />
          </div>
        </div>
        <div class="d-flex">
          <label class="col-2">Частота дискретизации</label>
          <div class="">
            <input type="text" class="" v-model="fs" />
          </div>
        </div>
        <button class="btn btn-secondary btn-sm" @click="calculate">
          Начать расчет
        </button>
      </div>

      <div class="row g-2 text-center">
        <div class="col-lg-6" ref="appDigital__initialSignal">
          <h5>Исходный сигнал 1</h5>
          <div id="appDigital__initialSignal"></div>
        </div>
        <div class="col-lg-6" ref="appDigital__initialSignal2">
          <h5>Исходный сигнал 2</h5>
          <div id="appDigital__initialSignal2"></div>
        </div>
        <div class="col-lg-6" ref="appDigital__conv">
          <h5>Свертка</h5>
          <div id="appDigital__conv"></div>
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

<script src="./js/appStest.js">
</script>