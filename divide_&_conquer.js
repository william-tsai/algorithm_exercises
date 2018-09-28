function sum(arr) {
    if (arr.length == 0) {
        return 0;
    } else {
        return arr[0] + sum(arr.slice(1));
    }
}

// console.log(sum([2,4,6]));

// Same as the .length method:
function count(arr) {
    if (arr[0] === undefined) {
        return 0;
    } else {
        return 1 + count(arr.slice(1));
    }
}

// console.log(count([2,4,6]));

function findMax(arr) {
    if (arr.length == 1) {
       return arr[0];
    } else {
       if (arr[0] > findMax(arr.slice(1))) {
           return arr[0];
       } else {
           return findMax(arr.slice(1));
       }
    }
}

console.log(findMax([0]));

function binarySearch(arr, num) {
    // base case:
    if (arr.length == 1) {
        if (arr[0] == num) {
            return "found!"
        } else {
            return null;
        }
    } else {
    // recursive case:
        binarySearch(arr.slice(Math.floor(arr.length / 2)), num)
    }
}