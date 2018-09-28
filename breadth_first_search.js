class Queue {
    constructor(){
        this.items = [];
    }
    enqueue(element) {
        this.items.push(element);
    }
    isEmpty() {
        return this.items.length == 0; 
    }
    dequeue() {
        return this.items.shift();
    }
}

function isTarget(name) {
    if (name.length == 7) {
        return true;
    } else {
        return false;
    }
}

function breadthFirstSearch(graph, name) {
    var searchQueue = new Queue();
    for (var i = 0; i < graph[name].length; i++) {
        searchQueue.enqueue(graph[name][i]);
    }
    var searchedPeople = [];
    // console.log(searchQueue);
    while (searchQueue.isEmpty() == false) {
        var nameToBeSearched = searchQueue.dequeue();
        // console.log(nameToBeSearched);
        // console.log(searchedPeople.includes(nameToBeSearched));
        if (searchedPeople.includes(nameToBeSearched) == false) {
            // console.log(isTarget(nameToBeSearched), nameToBeSearched.length);
            if (isTarget(nameToBeSearched) == true) {
                return nameToBeSearched;
            } else {
                // console.log("else reached");
                // console.log(graph[nameToBeSearched].length);
                if (graph[nameToBeSearched].length > 0) {
                    for (var i = 0; i < graph[nameToBeSearched].length; i++) {
                        searchQueue.enqueue(graph[nameToBeSearched][i]);
                    }
                }
                searchedPeople.push(nameToBeSearched);
            }
        }
    }
}

var graph = {
    "Will": ["Alice", "Bob", "Claire"],
    "Alice": ["Peggy"],
    "Bob": ["Anuj", "Peggy"],
    "Claire": ["Thom", "Jonny", "William"],
    "Anuj": ["Peter"],
    "Peggy": ["Harry"],
    "Thom": ["Mary"],
    "Jonny": ["Paul"],
};
console.log(breadthFirstSearch(graph, "Will"));
