import Vue from "vue";
import getSignal from "./js/signal";
import showGraph from './js/showGraph';
import show3D from "./js/show3D";
import laplasD from "./js/laplasD";

export default {
    data() {
        return {
            fs: 50,
            time: 1,
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
        },
        initSignal() {
            let data = getSignal(this.time, this.fs);
            this.$refs.appDigital__initialSignal.style.display = 'block';
            showGraph('appDigital__initialSignal', data.time, data.signal);
            this.$refs.appDigital__initialSignal_positive.style.display = 'block';
            showGraph('appDigital__initialSignal_positive', data.time.slice(Math.floor(-data.time.length / 2)), data.signal.slice(Math.floor(-data.signal.length / 2)));
            // let data3D = laplasD(data.signal, this.fs, [-10,10], [-10,10], 1);
            // // console.log(data3D.plot)
            // this.$refs.appDigital__initialSignal__3D.style.display = 'block';
            // show3D('appDigital__initialSignal__3D', data3D.plot);
            this.showHs();
            this.showHz();
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