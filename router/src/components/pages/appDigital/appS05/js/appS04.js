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
            koefsForHs: [[-1, -1], [556, 1652476, 2, 1]],
            koefsForHz: [[-0.0404,0.04,-0.0408,0.04,-0.0004],[4.302,-8.08,4.524,-0.08,0.222]],
        }
    },
    methods: {
        hideElems() {
            this.$refs.appDigital__initialSignal.style.display = 'none';
            this.$refs.appDigital__initialSignal_positive.style.display = 'none';
            this.$refs.appDigital__initialSignal__formula.style.display = 'none';
            this.$refs.appDigital__initialSignal_kroneker.style.display = 'none';
            this.$refs.appDigital__initialSignal_answer.style.display = 'none';
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
            
            
            let formula = "H(z) =";
            for (let i = 0; i < 100; i++) {
                formula += ` + ${Math.floor(imResp.signal[i]*100)/100}z^(-${i})`;
            }
            document.getElementById('appDigital__initialSignal__formula').innerHTML = formula;
            this.$refs.appDigital__initialSignal__formula.style.display = 'block';

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

            for (let i = 0; i < inputSignal.time.length; i++) {
                let sumValue = 0;
                for (let j = 0; j < imResp.signal.length; j++) {
                    if (i - j >= 0) {
                        // если точка в пределах входного сигнала
                        sumValue += inputSignal.data[i - j] * imResp.signal[j];
                    }
                }
                outputSignal.data.push(sumValue);
                outputSignal.time.push(inputSignal.time[i]);
            }
            console.log(imResp.signal)
            console.log(outputSignal.data)
            this.$refs.appDigital__initialSignal_answer.style.display = 'block';
            showGraph('appDigital__initialSignal_answer', outputSignal.time, outputSignal.data);

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