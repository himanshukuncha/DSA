// const countUniqueValues = (arr) => {
//   let i = 0;

//   if (arr.length === 0) return 0;

//   for (let j = 1; j < arr.length; j++) {
//     if (arr[j] !== arr[i]) {
//       i++;
//       arr[i] = arr[j];
//     }
//   }
//   return i + 1;
// };

const countUniqueValues = (arr) => {
  if (arr.length === 0) return 0;

  let uniquePointer = 0;  // Point to the last found unique value.

  for (let currentPointer = 1; currentPointer < arr.length; currentPointer++) {
    if (arr[currentPointer] !== arr[uniquePointer]) {
      uniquePointer++;
      [arr[uniquePointer], arr[currentPointer]] = [arr[currentPointer], arr[uniquePointer]];
    }
  }
  
  return uniquePointer + 1;
};