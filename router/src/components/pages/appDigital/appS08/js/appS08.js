import fft from "./js/fft";
import showGraph from './js/showGraph';

const N = 15;
const NumOfPeriod = 5;
const THINNING_N = 2;

export default {
    data() {
        return {
            fs: 10000, // частота дискретизации
            sequence: 0,
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
            signal: {
                time: [],
                amplitude: [],
            },
            sig: {
                time: [],
                amplitude: [],
            },
        }
    },
    methods: {
        /* Инициализация данных, создание сигнала */
        initSignal() {
            let f1 = this.freqs[this.sequence][0],
                f2 = this.freqs[this.sequence][1];

            let fCommon = Math.min(f1, f2); //частота общего сигнала

            let maxTime = NumOfPeriod / fCommon; // время отображения

            let timer = 0,
                time = [],
                amplitude = [];
            while (timer / this.fs < maxTime) {
                amplitude.push(Math.sin(2 * Math.PI * f1 * timer / this.fs) + Math.sin(2 * Math.PI * f2 * timer / this.fs));
                time.push(timer / this.fs);
                timer++;
            }
            this.signal = {
                time,
                amplitude,
            }
            this.sig = {
                time,
                amplitude,
            };
            let signal__fft = fft(amplitude, this.fs);
            showGraph('initSignal', this.signal.time, this.signal.amplitude);
            showGraph('initSignal__fft', signal__fft.frequency, signal__fft.amplitude);
        },
        /* Прореживание сигнала */
        thinningSignal() {
            let time = [],
                amplitude = [];
            for (let i = 0; i < this.sig.time.length; i++) {
                if (i % THINNING_N == 0) {
                    time.push(this.sig.time[i]);
                    amplitude.push(this.sig.amplitude[i]);
                }
            }
            this.sig = {
                time,
                amplitude,
            }
            let signal__fft = fft(amplitude, this.fs / THINNING_N);
            showGraph('thinningSignal', this.sig.time, this.sig.amplitude);
            showGraph('thinningSignal__fft', signal__fft.frequency, signal__fft.amplitude);
        },
    },
    mounted() {
        this.initSignal();
        this.thinningSignal();
    },
}