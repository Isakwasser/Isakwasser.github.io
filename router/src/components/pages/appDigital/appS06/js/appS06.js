import Vue from "vue";
import getSignal from "./js/signal";
import showGraph from "./js/showGraph";
import show3D from "./js/show3D";
import laplasD from "./js/laplasD";
import lowButter from "./filter/low/lowButter";
import highButter from "./filter/high/highButter";
import passButter from "./filter/pass/passButter";
import fft from "./js/fft";

export default {
  data() {
    return {
      fs: 3000,
      f: 300,
      filterLowF: 500,
      filterHighF: 600,
      filterPassF1: 790,
      filterPassF2: 800,
      time: 20 / 300,
      filterCoefficients: {
        low: {},
        band: {},
        high: {}
      },
      currentTab: "ФНЧ"
    };
  },
  methods: {
    hideElems() {},
    initSignal() {
      /**
       * Формирование дельта-функции Кронекера
       */
      let kroneker = [];
      for (let i = 0; i < this.time * this.fs; i++) {
        kroneker.push(0);
      }
      kroneker[0] = 1;

      /**
       * Формирование последовательности импульсов
       */
      let data = getSignal(this.time, this.f, this.fs);
      let data_fft = fft(data.signal, this.fs);
      showGraph("appDigital__initialSignal", data.time, data.signal);
      showGraph(
        "appDigital__initialSignal_fft",
        data_fft.frequency.slice(0, data_fft.frequency.length / 2),
        data_fft.amplitude.slice(0, data_fft.frequency.length / 2)
      );

      /**
       * Применение к сигналу ФНЧ Баттерворта
       */
      let butterLow = lowButter(
        data.signal,
        this.fs,
        2 * Math.PI * this.filterLowF
      );
      let butterLow_fft = fft(butterLow, this.fs);
      showGraph("appDigital__butterLow", data.time, butterLow);
      showGraph(
        "appDigital__butterLow_fft",
        butterLow_fft.frequency.slice(0, butterLow_fft.frequency.length / 2),
        butterLow_fft.amplitude.slice(0, butterLow_fft.amplitude.length / 2)
      );

      /**
       * Рассчет АЧХ, ФЧХ ФНЧ Баттерворта
       */
      let butterLow_ir = lowButter(
        kroneker,
        this.fs,
        2 * Math.PI * this.filterLowF
      );
      let butterLow_ir_fft = fft(butterLow_ir, this.fs);
      showGraph(
        "appDigital__butterLow_afr",
        butterLow_ir_fft.frequency.slice(
          0,
          butterLow_ir_fft.frequency.length / 2
        ),
        butterLow_ir_fft.amplitude.slice(
          0,
          butterLow_ir_fft.amplitude.length / 2
        )
      );
      showGraph(
        "appDigital__butterLow_pfr",
        butterLow_fft.frequency.slice(0, butterLow_ir_fft.frequency.length / 2),
        butterLow_fft.phase.slice(0, butterLow_ir_fft.phase.length / 2)
      );

      /**
       * Применение к сигналу ФВЧ Баттерворта
       */
      let butterHigh = highButter(
        data.signal,
        this.fs,
        2 * Math.PI * this.filterHighF
      );
      let butterHigh_fft = fft(butterHigh, this.fs);
      showGraph("appDigital__butterHigh", data.time, butterHigh);
      showGraph(
        "appDigital__butterHigh_fft",
        butterHigh_fft.frequency.slice(0, butterHigh_fft.frequency.length / 2),
        butterHigh_fft.amplitude.slice(0, butterHigh_fft.amplitude.length / 2)
      );

      /**
       * Рассчет АЧХ, ФЧХ ФВЧ Баттерворта
       */
      let butterHigh_ir = highButter(
        kroneker,
        this.fs,
        2 * Math.PI * this.filterHighF
      );
      let butterHigh_ir_fft = fft(butterHigh_ir, this.fs);
      showGraph(
        "appDigital__butterHigh_afr",
        butterHigh_ir_fft.frequency.slice(
          0,
          butterHigh_ir_fft.frequency.length / 2
        ),
        butterHigh_ir_fft.amplitude.slice(
          0,
          butterHigh_ir_fft.amplitude.length / 2
        )
      );
      showGraph(
        "appDigital__butterHigh_pfr",
        butterHigh_ir_fft.frequency.slice(
          0,
          butterHigh_ir_fft.frequency.length / 2
        ),
        butterHigh_ir_fft.phase.slice(0, butterHigh_ir_fft.phase.length / 2)
      );

      /**
       * Применение к сигналу полосового фильтра Баттерворта
       */
      let butterPass = passButter(
        data.signal,
        this.fs,
        2 * Math.PI * this.filterPassF1,
        2 * Math.PI * this.filterPassF2
      );
      let butterPass_fft = fft(butterPass, this.fs);
      showGraph("appDigital__butterPass", data.time, butterPass);
      showGraph(
        "appDigital__butterPass_fft",
        butterPass_fft.frequency.slice(0, butterPass_fft.frequency.length / 2),
        butterPass_fft.amplitude.slice(0, butterPass_fft.amplitude.length / 2)
      );

      /**
       * Рассчет АЧХ, ФЧХ полосового фильтра Баттерворта
       */
      let butterPass_ir = passButter(
        kroneker,
        this.fs,
        2 * Math.PI * this.filterPassF1,
        2 * Math.PI * this.filterPassF2
      );
      let butterPass_ir_fft = fft(butterPass_ir, this.fs);
      showGraph(
        "appDigital__butterPass_afr",
        butterPass_ir_fft.frequency.slice(
          0,
          butterPass_ir_fft.frequency.length / 2
        ),
        butterPass_ir_fft.amplitude.slice(
          0,
          butterPass_ir_fft.amplitude.length / 2
        )
      );
      showGraph(
        "appDigital__butterPass_pfr",
        butterPass_ir_fft.frequency.slice(
          0,
          butterPass_ir_fft.frequency.length / 2
        ),
        butterPass_ir_fft.phase.slice(0, butterPass_ir_fft.phase.length / 2)
      );
    },
    calculate() {
      console.log("wait");
      this.initSignal();
      console.log("OK!");
    },
    selectTab(str) {
      this.currentTab = str;
    }
  },
  mounted() {
    this.hideElems();
    this.calculate();
  }
};
