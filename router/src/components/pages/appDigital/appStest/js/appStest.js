import Vue from "vue";
import getSignal from "./js/signal";
import showGraph from './js/showGraph';
import show3D from "./js/show3D";
import laplasD from "./js/laplasD";
import getRectSignal from "./js/signal_Rect";
import conv from "./js/conv";

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
            this.$refs.appDigital__initialSignal__3D.style.display = 'none';
            this.$refs.appDigital__initialSignal__Hs.style.display = 'none';
            this.$refs.appDigital__initialSignal__Hz.style.display = 'none';
            this.$refs.appDigital__conv.style.display = 'none';

        },
        initSignal() {
            let data1 = getRectSignal(-0.5,0, this.fs, [-2, 2]);
            this.$refs.appDigital__initialSignal.style.display = 'block';
            showGraph('appDigital__initialSignal', data1.time, data1.amplitude);

            let data2 = getRectSignal(0, 0.5, this.fs, [-2, 2]);
            this.$refs.appDigital__initialSignal.style.display = 'block';
            showGraph('appDigital__initialSignal2', data2.time, data2.amplitude);

            let convdata = conv(data1, data2);
            this.$refs.appDigital__conv.style.display = 'block';
            showGraph('appDigital__conv', convdata.time, convdata.amplitude);
            console.log(convdata);

        },
        showHs() {
            let hs = [];
            let values = [];
            let step = 0.01;
            let max = 10;
            let currentS = -10;
            while (currentS <= max) {
                hs.push(currentS);
                let numerator = 0;
                for (let i = 0; i < this.koefsForHs[0].length; i++) {
                    numerator += this.koefsForHs[0][i] * Math.pow(currentS, i);
                }
                let denominator = 0;
                for (let i = 0; i < this.koefsForHs[1].length; i++) {
                    denominator += this.koefsForHs[1][i] * Math.pow(currentS, i);
                }
                values.push(numerator/denominator);
                currentS += step;
            }
            this.$refs.appDigital__initialSignal__Hs.style.display = 'block';
            showGraph('appDigital__initialSignal__Hs', hs, values);
        },
        showHz() {
            let hs = [];
            let values = [];
            let step = 0.01;
            let max = 100;
            let currentS = -100;
            while (currentS <= max) {
                hs.push(currentS);
                let numerator = 0;
                for (let i = 0; i < this.koefsForHz[0].length; i++) {
                    numerator += this.koefsForHz[0][i] * Math.pow(currentS, i);
                }
                let denominator = 0;
                for (let i = 0; i < this.koefsForHz[1].length; i++) {
                    denominator += this.koefsForHz[1][i] * Math.pow(currentS, i);
                }
                values.push(numerator/denominator);
                currentS += step;
            }
            this.$refs.appDigital__initialSignal__Hz.style.display = 'block';
            showGraph('appDigital__initialSignal__Hz', hs, values);
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