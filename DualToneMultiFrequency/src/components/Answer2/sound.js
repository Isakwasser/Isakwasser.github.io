function sound(value, options = {}) {
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

  for (let i = 0; i < currentFreq.length; i++) {
    let context = new (window.AudioContext || window.webkitAudioContext)(options);
    let osc = context.createOscillator(); // instantiate an oscillator
    osc.type = "sine"; // this is the default - also square, sawtooth, triangle
    osc.frequency.value = currentFreq[i] * 2; // Hz
    osc.connect(context.destination); // connect it to the destination
    osc.start(); // start the oscillator
    osc.stop(context.currentTime + 0.5); // stop 0.5 seconds after the current time
    // console.log(context);
  }
}

export default sound;