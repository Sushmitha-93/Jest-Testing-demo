const { absolute } = require("../lib");

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
