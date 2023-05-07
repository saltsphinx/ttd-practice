function capitalize(str) {
  const strArr = [...str];
  strArr[0] = strArr[0].toUpperCase();
  return strArr.join('');
}

export default capitalize;