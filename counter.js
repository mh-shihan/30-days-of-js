const createCounter = (n) => {
  return () => n++;
};

const counter = createCounter(10);
