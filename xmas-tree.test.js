import { xmasTree, findLineWidth, makeTreeTrunk } from "./xmas-tree";

test("xmasTree returns an array modelling a Christmas tree of given height", () => {
  expect(xmasTree(5)).toEqual(["____#____", "____#____"]);
  expect(xmasTree(3)).toEqual(["__#__", "__#__"]);
});

test("findLineWidth finds the line width from a height", () => {
  expect(findLineWidth(5)).toBe(9);
  expect(findLineWidth(3)).toBe(5);
});

test("makeTreeTrunk returns the tree trunk part of the Christmas tree with given height", () => {
  expect(makeTreeTrunk(5)).toEqual([
    "____#____",
    "___###___",
    "__#####__",
    "_#######_",
    "#########",
    "____#____",
    "____#____",
  ]);
  expect(makeTreeTrunk(3)).toEqual([
    "__#__",
    "_###_",
    "#####",
    "__#__",
    "__#__",
  ]);
});
