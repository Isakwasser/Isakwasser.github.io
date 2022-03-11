import fft from "./js/fft";
import gercel from './js/gercel';

export default {
    data() {
        return {
            initAudioBuffer: undefined,
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
                    this.initAudioBuffer = buffer;
                    let float32Array = buffer.getChannelData(0);
                    console.log('float32Array', float32Array)

                    // this.playFloat32Array(buffer);

                    this.getSpectrogram();

                }, (err)=>{console.log(`Decode error: ${err}`)});
            }
            request.send();
        },
        getSpectrogram() {
            console.log(this.initAudioBuffer);
            let context = new (AudioContext || webkitAudioContext)();
            let analyser = context.createAnalyser();
            // analyser.smoothingTimeConstant = 0;
            
            console.log(this.initAudioBuffer);
            analyser.fftSize = 256;
            let realAudioInput = context.createMediaElementSource(this.$refs.audio)
            

            let bufferLength = analyser.frequencyBinCount;
            let frequencyData = new Uint8Array(bufferLength);
            let canvas = document.getElementById('spectrogram');
            realAudioInput.connect(analyser);
            analyser.connect(context.destination);
            canvas.width = bufferLength;
            canvas.height = window.innerHeight;

            console.log(1)

            let canvasCtx = canvas.getContext('2d');

            function draw() {
                let imageData = canvasCtx.getImageData(
                    0,
                    0,
                    canvas.width,
                    canvas.height + 1
                );
                analyser.getByteFrequencyData(frequencyData);

                let y = canvas.height - 1;
                for (let x = 0; x < bufferLength; x++) {
                    let offset = (y * imageData.width + x) * 4;
                    imageData.data[offset] = 255; // Red
                    imageData.data[offset + 1] = 255; // Green
                    imageData.data[offset + 2] = 255; // Blue
                    imageData.data[offset + 3] = frequencyData[x]; // Alpha
                }

                canvasCtx.putImageData(imageData, 0, -1);

                requestAnimationFrame(draw);
            }

            draw();
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
            audioEle.src = '/static/media/44100music.91d7798.wav';//insert file name here
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
    },
    mounted() {
        // this.doWaveform();
    },
}