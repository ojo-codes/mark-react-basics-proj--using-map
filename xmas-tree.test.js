const {
  xmasTree,
  findLineWidth,
  makeFoliageLevel,
  makeTreeTrunk,
} = require("./xmas-tree");

test("xmasTree returns an array modelling a Christmas tree of given foliage height", () => {
  expect(xmasTree(5)).toEqual([
    "____#____",
    "___###___",
    "__#####__",
    "_#######_",
    "#########",
    "____#____",
    "____#____",
  ]);
  expect(xmasTree(3)).toEqual(["__#__", "_###_", "#####", "__#__", "__#__"]);
});

test("findLineWidth finds the line width from a foliage height", () => {
  expect(findLineWidth(5)).toBe(9);
  expect(findLineWidth(3)).toBe(5);
});

test("makeFoliageLevel returns the foliage for a given level of a tree of given foliage height", () => {
  expect(makeFoliageLevel(5, 1)).toBe("____#____");
  expect(makeFoliageLevel(5, 4)).toBe("_#######_");
  expect(makeFoliageLevel(3, 1)).toBe("__#__");
  expect(makeFoliageLevel(3, 2)).toBe("_###_");
});

test("makeTreeTrunk returns the tree trunk part of the Christmas tree with given foliage height", () => {
  expect(makeTreeTrunk(5)).toEqual(["____#____", "____#____"]);
  expect(makeTreeTrunk(3)).toEqual(["__#__", "__#__"]);
});
