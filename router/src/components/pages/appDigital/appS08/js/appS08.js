import fft from "./js/fft";
import showGraph from './js/showGraph';

export default {
    data() {
        return {
            fs: 10000, // частота дискретизации
            sequence: 1,
            freqs: [
                [941, 1336],
                [697, 1209],
                [697, 1336],
                [697, 1477],
                [770, 1209],
                [770, 1336],
                [770, 1477],
                [852, 1209],
                [852, 1336],
                [852, 1477],
            ],
        }
    },
    methods: {
        initSignal() {
            let maxFreq = this.fs;
            let f1 = this.freqs[this.sequence][0],
                f2 = this.freqs[this.sequence][1];

            let fCommon = Math.min(f1, f2); //частота общего сигнала

            let maxTime = 5 / fCommon; // время отображения
        },
    },
    mounted() {

    },
}