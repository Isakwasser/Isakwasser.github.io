function getCodedSignal2(time = 0.01, fs = 10000) {
    /*
    * Функция для получения закодированного тональным набором сигнала
    * nums - массив чисел
    * fs - частота дискретизации
    */
    
    let ans = { // инициализация вывода
        signal: [],
        time: [],
    };
    let currentTime = 0,
        f1 = 30000,
        f2 = 2250;
    time = 0.002;

    while (currentTime <= time) {
        ans.signal.push(Math.sin(2 * Math.PI * f1 * currentTime) * (1 + 0.8 * Math.sin(2 * Math.PI * f2 * currentTime)) );
        ans.time.push(currentTime);

        currentTime += 1 / fs;
    }
    
    return ans;
}

export default getCodedSignal2;

function randn_bm() {
    var u = 0, v = 0;
    while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while(v === 0) v = Math.random();
    return Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
}