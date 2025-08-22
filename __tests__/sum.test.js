import { sum } from "../sum";

describe("sum", () => {
  describe("with default arguments", () => {
    test("no arguments", () => {
      expect(sum()).toBe(0);
    });
    test("one argument", () => {
      expect(sum(1)).toBe(1);
    });
  });
  test("two arguments", () => {
    expect(sum(1, 2)).toBe(3);
  });
  test("three arguments", () => {
    expect(sum(1, 2, 3)).toBe(6);
  });
  test("many arguments", () => {
    expect(sum(1, 2, 3, 4, 5)).toBe(15);
  });
});
