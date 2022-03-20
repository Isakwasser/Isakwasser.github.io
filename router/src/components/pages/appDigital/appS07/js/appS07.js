import fft from "./js/fft";
import gercel from './js/gercel';
import showGraph from "./js/showGraph";

export default {
    data() {
        return {
            windowWidth: 0.01,
            fs: undefined,
            cutoffF: 500,
            cutoffF_high: 1000,
            cutoffF_band_low: 0.02,
            cutoffF_band_high: 0.03,
        }
    },
    methods: {
        step1() {
            // create the audio context (chrome only for now)
            let context = new (AudioContext || webkitAudioContext)();

            let request = new XMLHttpRequest();
            request.open('GET', this.$refs.audio.src, true);
            request.responseType = 'arraybuffer';
    
            // When loaded decode the data
            request.onload = ()=> {
                // decode the data
                context.decodeAudioData(request.response, (buffer) => {
                    let float32Array = buffer.getChannelData(0); // получили массив байтов
                    this.showSpectrogramByBytes(float32Array, buffer.sampleRate);
                }, (err)=>{console.log(`Decode error: ${err}`)});
            }
            request.send();
        },
        showSpectrogramByBytes(float32Array, fs, canvasID = 'spectrogram') {
            console.log(fs)
            let currentIndex = 0;
            const canvas = document.getElementById(canvasID); // прикрепили окно рисования
            canvas.style.position = 'relative';
            canvas.width = float32Array.length / fs / this.windowWidth+1;
            let datafft = fft(float32Array.slice(currentIndex * fs * this.windowWidth, (currentIndex + 1) * fs * this.windowWidth), fs);
            canvas.height = Math.floor(datafft.amplitude.length/2)*1;
            const canvasCtx = canvas.getContext('2d');
            canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
            canvasCtx.fillStyle = 'rgb(0, 0, 0)';
            canvasCtx.fillRect(0, 0, canvas.width, canvas.height);
            canvasCtx.fillStyle = "#FFF";
            canvasCtx.fillText(`${datafft.frequency[Math.floor(datafft.amplitude.length/2)]} Гц`, 5, 10);
            let min = 100, max = 0;

            let drawPiece = (currentIndex) => {
                // console.log(currentIndex)
                let datafft = fft(float32Array.slice(currentIndex * fs * this.windowWidth, (currentIndex + 1) * fs * this.windowWidth), fs)
                let arr = [];
                let arrf = [];
                // console.log(datafft.frequency[Math.floor(datafft.amplitude.length / 2)]); // вывести частоту Найквиста
                for (let i = 0; i < datafft.amplitude.length / 2; i++) {
                    /**
                     * Варианты расчета значений спектрограммы
                     */
                    let currentOpacity = Math.log(datafft.amplitude[i]) / 10 + 1;
                    currentOpacity = datafft.amplitude[i] / 5;
                    currentOpacity = Math.log(datafft.amplitude[i] + 1) / 2;
                    
                    if (min > currentOpacity) min = currentOpacity;
                    if (max < currentOpacity) max = currentOpacity;

                    if (currentOpacity < 0) currentOpacity = 0;
                    if (currentOpacity > 1) currentOpacity = 1;
                    
                    arr.push(currentOpacity);
                    arrf.push(datafft.frequency[i]);
                }
                // console.log(Math.min(...arr), Math.max(...arr));

                //Draw spectrum
                let posX = currentIndex*1;
                let posY = canvas.height-1;
                for (let i = 0; i < arrf.length; i++) {
                    canvasCtx.fillStyle = 'rgba(255, 255, 255,'+arr[i]+')';
                    canvasCtx.fillRect(posX, posY, 1, 1);
                    posY -= 1;
                }
                if ((currentIndex + 1) * fs * this.windowWidth < float32Array.length) {
                    setTimeout(drawPiece, 0, currentIndex + 1)
                }
                // console.log(min,max,max-min)
                
            }

            drawPiece(currentIndex);
        },
        playFloat32Array(myArrayBuffer) {
            let audioCtx = new (window.AudioContext || window.webkitAudioContext)();

            // just random values between -1.0 and 1.0
            // This gives us the actual array that contains the data
            let nowBuffering = myArrayBuffer.getChannelData(0);
            for (var i = 0; i < myArrayBuffer.length; i++) {
                // Math.random() is in [0; 1.0]
                // audio needs to be in [-1.0; 1.0]
                // nowBuffering[i] = Math.random()*2-1;
            }
                
            

            // Get an AudioBufferSourceNode.
            // This is the AudioNode to use when we want to play an AudioBuffer
            let source = audioCtx.createBufferSource();

            // set the buffer in the AudioBufferSourceNode
            source.buffer = myArrayBuffer;

            // connect the AudioBufferSourceNode to the
            // destination so we can hear the sound
            source.connect(audioCtx.destination);

            // start the source playing
            source.start();
            this.$refs.stop.onclick = () => {
                source.stop();
            }

        },   
        step2() {
            // create the audio context (chrome only for now)
            let context = new (AudioContext || webkitAudioContext)();

            let request = new XMLHttpRequest();
            request.open('GET', this.$refs.audio2.src, true);
            request.responseType = 'arraybuffer';
    
            // When loaded decode the data
            request.onload = ()=> {
                // decode the data
                context.decodeAudioData(request.response, (buffer) => {
                    let float32Array = buffer.getChannelData(0); // получили массив байтов
                    this.filterButterworth(float32Array);
                    this.showSpectrogramByBytes(float32Array, buffer.sampleRate,'spectrogram2');
                    this.playFloat32Array(buffer);
                }, (err)=>{console.log(`Decode error: ${err}`)});
            }
            request.send();
        },
        filterButterworth (float32Array) {
            let inputSignal = float32Array.slice(0);
            let sum;
            // let a = [1, 3, 3, 1];
            // let b = [960001, -1343997, 576003, -191999];
            // for (let k = 0; k < float32Array.length; k++) {
            //     sum = 0;
            //     for (let m = 0; m <= power; m++) {
            //         if (k - m >= 0) {
            //             sum += b[m] * inputSignal[k - m];
            //         }
            //     }
            //     for (let m = 1; m <= power; m++) {
            //         if (k - m >= 0) {
            //             sum -= a[m] * float32Array[k - m];
            //         }
            //     }
                


            //     float32Array[k] = sum/960001;
            //     // float32Array[k] = 32;
            // }
            let cutoffW = 2 * Math.PI * this.cutoffF;
            let fs = 48000;
            let wp = Math.tan(Math.PI * cutoffW / fs);

            let normalizeKoef = 1 + wp * Math.sqrt(2) + wp * wp;

            let b = [wp*wp/normalizeKoef, 2*wp*wp/normalizeKoef, wp*wp/normalizeKoef];
            let a = [1, 2 * (wp * wp - 1) / normalizeKoef, (1 - wp * Math.sqrt(2) + wp * wp) / normalizeKoef];
            // console.log(a,b)
            for (let k = 0; k < float32Array.length; k++) {
                sum = 0;
                for (let i = 0; i < b.length; i++) {
                    if (k - i >= 0) {
                        sum += b[i] * inputSignal[k - i];
                    }
                }
                for (let i = 1; i < a.length; i++) {
                    if (k - i >= 0) {
                        sum -= a[i] * float32Array[k - i];
                    }
                }
                if (Number.isNaN(sum)) {
                    console.log(k);
                }
                float32Array[k] = sum;
            }
            // console.log(float32Array);
            return float32Array;
        },
        step3() {
            // create the audio context (chrome only for now)
            let context = new (AudioContext || webkitAudioContext)();

            let request = new XMLHttpRequest();
            request.open('GET', this.$refs.audio3.src, true);
            request.responseType = 'arraybuffer';
    
            // When loaded decode the data
            request.onload = ()=> {
                // decode the data
                context.decodeAudioData(request.response, (buffer) => {
                    let float32Array = buffer.getChannelData(0); // получили массив байтов
                    this.filterButterworth_high(float32Array);
                    this.showSpectrogramByBytes(float32Array, buffer.sampleRate,'spectrogram2_high');
                    this.playFloat32Array(buffer);
                }, (err)=>{console.log(`Decode error: ${err}`)});
            }
            request.send();
        },
        filterButterworth_high (float32Array) {
            let inputSignal = float32Array.slice(0);
            let sum;
            let cutoffW = 2 * Math.PI * this.cutoffF_high;
            let fs = 48000;
            let wp = Math.tan(Math.PI * cutoffW / fs);

            let normalizeKoef = 1 + wp * Math.sqrt(2) + wp * wp;

            let b = [1/normalizeKoef, 2/normalizeKoef, 1/normalizeKoef];
            let a = [1, 2 * (wp * wp - 1) / normalizeKoef, (1 - wp * Math.sqrt(2) + wp * wp) / normalizeKoef];
            // console.log(a,b)
            for (let k = 0; k < float32Array.length; k++) {
                sum = 0;
                for (let i = 0; i < b.length; i++) {
                    if (k - i >= 0) {
                        sum += b[i] * inputSignal[k - i];
                    }
                }
                for (let i = 1; i < a.length; i++) {
                    if (k - i >= 0) {
                        sum -= a[i] * float32Array[k - i];
                    }
                }
                if (Number.isNaN(sum)) {
                    console.log(k);
                }
                float32Array[k] = sum;
            }
            // console.log(float32Array);
            return float32Array;
        },
        step4() {
            // create the audio context (chrome only for now)
            let context = new (AudioContext || webkitAudioContext)();

            let request = new XMLHttpRequest();
            request.open('GET', this.$refs.audio3.src, true);
            request.responseType = 'arraybuffer';
    
            // When loaded decode the data
            request.onload = ()=> {
                // decode the data
                context.decodeAudioData(request.response, (buffer) => {
                    let float32Array = buffer.getChannelData(0); // получили массив байтов
                    this.filterButterworth_band(float32Array);
                    this.showSpectrogramByBytes(float32Array, buffer.sampleRate,'spectrogram2_band');
                    this.playFloat32Array(buffer);
                }, (err)=>{console.log(`Decode error: ${err}`)});
            }
            request.send();
        },
        filterButterworth_band (float32Array) {
            let inputSignal = float32Array.slice(0);
            let sum;
            let W = (this.cutoffF_band_high - this.cutoffF_band_low) * Math.PI;
            let w2 = this.cutoffF_band_high * this.cutoffF_band_low * 4 * Math.PI * Math.PI;
            let fs = 48000;

            let normalizeKoef = 1 + W + w2;

            let b = [W/normalizeKoef, 0, -W/normalizeKoef];
            let a = [1, 2 * (w2 - 1) / normalizeKoef, (1 - W + w2) / normalizeKoef];
            // console.log(a,b)
            for (let n = 0; n < float32Array.length; n++) {
                sum = 0;
                for (let i = 0; i < b.length; i++) {
                    if (n - i >= 0) {
                        sum += b[i] * inputSignal[n - i];
                    }
                }
                for (let i = 1; i < a.length; i++) {
                    if (n - i >= 0) {
                        sum -= a[i] * float32Array[n - i];
                    }
                }
                if (Number.isNaN(sum)) {
                    console.log(n);
                }
                float32Array[n] = sum;
            }
            // console.log(float32Array);
            return float32Array;
        },
    },
    mounted() {
        // this.doWaveform();
        // this.step1();
        // this.step2();

    },
}