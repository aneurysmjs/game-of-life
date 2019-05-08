// make a random number between 1 and selected bound
export default function genRandom(bound: number = 2): number {
  return Math.floor(Math.random() * bound);
};
