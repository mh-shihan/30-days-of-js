const expect = (initialValue) => {
  return {
    toBe: (value) => {
      if (initialValue !== value) {
        throw new Error("Not Equal");
      }
      return true;
    },
    notToBe: (value) => {
      if (initialValue === value) {
        throw new Error("Equal");
      }
      return true;
    },
  };
};

try {
  console.log(expect(5).toBe(5));
  console.log(expect(5).toBe(20));
  console.log(expect(5).notToBe(20));
  console.log(expect(5).notToBe(5));
} catch (error) {
  console.log(error.message);
}
