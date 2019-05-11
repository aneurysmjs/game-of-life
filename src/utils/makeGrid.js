// @flow strict
export default function makeMatrix(
  m: number,
  n: number,
  initial: () => number
): Array<Array<number>> {
  let a;
  let matrix = [];
  for (let i = 0; i < m; i += 1) {
    a = [];
    for (let j = 0; j < n; j += 1) {
      a[j] = initial();
    }
    matrix[i] = a;
  }
  return matrix;
}
