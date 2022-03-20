import fft from "./js/fft";
import gercel from './js/gercel';
import showGraph from "./js/showGraph";

export default {
    data() {
        return {
            windowWidth: 0.01,
            fs: undefined,
            cutoffF: 100,
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
            canvas.width = float32Array.length/fs/this.windowWidth*2;
            canvas.height = fs * this.windowWidth;
            const canvasCtx = canvas.getContext('2d');
            canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
            canvasCtx.fillStyle = 'rgb(0, 0, 0)';
            canvasCtx.fillRect(0, 0, canvas.width, canvas.height);
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
                let posX = currentIndex*2;
                let posY = canvas.height-2;
                for (let i = 0; i < arrf.length; i++) {
                    canvasCtx.fillStyle = 'rgba(255, 255, 255,'+arr[i]+')';
                    canvasCtx.fillRect(posX, posY, 3, 2);
                    posY -= 2;
                }
                if ((currentIndex + 1) * fs * this.windowWidth < float32Array.length) {
                    setTimeout(drawPiece, 0, currentIndex + 1)
                }
                // console.log(min,max,max-min)
                
            }

            drawPiece(currentIndex);
        },
        getSpectrogram() {
            // create the audio context (chrome only for now)
            let context = new (AudioContext || webkitAudioContext)();

            let request = new XMLHttpRequest();
            request.open('GET', this.$refs.audio.src, true);
            request.responseType = 'arraybuffer';
    
            // When loaded decode the data
            request.onload = ()=> {
                // decode the data
                context.decodeAudioData(request.response, (buffer) => {
                    this.initAudioBuffer = buffer;
                    let float32Array = buffer.getChannelData(0);
                    console.log('float32Array', float32Array)

                    // this.playFloat32Array(buffer);

                }, (err)=>{console.log(`Decode error: ${err}`)});
            }
            request.send();
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
        test() {
            const audioCtx = new AudioContext();

            //Create audio source
            //Here, we use an audio file, but this could also be e.g. microphone input
            const audioEle = new Audio();
            audioEle.src = '/static/media/sound.wav';//insert file name here
            audioEle.autoplay = true;
            audioEle.preload = 'auto';
            const audioSourceNode = audioCtx.createMediaElementSource(audioEle);

            //Create analyser node
            const analyserNode = audioCtx.createAnalyser();
            analyserNode.fftSize = 8192;
            const bufferLength = analyserNode.frequencyBinCount;
            // const dataArray = new Float32Array(bufferLength);
            const dataArray = new Uint8Array(bufferLength);

            //Set up audio node network
            audioSourceNode.connect(analyserNode);
            analyserNode.connect(audioCtx.destination);

            //Create 2D canvas
            const canvas = document.getElementById('spectrogram');
            // canvas.style.position = 'absolute';
            canvas.style.position = 'relative';
            // canvas.style.top = 0;
            // canvas.style.left = 0;
            canvas.width = window.innerWidth;
            canvas.height = bufferLength;
            // document.body.appendChild(canvas);
            const canvasCtx = canvas.getContext('2d');
            canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
            // let max = -10000,min=10000;
            canvasCtx.fillStyle = 'rgb(0, 0, 0)';
            canvasCtx.fillRect(0, 0, canvas.width, canvas.height);
            function draw() {
                let imageData = canvasCtx.getImageData(
                    0,
                    0,
                    canvas.width,
                    canvas.height,
                );

                //Get spectrum data
                analyserNode.getByteFrequencyData(dataArray);

                //Draw black background
                canvasCtx.fillStyle = 'rgb(0, 0, 0)';
                canvasCtx.fillRect(0, 0, canvas.width, canvas.height);
                canvasCtx.putImageData(imageData, 2, 0);

                //Draw spectrum
                // const barHeight = (canvas.height / bufferLength) * 2.5;
                let posY = canvas.height;
                for (let i = 0; i < bufferLength; i++) {
                    // const barOpacity = (dataArray[i]) * 2;
                    // max = dataArray[i] > max ? dataArray[i] : max;
                    // min = dataArray[i]+140 < min ? dataArray[i]+140 : min;
                    // console.log(min,max)
                    const barOpacity = dataArray[i]/255;
                    canvasCtx.fillStyle = 'rgba(255, 255, 255,'+barOpacity+')';
                    // canvasCtx.fillRect(posY, canvas.height - barHeight / 2, barWidth, barHeight / 2);
                    canvasCtx.fillRect(0, posY, 4, 1);
                    posY -= 1;
                }
                //Schedule next redraw
                requestAnimationFrame(draw);
            };

            draw();
        },
        filter() {
            let context = new (AudioContext || webkitAudioContext)();
            let source = context.createMediaElementSource(this.$refs.audio);
            let filter = context.createBiquadFilter();

            source.connect(filter);
            filter.connect(context.destination);

            filter.frequency.value = 10000;
            filter.gain.value = 30;
            // "lowpass", "highpass", "bandpass", "lowshelf", "highshelf", "peaking", "notch", "allpass"
            filter.type = "highpass";

            filter.frequency.setValueAtTime(0.0, context.currentTime);
            filter.frequency.linearRampToValueAtTime(120.0, context.currentTime + 10);
            
            console.log('filter end')
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
            let power = 3;
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
        }
    },
    mounted() {
        // this.doWaveform();
        // this.step1();
        // this.step2();

    },
}