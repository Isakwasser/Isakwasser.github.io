export default function laplasD(signal, fs, relim = [-1, 1], imlim = [-1, 1], step = 0.1) {
    /*
    * signal - array of signal
    * time - array of time
    */
    let ans = {
        plot: [],
    }

    let reposition = relim[0];
    let imposition = imlim[0];

    while (reposition <= relim[1]) {
        imposition = imlim[0];
        while (imposition <= imlim[1]) {
            ans.plot.push({
                xValue: reposition,
                yValue: imposition,
            });
            imposition += step;
        }
        reposition += step;
    }
    // console.log(reposition, imposition);

    let samplingPeriod = 1 / fs;

    for (let i = 0; i < ans.plot.length; i++) {
        // заполнение сетки значений
        let sum = 0;
        for (let n = 0; n < signal.length; n++) {
            sum += signal[n]*Math.exp(-1* (ans.plot[i].xValue+ans.plot[i].yValue)*n*samplingPeriod)
        }
        ans.plot[i].value = sum;
    }

    return ans
}