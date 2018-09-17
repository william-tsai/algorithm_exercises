function binary_search(arr, num) {
    var low = 0;
    var high = arr.length - 1;
    while (low <= high) {
        var middle = Math.floor((low + high) / 2);
        var guess = arr[middle];
        if (guess == num) {
            return num + " is at index " + middle;
        } else if (guess < num) {
            low = middle + 1;
        } else if (guess > num) {
            high = middle - 1;
        }
    }
    return num + ' is not in the array';
}
arr1 = [1,2,3,4,5,6];

console.log(binary_search(arr1, 7));

console.log(binary_search(arr1, 4));
