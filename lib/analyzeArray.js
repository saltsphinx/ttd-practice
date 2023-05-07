function analyzeArray(arr) {
  const clone = arr.slice();
  const average = Math.floor(clone.reduce((sum, num) => sum + num, 0) / clone.length)
  const sortedArr = arr.slice().sort((a, b) => a > b);

  return {
    average,
    min: sortedArr[0],
    max: sortedArr[sortedArr.length - 1],
  };
}

export default analyzeArray;