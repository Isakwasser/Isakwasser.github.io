export default function gercel(x, fs, showTime = true) {
    /*
    * алгоритм Герцеля
    */
    let tic = (new Date()).getTime();
    let ans = {
        amplitude: [],
        frequency: [],
        Re: [],
        Im: [],
    };
    let N = x.length;
    let s = [];
    let X = [];
    for (let k = 0; k < N; k++) {
        s = [];
        if (k % 1000 == 0) console.log(k);
        for (let n = 0; n < N; n++) {
            if (n == 0) {
                s.push(x[0]);
            } else if (n == 1) {
                s.push(2 * Math.cos(2 * Math.PI * k / N) * s[0] + x[1]);
            } else {
                s.push(2 * Math.cos(2 * Math.PI * k / N) * s[n-1] - s[n-2] + x[n]);
            }
        }
        ans.Re.push(Math.cos(2 * Math.PI * k / N) * s[N - 1] - s[N - 2]);
        ans.Im.push(Math.sin(2 * Math.PI * k / N) * s[N - 1]);
        ans.amplitude.push(ans.Re[k] * ans.Re[k] + ans.Im[k] * ans.Im[k]);
        ans.frequency.push(k*fs/N)
    }
    let toc = (new Date()).getTime();
    showTime && console.log(`Алгоритм Герцеля занял ${toc - tic}мс`);
    return ans;
}