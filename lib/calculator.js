function calculator()
{
  function add(num1, num2) {
    return num1 + num2;
  }

  function minus(num1, num2) {
    return num1 - num2;
  }

  function multiply(num1, num2) {
    return num1 * num2;
  }

  function divide(num1, num2) {
    return num1 / num2;
  }
  return {
    add,
    minus,
    multiply,
    divide
  };
}

export default calculator;