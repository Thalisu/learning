type Node<V> = {
    value: V;
    next?: Node<V>;
    prev?: Node<V>;
};
function createNode<V>(value: V): Node<V> {
    return { value };
}

export default class LRU<K, V> {
    private length: number;
    private head?: Node<V>;
    private tail?: Node<V>;

    private lookup: Map<K, Node<V>>;
    private reverseLookup: Map<Node<V>, K>;

    constructor(private capacity: number = 10) {
        this.length = 0;
        this.head = this.tail = undefined;
        this.lookup = new Map<K, Node<V>>();
        this.reverseLookup = new Map<Node<V>, K>();
    }

    update(key: K, value: V): void {
        const node = this.lookup.get(key);
        if (!node) {
            const newNode = createNode<V>(value);
            this.length++;
            this.prepend(newNode);
            this.trimCache();
            this.lookup.set(key, newNode);
            this.reverseLookup.set(newNode, key);
            return;
        }

        this.detach(node);
        this.prepend(node);
        node.value = value;
    }

    get(key: K): V | undefined {
        const node = this.lookup.get(key);
        if (!node) return undefined;

        this.detach(node);
        this.prepend(node);

        return node.value;
    }

    private detach(node: Node<V>) {
        if (node.prev) node.prev.next = node.next;
        if (node.next) node.next.prev = node.prev;

        if (this.length === 1) {
            this.head = this.tail = undefined;
        }

        if (this.head === node) {
            this.head = this.head.next;
        }
        if (this.tail === node) {
            this.tail = this.tail.prev;
        }

        node.prev = undefined;
        node.next = undefined;
    }

    private prepend(node: Node<V>) {
        if (!this.head) {
            this.head = this.tail = node;
            return;
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }

    private trimCache() {
        if (this.length <= this.capacity) return;

        const tail = this.tail as Node<V>;
        this.detach(this.tail as Node<V>);

        const key = this.reverseLookup.get(tail) as K;
        this.lookup.delete(key);
        this.reverseLookup.delete(tail);
        this.length--;
    }
}
