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
        }
    },
    methods: {
        hideElems() {
            this.$refs.appDigital__initialSignal__fft.style.display = 'none';
            this.$refs.appDigital__initialSignal__gercel.style.display = 'none';
            this.$refs.spinner.style.display = 'none';
        },
        initSignal() {
            let data = getCodedSignal(this.inputArray, this.fs);
            showGraph('appDigital__initialSignal', data.time, data.signal);

            // БПФ
            let data_fft = fft(data.signal, this.fs);
            this.$refs.appDigital__initialSignal__fft.style.display = 'block';
            showGraph('appDigital__initialSignal__fft', data_fft.frequency, data_fft.amplitude);

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
            console.log('Начало')
            let data = getCodedSignal2(1, 100000);
            console.log(data)
            showGraph('appDigital__initialSignal2', data.time, data.signal);
            console.log('Конец')
        },
        calculate() {
            console.log('wait');
            this.initSignal();
            console.log('OK!');
        }
    },
    mounted() {
        this.hideElems();
    },
}