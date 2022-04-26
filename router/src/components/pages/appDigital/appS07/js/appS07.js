import fft from "./js/fft";
import Spectrogram from "spectrogram";
import chroma from "chroma-js";

const colors = function (steps) {
    var baseColors = [[0, 0, 0, 1], [0, 255, 255, 1], [0, 255, 0, 1], [255, 255, 0, 1], [255, 0, 0, 1]];
    var positions = [0, 0.15, 0.30, 0.50, 0.75];

    var scale = new chroma.scale(baseColors, positions)
        .domain([0, steps]);

    var colors = [];

    for (var i = 0; i < steps; ++i) {
        var color = scale(i);
        colors.push(color.hex());
    }

    return colors;
}

export default {
    data() {
        return {
            soundBuffer: {}, // буфер музыки
            soundMusic: false,
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
                    console.log('Buffer was installed');
                }, (err) => { console.log(`Decode error: ${err}`) });
            }
            request.send();
        },
        getOriginalSpectrogram() {
            let spectro = Spectrogram(this.$refs.spectrogram_original, {
                audio: {
                    enable: this.soundMusic
                },
                canvas: {
                    width: 400,
                    height: 450,
                },
                colors: colors,
            });
            let audioContext = new AudioContext();
            spectro.connectSource(this.soundBuffer, audioContext);
            spectro.start();
        },
        /****************** Группа ФНЧ ***********************/
        getButterLowSpectrogram() {
            let newAudioBuffer = this.cloneAudioBuffer(this.soundBuffer);

            let temp = newAudioBuffer.getChannelData(0);
            temp = this.filter(
                [5.979578036996447e-05, 2.989789018498223e-04, 5.979578036996447e-04, 5.979578036996447e-04, 2.989789018498223e-04, 5.979578036996447e-05],
                [1, -3.984543119612337, 6.434867090275871, -5.253615170352273, 2.165132909724135, -0.359928245063557],
                temp);

            // строим спектрограмму
            let spectro = Spectrogram(this.$refs.spectrogram_ButterLow, {
                audio: {
                    enable: this.soundMusic
                },
                canvas: {
                    width: 400,
                    height: 450,
                },
                colors: colors,
            });
            let audioContext = new AudioContext();
            spectro.connectSource(newAudioBuffer, audioContext);
            spectro.start();
        },
        getCheby1LowSpectrogram() {
            let newAudioBuffer = this.cloneAudioBuffer(this.soundBuffer);

            let temp = newAudioBuffer.getChannelData(0);
            temp = this.filter(
                [3.848904394060382e-06, 1.924452197030191e-05, 3.848904394060382e-05, 3.848904394060382e-05, 1.924452197030191e-05, 3.848904394060382e-06],
                [1, -4.749422231925750, 9.141175457333913, -8.908980564502240, 4.395734077969244, -0.878383573934557],
                temp);

            let spectro = Spectrogram(this.$refs.spectrogram_Cheby1Low, {
                audio: {
                    enable: this.soundMusic
                },
                canvas: {
                    width: 400,
                    height: 450,
                },
                colors: colors,
            });
            let audioContext = new AudioContext();
            spectro.connectSource(newAudioBuffer, audioContext);
            spectro.start();
        },
        getCheby2LowSpectrogram() {
            let newAudioBuffer = this.cloneAudioBuffer(this.soundBuffer);

            let temp = newAudioBuffer.getChannelData(0);
            temp = this.filter(
                [0.002098439541645, -0.005500606106981, 0.003463499608177, 0.003463499608177, -0.005500606106981, 0.002098439541645],
                [1, -4.452396542051892, 7.956778312988316, -7.131877822880251, 3.205417066812696, -0.577798348783186],
                temp);

            let spectro = Spectrogram(this.$refs.spectrogram_Cheby2Low, {
                audio: {
                    enable: this.soundMusic
                },
                canvas: {
                    width: 400,
                    height: 450,
                },
                colors: colors,
            });
            let audioContext = new AudioContext();
            spectro.connectSource(newAudioBuffer, audioContext);
            spectro.start();
        },
        getEllipLowSpectrogram() {
            let newAudioBuffer = this.cloneAudioBuffer(this.soundBuffer);

            let temp = newAudioBuffer.getChannelData(0);
            temp = this.filter(
                [0.002520291023188, -0.006359925599942, 0.003967856348744, 0.003967856348744, -0.006359925599942, 0.002520291023188],
                [1, -4.714020073743617, 9.022509396491165, -8.758360663832006, 4.310606501376757, -0.860478716748320],
                temp);

            let spectro = Spectrogram(this.$refs.spectrogram_EllipLow, {
                audio: {
                    enable: this.soundMusic
                },
                canvas: {
                    width: 400,
                    height: 450,
                },
                colors: colors,
            });
            let audioContext = new AudioContext();
            spectro.connectSource(newAudioBuffer, audioContext);
            spectro.start();
        },

        /****************** Группа ФВЧ ***********************/
        getButterHighSpectrogram() {
            let newAudioBuffer = this.cloneAudioBuffer(this.soundBuffer);

            let temp = newAudioBuffer.getChannelData(0);
            temp = this.filter(
                [0.354164181093430, -1.770820905467149, 3.541641810934299, -3.541641810934299, 1.770820905467149, -0.354164181093430],
                [1, -2.975422109745683, 3.806018119320411, -2.545252868330467, 0.881130075437837, -0.125430622155356],
                temp);

            // строим спектрограмму
            let spectro = Spectrogram(this.$refs.spectrogram_ButterHigh, {
                audio: {
                    enable: this.soundMusic
                },
                canvas: {
                    width: 400,
                    height: 450,
                },
                colors: colors,
            });
            let audioContext = new AudioContext();
            spectro.connectSource(newAudioBuffer, audioContext);
            spectro.start();
        },
        getCheby1HighSpectrogram() {
            let newAudioBuffer = this.cloneAudioBuffer(this.soundBuffer);

            let temp = newAudioBuffer.getChannelData(0);
            temp = this.filter(
                [0.369633036012404, -1.848165180062019, 3.696330360124038, -3.696330360124038, 1.848165180062019, -0.369633036012404],
                [1, -3.366529464700689, 4.444055809047855, -2.622246882044077, 0.483941252973048, 0.088516256368747],
                temp);

            let spectro = Spectrogram(this.$refs.spectrogram_Cheby1High, {
                audio: {
                    enable: this.soundMusic
                },
                canvas: {
                    width: 400,
                    height: 450,
                },
                colors: colors,
            });
            let audioContext = new AudioContext();
            spectro.connectSource(newAudioBuffer, audioContext);
            spectro.start();
        },
        getCheby2HighSpectrogram() {
            let newAudioBuffer = this.cloneAudioBuffer(this.soundBuffer);

            let temp = newAudioBuffer.getChannelData(0);
            temp = this.filter(
                [0.429230046172937, -2.093304889593839, 4.135073675123997, -4.135073675123999, 2.093304889593842, -0.429230046172938],
                [1, -3.241464604590933, 4.470898073127938, -3.218791536048310, 1.199825247334598, -0.184237760679781],
                temp);

            let spectro = Spectrogram(this.$refs.spectrogram_Cheby2High, {
                audio: {
                    enable: this.soundMusic
                },
                canvas: {
                    width: 400,
                    height: 450,
                },
                colors: colors,
            });
            let audioContext = new AudioContext();
            spectro.connectSource(newAudioBuffer, audioContext);
            spectro.start();
        },
        getEllipHighSpectrogram() {
            let newAudioBuffer = this.cloneAudioBuffer(this.soundBuffer);

            let temp = newAudioBuffer.getChannelData(0);
            temp = this.filter(
                [0.478417833484107, -2.349905423470592, 4.658451395832947, -4.658451395832950, 2.349905423470596, -0.478417833484108],
                [1, -3.658429873751053, 5.345709135616499, -3.743053850209734, 1.149379226902617, -0.076977219095400],
                temp);

            let spectro = Spectrogram(this.$refs.spectrogram_EllipHigh, {
                audio: {
                    enable: this.soundMusic
                },
                canvas: {
                    width: 400,
                    height: 450,
                },
                colors: colors,
            });
            let audioContext = new AudioContext();
            spectro.connectSource(newAudioBuffer, audioContext);
            spectro.start();
        },

        /****************** Группа Полосовых ***********************/
        getButterBandSpectrogram() {
            let newAudioBuffer = this.cloneAudioBuffer(this.soundBuffer);

            let temp = newAudioBuffer.getChannelData(0);
            temp = this.filter(
                [5.97957803867614e-05, 0, - 0.000298978901933807, 0, 0.000597957803867614, 0, - 0.000597957803867614, 0, 0.000298978901933807, 0, - 5.97957803867614e-05],
                [1, - 8.10507344007186, 30.3299792306628, - 68.9102256711755, 105.182373057302, - 112.648403105060, 85.7165190081875, - 45.7659507796685, 16.4177004102881, - 3.57667441849827, 0.359928245063556],
                temp);

            // строим спектрограмму
            let spectro = Spectrogram(this.$refs.spectrogram_ButterBand, {
                audio: {
                    enable: this.soundMusic
                },
                canvas: {
                    width: 400,
                    height: 450,
                },
                colors: colors,
            });
            let audioContext = new AudioContext();
            spectro.connectSource(newAudioBuffer, audioContext);
            spectro.start();
        },
        getCheby1BandSpectrogram() {
            let newAudioBuffer = this.cloneAudioBuffer(this.soundBuffer);

            let temp = newAudioBuffer.getChannelData(0);
            temp = this.filter(
                [1.94700038292630e-06, 0, - 9.73500191463151e-06, 0, 1.94700038292630e-05, 0, - 1.94700038292630e-05, 0, 9.73500191463151e-06, 0, - 1.94700038292630e-06],
                [1, - 8.85099848777198, 36.2441752554191, - 90.2690293589527, 151.276786363869, - 178.146209274021, 149.269867889114, - 87.8903297960065, 34.8216327294487, - 8.39118873753563, 0.935563078000265],
                temp);

            let spectro = Spectrogram(this.$refs.spectrogram_Cheby1Band, {
                audio: {
                    enable: this.soundMusic
                },
                canvas: {
                    width: 400,
                    height: 450,
                },
                colors: colors,
            });
            let audioContext = new AudioContext();
            spectro.connectSource(newAudioBuffer, audioContext);
            spectro.start();
        },
        getCheby2BandSpectrogram() {
            let newAudioBuffer = this.cloneAudioBuffer(this.soundBuffer);

            let temp = newAudioBuffer.getChannelData(0);
            temp = this.filter(
                // [0.442492890490224, - 3.04225352398596, 9.13103989390295, - 14.9332592826982, 12.4305381900859, - 8.64627799649124e-15, - 12.4305381900859, 14.9332592826982, - 9.13103989390294, 3.04225352398596, - 0.442492890490223],
                // [1, - 7.58289221798024, 26.3606635191759, - 55.0763690802491, 76.1113954384996, - 71.9842286913694, 46.3888200241044, - 19.4258774281009, 4.61826390331041, - 0.364136758805661, - 0.0455272240972559],
                [0.0526296281466914, - 0.361842359812740, 1.08603605738460, - 1.77614578664942, 1.47847483353390, - 5.60933999480803e-16, - 1.47847483353390, 1.77614578664942, - 1.08603605738460, 0.361842359812740, - 0.0526296281466914],
                [1, - 8.10553969078156, 30.3350004251610, - 68.9285188214196, 105.212022912778, - 112.662711343504, 85.6906785304712, - 45.7142262201815, 16.3762229216602, - 3.55980758863810, 0.357051385838918],
                temp);

            let spectro = Spectrogram(this.$refs.spectrogram_Cheby2Band, {
                audio: {
                    enable: this.soundMusic
                },
                canvas: {
                    width: 400,
                    height: 450,
                },
                colors: colors,
            });
            let audioContext = new AudioContext();
            spectro.connectSource(newAudioBuffer, audioContext);
            spectro.start();
        },
        getEllipBandSpectrogram() {
            let newAudioBuffer = this.cloneAudioBuffer(this.soundBuffer);

            let temp = newAudioBuffer.getChannelData(0);
            temp = this.filter(
                [0.00243911698139108, - 0.0166065077159646, 0.0494496435704944, - 0.0804105304591478, 0.0667057639234973, 8.23221005078355e-17, - 0.0667057639234975, 0.0804105304591479, - 0.0494496435704944, 0.0166065077159646, - 0.00243911698139108],
                [1, - 8.78140946790457, 35.6891645670574, - 88.2526382394222, 146.899421445358, - 171.890481825214, 143.166870602302, - 83.8248835552702, 33.0375109646428, - 7.92266262692087, 0.879368502069890],
                temp);

            let spectro = Spectrogram(this.$refs.spectrogram_EllipBand, {
                audio: {
                    enable: this.soundMusic
                },
                canvas: {
                    width: 400,
                    height: 450,
                },
                colors: colors,
            });
            let audioContext = new AudioContext();
            spectro.connectSource(newAudioBuffer, audioContext);
            spectro.start();
        },

        /****************** Группа Режекторных ***********************/
        getButterStopSpectrogram() {
            let newAudioBuffer = this.cloneAudioBuffer(this.soundBuffer);

            let temp = newAudioBuffer.getChannelData(0);
            temp = this.filter(
                [0.599940204219770, - 5.41213877001544, 22.5291446955717, - 56.8840863960223, 96.3741650759881, - 114.413877082455, 96.3741650759881, - 56.8840863960224, 22.5291446955717, - 5.41213877001545, 0.599940204219770],
                [1, - 8.10507344007187, 30.3299792306628, - 68.9102256711756, 105.182373057302, - 112.648403105061, 85.7165190081876, - 45.7659507796686, 16.4177004102881, - 3.57667441849828, 0.359928245063557],
                temp);

            // строим спектрограмму
            let spectro = Spectrogram(this.$refs.spectrogram_ButterStop, {
                audio: {
                    enable: this.soundMusic
                },
                canvas: {
                    width: 400,
                    height: 450,
                },
                colors: colors,
            });
            let audioContext = new AudioContext();
            spectro.connectSource(newAudioBuffer, audioContext);
            spectro.start();
        },
        getCheby1StopSpectrogram() {
            let newAudioBuffer = this.cloneAudioBuffer(this.soundBuffer);

            let temp = newAudioBuffer.getChannelData(0);
            temp = this.filter(
                [0.163206989883282, - 1.47231152583543, 6.12880061137268, - 15.4746763888398, 26.2175084682352, - 31.1250093728724, 26.2175084682352, - 15.4746763888398, 6.12880061137268, - 1.47231152583543, 0.163206989883282],
                [1, - 7.16588129927043, 23.0032850908215, - 42.6258578720444, 48.1925410411270, - 30.2733471744090, 3.34689469985385, 11.2426101474503, - 9.92869652631222, 3.80349099662192, - 0.594992167078993],
                temp);

            let spectro = Spectrogram(this.$refs.spectrogram_Cheby1Stop, {
                audio: {
                    enable: this.soundMusic
                },
                canvas: {
                    width: 400,
                    height: 450,
                },
                colors: colors,
            });
            let audioContext = new AudioContext();
            spectro.connectSource(newAudioBuffer, audioContext);
            spectro.start();
        },
        getCheby2StopSpectrogram() {
            let newAudioBuffer = this.cloneAudioBuffer(this.soundBuffer);

            let temp = newAudioBuffer.getChannelData(0);
            temp = this.filter(
                [0.429230046172937, - 3.82446771524734, 15.7657611594391, - 39.5291375772088, 66.6888800194042, - 79.0604121986100, 66.6888800194041, - 39.5291375772087, 15.7657611594390, - 3.82446771524732, 0.429230046172934],
                [1, - 7.43473262743321, 25.5697144344078, - 53.5928628965071, 75.8272441796704, - 75.6805399651114, 53.9621921042507, - 27.1460928769975, 9.22435397102462, - 1.91339441747386, 0.184237760679782],
                temp);

            let spectro = Spectrogram(this.$refs.spectrogram_Cheby2Stop, {
                audio: {
                    enable: this.soundMusic
                },
                canvas: {
                    width: 400,
                    height: 450,
                },
                colors: colors,
            });
            let audioContext = new AudioContext();
            spectro.connectSource(newAudioBuffer, audioContext);
            spectro.start();
        },
        getEllipStopSpectrogram() {
            let newAudioBuffer = this.cloneAudioBuffer(this.soundBuffer);

            let temp = newAudioBuffer.getChannelData(0);
            temp = this.filter(
                [0.183192949713190, - 1.64461052439895, 6.82002961888313, - 17.1729863279001, 29.0470188747877, - 34.4652371333634, 29.0470188747877, - 17.1729863279001, 6.82002961888314, - 1.64461052439895, 0.183192949713191],
                [1, - 7.23517644704466, 23.4813533683446, - 44.1201569246089, 50.9852407968192, - 33.7400583264452, 6.34635230291055, 9.40457087247389, - 9.14571803991448, 3.59038998766327, - 0.566745541391713],
                temp);

            let spectro = Spectrogram(this.$refs.spectrogram_EllipStop, {
                audio: {
                    enable: this.soundMusic
                },
                canvas: {
                    width: 400,
                    height: 450,
                },
                colors: colors,
            });
            let audioContext = new AudioContext();
            spectro.connectSource(newAudioBuffer, audioContext);
            spectro.start();
        },

        /****************** 3 полосы ***********************/
        getCheby2threeSpectrogram() {
            let newAudioBuffer = this.cloneAudioBuffer(this.soundBuffer);

            let temp = newAudioBuffer.getChannelData(0);

            temp = this.filter(
                [0.653333073641532, - 6.35281428809996, 27.9747098941242, - 73.4577001795497, 127.370134903490, - 152.375326619426, 127.370134903490, - 73.4577001795495, 27.9747098941241, - 6.35281428809993, 0.653333073641528],
                [1, - 8.90045234962268, 35.8936645016793, - 86.3730376555592, 137.347779369191, - 150.812171025382, 115.806173169516, - 61.4087927588863, 21.5218945985077, - 4.50190176527483, 0.426844103617112],
                temp);
            temp = this.filter(
                [0.653333073641532, - 4.96798366720834, 18.3689083004518, - 42.8137282857630, 69.2555965264254, - 80.9766601664281, 69.2555965264254, - 42.8137282857630, 18.3689083004518, - 4.96798366720833, 0.653333073641531],
                [1, - 6.96026987386031, 23.5530049302462, - 50.2800166091317, 74.5667146365713, - 80.0214559490056, 62.8836307632659, - 35.7577957174176, 14.1254813673365, - 3.52054592295518, 0.426844103617112],
                temp);

            let spectro = Spectrogram(this.$refs.spectrogram_Cheby2three, {
                audio: {
                    enable: this.soundMusic
                },
                canvas: {
                    width: 400,
                    height: 450,
                },
                colors: colors,
            });
            let audioContext = new AudioContext();
            spectro.connectSource(newAudioBuffer, audioContext);
            spectro.start();
        },

        /****************** Удаление голоса ***********************/
        getDeleteVoiceSpectrogram() {
            let newAudioBuffer = this.cloneAudioBuffer(this.soundBuffer);

            let temp = newAudioBuffer.getChannelData(0);

            let temp1 = temp.slice(0);
            let temp2 = temp.slice(0);

            // ФНЧ
            temp1 = this.filter(
                [9.092865904669623e-10, 4.546432952334811e-09, 9.092865904669623e-09, 9.092865904669623e-09, 4.546432952334811e-09, 9.092865904669623e-10],
                [1, -4.898337145711600, 9.598497090805598, -9.405307989195734, 4.608476358536906, -0.903328285338000],
                temp1);
            // ФВЧ
            temp2 = this.filter(
                [0.354164181093430, -1.770820905467149, 3.541641810934299, -3.541641810934299, 1.770820905467149, -0.354164181093430],
                [1, -2.975422109745683, 3.806018119320411, -2.545252868330467, 0.881130075437837, -0.125430622155356],
                temp2);

            for (let i = 0; i < temp.length; i++) {
                temp[i] = (temp1[i] + temp2[i]) / 2;
            }

            let spectro = Spectrogram(this.$refs.spectrogram_DeleteVoice, {
                audio: {
                    enable: this.soundMusic
                },
                canvas: {
                    width: 400,
                    height: 450,
                },
                colors: colors,
            });
            let audioContext = new AudioContext();
            spectro.connectSource(newAudioBuffer, audioContext);
            spectro.start();
        },


        playMusic(myArrayBuffer) {
            let audioCtx = new (window.AudioContext || window.webkitAudioContext)();

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
        },
        filter(b, a, array) {
            let inputSignal = array.slice(0);
            let sum, prevSum;

            for (let n = 0; n < array.length; n++) {
                prevSum = sum;
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
                    console.log('Ошибка в фильтре' + prevSum);
                    // return array;
                    continue;
                } else {
                    array[n] = sum;
                }
            }
            return array;
        },
        cloneAudioBuffer(buffer) {
            let newBuffer = new AudioBuffer(buffer);
            for (let i = 0; i < buffer.getChannelData(0).length; i++) {
                newBuffer.getChannelData(0)[i] = buffer.getChannelData(0)[i];
            }
            return newBuffer
        }
    },
    computed: {
        lowpassFreq() {
            return this.soundBuffer.sampleRate ? this.soundBuffer.sampleRate / 2 * 0.1 : false;
        },
        highpassFreq() {
            return this.soundBuffer.sampleRate ? this.soundBuffer.sampleRate / 2 * 0.3 : false;
        }
    },
    watch: {
        soundMusic() {
            localStorage.setItem('soundMusic', this.soundMusic);
        }
    },
    mounted() {
        let soundMusic = localStorage.getItem('soundMusic');
        if (soundMusic) {
            this.soundMusic = soundMusic;
        }
        this.getSoundBytes();
    },
}