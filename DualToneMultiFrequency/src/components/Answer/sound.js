function sound(value) {
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

      for (let i = 0; i < currentFreq.length; i++) {
        var context = new (window.AudioContext || window.webkitAudioContext)();
        var osc = context.createOscillator(); // instantiate an oscillator
        osc.type = "sine"; // this is the default - also square, sawtooth, triangle
        osc.frequency.value = currentFreq[i]; // Hz
        osc.connect(context.destination); // connect it to the destination
        osc.start(); // start the oscillator
        osc.stop(context.currentTime + 0.5); // stop 2 seconds after the current time
      }
    }

export default sound;