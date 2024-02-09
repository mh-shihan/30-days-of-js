const createCounter = (init) => {
  let count = init;
  return {
    increment: () => ++count,
    decrement: () => --count,
    reset: () => (count = init),
  };
};

const counter = createCounter(5);

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
// console.log(createCounter.increment);
