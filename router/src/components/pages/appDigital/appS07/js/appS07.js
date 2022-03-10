export default {
    data() {
        return {
           
        }
    },
    methods: {
        getSpectrogram() {
            console.log(1);
            // create the audio context (chrome only for now)
            var context = new (AudioContext||webkitAudioContext)();
            var audioBuffer;
            var sourceNode;
        
            // load the sound
            setupAudioNodes();
            loadSound(this.$refs.audio.src);

            let analyser = context.createAnalyser();
            analyser.smoothingTimeConstant = 0;
            analyser.fftSize = 1024;

            // create a temp canvas we use for copying and scrolling
            var tempCanvas = document.createElement("canvas"),
                tempCtx = tempCanvas.getContext("2d");
            tempCanvas.width=800;
            tempCanvas.height=512;
        
            // used for color distribution
            var hot = new chroma.ColorScale({
                colors:['#000000', '#ff0000', '#ffff00', '#ffffff'],
                positions:[0, .25, .75, 1],
                mode:'rgb',
                limits:[0, 300]
            });
        
        
            // when the javascript node is called
            // we use information from the analyzer node
            // to draw the volume
            javascriptNode.onaudioprocess = function () {
        
                // get the average for the first channel
                var array = new Uint8Array(analyser.frequencyBinCount);
                analyser.getByteFrequencyData(array);
        
                // draw the spectrogram
                if (sourceNode.playbackState == sourceNode.PLAYING_STATE) {
                    drawSpectrogram(array);
                }
            }
        
            function drawSpectrogram(array) {
        
                // copy the current canvas onto the temp canvas
                var canvas = document.getElementById("canvas");
        
                tempCtx.drawImage(canvas, 0, 0, 800, 512);
        
                // iterate over the elements from the array
                for (var i = 0; i < array.length; i++) {
                    // draw each pixel with the specific color
                    var value = array[i];
                    ctx.fillStyle = hot.getColor(value).hex();
        
                    // draw the line at the right side of the canvas
                    ctx.fillRect(800 - 1, 512 - i, 1, 1);
                }
        
                // set translate on the canvas
                ctx.translate(-1, 0);
                // draw the copied image
                ctx.drawImage(tempCanvas, 0, 0, 800, 512, 0, 0, 800, 512);
        
                // reset the transformation matrix
                ctx.setTransform(1, 0, 0, 1, 0, 0);
            }
        
            function setupAudioNodes() {
                // create a buffer source node
                sourceNode = context.createBufferSource();
                // and connect to destination
                sourceNode.connect(context.destination);
            }
        
            // load the specified sound
            function loadSound(url) {
                var request = new XMLHttpRequest();
                request.open('GET', url, true);
                request.responseType = 'arraybuffer';
        
                // When loaded decode the data
                request.onload = function() {
        
                    // decode the data
                    context.decodeAudioData(request.response, function(buffer) {
                        // when the audio is decoded play the sound
                        // playSound(buffer);
                    }, onError);
                }
                request.send();
            }
        
        
            function playSound(buffer) {
                sourceNode.buffer = buffer;
                sourceNode.noteOn(0);
            }
        
            // log if an error occurs
            function onError(e) {
                console.log(e);
            }
        },
    },
    mounted() {
        // this.doWaveform();
    },
}