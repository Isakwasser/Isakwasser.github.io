<template>
  <div class="appDigitalInit">
    <div class="appDigital_S07">
      <h2 class="text-center">Самостоятельная работа №7</h2>

      <div class="step">
        <div class="step__num">
          <div class="num">1</div>
        </div>
        <div class="step__content">
          <div class="step__descryption">Аудиофайл</div>
          <div class="step__action">
            <audio
              controls
              :src="require('@/assets/audio/app07/sound_sm.wav')"
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
            <button @click="step1">
              Получить спектрограмму c временным разрешением {{ windowWidth }}с
            </button>
            <!-- <button @click="test">Test</button>
            <button ref="stop">Stop</button> -->
          </div>
          <div class="step__action" style="">
            <canvas id="spectrogram"></canvas>
          </div>
        </div>
      </div>

      <div class="step">
        <div class="step__num">
          <div class="num">3</div>
        </div>
        <div class="step__content">
          <div class="step__descryption">Аудиофайл</div>
          <div class="step__action">
            <audio
              controls
              :src="require('@/assets/audio/app07/sound_sm.wav')"
              ref="audio2"
            >
              Тег audio не поддерживается вашим браузером.
            </audio>
          </div>
        </div>
      </div>

      <div class="step">
        <div class="step__num">
          <div class="num">4</div>
        </div>
        <div class="step__content">
          <div class="step__descryption">
            <h4>Фильтр Баттерворта. ФНЧ</h4>
            <div class="d-flex">
              <label class="col-2">Частота среза:</label>
              <div class="">
                <input type="text" class="" v-model="cutoffF" />
              </div>
            </div>
            <button @click="step2">
              Фильтр, спектрограмма, воспроизведение
            </button>
            <button ref="stop">Остановить воспроизведение</button>
          </div>
          <div class="step__action" style="">
            <canvas id="spectrogram2"></canvas>
          </div>
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