const once = (fn) => {
  let hasBeenCalled = false;
  return (...args) => {
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      return fn(...args);
    }
  };
};

const fn = (a, b, c) => a + b + c;
const onceFn = once(fn);
console.log(onceFn(1, 2, 3));
console.log(onceFn(4, 5, 6));
console.log(onceFn(9, 8, 7));
