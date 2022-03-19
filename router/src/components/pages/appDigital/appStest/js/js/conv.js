function conv(signal1, signal2) {
    let ans = {
        Re: [],
        Im: [],
        amplitude: [],
        time: [],
    };

    let n = 0;
    console.log(signal1.time.length)

    while (n < signal1.time.length*2) {
        ans.time.push(n);

        let sum = 0;
        for (let m = n; m < signal2.time.length; m++) {
            sum += signal1.amplitude[m-n]*signal2.amplitude[m];
        }

        ans.Re.push(sum);
        ans.Im.push(0);

        n++;
    }

    for (let i = 0; i < ans.time.length; i++) {
        ans.amplitude[i] = Math.sqrt(ans.Re[i] * ans.Re[i] + ans.Im[i] * ans.Im[i]);
    }

    return ans;
}

export default conv;