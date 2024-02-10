const filter = (arr, fn) => {
  const filteredArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
};

const arr = [0, 5, 10, 15, 20, 30];
const fn = (value, index) => {
  return value > 10;
};

console.log(filter(arr, fn));
