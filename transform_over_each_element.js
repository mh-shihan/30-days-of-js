const map = (arr, fn) => {
  const transformedArray = [];
  for (let i = 0; i < arr.length; i++) {
    transformedArray.push(fn(arr[i], i));
  }
  return transformedArray;
};

const arr = [1, 2, 3, 4, 5];
const fn = (value, index) => value * index;
console.log(map(arr, fn));
