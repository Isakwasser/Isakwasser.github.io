import fft from "./js/fft";
import showGraph from './js/showGraph';

const N = 15;
const NumOfPeriod = 10;

export default {
    data() {
        return {
            fs: 10000, // частота дискретизации
            interpolateTo: 10000,
            sequence: 2,
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
            thinning_N: 20,
            thinning_N_low: 2,
            thinning_N_high: 50,
            animation_N: 1,
            animation_duration: 200,
            thinSignal: {},
            interpolateSignal: {},
        }
    },
    methods: {
        /* Инициализация данных, создание сигнала */
        initSignal() {
            let f1 = this.freqs[this.sequence][0],
                f2 = this.freqs[this.sequence][1];

            let maxTime = NumOfPeriod * this.getPeriod(f1, f2); // время отображения
            console.log('maxTime', maxTime);

            let timer = 0,
                time = [],
                amplitude = [];
            while (timer / this.fs < maxTime) {
                amplitude.push(Math.sin(2 * Math.PI * f1 * timer / this.fs) + Math.sin(2 * Math.PI * f2 * timer / this.fs));
                time.push(timer / this.fs);
                timer++;
            }
            this.thinSignal = {};
            this.interpolateSignal = {};
            this.signal = {
                time,
                amplitude,
            }
            let signal__fft = fft(amplitude, this.fs);
            showGraph('initSignal', this.signal.time, this.signal.amplitude);
            showGraph('initSignal__fft', signal__fft.frequency, signal__fft.amplitude);

            this.$refs.initSignal__btn.addEventListener('click', () => { this.soundMusic(amplitude, this.fs) });
        },

        /* Прореживание сигнала */
        thinningSignal() {
            let thinSignal = this.getThinSignal(this.thinning_N);
            let signal__fft = fft(thinSignal.amplitude, this.fs / this.thinning_N);
            showGraph('thinningSignal', thinSignal.time, thinSignal.amplitude);
            showGraph('thinningSignal__fft', signal__fft.frequency, signal__fft.amplitude);

            let interpolate = this.getInterpolateSignal(this.thinning_N);
            let signal__fft_interpolate = fft(interpolate.amplitude, this.interpolateTo);
            showGraph('thinningSignal_interpolate', interpolate.time, interpolate.amplitude);
            showGraph('thinningSignal__fft_interpolate', signal__fft_interpolate.frequency, signal__fft_interpolate.amplitude);

            this.$refs.thinningSignal__btn.addEventListener('click', () => { this.soundMusic(thinSignal.amplitude, this.fs / this.thinning_N) });
            this.$refs.thinningSignal_interpolate__btn.addEventListener('click', () => { this.soundMusic(interpolate.amplitude, this.interpolateTo) });
        },
        thinningSignal_low() {
            let thinSignal = this.getThinSignal(this.thinning_N_low);

            let signal__fft = fft(thinSignal.amplitude, this.fs / this.thinning_N_low);
            showGraph('thinningSignal_low', thinSignal.time, thinSignal.amplitude);
            showGraph('thinningSignal__fft_low', signal__fft.frequency, signal__fft.amplitude);

            let interpolate = this.getInterpolateSignal(this.thinning_N_low);
            let signal__fft_interpolate = fft(interpolate.amplitude, this.interpolateTo);
            showGraph('thinningSignal_low_interpolate', interpolate.time, interpolate.amplitude);
            showGraph('thinningSignal__fft_low_interpolate', signal__fft_interpolate.frequency, signal__fft_interpolate.amplitude);

            this.$refs.thinningSignal_low__btn.addEventListener('click', () => { this.soundMusic(thinSignal.amplitude, this.fs / this.thinning_N_low) });
            this.$refs.thinningSignal_low_interpolate__btn.addEventListener('click', () => { this.soundMusic(interpolate.amplitude, this.interpolateTo) });
        },
        thinningSignal_high() {
            let thinSignal = this.getThinSignal(this.thinning_N_high);

            let signal__fft = fft(thinSignal.amplitude, this.fs / this.thinning_N_high);
            showGraph('thinningSignal_high', thinSignal.time, thinSignal.amplitude);
            showGraph('thinningSignal__fft_high', signal__fft.frequency, signal__fft.amplitude);

            let interpolate = this.getInterpolateSignal(this.thinning_N_high);
            let signal__fft_interpolate = fft(interpolate.amplitude, this.interpolateTo);
            showGraph('thinningSignal_high_interpolate', interpolate.time, interpolate.amplitude);
            showGraph('thinningSignal__fft_high_interpolate', signal__fft_interpolate.frequency, signal__fft_interpolate.amplitude);

            this.$refs.thinningSignal_high__btn.addEventListener('click', () => { this.soundMusic(thinSignal.amplitude, this.fs / this.thinning_N_high) });
            this.$refs.thinningSignal_high_interpolate__btn.addEventListener('click', () => { this.soundMusic(interpolate.amplitude, this.interpolateTo) });
        },

        /* Интерполяция сигнала */
        interpolate(signal, fs) {
            let ans = {
                time: [],
                amplitude: [],
            };
            let j = 0; // Счетчик
            for (let i = 0; i < signal.time.slice(-1)[0] * fs; i++) {
                // i - номер отсчета

                if (signal.time[j + 1] < i / fs) {
                    j++;
                    // console.log(j);
                }
                ans.amplitude.push(signal.amplitude[j]);
                ans.time.push(i / fs);
            }
            return ans;
        },
        /* Буфер интерполированного сигнала*/
        getInterpolateSignal(n) {
            if (this.interpolateSignal.hasOwnProperty(n)) {
                // console.log(`Get from buffer: ${n}`);
                return this.interpolateSignal[n];
            }
            console.log(`Рассчет interpolateSignal: ${n}`);
            this.interpolateSignal[n] = this.interpolate(this.getThinSignal(n), this.interpolateTo);
            return this.interpolateSignal[n];
        },

        /* Буфер прореженного сигнала */
        getThinSignal(n) {
            if (this.thinSignal.hasOwnProperty(n)) {
                // console.log(`Get from buffer: ${n}`);
                return this.thinSignal[n];
            }
            let time = [],
                amplitude = [];
            for (let i = 0; i < this.signal.time.length; i++) {
                if (i % n == 0) {
                    time.push(this.signal.time[i]);
                    amplitude.push(this.signal.amplitude[i]);
                }
            }
            this.thinSignal[n] = {
                time,
                amplitude,
            }
            return this.thinSignal[n];
        },

        /* Воспроизведение сигнала */
        soundMusic(array, fs) {
            if (fs < 3000) {
                alert(`Частота дискретизации для воспроизведения не может быть меньше 3000. Текущая ${fs}`);
                return
            }
            let AudioContext = window.AudioContext || window.webkitAudioContext;
            let audioCtx = new AudioContext();

            let buffer = audioCtx.createBuffer(1, array.length, fs);
            let bufferData = buffer.getChannelData(0);
            for (let i = 0; i < bufferData.length; i++) {
                bufferData[i] = array[i];
            }
            var source = audioCtx.createBufferSource();

            // set the buffer in the AudioBufferSourceNode
            source.buffer = buffer;
            // connect the AudioBufferSourceNode to the
            // destination so we can hear the sound
            source.connect(audioCtx.destination);
            // start the source playing
            // console.log(source);
            source.start();
        },
        getPeriod(f1, f2) {
            let T1 = 1 / f1,
                T2 = 1 / f2;
            let i = 1;
            let error = {
                i: 0,
                value: Infinity,
            }
            for (let i = 2; i < 100; i++) {
                let err = Math.min(T1 * i % T2, T1 * (i - 1) % T2);
                if (err < error.value) {
                    error = {
                        i,
                        value: err,
                    }
                }
            }
            return T1 * error.i;
        },
        doAll() {
            this.initSignal();
            this.thinningSignal();
            this.thinningSignal_low();
            this.thinningSignal_high();
        },
        animate(n = this.animation_N) {
            let thinSignal = this.getThinSignal(n);

            let signal__fft = fft(thinSignal.amplitude, this.fs / n);
            this.animation_N = n;

            showGraph('thinningSignal__animation', thinSignal.time, thinSignal.amplitude, 0);
            showGraph('thinningSignal__animation__fft', signal__fft.frequency, signal__fft.amplitude, 0);

            let interpolate = this.getInterpolateSignal(n);
            let signal__fft_interpolate = fft(interpolate.amplitude, this.interpolateTo);
            showGraph('thinningSignal__animation__interpolate', interpolate.time, interpolate.amplitude, 0);
            showGraph('thinningSignal__animation__fft__interpolate', signal__fft_interpolate.frequency, signal__fft_interpolate.amplitude, 0);
            if (n < 50) {
                setTimeout(() => {
                    this.animate(n + 1);
                }, this.animation_duration);
            };
        },
    },
    mounted() {
        // this.doAll();
    },
}