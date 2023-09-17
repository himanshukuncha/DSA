const reverse = (nums, start, end) => {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
};

const RotateArray = (nums, k) => {
  const n = nums.length;
  k %= n; 
  reverse(nums, 0, n - 1);

  reverse(nums, 0, k - 1);

  reverse(nums, k, n - 1);

  return nums;
};

let result = RotateArray([1, 2, 3, 4, 5, 6, 7], 3);
console.log(result); 
