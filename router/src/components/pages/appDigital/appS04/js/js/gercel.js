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
    for (let k = 0; k < N; k++) {
        let s0 = 0;
        let s1 = 0;
        for (let n = 0; n < N; n++) {
            let newValue = 2 * Math.cos(2 * Math.PI * k / N) * s1 - s0 + x[n];
            s0 = s1;
            s1 = newValue;
        }
        ans.Re.push(Math.cos(2 * Math.PI * k / N) * s1 - s0);
        ans.Im.push(Math.sin(2 * Math.PI * k / N) * s1);
        ans.amplitude.push(ans.Re[k] * ans.Re[k] + ans.Im[k] * ans.Im[k]);
        ans.frequency.push(k*fs/N)
    }
    let toc = (new Date()).getTime();
    showTime && console.log(`Алгоритм Герцеля занял ${toc - tic}мс`);
    return ans;
}