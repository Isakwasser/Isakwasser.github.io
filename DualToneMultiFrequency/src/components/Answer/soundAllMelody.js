import sound from "./sound";
import graph from "./graph";

function soundAllMelody(values, current = 0) {
    sound(values[current]);
    graph(values[current], 0)

    let next = current + 1;

    if (next < values.length) {
        setTimeout(() => {
            soundAllMelody(values, next);
        }, 510);
    }
}

export default soundAllMelody;