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
    let ans = [];
    let samplesPerNum = 0.5 * fs;
    let numOfNumbers = Math.floor(signal.length / samplesPerNum);
    for (let i = 0; i < numOfNumbers; i++) {
        let data = gercel(signal.slice(i*samplesPerNum, (i + 1)*samplesPerNum), fs, false);

        let amplitude = data.amplitude.slice(0, Math.floor(data.amplitude.length / 2)), // Выделение спектра до частоты Найквиста
            maxElem = Math.max(...amplitude),
            maxIndex = amplitude.indexOf(maxElem),
            frequency1 = data.frequency[maxIndex];
        
        amplitude[maxIndex] = 0; // обнуление максимальной амплитуды

        maxElem = Math.max(...amplitude);
        maxIndex = amplitude.indexOf(maxElem);
        let frequency2 = data.frequency[maxIndex];

        let foundNumber = 9;
        let foundError = 1000000;

        for (let key in fr) {
                
            let error = Math.min(Math.abs(fr[key][0] - frequency1), Math.abs(fr[key][0] - frequency2)) +
                Math.min(Math.abs(fr[key][1] - frequency1), Math.abs(fr[key][1] - frequency2));
            
            if (error < foundError) {
                foundNumber = key;
                foundError = error;
            }
        }
        
        ans += foundNumber;
    }
    let toc = (new Date()).getTime();
    console.log(`Время работы декодировщика: ${toc - tic}мс`);
    return ans
}