function sumArray(array) {
  if (!array || array.length < 2) return 0;
  const max = Math.max(...array);
  const min = Math.min(...array);
  const num = array.reduce((acc, el) => acc + el, 0) - max - min;
  return num;
}

// Sample Tests:
console.dir(sumArray([6, 2, 1, 8, 10]));
