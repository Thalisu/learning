export default function two_crystal_balls(breaks: boolean[]): number {
    const jump = Math.floor(Math.sqrt(breaks.length));

    for (let i = jump; i < breaks.length; i += jump) {
        if (breaks[i]) {
            for (let j = i - jump; j < breaks.length; ++j) {
                if (breaks[j]) return j;
            }
        }
    }

    return -1;
}
