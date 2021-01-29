function xmasTree(foliageHeight) {
  return [...makeTreeFoliage(foliageHeight), ...makeTreeTrunk(foliageHeight)];
}

function findLineWidth(foliageHeight) {
  return 2 * foliageHeight - 1;
}

function makeFoliageSegment(foliageHeight, segmentLevel) {
  const lineWidth = findLineWidth(foliageHeight);
  const foliage = "#".repeat(2 * segmentLevel - 1);
  const halfTrunkPadding = "_".repeat((lineWidth - foliage.length) / 2);
  return `${halfTrunkPadding}${foliage}${halfTrunkPadding}`;
}

function makeTreeFoliage(foliageHeight) {
  const foliage = [];
  for (let segmentLevel = 1; segmentLevel <= foliageHeight; segmentLevel++) {
    const foliageSegment = makeFoliageSegment(foliageHeight, segmentLevel);
    foliage.push(foliageSegment);
  }
  return foliage;
}

function makeTreeTrunk(foliageHeight) {
  const halfTrunkWidth = foliageHeight - 1;
  const halfTrunkPadding = "_".repeat(halfTrunkWidth);
  const trunkSegment = `${halfTrunkPadding}#${halfTrunkPadding}`;
  return [trunkSegment, trunkSegment];
}

// exports the functions so that ./xmas-tree.test.js can import them
module.exports = {
  xmasTree,
  findLineWidth,
  makeFoliageSegment,
  makeTreeFoliage,
  makeTreeTrunk,
};
