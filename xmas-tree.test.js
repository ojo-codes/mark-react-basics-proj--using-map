import { xmasTree } from "./xmas-tree";

test("xmasTree", () => {
  expect(xmasTree(5)).toEqual(["____#____", "____#____"]);
  expect(xmasTree(3)).toEqual(["__#__", "__#__"]);
});
