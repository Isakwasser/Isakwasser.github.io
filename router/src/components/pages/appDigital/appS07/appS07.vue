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
            <h4>Спектрограмма исходного сигнала</h4>
            <button
              class="btn btn-secondary btn-sm"
              @click="getOriginalSpectrogram"
            >
              Получить спектрограмму
            </button>
          </div>
          <div class="step__action">
            <canvas ref="spectrogram_original"></canvas>
          </div>
        </div>
      </div>

      <!-- ******************* Группа ФНЧ ********************* -->
      <div class="step">
        <div class="step__num">
          <div class="num">3</div>
        </div>
        <div class="step__content">
          <div class="step__descryption">
            <h4>
              ФНЧ Баттерворта. Частота среза: {{ lowpassFreq }}.
              <code>butter(5,0.1)</code>
            </h4>
            <button
              class="btn btn-secondary btn-sm"
              @click="getButterLowSpectrogram"
            >
              Получить спектрограмму
            </button>
          </div>
          <div class="step__action">
            <canvas ref="spectrogram_ButterLow"></canvas>
          </div>
        </div>
      </div>

      <div class="step">
        <div class="step__num">
          <div class="num">4</div>
        </div>
        <div class="step__content">
          <div class="step__descryption">
            <h4>
              ФНЧ Чебашева 1-го рода. Частота среза: {{ lowpassFreq }}.
              <code>cheby1(5,5,0.1)</code>
            </h4>
            <button
              class="btn btn-secondary btn-sm"
              @click="getCheby1LowSpectrogram"
            >
              Получить спектрограмму
            </button>
          </div>
          <div class="step__action">
            <canvas ref="spectrogram_Cheby1Low"></canvas>
          </div>
        </div>
      </div>

      <div class="step">
        <div class="step__num">
          <div class="num">5</div>
        </div>
        <div class="step__content">
          <div class="step__descryption">
            <h4>
              ФНЧ Чебышева 2-го рода. Частота среза: {{ lowpassFreq }}.
              <code>cheby2(5,50,0.1)</code>
            </h4>
            <button
              class="btn btn-secondary btn-sm"
              @click="getCheby2LowSpectrogram"
            >
              Получить спектрограмму
            </button>
          </div>
          <div class="step__action">
            <canvas ref="spectrogram_Cheby2Low"></canvas>
          </div>
        </div>
      </div>

      <div class="step">
        <div class="step__num">
          <div class="num">6</div>
        </div>
        <div class="step__content">
          <div class="step__descryption">
            <h4>
              ФНЧ эллиптический. Частота среза: {{ lowpassFreq }}.
              <code>ellip(5,4,50,0.1)</code>
            </h4>
            <button
              class="btn btn-secondary btn-sm"
              @click="getEllipLowSpectrogram"
            >
              Получить спектрограмму
            </button>
          </div>
          <div class="step__action">
            <canvas ref="spectrogram_EllipLow"></canvas>
          </div>
        </div>
      </div>

      <!-- ******************* Группа ФВЧ ********************* -->
      <div class="step">
        <div class="step__num">
          <div class="num">1</div>
        </div>
        <div class="step__content">
          <div class="step__descryption">
            <h4>
              ФВЧ Баттерворта.
              <code>butter(5,0.3,'high')</code>
            </h4>
            <button
              class="btn btn-secondary btn-sm"
              @click="getButterHighSpectrogram"
            >
              Получить спектрограмму
            </button>
          </div>
          <div class="step__action">
            <canvas ref="spectrogram_ButterHigh"></canvas>
          </div>
        </div>
      </div>

      <div class="step">
        <div class="step__num">
          <div class="num">2</div>
        </div>
        <div class="step__content">
          <div class="step__descryption">
            <h4>
              ФВЧ Чебышева 1-го рода.
              <code>cheby1(5,5,0.1,'high')</code>
            </h4>
            <button
              class="btn btn-secondary btn-sm"
              @click="getCheby1HighSpectrogram"
            >
              Получить спектрограмму
            </button>
          </div>
          <div class="step__action">
            <canvas ref="spectrogram_Cheby1High"></canvas>
          </div>
        </div>
      </div>

      <div class="step">
        <div class="step__num">
          <div class="num">3</div>
        </div>
        <div class="step__content">
          <div class="step__descryption">
            <h4>
              ФВЧ Чебышева 2-го рода.
              <code>cheby2(5,50,0.1,'high')</code>
            </h4>
            <button
              class="btn btn-secondary btn-sm"
              @click="getCheby2HighSpectrogram"
            >
              Получить спектрограмму
            </button>
          </div>
          <div class="step__action">
            <canvas ref="spectrogram_Cheby2High"></canvas>
          </div>
        </div>
      </div>

      <div class="step">
        <div class="step__num">
          <div class="num">4</div>
        </div>
        <div class="step__content">
          <div class="step__descryption">
            <h4>
              ФВЧ эллиптический.
              <code>ellip(5,4,50,0.1,'high')</code>
            </h4>
            <button
              class="btn btn-secondary btn-sm"
              @click="getEllipHighSpectrogram"
            >
              Получить спектрограмму
            </button>
          </div>
          <div class="step__action">
            <canvas ref="spectrogram_EllipHigh"></canvas>
          </div>
        </div>
      </div>

      <!-- ******************* Группа полосовых ********************* -->
      <div class="step">
        <div class="step__num">
          <div class="num">1</div>
        </div>
        <div class="step__content">
          <div class="step__descryption">
            <h4>
              Полосовой Баттерворта.
              <code>butter(5,[0.1 0.2],'bandpass')</code>
            </h4>
            <button
              class="btn btn-secondary btn-sm"
              @click="getButterBandSpectrogram"
            >
              Получить спектрограмму
            </button>
          </div>
          <div class="step__action">
            <canvas ref="spectrogram_ButterBand"></canvas>
          </div>
        </div>
      </div>

      <div class="step">
        <div class="step__num">
          <div class="num">2</div>
        </div>
        <div class="step__content">
          <div class="step__descryption">
            <h4>
              Полосовой Чебышева 1-го рода.
              <code>cheby1(5,10,[0.1 0.2],'bandpass')</code>
            </h4>
            <button
              class="btn btn-secondary btn-sm"
              @click="getCheby1BandSpectrogram"
            >
              Получить спектрограмму
            </button>
          </div>
          <div class="step__action">
            <canvas ref="spectrogram_Cheby1Band"></canvas>
          </div>
        </div>
      </div>

      <div class="step">
        <div class="step__num">
          <div class="num">3</div>
        </div>
        <div class="step__content">
          <div class="step__descryption">
            <h4>
              Полосовой Чебышева 2-го рода.
              <code>cheby2(5,20,[0.1 0.2],'bandpass')</code>
            </h4>
            <button
              class="btn btn-secondary btn-sm"
              @click="getCheby2BandSpectrogram"
            >
              Получить спектрограмму
            </button>
          </div>
          <div class="step__action">
            <canvas ref="spectrogram_Cheby2Band"></canvas>
          </div>
        </div>
      </div>

      <div class="step">
        <div class="step__num">
          <div class="num">4</div>
        </div>
        <div class="step__content">
          <div class="step__descryption">
            <h4>
              Полосовой эллиптический.
              <code>ellip(5,5,50,[0.1 0.2],'bandpass');</code>
            </h4>
            <button
              class="btn btn-secondary btn-sm"
              @click="getEllipBandSpectrogram"
            >
              Получить спектрограмму
            </button>
          </div>
          <div class="step__action">
            <canvas ref="spectrogram_EllipBand"></canvas>
          </div>
        </div>
      </div>

      <!-- ******************* Группа режекторных ********************* -->
      <div class="step">
        <div class="step__num">
          <div class="num">1</div>
        </div>
        <div class="step__content">
          <div class="step__descryption">
            <h4>
              Режекторный Баттерворта.
              <code>butter(5,[0.1 0.2],'stop')</code>
            </h4>
            <button
              class="btn btn-secondary btn-sm"
              @click="getButterStopSpectrogram"
            >
              Получить спектрограмму
            </button>
          </div>
          <div class="step__action">
            <canvas ref="spectrogram_ButterStop"></canvas>
          </div>
        </div>
      </div>

      <div class="step">
        <div class="step__num">
          <div class="num">2</div>
        </div>
        <div class="step__content">
          <div class="step__descryption">
            <h4>
              Режекторный Чебышева 1-го рода.
              <code>cheby1(5,15,[0.1 0.2],'stop')</code>
            </h4>
            <button
              class="btn btn-secondary btn-sm"
              @click="getCheby1StopSpectrogram"
            >
              Получить спектрограмму
            </button>
          </div>
          <div class="step__action">
            <canvas ref="spectrogram_Cheby1Stop"></canvas>
          </div>
        </div>
      </div>

      <div class="step">
        <div class="step__num">
          <div class="num">3</div>
        </div>
        <div class="step__content">
          <div class="step__descryption">
            <h4>
              Режекторный Чебышева 2-го рода.
              <code>cheby2(5,50,[0.1 0.2],'stop')</code>
            </h4>
            <button
              class="btn btn-secondary btn-sm"
              @click="getCheby2StopSpectrogram"
            >
              Получить спектрограмму
            </button>
          </div>
          <div class="step__action">
            <canvas ref="spectrogram_Cheby2Stop"></canvas>
          </div>
        </div>
      </div>

      <div class="step">
        <div class="step__num">
          <div class="num">4</div>
        </div>
        <div class="step__content">
          <div class="step__descryption">
            <h4>
              Режекторный эллиптический.
              <code>ellip(5,15,80,[0.1 0.2],'stop')</code>
            </h4>
            <button
              class="btn btn-secondary btn-sm"
              @click="getEllipStopSpectrogram"
            >
              Получить спектрограмму
            </button>
          </div>
          <div class="step__action">
            <canvas ref="spectrogram_EllipStop"></canvas>
          </div>
        </div>
      </div>

      <!-- ******************* 3 полосы пропускания ********************* -->
      <div class="step">
        <div class="step__num"></div>
        <div class="step__content">
          <div class="step__descryption">
            <h4>
              3 полосы пропускания, используя фильтры Чебышева 2-го рода.
              <code>
                cheby2(5,50,[0.05 0.1],'stop') & cheby2(5,50,[0.2 0.25],'stop')
              </code>
            </h4>
            <button
              class="btn btn-secondary btn-sm"
              @click="getCheby2threeSpectrogram"
            >
              Получить спектрограмму
            </button>
          </div>
          <div class="step__action">
            <canvas ref="spectrogram_Cheby2three"></canvas>
          </div>
        </div>
      </div>

      <!-- ******************* Удаление голоса ********************* -->
      <div class="step">
        <div class="step__num"></div>
        <div class="step__content">
          <div class="step__descryption">
            <h4>
              Удаление голоса, используя фильтры Чебышева 2-го рода.
              <code> butter(5,0.01) | butter(5,0.2,'high')</code>
            </h4>
            <button
              class="btn btn-secondary btn-sm"
              @click="getDeleteVoiceSpectrogram"
            >
              Получить спектрограмму
            </button>
          </div>
          <div class="step__action">
            <canvas ref="spectrogram_DeleteVoice"></canvas>
          </div>
        </div>
      </div>
    </div>
    <div class="position-absolute top-0 end-0 alert alert-secondary">
      <span>Воспроизводить музыку:</span>
      <input type="checkbox" v-model="soundMusic" />
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