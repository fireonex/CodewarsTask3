function take(arr, n) {
    let newArr =[];
    for (let i = 0; arr.length > i; i++) {
        if (arr[i] < n) {
           newArr.push(arr[i])
        }
    }
    return newArr;
}