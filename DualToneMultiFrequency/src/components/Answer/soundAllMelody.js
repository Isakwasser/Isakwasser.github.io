import sound from "./sound";

function soundAllMelody(values, current = 0) {

    if (current < values.length) {
        setTimeout(() => {
            sound(values[current]);
            soundAllMelody(values, ++current);
        }, 500);
    }
}

export default soundAllMelody;