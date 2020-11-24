let test = [0, 1, 0, 0, 3, 12];

function moveZeros(nums = []) {
  nums.sort((a, b) => (b ? 0 : -1));
  console.log(nums);
}
moveZeros(test);
