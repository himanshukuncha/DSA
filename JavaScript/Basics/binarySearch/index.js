// binarySearch for sorted array, if known sorted in ascending or decending order
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const binarySearch1 = (array, num) => {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (array[mid] < num) {
      left = mid + 1;
    } else if (array[mid] > num) {
      right = mid - 1;
    } else {
      return "number found";
    }
  }
  return "number not found";
};
console.log(1, binarySearch1(array, 100));

// binarySearch for sorted array not knowing if ascending or decending
const array2 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const binarySearch2 = (array, num) => {
  let left = 0;
  let right = array.length - 1;
  let isAscending = array[left] < array[right];

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (array[mid] === num) {
      return "number found";
    }

    if (isAscending) {
      if (array[mid] < num) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      if (array[mid] > num) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return "number not found";
};
console.log(2, binarySearch2(array2, 5));

// binarySearch, where, return if found the number or return the smallest number bigger than it (or) ceiling number,The only differnce between this and the above one is the return after the while loop, as the array is in ascending order we return left, if in decending we return right nd same applies if we want to find floor number instead of ceiling
const array3 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const binarySearch3 = (array, num) => {
  let left = 0;
  let right = array.length - 1;

  if (num > array.length - 1) {
    return "number doesnt exist in the array";
  }
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (array[mid] < num) {
      left = mid + 1;
    } else if (array[mid] > num) {
      right = mid - 1;
    } else {
      return "number found";
    }
  }
  return array[left];
  //   use the below code if it throws an error, happens when left becomes equal to the length of array
  //   if (left >= 0 && left < array.length) {
  //     return array[left];
  //   } else {
  //     return "index out of bounds";
  //   }
};
console.log(3, binarySearch3(array3, 100));

// You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters. Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.

// logic here is to return start % length of the array
const letters = ["c", "f", "j"];
const binarySearch4 = (array, letter) => {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (array[mid] < letter) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return array[left % array.length];
};
console.log(4, binarySearch4(letters, "g"));

//===================================   medium binarySearch   ==========================================
class FirstAndLastPosition {
  searchRange(nums, target) {
    let ans = [-1, -1];

    // check for first occurrence of target first
    ans[0] = this.search(nums, target, true);

    if (ans[0] !== -1) {
      ans[1] = this.search(nums, target, false);
    }

    return ans;
  }

  // this function just returns the index value of target
  search(nums, target, findStartIndex) {
    let ans = -1;
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
      // find the middle element
      let mid = start + Math.floor((end - start) / 2);

      if (target < nums[mid]) {
        end = mid - 1;
      } else if (target > nums[mid]) {
        start = mid + 1;
      } else {
        // potential ans found
        ans = mid;

        if (findStartIndex) {
          end = mid - 1;
        } else {
          start = mid + 1;
        }
      }
    }

    return ans;
  }
}

// Example usage
let finder = new FirstAndLastPosition();
let nums = [1, 2, 2, 2, 3, 4, 5];
let target = 2;

console.log(finder.searchRange(nums, target)); // Should print the first and last position of target in nums
