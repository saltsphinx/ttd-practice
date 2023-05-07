const charCodes = {
  upper: [65, 90],
  lower: [97, 122],
};

function caesarCipher(phrase, shift) {
  const strArr = [...phrase];
  return strArr.map((char) => shiftChar(char, shift)).join('');
}

function shiftChar(char, shift) {
  if (!/[a-z]/i.test(char)) return char;
  const code = char.charCodeAt();
  if (/[a-z]/i.test(String.fromCharCode(code + shift))) return String.fromCharCode(code + shift);
  return String.fromCharCode(/[a-z]/.test(char) ? shiftCase(char, shift, 'lower') : shiftCase(char, shift, 'upper'));
}

function shiftCase(char, shift, letterCase)
{
  const code = char.charCodeAt();
  let shiftCode; 

  if (code + shift < charCodes[letterCase][0])
  {
    shiftCode = charCodes[letterCase][1] - (charCodes[letterCase][0] - (code + shift)) + 1;
  }
  else {
    shiftCode = charCodes[letterCase][0] + ((code + shift) - charCodes[letterCase][1]) - 1;
  }

  return shiftCode;
}


export default caesarCipher;