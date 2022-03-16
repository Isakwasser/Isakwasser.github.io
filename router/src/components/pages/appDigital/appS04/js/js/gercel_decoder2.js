import gercel from "./gercel";
export default function gercel_decoder(signal, fs) {
    let tic = (new Date()).getTime();
    let fr = { // Частоты тонального набора
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
    let checkAmplitudes = [[697, 770, 852, 941], [1209, 1336, 1477]]; // искомые частоты
    let answer = ''; // ответ в виде строки
    let samplesPerNum = 0.5 * fs; // количество отсчетов на одну цифру
    let numOfNumbers = Math.floor(signal.length / samplesPerNum); // количество цифр в сигнале
    for (let i = 0; i < numOfNumbers; i++) {
        /*
        * цикл для каждой цифры последовательности
        */
        let x = signal.slice(i * samplesPerNum, (i + 1) * samplesPerNum); // обрезаем сигнал для одной цифры
        let N = x.length; // длина текущей последовательности

        /*
        * поиск частоты foundFrequency1 среди [697, 770, 852, 941], при котором амплитуда максимальна
        */
        let ans = {
            amplitude: [],
            Re: [],
            Im: [],
        };
        let maxAmplitude1 = 0;
        let foundFrequency1 = 0; 
        for (let j = 0; j < checkAmplitudes[0].length; j++) {
            /*
            * алгоритм Герцеля для частоты k
            */
            let k = checkAmplitudes[0][j] * N / fs;
            
            let s0 = 0;
            let s1 = 0;
            for (let n = 0; n < N; n++) {
                /*
                * для каждого отсчета сигнала пересчитываем s0, s1 итерационно
                */
                let newValue = 2 * Math.cos(2 * Math.PI * k / N) * s1 - s0 + x[n];
                s0 = s1;
                s1 = newValue;
            }
            ans.Re.push(Math.cos(2 * Math.PI * k / N) * s1 - s0);
            ans.Im.push(Math.sin(2 * Math.PI * k / N) * s1);
            ans.amplitude.push(ans.Re[j] * ans.Re[j] + ans.Im[j] * ans.Im[j]);
            if (maxAmplitude1 < ans.amplitude[j]) {
                maxAmplitude1 = ans.amplitude[j];
                foundFrequency1 = checkAmplitudes[0][j];
            }
        }

        /*
        * поиск частоты foundFrequency2 среди [1209, 1336, 1477], при котором амплитуда максимальна
        */
        ans = {
            amplitude: [],
            Re: [],
            Im: [],
        };
        let maxAmplitude2 = 0;
        let foundFrequency2 = 0; 
        for (let j = 0; j < checkAmplitudes[1].length; j++) {
            let k = checkAmplitudes[1][j] * N / fs;
            
            let s0 = 0;
            let s1 = 0;
            for (let n = 0; n < N; n++) {
                /*
                * для каждого отсчета сигнала
                */
                let newValue = 2 * Math.cos(2 * Math.PI * k / N) * s1 - s0 + x[n];
                s0 = s1;
                s1 = newValue;
            }
            ans.Re.push(Math.cos(2 * Math.PI * k / N) * s1 - s0);
            ans.Im.push(Math.sin(2 * Math.PI * k / N) * s1);
            ans.amplitude.push(ans.Re[j] * ans.Re[j] + ans.Im[j] * ans.Im[j]);
            if (maxAmplitude2 < ans.amplitude[j]) {
                maxAmplitude2 = ans.amplitude[j];
                foundFrequency2 = checkAmplitudes[1][j];
            }
        }

        /*
        * поиск нужной цифры по foundFrequency1, foundFrequency2
        */
        let currentFound = 'e'; // текущая найденная цифра. Если не находит, выводит 'e' - error
        for (let num in fr) {
            /*
            * перебор всех цифр
            */
            if (fr[num][1] == foundFrequency1 && fr[num][0] == foundFrequency2) {
                currentFound = num; // нашли цифру, записали ее в переменную currentFound
                break; // для ускорения времени работы алгоритма
            }            
        }
        answer += currentFound; // прибавляем к ответу найденную цифру
    }
    return answer
}