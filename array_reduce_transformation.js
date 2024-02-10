const reduce = (arr, fn, init) => {
  let result = init;
  for (let i = 0; i < arr.length; i++) {
    result = fn(result, arr[i]);
  }
  return result;
};

const arr = [1, 2, 3, 4];
const initialValue = 0;
const fn = (accumulator, currentValue) => {
  return accumulator + currentValue;
};
console.log(reduce(arr, fn, initialValue));
