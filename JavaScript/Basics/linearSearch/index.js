const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const string = "himanshu";
const twodarray = [
  [1, 2, 3, 4, 5],
  [10, 20, 30, 40, 50],
  [100, 200, 300, 400, 500],
];
const leetarray = [12, 6, 5, 156, 2568];
const leettwodarray = [
  [1, 2, 30],
  [10, 200],
];

// linearSearch and return the requested element in the array
const linerSearch1 = (array, number) => {
  for (let numbers of array) {
    if (numbers === number) {
      return "number exists";
    }
  }
  return "number does not exist";
};
console.log(1, linerSearch1(array, 77));

// linearSearch and return the index of requested element in the array
const linearSearch2 = (array, number) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
      return i;
    }
  }
  return -1;
};
console.log(2, linearSearch2(array, 5));

// linearSearch and return if the requested alphabet exist in the string
const linearSearch3 = (string, letter) => {
  for (let alphabet of string) {
    if (alphabet === letter) {
      return "alphabet exist";
    }
  }
  return "alphabet doesnt exist";
};
console.log(3, linearSearch3(string, "h"));

// linearSearch and return the index of the alphabet in the string
const linearSearch4 = (string, letter) => {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === letter) {
      return i;
    }
  }
  return -1;
};
console.log(4, linearSearch4(string, "h"));

// linearSearch and return the index of the element in the array within the mentioned range
const linearSearch5 = (array, number, start, end) => {
  for (let i = start; i < end; i++) {
    if (array[i] === number) {
      return i;
    }
  }
  return -1;
};
console.log(5, linearSearch5(array, 2, 1, 4));

// linearSearch and return the smallest number in the array
const linearSearch6 = (array) => {
  number = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < number) {
      number = array[i];
    }
  }
  return number;
};
console.log(6, linearSearch6(array));

// linearSearch and return the number in the 2D array
const linearSearch7 = (array, number) => {
  for (let outerarr of array) {
    for (let innerarrnum of outerarr) {
      if (innerarrnum === number) {
        return innerarrnum;
      }
    }
  }
  return -1;
};
console.log(7, linearSearch7(twodarray, 200));

//leetcode linearSearch question if the numbers in the array have even number of character - easy
const linearSearch8 = (array) => {
  let maincount = 0;

  for (let numbers of array) {
    let count = 0;
    while (numbers > 0) {
      count++;
      numbers = Math.floor(numbers / 10);
    }
    if (count % 2 == 0) {
      maincount++;
    }
  }
  return maincount;
};
console.log(8, linearSearch8(leetarray));

// ==========================================================================================================

//leetcode linearSearch question if the numbers in the array have even number of character - easy
// method2
const linearSearch9 = (array) => {
  return array.filter((number) => String(Math.abs(number)).length % 2 === 0)
    .length;
};
console.log(9, linearSearch9(leetarray));

//leetcode linearSearch question wealthiest of the two array - easy
const linearSearch10 = (array) => {
  const sum1 = array[0].reduce((acc, cv) => acc + cv, 0);
  const sum2 = array[1].reduce((acc, cv) => acc + cv, 0);
  if (sum1 > sum2) {
    return array[0];
  } else if (sum2 > sum1) {
    return array[1];
  } else {
    return "both the arrays have similar values";
  }
};
console.log(10, linearSearch10(leettwodarray));
