const argumentsLength = (...args) => {
  console.log("Args:", args);
  return args.length;
};

console.log(argumentsLength());
console.log(argumentsLength(1, 2, 3, 4));
console.log(argumentsLength({}, [], null, "hello", 4, true));
