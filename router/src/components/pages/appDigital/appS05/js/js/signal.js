function getSignal(time = 1, fs = 10000, initTime) {
    /*
    * Функция для получения закодированного тональным набором сигнала
    * time - время отсчета
    * fs - частота дискретизации
    */
    
    let ans = { // инициализация вывода
        signal: [],
        time: [],
    };
    let zeroTime = typeof(initTime) == 'number' ? initTime : -time; // инициализация текущего времени
    let numberTime = 0;
    let N = 15; // номер в списке группе
    let f = 0.25 * N; // частота

    while (zeroTime + numberTime/fs <= time) {
        let current = 0;
        if (zeroTime + numberTime/fs >= 0) {
            current = Math.cos(2 * Math.PI * f * (zeroTime + numberTime/fs))*Math.exp(-(zeroTime + numberTime/fs));
        }
        
        ans.signal.push(current);
        ans.time.push(zeroTime + numberTime/fs);

        numberTime++;
    }
    return ans;
}

export default getSignal;