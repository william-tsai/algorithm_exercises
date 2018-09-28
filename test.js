class Queue {
    constructor(){
        this._items = [];
    }
    enqueue(element) {
        return this._items.push(element);
    }
    isEmpty() {
        return this._items.length == 0; 
    }
    dequeue() {
        return this._items.shift();
    }
}