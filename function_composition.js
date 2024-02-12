const compose = (functions) => {
  const identity = (x) => x;
  if (functions.length === 0) {
    return identity;
  }
  return (x) => {
    for (const fn of functions.reverse()) {
      x = fn(x);
    }
    return x;
  };
};

const f1 = (x) => x + 1;
const f2 = (x) => x * x;
const f3 = (x) => x * 2;
const functions = [f1, f2, f3];
const composed = compose(functions);

console.log(composed(4));
