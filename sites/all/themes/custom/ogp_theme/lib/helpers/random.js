let uniqueRandoms = [];
let numRandoms = 50;

function makeUniqueRandom() {
  // refill the array if needed
  if (!uniqueRandoms.length) {
    for (let i = 0; i < numRandoms; i++) {
      uniqueRandoms.push(i);
    }
  }
  const index = Math.floor(Math.random() * uniqueRandoms.length);
  const val = uniqueRandoms[index];

  // now remove that value from the array
  uniqueRandoms.splice(index, 1);

  return val;
}
