function reverseString(str) {
  const strArr = [...str];
  const rtnArr = [];

  for (let i = strArr.length - 1; i >= 0; i--) {
    rtnArr.push(strArr[i]);
  }

  return rtnArr.join('');
}

export default reverseString;