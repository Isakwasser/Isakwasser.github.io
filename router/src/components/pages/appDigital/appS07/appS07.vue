<template>
  <div class="appDigitalInit">
    <div class="appDigital_S07">
      <h2 class="text-center">Самостоятельная работа №7 123</h2>

      <div class="step">
        <div class="step__num">
          <div class="num">1</div>
        </div>
        <div class="step__content">
          <div class="step__descryption">Аудиофайл</div>
          <div class="step__action">
            <audio
              controls
              :src="require('@/assets/audio/app07/sound.wav')"
              ref="audio"
            >
              Тег audio не поддерживается вашим браузером.
            </audio>
          </div>
        </div>
      </div>

      <div class="step">
        <div class="step__num">
          <div class="num">2</div>
        </div>
        <div class="step__content">
          <div class="step__descryption">
            <button @click="step1">Получить спектрограмму</button>
            <!-- <button @click="test">Test</button>
            <button ref="stop">Stop</button> -->
          </div>
          <div class="step__action" style="background: #3b4652">
            <canvas id="spectrogram"></canvas>
            <div id="fft"></div>
          </div>
        </div>
      </div>

      <div class="step">
        <div class="step__num">
          <div class="num">3</div>
        </div>
        <div class="step__content">
          <div class="step__descryption">
            <button @click="filter">Фильтр</button>
            <button ref="filter_stop">Stop</button>
          </div>
          <div class="step__action"></div>
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
  .appDigital_S07 {
    .step {
      display: flex;
      border-top: 1px solid #000;
      padding: 10px 0;
      &__num {
        width: 50px;
        margin-right: 25px;
        .num {
          border-radius: 50%;
          height: 50px;
          border: 1px solid black;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      &__content {
        flex-grow: 1;
      }
    }
  }
}
</style>

<script src="./js/appS07.js">
</script>