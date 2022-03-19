export default function fft(signal, fs) {
    /*
    * Извлечение спектра из сигнала
    */
    // let tic = (new Date()).getTime();
    let ans = {
        amplitude: [],
        frequency: [],
        Re: [],
        Im: [],
    };
    let N = signal.length;
    let a = 1/Math.sqrt(N);
    let fjRe = [],
        fjIm = [];
    for(let j=0; j<N; j++)
    {
        // console.log(j);
        let sumre = 0,sumim = 0;
        for(let k=0;k<N;k++)
        {
            sumre += signal[k]*Math.cos(2*Math.PI/N*k*j);  
            sumim += signal[k]*Math.sin(2*Math.PI/N*k*j);
        }
        fjRe[j] = a*sumre;
        fjIm[j] = -a*sumim;
    }
    ans.Re = fjRe;
    ans.Im = fjIm;
    for (let i = 0; i < ans.Im.length; i++) {
        ans.amplitude.push(Math.sqrt(ans.Re[i] * ans.Re[i] + ans.Im[i] * ans.Im[i]));
        ans.frequency.push(i*fs/ans.Im.length);
    }
    // let toc = (new Date()).getTime();
    // console.log(`Алгоритм Фурье занял ${toc - tic}мс`);
    return ans;
}