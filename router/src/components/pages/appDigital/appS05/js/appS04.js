import Vue from "vue";
import getSignal from "./js/signal";
import showGraph from './js/showGraph';
import show3D from "./js/show3D";
import laplasD from "./js/laplasD";

export default {
    data() {
        return {
            fs: 100,
            time: 10,
        }
    },
    methods: {
        hideElems() {
            this.$refs.appDigital__initialSignal.style.display = 'none';
            this.$refs.appDigital__initialSignal_positive.style.display = 'none';
            this.$refs.appDigital__initialSignal__formula.style.display = 'none';
            this.$refs.appDigital__initialSignal_kroneker.style.display = 'none';
            this.$refs.appDigital__initialSignal_answer.style.display = 'none';
            this.$refs.appDigital__initialSignal_answer_zero.style.display = 'none';
        },
        initSignal() {
            /**
             * Вывод исходного графика на экран
             */
            let data = getSignal(this.time, this.fs);
            this.$refs.appDigital__initialSignal.style.display = 'block';
            showGraph('appDigital__initialSignal', data.time, data.signal);
            let imResp = getSignal(this.time, this.fs, 0);
            this.$refs.appDigital__initialSignal_positive.style.display = 'block';
            showGraph('appDigital__initialSignal_positive', imResp.time, imResp.signal);
            
            
            

            /**
             * inputSignal - формирование дельта-функции Кронекера
             */
            let inputSignal = {
                data: [],
                time: [],
            };
            for (let i = 0; i < this.fs * this.time * 2; i++) {
                inputSignal.data.push(0);
                inputSignal.time.push(i / this.fs);
            }
            inputSignal.data[Math.floor(inputSignal.data.length / 2)] = 1;
            // inputSignal.data[500] = 1;
            this.$refs.appDigital__initialSignal_kroneker.style.display = 'block';
            showGraph('appDigital__initialSignal_kroneker', inputSignal.time, inputSignal.data);


            let outputSignal = {
                data: [],
                time: [],
            };

            let T = 1 / this.fs;
            let w = 2 * Math.PI * 0.25 * 15; // те самые 556,...
            let s_a2 = 1 + w * w;
            let normalizeKoef = 4 + 4 * T + s_a2 * T * T;
            // let b = [(2 * T - T * T)/normalizeKoef, -2 * T * T/normalizeKoef, (T * T - 2 * T)/normalizeKoef];
            let b = [(2 * T - T * T) / normalizeKoef, 2 * T * T / normalizeKoef, (T * T - 2 * T) / normalizeKoef];
            let a = [1, (2 * s_a2 * T * T - 8) / normalizeKoef, (4 - 4 * T + s_a2 * T * T) / normalizeKoef];
            
            let formula = "H(z) = (";
            for (let i = 0; i < b.length; i++) {
                formula += ` + ${Math.floor(b[i] * 10000) / 10000}z^(-${i})`;
            }
            formula += ') / (';
            for (let i = 0; i < a.length; i++) {
                formula += ` + ${Math.floor(a[i] * 10000) / 10000}z^(-${i})`;
            }
            formula += ')';
            document.getElementById('appDigital__initialSignal__formula').innerHTML = formula;
            this.$refs.appDigital__initialSignal__formula.style.display = 'block';

            let sum;
            for (let n = 0; n < inputSignal.time.length; n++) {
                sum = 0;
                for (let i = 0; i < b.length; i++) {
                    if (n - i >= 0) {
                        sum += b[i] * inputSignal.data[n - i];
                    }
                }
                for (let i = 1; i < a.length; i++) {
                    if (n - i >= 0) {
                        sum -= a[i] * outputSignal.data[n - i];
                    }
                }
                if (Number.isNaN(sum)) {
                    console.log(n);
                }
                outputSignal.data.push(sum);
                outputSignal.time.push(inputSignal.time[n]);
            }

            this.$refs.appDigital__initialSignal_answer.style.display = 'block';
            showGraph('appDigital__initialSignal_answer', outputSignal.time, outputSignal.data);

            /**
             * Расчет импульсной характеристики с импульсом при нуле
             */
            let outputSignal1 = {
                data: [],
                time: [],
            };
            for (let n = 0; n < this.fs * this.time; n++) {
                sum = 0;
                for (let i = 0; i < b.length; i++) {
                    if (n - i == 0) {
                        // условие считывания импульса в нулевом отсчете
                        sum += b[i];
                    }
                }
                for (let i = 1; i < a.length; i++) {
                    if (n - i >= 0) {
                        sum -= a[i] * outputSignal1.data[n - i];
                    }
                }
                if (Number.isNaN(sum)) {
                    console.log(n);
                }
                outputSignal1.data.push(sum);
                outputSignal1.time.push(n / this.fs);
            }

            this.$refs.appDigital__initialSignal_answer_zero.style.display = 'block';
            showGraph('appDigital__initialSignal_answer_zero', outputSignal1.time, outputSignal1.data);

        },
        calculate() {
            console.log('wait');
            this.initSignal();
            console.log('OK!');
        }
    },
    mounted() {
        this.hideElems();
        this.calculate();
    },
}