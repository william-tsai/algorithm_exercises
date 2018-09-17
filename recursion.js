function countdown(i) {
    console.log(i);
    // base case:
    if (i <= 0) {
        return
    // recursive case:
    } else {
        countdown(i - 1);
    }
}

