const RotateArray = (nums, k) => {
  k = k % nums.length;
  let result = [...nums.slice(-k), ...nums.slice(0, nums.length - k)];
  console.log(result);
};

RotateArray([1, 2, 3, 4, 5, 6, 7], 3);
