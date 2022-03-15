<template>
  <div class="appDigitalInit">
    <div class="appDigitalInit_content">
      <h2 class="text-center">Самостоятельная работа №4</h2>
      <div class="">
        <div class="d-flex">
          <label for="staticEmail" class="col-2">Числа</label>
          <div class="">
            <input type="text" class="" v-model="inputArray" />
          </div>
        </div>
        <div class="d-flex">
          <label class="col-2">Частота дискретизации</label>
          <div class="">
            <input type="text" class="" v-model="fs" />
          </div>
        </div>
        <button @click="calculate">Рассчитать</button>
        <div v-if="decoded">
          Декодированная последовательность: {{ decoded }}
        </div>
        <div class="d-flex">
          <label class="col-2">Время для второго сигнала:</label>
          <div class="">
            <input type="text" class="" v-model="timeForSecondSignal" />
          </div>
        </div>
        <button @click="calculateForSecond" ref="secondBtn" disabled>
          Рассчитать спектр по алгоритму Герцеля сигнала со второго задания
        </button>
        <div class="spinner-border" role="status" ref="spinner" id="spinner">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>

      <div class="row g-2 text-center">
        <div class="col-lg-6" ref="appDigital__initialSignal">
          <h5>Исходный сигнал</h5>
          <div id="appDigital__initialSignal"></div>
        </div>
        <div class="col-lg-6" ref="appDigital__initialSignal__fft">
          <h5>Спектр исходного сигнала Фурье</h5>
          <div id="appDigital__initialSignal__fft"></div>
        </div>
        <div class="col-lg-6" ref="appDigital__initialSignal__gercel">
          <h5>Спектр исходного сигнала Герцель</h5>
          <div id="appDigital__initialSignal__gercel"></div>
        </div>
        <div class="col-12"><hr /></div>
        <div class="col-lg-6" ref="appDigital__initialSignal2">
          <h5>Сигнал из второго задания без шума</h5>
          <div id="appDigital__initialSignal2"></div>
        </div>
        <div class="col-lg-6" ref="appDigital__initialSignal2_fft">
          <h5>Спектр сигнала из второго задания без шума</h5>
          <div id="appDigital__initialSignal2_fft"></div>
        </div>
        <div class="col-lg-6" ref="appDigital__initialSignal2_noise">
          <h5>Сигнал из второго задания с шумом</h5>
          <div id="appDigital__initialSignal2_noise"></div>
        </div>
        <div class="col-lg-6" ref="appDigital__initialSignal2_noise_fft">
          <h5>Алгоритм Герцеля для сигнала с шумом из второго задания</h5>
          <div id="appDigital__initialSignal2_noise_fft"></div>
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