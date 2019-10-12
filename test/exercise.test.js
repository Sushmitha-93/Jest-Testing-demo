const exercise = require("../exercise1");

describe("fizzbuzz tests", () => {
  it("should throw exception if input is not a number", () => {
    expect(() => exercise.fizzBuzz("a")).toThrow();
    expect(() => exercise.fizzBuzz(undefined)).toThrow();
    expect(() => exercise.fizzBuzz(null)).toThrow();
    expect(() => exercise.fizzBuzz()).toThrow();
  });

  it("should return FizzBuzz if divisible by 3 and 5", () => {
    const result = exercise.fizzBuzz(15);
    expect(result).toBe("FizzBuzz");
  });

  it("should return Fizz if divisible by 3", () => {
    const result = exercise.fizzBuzz(9);
    expect(result).toBe("Fizz");
  });

  it("should return Buzz if divisible by 5", () => {
    const result = exercise.fizzBuzz(10);
    expect(result).toBe("Buzz");
  });

  it("should return the input number itself if nither divisible by 3 or 5", () => {
    const result = exercise.fizzBuzz(2);
    expect(result).toBe(2);
  });
});
