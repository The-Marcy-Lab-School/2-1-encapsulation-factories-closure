// what is the variable created by the outer function
// that the inner function references?
const multiplyArray = (array, factor) => {
  // use .map to return a copy of the array
  // where each num is multiplied by the given factor
  const callback = (num) => num * factor
  return array.map(callback)
}

// we can use a closure when we declare a function
// and use that function somewhere else

const nums = [1, 2, 3, 4, 5];

const doubled = multiplyArray(nums, 2);
const tripled = multiplyArray(nums, 3);

console.log(doubled); // [2,4,6,8,10]
console.log(tripled); // [3,5,9,12,15]