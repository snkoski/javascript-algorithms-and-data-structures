function binarySearch(arr, val) {
    let left = 0;
    let right = arr.length - 1;
    while(left <= right) {
        let mid = Math.round((left + right) / 2);
        if (arr[mid] === val) return mid;
        else if (arr[mid] < val) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

console.log(binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 13))