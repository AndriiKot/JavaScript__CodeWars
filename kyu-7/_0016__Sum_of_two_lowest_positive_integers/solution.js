const sumTwoSmallestNumbers = (arr) =>
  arr
    .sort((a, b) => a - b)
    .slice(0, 2)
    .reduce((a, b) => a + b);
