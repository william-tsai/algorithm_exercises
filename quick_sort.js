async function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    } else {
        var pivot = arr[0];
        var equal = [arr[0]];
        var smaller = [];
        var greater = []; 
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] < pivot) {
                smaller.push(arr[i]);
            } else if (arr[i] > pivot) {
                greater.push(arr[i]);
            }
        }
        var sortedSmaller = await quickSort(smaller);
        console.log("s: " + sortedSmaller);
        var sortedGreater = await quickSort(greater);
        console.log('g: ' + sortedGreater);
        return 
    }
}

var arr = [10, 5, 2, 3];
console.log(quickSort(arr));