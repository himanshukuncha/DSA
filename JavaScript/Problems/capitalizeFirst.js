function capitalizeFirstWord(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function capitalizeFirst(arr) {
  if (arr.length === 0) return [];
  return [capitalizeFirstWord(arr[0])].concat(capitalizeFirst(arr.slice(1)));
}

function capitalizeWords(arr) {
  if (arr.length === 0) return [];
  return [arr[0].toUpperCase()].concat(capitalizeWords(arr.slice(1)));
}

console.log(capitalizeWords(["car", "taco", "banana"]));
console.log(capitalizeFirst(["car", "taco", "banana"]));
