function getCodedSignal(nums = [0], fs = 10000) {
    /*
    * Функция для получения закодированного тональным набором сигнала
    * nums - массив чисел
    * fs - частота дискретизации
    */
    
    let fr = { // Задание частот для тонального набора
        "0": [1336, 941],
        "1": [1209, 697],
        "2": [1336, 697],
        "3": [1477, 697],
        "4": [1209, 770],
        "5": [1336, 770],
        "6": [1477, 770],
        "7": [1209, 852],
        "8": [1336, 852],
        "9": [1477, 852],
    }
    let playTime = 0.5; // время воспроизведения каждого числа
    let ans = { // инициализация вывода
        signal: [],
        time: [],
    };
    let currentTime = 0; // инициализация текущего времени

    for (let i = 0; i < nums.length; i++) {
        // добавление сигнала для каждого введенного в nums числа
        let currentCodeFrequency = fr[nums[i]];
        for (let j = 0; j <= playTime * fs; j++) {
            ans.signal.push(Math.sin(2 * Math.PI * currentCodeFrequency[0] * (currentTime % playTime))
                + Math.sin(2 * Math.PI * currentCodeFrequency[1] * (currentTime % playTime)));
            ans.time.push(currentTime);
            currentTime += 1 / fs;
        }   
    }
    return ans;
}

export default getCodedSignal;