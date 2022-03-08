function getSignal(time = 1, fs = 10000) {
    /*
    * Функция для получения закодированного тональным набором сигнала
    * time - время отсчета
    * fs - частота дискретизации
    */
    
    let ans = { // инициализация вывода
        signal: [],
        time: [],
    };
    let currentTime = -time; // инициализация текущего времени
    let N = 15; // номер в списке группе
    let f = 0.25 * N; // частота

    while (currentTime <= time) {
        let current = 0;
        if (currentTime >= 0) {
            current = Math.cos(2 * Math.PI * f * currentTime)*Math.exp(-currentTime);
        }
        
        ans.signal.push(current);
        ans.time.push(currentTime);

        currentTime += 1 / fs;
    }
    return ans;
}

export default getSignal;