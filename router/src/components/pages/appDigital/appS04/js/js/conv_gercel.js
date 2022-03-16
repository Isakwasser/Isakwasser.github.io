export default function conv_gercel(signal, fs, showTime = true) {
    /*
    * алгоритм Герцеля
    */
    // return out(signal)
    return outk(signal,fs);
    let ans = {
        amplitude: [],
        frequency: [],
        // Re: [],
        // Im: [],
    };
    let N = signal.length; // длина сигнала
    console.log(N)
    for (let n = 0; n < N; n++) {
        let sum = 0;
        for (let k = 0; k <= n; k++) {
            sum += signal[k] * h(n - k, N, k);
        }
        ans.amplitude.push(sum);
        ans.frequency.push(n);
    }
    console.log(ans);
    return ans;
}
function h(n, N, k = 1) {
    return Math.cos(2 * Math.PI * k * (n / N - 1));
}

function out(signal) {
    let dimIn = signal.length;
    let dimH = 10000;
    let dimOut = dimIn + dimH - 1;
    let ans = {
        amplitude: [],
        frequency: [],
        // Re: [],
        // Im: [],
    };
    for (let i = 0; i < dimOut;i++) {
        ans.amplitude[i] = 0;
        ans.frequency[i] = i;
        for (let j = 0; j < dimH; j++) {
            if (i - j < 0 || i - j > dimIn) continue;
            ans.amplitude[i] = ans.amplitude[i] + h(j,dimIn) * signal[i - j];
        }
    }
    console.log(ans)
    return ans
}
function outk(signal, fs) {
    let ykn = [];
    let out = {
        amplitude: [],
        frequency: [],
        // Re: [],
        // Im: [],
    };
    for (let k = 0; k < fs; k++) {
        ykn = [];
        console.log(k);
        out.frequency[k] = k;
        for (let n = 0; n < signal.length; n++) {
            ykn[n] = 0;
            for (let m = 0; m < signal.length; m++) {
                ykn[n] += signal[m] * h(n, signal.length, k);
            }
        }
        out.amplitude[k] = 0;
        for (let i = 0; i < ykn.length; i++) {
            out.amplitude[k] += ykn[i];
        }
    }

    return out;
}