const averagePair = (arr, avg) => {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    const calc = (arr[start] + arr[end]) / 2;

    if (calc === avg) return true;
    else if (calc > avg) end--;
    else start++;
  }

  return false;
};

console.log(averagePair([1, 2, 3], 2.5)); //true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); //true
console.log(averagePair([], 4)); //false
