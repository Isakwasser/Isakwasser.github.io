import Vue from "vue";
import getCodedSignal from "./js/signal";
import showGraph from "./js/showGraph";
import fft from "./js/fft";
import gercel from "./js/gercel";
import gercel_decoder from "./js/gercel_decoder";
import getCodedSignal2 from "./js/signal2";


export default {
    data() {
        return {
            inputArray: "8",
            fs: 10000,
            decoded: '',
            timeForSecondSignal: 0.01,
        }
    },
    methods: {
        hideElems() {
            this.$refs.appDigital__initialSignal__fft.style.display = 'none';
            this.$refs.appDigital__initialSignal__gercel.style.display = 'none';
            this.$refs.spinner.style.display = 'none';
            this.$refs.appDigital__initialSignal2.style.display = 'none';
            this.$refs.appDigital__initialSignal2_fft.style.display = 'none';
            this.$refs.appDigital__initialSignal2_noise.style.display = 'none';
            this.$refs.appDigital__initialSignal2_noise_fft.style.display = 'none';
        },
        initSignal() {
            let data = getCodedSignal(this.inputArray, this.fs);
            showGraph('appDigital__initialSignal', data.time, data.signal);

            // алгоритм Герцеля
            let data_gercel = gercel(data.signal, this.fs);
            this.$refs.appDigital__initialSignal__gercel.style.display = 'block';
            showGraph('appDigital__initialSignal__gercel', data_gercel.frequency, data_gercel.amplitude);

            // декодирование алгоритмом Герцеля
            console.log('Начало работы декодировщика');
            let data_gercel_decoded = gercel_decoder(data.signal, this.fs);
            this.decoded = data_gercel_decoded;
        },
        calculateForSecond() {
            let fs = 100000;
            let data = getCodedSignal2(this.timeForSecondSignal, fs);
            this.$refs.appDigital__initialSignal2.style.display = 'block';
            showGraph('appDigital__initialSignal2', data.time, data.signal);

            // алгоритм Герцеля
            let data_gercel1 = gercel(data.signal, fs);
            this.$refs.appDigital__initialSignal2_fft.style.display = 'block';
            showGraph('appDigital__initialSignal2_fft', data_gercel1.frequency, data_gercel1.amplitude);

            // добавление шума к сигналу
            let signal = [];
            for (let i = 0; i < data.signal.length; i++) {
                signal.push(data.signal[i]+randn_bm());
            }
            this.$refs.appDigital__initialSignal2_noise.style.display = 'block';
            showGraph('appDigital__initialSignal2_noise', data.time, signal);

            // алгоритм Герцеля
            let data_gercel = gercel(signal, fs);
            this.$refs.appDigital__initialSignal2_noise_fft.style.display = 'block';
            showGraph('appDigital__initialSignal2_noise_fft', data_gercel.frequency, data_gercel.amplitude);

            // Преобразование Бокса-Мюллера
            function randn_bm() {
                var u = 0, v = 0;
                while(u === 0) u = Math.random();
                while(v === 0) v = Math.random();
                return Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
            }
        },
        calculate() {
            console.log('wait');
            this.initSignal();
            this.$refs.secondBtn.disabled = false;
            console.log('OK!');
        }
    },
    mounted() {
        this.hideElems();
    },
}