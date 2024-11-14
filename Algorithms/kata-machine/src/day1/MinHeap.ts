export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.length = 0;
        this.data = [];
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }
    delete(): number {
        if (this.length === 0) {
            return -1;
        }
        const out = this.data[0];
        this.length--;

        if (this.length === 0) {
            this.data = [];
            return out;
        }

        this.data[0] = this.data[this.length];
        this.heapifyDown(0);
        return out;
    }

    private heapifyUp(idx: number): void {
        if (idx === 0) return;

        const parentIdx = this.parent(idx);
        const parantValue = this.data[parentIdx];
        const value = this.data[idx];

        if (parantValue > value) {
            this.swap(idx, parentIdx);
            this.heapifyUp(parentIdx);
        }
    }

    private heapifyDown(idx: number): void {
        const leftIdx = this.left(idx);
        const rightIdx = this.right(idx);

        if (idx >= this.length || leftIdx >= this.length) return;

        const leftValue = this.data[leftIdx];
        const rightValue = this.data[rightIdx];
        const value = this.data[idx];

        if (leftValue > rightValue && value > rightValue) {
            this.swap(idx, rightIdx);
            this.heapifyDown(rightIdx);
        } else if (rightValue > leftValue && value > leftValue) {
            this.swap(idx, leftIdx);
            this.heapifyDown(leftIdx);
        }
    }

    private swap(idx1: number, idx2: number): void {
        const tmp = this.data[idx1];
        this.data[idx1] = this.data[idx2];
        this.data[idx2] = tmp;
    }

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private left(idx: number): number {
        return idx * 2 + 1;
    }

    private right(idx: number): number {
        return idx * 2 + 2;
    }
}
