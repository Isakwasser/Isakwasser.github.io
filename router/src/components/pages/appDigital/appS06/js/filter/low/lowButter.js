function lowButter(signal, fs, w = 100) {
  let wp = Math.tan((Math.PI * w) / fs);
  let normalizeKoef = 1 + Math.sqrt(2) * wp + wp * wp;

  let num = [
    (wp * wp) / normalizeKoef,
    (2 * wp * wp) / normalizeKoef,
    (wp * wp) / normalizeKoef
  ];
  let den = [
    1,
    (2 * wp * wp - 2) / normalizeKoef,
    (1 - Math.sqrt(2) * wp + wp * wp) / normalizeKoef
  ];
  let ans = [];
  for (let i = 0; i < signal.length; i++) {
    ans.push(0);
    for (let j = 0; j < num.length; j++) {
      if (i - j >= 0) {
        ans[i] += num[j] * signal[i - j];
      }
    }
    for (let j = 1; j < den.length; j++) {
      if (i - j >= 0) {
        ans[i] -= den[j] * ans[i - j];
      }
    }
  }
  return ans;
}

export default lowButter;
