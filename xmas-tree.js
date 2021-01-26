function xmasTree() {}

function findLineWidth(foliageHeight) {
  return 2 * foliageHeight - 1;
}

function makeTreeTrunk(foliageHeight) {
  const halfTrunkWidth = foliageHeight - 1;
  const halfTrunkPadding = "_".repeat(halfTrunkWidth);
  const oneTrunkRung = `${halfTrunkPadding}#${halfTrunkPadding}`;
  return [oneTrunkRung, oneTrunkRung];
}

// exports the functions so that ./xmas-tree.test.js can import them
module.exports = { xmasTree, findLineWidth, makeTreeTrunk };
