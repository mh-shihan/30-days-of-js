const createHelloWorld = () => {
  return () => {
    return "Hello World";
  };
};

const innerFunc = createHelloWorld();

console.log(innerFunc());
