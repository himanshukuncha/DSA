const TwoSum = (nums, target) => {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map[complement] !== undefined) {
      return [map[complement], i];
    }

    map[nums[i]] = i;
  }

  return [];
};

console.log(TwoSum([3, 2, 4], 6));
