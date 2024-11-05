export default function bs_list(
    haystack: number[],
    needle: number,
    low = 0,
    high = haystack.length,
): boolean {
    if (low >= high) return false;

    const middle = Math.floor((low + high) / 2);

    if (haystack[middle] === needle) {
        return true;
    } else if (haystack[middle] < needle) {
        return bs_list(haystack, needle, middle + 1);
    } else {
        return bs_list(haystack, needle, low, middle);
    }
}
