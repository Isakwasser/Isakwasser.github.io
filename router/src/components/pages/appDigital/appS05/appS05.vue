<template>
  <div class="appDigitalInit">
    <div class="appDigitalInit_content">
      <h2 class="text-center">Самостоятельная работа №5</h2>
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
          <h5>Исходный сигнал</h5>
          <div id="appDigital__initialSignal"></div>
        </div>
        <div class="col-lg-6" ref="appDigital__initialSignal_positive">
          <h5>Исходный сигнал при t>=0</h5>
          <div id="appDigital__initialSignal_positive"></div>
        </div>
        <div class="col-lg-6" ref="appDigital__initialSignal_answer">
          <h5>Выход системы - импульсная характеристика</h5>
          <div id="appDigital__initialSignal_answer"></div>
        </div>
        <div class="col-lg-6" ref="appDigital__initialSignal_answer_zero">
          <h5>Выход системы - импульсная характеристика при импульсе в нуле</h5>
          <div id="appDigital__initialSignal_answer_zero"></div>
        </div>
        <div class="col-lg-6" ref="appDigital__initialSignal_kroneker">
          <h5>Вход системы - дельта-функция Кронекера в ненулевое время</h5>
          <div id="appDigital__initialSignal_kroneker"></div>
        </div>
        <div class="col-lg-6" ref="appDigital__initialSignal_kroneker_zero">
          <h5>Вход системы - дельта-функция Кронекера в нуле</h5>
          <div id="appDigital__initialSignal_kroneker_zero"></div>
        </div>
        <div class="col-12" ref="appDigital__initialSignal__formula">
          <h5>Формула H(z) для данной импульсной характеристики.</h5>
          <div id="appDigital__initialSignal__formula"></div>
        </div>
        <div class="col-12" ref="appDigital__initialSignal__fr">
          <h5>Частотный отклик исходного сигнала.</h5>
          <div id="appDigital__initialSignal__fr"></div>
        </div>
        <div class="col-lg-6" ref="appDigital__initialSignal_freq_afr">
          <h5>АЧХ</h5>
          <div id="appDigital__initialSignal_freq_afr"></div>
        </div>
        <div class="col-lg-6" ref="appDigital__initialSignal_freq_pfr">
          <h5>ФЧХ</h5>
          <div id="appDigital__initialSignal_freq_pfr"></div>
        </div>
        <div class="col-12" ref="appDigital__initialSignal__fr_digit">
          <h5>Частотный отклик после H(z).</h5>
          <div id="appDigital__initialSignal__f"></div>
        </div>
        <div class="col-lg-6" ref="appDigital__initialSignal_freq_afr_digit">
          <h5>АЧХ</h5>
          <div id="appDigital__initialSignal_freq_afr_digit"></div>
        </div>
        <div class="col-lg-6" ref="appDigital__initialSignal_freq_pfr_digit">
          <h5>ФЧХ</h5>
          <div id="appDigital__initialSignal_freq_pfr_digit"></div>
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
  #appDigital__initialSignal__formula {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 1000px;
  }
}
</style>

<script src="./js/appS05.js">
</script>