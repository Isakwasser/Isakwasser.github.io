import sound from "./sound";

function soundAllMelody(values, current = 0) {
    sound(values[current]);

    let next = current + 1;

    if (next < values.length) {
        setTimeout(() => {
            soundAllMelody(values, next);
        }, 510);
    }
}

export default soundAllMelody;