function xmasTree(foliageHeight) {
  return [...makeTreeFoliage(foliageHeight), ...makeTreeTrunk(foliageHeight)];
}

function findLineWidth(foliageHeight) {
  return 2 * foliageHeight - 1;
}

function makeFoliageLevel(foliageHeight, foliageLevel) {
  const lineWidth = findLineWidth(foliageHeight);
  const foliage = "#".repeat(2 * foliageLevel - 1);
  const halfTrunkPadding = "_".repeat((lineWidth - foliage.length) / 2);
  return `${halfTrunkPadding}${foliage}${halfTrunkPadding}`;
}

function makeTreeFoliage(foliageHeight) {
  const foliage = [];
  for (let foliageLevel = 1; foliageLevel <= foliageHeight; foliageLevel++) {
    foliage.push(makeFoliageLevel(foliageHeight, foliageLevel));
  }
  return foliage;
}

function makeTreeTrunk(foliageHeight) {
  const lineWidth = findLineWidth(foliageHeight);
  const halfTrunkWidth = (lineWidth - 1) / 2;
  const halfTrunkPadding = "_".repeat(halfTrunkWidth);
  const oneTrunkRung = `${halfTrunkPadding}#${halfTrunkPadding}`;
  return [oneTrunkRung, oneTrunkRung];
}

// exports the functions so that ./xmas-tree.test.js can import them
module.exports = {
  xmasTree,
  findLineWidth,
  makeFoliageLevel,
  makeTreeFoliage,
  makeTreeTrunk,
};
