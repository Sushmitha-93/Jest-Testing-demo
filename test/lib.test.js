const {
  absolute,
  greet,
  getCurrencies,
  getProduct,
  registerUser
} = require("../lib");

// Testing absolute function in lib.js. It's got 3 paths, so we need to define atleast 3 tests.
describe("Absolute", () => {
  it("should return positive number if the input is positive", () => {
    const result = absolute(1);
    expect(result).toBe(1);
  });

  it("should return positive number if the input is negative", () => {
    const result = absolute(-1);
    expect(result).toBe(1);
  });

  it("should return zero if the input is zero", () => {
    const result = absolute(0);
    expect(result).toBe(0);
  });
});

// Testing strings
describe("Greet", () => {
  it("should return string with Welcome", () => {
    const result = greet("Sushmitha");
    expect(result).toMatch(/^Welcome/);
  });
});

// Testing Arrays
describe("Get Currencies", () => {
  it("should return array containig currencies", () => {
    const result = getCurrencies();
    expect(result).toEqual(expect.arrayContaining(["USD", "EUR", "AUD"])); // Can be in any order
  });
});

// Testing object
describe("Get product", () => {
  it("should have properties", () => {
    const result = getProduct();
    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("price");
  });
});

// Testing exceptions
// null, undefined, NaN, '',0, false
describe("Register user", () => {
  it("should throw error if the username is falsy", () => {
    const args = [null, undefined, NaN, "", 0, false];
    args.forEach(i => {
      expect(() => {
        registerUser(i);
      }).toThrow();
    });
  });
});
