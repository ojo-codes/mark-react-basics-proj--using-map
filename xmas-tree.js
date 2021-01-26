function xmasTree(foliageHeight) {}

function findLineWidth(foliageHeight) {
  return 2 * foliageHeight - 1;
}

function makeFoliageLevel(foliageHeight, foliageLevel) {
  const lineWidth = findLineWidth(foliageHeight);
  const foliage = "#".repeat(2 * foliageLevel - 1);
  const halfTrunkPadding = "_".repeat((lineWidth - foliage.length) / 2);
  return `${halfTrunkPadding}${foliage}${halfTrunkPadding}`;
}

function makeTreeTrunk(foliageHeight) {
  const halfTrunkWidth = foliageHeight - 1;
  const halfTrunkPadding = "_".repeat(halfTrunkWidth);
  const oneTrunkRung = `${halfTrunkPadding}#${halfTrunkPadding}`;
  return [oneTrunkRung, oneTrunkRung];
}

// exports the functions so that ./xmas-tree.test.js can import them
module.exports = { xmasTree, findLineWidth, makeFoliageLevel, makeTreeTrunk };
