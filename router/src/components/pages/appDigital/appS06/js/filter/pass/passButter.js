function passButter(signal, fs, w1 = 100, w2 = 200) {
  let wp1 = Math.tan((Math.PI * w1) / fs);
  let wp2 = Math.tan((Math.PI * w2) / fs);
  let w02 = wp1 * wp2;
  let W = wp2 - wp1;
  let normalizeKoef = 1 + W + w02;

  let num = [W / normalizeKoef, 0, -W / normalizeKoef];
  let den = [1, (2 * w02 - 2) / normalizeKoef, (w02 - W + 1) / normalizeKoef];
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

export default passButter;
