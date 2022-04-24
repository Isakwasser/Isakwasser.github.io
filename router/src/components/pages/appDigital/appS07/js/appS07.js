import fft from "./js/fft";
import Spectrogram from "spectrogram";

export default {
    data() {
        return {
            soundBuffer: {}, // буфер музыки
            butterLow: {},
        }
    },
    methods: {
        getSoundBytes() {
            // create the audio context (chrome only for now)
            let context = new (AudioContext || webkitAudioContext)();

            let request = new XMLHttpRequest();
            request.open('GET', this.$refs.audio.src, true);
            request.responseType = 'arraybuffer';

            // When loaded decode the data
            request.onload = () => {
                // decode the data
                context.decodeAudioData(request.response, (buffer) => {
                    this.soundBuffer = buffer;
                    this.butterLow = buffer;
                    console.log('Buffer was installed');
                }, (err) => { console.log(`Decode error: ${err}`) });
            }
            request.send();
        },
        getOriginalSpectrogram() {
            let spectro = Spectrogram(this.$refs.spectrogram_original, {
                audio: {
                    enable: false
                }
            });
            let audioContext = new AudioContext();
            spectro.connectSource(this.soundBuffer, audioContext);
            spectro.start();
        },
        getButterLowSpectrogram() {
            console.log(this.butterLow);
            let newAudioBuffer = this.cloneAudioBuffer(this.soundBuffer);

            let spectro = Spectrogram(this.$refs.spectrogram_ButterLow, {
                audio: {
                    enable: false
                }
            });
            let audioContext = new AudioContext();
            spectro.connectSource(newAudioBuffer, audioContext);
            spectro.start();
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
        filter(a, b, array) {
            let inputSignal = array.slice(0);
            let sum;

            for (let n = 0; n < array.length; n++) {
                sum = 0;
                for (let i = 0; i < b.length; i++) {
                    if (n - i >= 0) {
                        sum += b[i] * inputSignal[n - i];
                    }
                }
                for (let i = 1; i < a.length; i++) {
                    if (n - i >= 0) {
                        sum -= a[i] * array[n - i];
                    }
                }
                if (Number.isNaN(sum)) {
                    console.log(n);
                } else {
                    array[n] = sum;
                }
            }
            return array;
        },
        cloneAudioBuffer(buffer) {
            let newBuffer = new AudioBuffer(buffer);
            for (let i = 0; i < buffer.getChannelData(0).length; i++) {
                newBuffer.getChannelData(0)[i] = buffer.getChannelData(0)[i] && Math.random();
            }
            return newBuffer
        }
    },
    computed: {
        lowpassFreq() {
            return this.soundBuffer.sampleRate ? this.soundBuffer.sampleRate / 2 * 0.2 : false
        }
    },
    mounted() {
        this.getSoundBytes();
    },
}