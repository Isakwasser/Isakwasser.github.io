function getRectSignal(rectstart, rectend, fs, time = [0, 1]) {
    let ans = {
        Re: [],
        Im: [],
        amplitude: [],
        time: [],
    };
    let startTime = time[0];
    let index = 0;

    while (startTime + index / fs <= time[1]) {
        let currentTime = startTime + index / fs;
        if (rectstart <= currentTime && rectend >= currentTime) {
            ans.Re.push(1);
            ans.Im.push(0);
            ans.time.push(currentTime);
        } else {
            ans.Re.push(0);
            ans.Im.push(0);
            ans.time.push(currentTime);
        }
        index++;
    }
    for (let i = 0; i < ans.time.length; i++) {
        ans.amplitude[i] = Math.sqrt(ans.Re[i] * ans.Re[i] + ans.Im[i] * ans.Im[i]);
    }
    return ans;

}

export default getRectSignal;