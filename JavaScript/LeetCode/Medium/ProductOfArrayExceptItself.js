const productExceptSelf = (nums) => {
  const n = nums.length;
  const output = new Array(n).fill(1); 
  let leftProduct = 1;
  for (let i = 1; i < n; i++) {
    leftProduct *= nums[i - 1];
    output[i] *= leftProduct;
  }

  let rightProduct = 1;
  for (let i = n - 2; i >= 0; i--) {
    rightProduct *= nums[i + 1];
    output[i] *= rightProduct;
  }

  return output;
};

console.log(productExceptSelf([1, 2, 3, 4])); 
