import graph from "./graph";

function soundAllMelody(values, current = 0, options = {}) {
    let value = values[current];
    graph(value,0);
    console.log(`Играю звук ${value}`);
    // console.log(options);
    let freq = {
        0: [941, 1336],
        1: [697, 1209],
        2: [697, 1336],
        3: [697, 1477],
        4: [770, 1209],
        5: [770, 1336],
        6: [770, 1477],
        7: [852, 1209],
        8: [852, 1336],
        9: [852, 1477],
    };
    let currentFreq = freq[value];

    let context = new (window.AudioContext || window.webkitAudioContext)(options);
    let osc = context.createOscillator(); // instantiate an oscillator
    let gainNode = context.createGain();
    osc.connect(gainNode);
    gainNode.connect(context.destination);
    osc.type = "sine"; // this is the default - also square, sawtooth, triangle
    osc.frequency.value = currentFreq[0] * 2; // Hz
    let context2 = new (window.AudioContext || window.webkitAudioContext)(options);
    let osc2 = context2.createOscillator(); // instantiate an oscillator
    let gainNode2 = context2.createGain();
    osc2.connect(gainNode2);
    gainNode2.connect(context2.destination);
    osc2.type = "sine"; // this is the default - also square, sawtooth, triangle
    osc2.frequency.value = currentFreq[1] * 2; // Hz

    osc.start(); // start the oscillator
    osc2.start();

    setTimeout(
        function () {
            osc.stop();
            osc2.stop();
            
            let next = current + 1;

            if (next < values.length) {
                soundAllMelody(values, next, options);
            }

        },
        1000
    );
}

export default soundAllMelody;
