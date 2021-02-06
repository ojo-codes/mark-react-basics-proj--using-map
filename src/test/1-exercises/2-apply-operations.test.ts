import { applyOperations } from "./2-apply-operations";

describe("applyOperations - takes two numbers and applies a specified operation to them", () => {
  test("operation: add", () => {
    const input = [
      { numbers: [8, 4], operation: "add" },
      { numbers: [12, 1], operation: "add" },
    ];
    expect(applyOperations(input)).toStrictEqual([12, 13]);
  });

  test("operation: subtract", () => {
    const input = [
      { numbers: [8, 4], operation: "multiply" },
      { numbers: [12, 1], operation: "multiply" },
    ];
    expect(applyOperations(input)).toStrictEqual([32, 12]);
  });

  test("operation: subtract", () => {
    const input = [
      { numbers: [8, 4], operation: "subtract" },
      { numbers: [12, 1], operation: "subtract" },
    ];
    expect(applyOperations(input)).toStrictEqual([4, 11]);
  });
});
