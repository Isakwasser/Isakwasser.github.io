<template>
  <div class="appDigitalS06">
    <div class="appDigitalS06_content">
      <h2 class="text-center">Самостоятельная работа №6</h2>
      <button class="btn btn-secondary btn-sm" @click="calculate">
        Начать расчет
      </button>

      <div class="row g-2 text-center">
        <div class="col-lg-6">
          <h5>Исходный сигнал</h5>
          <div id="appDigital__initialSignal"></div>
        </div>
        <div class="col-lg-6">
          <h5>Спектр исходного сигнала</h5>
          <div id="appDigital__initialSignal_fft"></div>
        </div>
        <div class="col-12" :class="{ 'd-none': currentTab != 'ФНЧ' }">
          <h2>Фильтры низких частот</h2>
          <div>
            <label for="lowF">Частота среза: </label>
            <input type="number" id="lowF" v-model="filterLowF" />
          </div>
          <div class="row">
            <div class="col-lg-6">
              <h5>Фильтр Баттерворта</h5>
              <div id="appDigital__butterLow"></div>
            </div>
            <div class="col-lg-6">
              <h5>Спектр сигнала после фильтра</h5>
              <div id="appDigital__butterLow_fft"></div>
            </div>
            <div class="col-lg-6">
              <h5>АЧХ Баттерворта</h5>
              <div id="appDigital__butterLow_afr"></div>
            </div>
            <div class="col-lg-6">
              <h5>ФЧХ Баттерворта</h5>
              <div id="appDigital__butterLow_pfr"></div>
            </div>
          </div>
        </div>
        <div class="col-12" :class="{ 'd-none': currentTab != 'ФВЧ' }">
          <h2>Фильтры высоких частот</h2>
          <div>
            <label for="highF">Частота среза: </label>
            <input type="number" id="highF" v-model="filterHighF" />
          </div>
          <div class="row">
            <div class="col-lg-6">
              <h5>Фильтр Баттерворта</h5>
              <div id="appDigital__butterHigh"></div>
            </div>
            <div class="col-lg-6">
              <h5>Спектр сигнала после фильтра</h5>
              <div id="appDigital__butterHigh_fft"></div>
            </div>
            <div class="col-lg-6">
              <h5>АЧХ Баттерворта</h5>
              <div id="appDigital__butterHigh_afr"></div>
            </div>
            <div class="col-lg-6">
              <h5>ФЧХ Баттерворта</h5>
              <div id="appDigital__butterHigh_pfr"></div>
            </div>
          </div>
        </div>
        <div class="col-12" :class="{ 'd-none': currentTab != 'Полосовой' }">
          <h2>Полосовой фильтр</h2>
          <div>
            <label for="highF">Частота среза 1: </label>
            <input type="number" id="highF" v-model="filterPassF1" />
          </div>
          <div>
            <label for="highF">Частота среза 2: </label>
            <input type="number" id="highF" v-model="filterPassF2" />
          </div>
          <div class="row">
            <div class="col-lg-6">
              <h5>Фильтр Баттерворта</h5>
              <div id="appDigital__butterPass"></div>
            </div>
            <div class="col-lg-6">
              <h5>Спектр сигнала после фильтра</h5>
              <div id="appDigital__butterPass_fft"></div>
            </div>
            <div class="col-lg-6">
              <h5>АЧХ Баттерворта</h5>
              <div id="appDigital__butterPass_afr"></div>
            </div>
            <div class="col-lg-6">
              <h5>ФЧХ Баттерворта</h5>
              <div id="appDigital__butterPass_pfr"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="position-absolute top-0 end-0">
      <div class="d-flex">
        <div>
          <button @click="currentTab = 'ФНЧ'">ФНЧ</button>
        </div>
        <div>
          <button @click="currentTab = 'ФВЧ'">ФВЧ</button>
        </div>
        <div>
          <button @click="currentTab = 'Полосовой'">Полосовой</button>
        </div>
        <div>
          <button @click="currentTab = 'Режекторный'">Режекторный</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.appDigitalS06 {
  padding: 20px;
  height: 100%;
  overflow-y: auto;
}
</style>

<script src="./js/appS06.js">
</script>