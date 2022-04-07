import getSignal from "./js/signal";
import showGraph from "./js/showGraph";
import fft from "./js/fft";

export default {
  data() {
    return {
      fs: 100,
      time: 10
    };
  },
  methods: {
    hideElems() {
      this.$refs.appDigital__initialSignal.style.display = "none";
      this.$refs.appDigital__initialSignal__formula.style.display = "none";
      this.$refs.appDigital__initialSignal_kroneker.style.display = "none";
      this.$refs.appDigital__initialSignal_answer.style.display = "none";
      this.$refs.appDigital__initialSignal__fr.style.display = "none";
      this.$refs.appDigital__initialSignal__fr_digit.style.display = "none";
    },
    async initSignal() {
      /**
       * Вывод импульсной характеристики на экран при необходимости
       */
      let imResp = getSignal(this.time, this.fs, 0);
      if (true) {
        showGraph("appDigital__initialSignal", imResp.time, imResp.signal);
      }

      /**
       * Рассчет коэффициентов дискретного преобразования
       */
      let T = 1 / this.fs; // период
      let w = 2 * Math.PI * 0.25 * 15; // те самые 556,...
      let s_a2 = 1 + w * w;
      let normalizeKoef = 4 + 4 * T + s_a2 * T * T;
      let dem = [
        (2 * T - T * T) / normalizeKoef,
        (2 * T * T) / normalizeKoef,
        (T * T - 2 * T) / normalizeKoef
      ];
      let num = [
        1,
        (2 * s_a2 * T * T - 8) / normalizeKoef,
        (4 - 4 * T + s_a2 * T * T) / normalizeKoef
      ];

      /**
       * Вывод формулы на экран
       */
      let formula = "H(z) = (";
      for (let i = 0; i < dem.length; i++) {
        if (i) formula += " + ";
        formula += `${this.formatNumber(dem[i])}z<sup>-${i}</sup>`;
      }
      formula += ") / (";
      for (let i = 0; i < num.length; i++) {
        if (i) formula += " + ";
        formula += `${this.formatNumber(num[i])}z<sup>-${i}</sup>`;
      }
      formula += ")";
      document.getElementById(
        "appDigital__initialSignal__formula"
      ).innerHTML = formula;

      /**
       * inputSignal - формирование дельта-функции Кронекера
       */
      let inputSignal = {
        data: [],
        time: []
      };
      for (let i = 0; i < this.fs * this.time; i++) {
        inputSignal.data.push(0);
        inputSignal.time.push(i / this.fs);
      }
      //   inputSignal.data[Math.floor(inputSignal.data.length / 10)] = 1;
      inputSignal.data[0] = 1;
      showGraph(
        "appDigital__initialSignal_kroneker",
        inputSignal.time,
        inputSignal.data
      );

      /**
       * Расчет ИХ как реакция на импульс
       */
      let outputSignal = {
        data: [],
        time: []
      };

      let sum;
      for (let n = 0; n < inputSignal.time.length; n++) {
        sum = 0;
        for (let i = 0; i < dem.length; i++) {
          if (n - i >= 0) {
            sum += dem[i] * inputSignal.data[n - i];
          }
        }
        for (let i = 1; i < num.length; i++) {
          if (n - i >= 0) {
            sum -= num[i] * outputSignal.data[n - i];
          }
        }
        if (Number.isNaN(sum)) {
          console.log(n);
        }
        outputSignal.data.push(sum);
        outputSignal.time.push(inputSignal.time[n]);
      }

      showGraph(
        "appDigital__initialSignal_answer",
        outputSignal.time,
        outputSignal.data
      );

      /**
       * Расчет импульсной характеристики с импульсом при нуле
       */

      /**
       * Поиск частотного отклика для аналоговой ИХ
       */
      let datafft = fft(imResp.signal, this.fs);
      showGraph(
        "appDigital__initialSignal_freq_afr",
        datafft.frequency.slice(0, Math.floor(datafft.frequency.length / 2)),
        datafft.amplitude.slice(0, Math.floor(datafft.amplitude.length / 2))
      ); // АЧХ
      let phase = [];
      for (let i = 0; i < datafft.frequency.length; i++) {
        phase[i] = Math.atan(datafft.Im[i] / datafft.Re[i]);
      }
      showGraph(
        "appDigital__initialSignal_freq_pfr",
        datafft.frequency.slice(0, Math.floor(datafft.frequency.length / 2)),
        phase.slice(0, Math.floor(datafft.frequency.length / 2))
      ); // ФЧХ

      /**
       * Поиск частотного отклика для цифровой ИХ
       */
      let datafft_digit = fft(outputSignal.data, this.fs);
      showGraph(
        "appDigital__initialSignal_freq_afr_digit",
        datafft.frequency.slice(0, Math.floor(datafft.frequency.length / 2)),
        datafft.amplitude.slice(0, Math.floor(datafft.amplitude.length / 2))
      ); // АЧХ
      let phase_digit = [];
      for (let i = 0; i < datafft_digit.frequency.length; i++) {
        phase_digit[i] = Math.atan(datafft_digit.Im[i] / datafft_digit.Re[i]);
      }
      showGraph(
        "appDigital__initialSignal_freq_pfr_digit",
        datafft_digit.frequency.slice(
          0,
          Math.floor(datafft.frequency.length / 2)
        ),
        phase_digit.slice(0, Math.floor(datafft.frequency.length / 2))
      ); // ФЧХ

      this.$refs.appDigital__initialSignal.style.display = "block";
      this.$refs.appDigital__initialSignal__formula.style.display = "block";
      this.$refs.appDigital__initialSignal_kroneker.style.display = "block";
      this.$refs.appDigital__initialSignal_answer.style.display = "block";
      this.$refs.appDigital__initialSignal__fr.style.display = "block";
      this.$refs.appDigital__initialSignal__fr_digit.style.display = "block";
    },
    formatNumber(number) {
      // Math.floor(dem[i] * 10000) / 10000
      let ans = number;
      let power = 0;
      while (Math.abs(ans) < 100) {
        ans = ans * 10;
        power++;
        if (power > 9) return 0;
      }
      return Math.floor(ans) / Math.pow(10, power);
    },
    calculate() {
      console.log("wait");
      this.initSignal();
      console.log("OK!");
    }
  },
  mounted() {
    this.hideElems();
    setTimeout(() => {
      this.calculate();
    }, 0);
  }
};
