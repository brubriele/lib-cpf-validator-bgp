function cpfValidator (cpfnumber) {
  const cpfArr = prepArray(cpfnumber); 
  const isEqualDigits = !cpfArr.every(elem => elem === cpfArr[0]);
  const isNotZeroDigits = cpfArr.reduce((x, y) => x + y) > 0 ? true : false;
  return isValidDigits(cpfArr) && isEqualDigits && isNotZeroDigits ? true : false;
}
   
function prepArray (cpfnumber) {
  const cpfDigits = Array.from(cpfnumber.toString()).map(Number);
  cpfDigits.length < 11 ? cpfDigits.unshift(0) : [];
  cpfDigits[0] === 0 ? cpfDigits.unshift(0) : [];
  return cpfDigits;
}
  
function isValidDigits (cpfDigits) {
  const firstDigit = conta(cpfDigits, -2, 10);
  const scndDigit = conta(cpfDigits, -1, 11);
  return firstDigit && scndDigit ? true : false;
}
  
function conta (cpfDigits, x, factor) {
  const verifyDigits = cpfDigits.slice(0, x).map((digit) => {
    return digit * factor--;
  });
  
  
  const digits = verifyDigits.reduce((x, y) => x + y);
  const isValidDigits = cpfDigits.slice(x)[0] === 0 && 11 - (digits % 11) === 11 || 11 - (digits % 11) === 10 || 11 - (digits % 11) === cpfDigits.slice(x)[0] ? true : false;
     
  return isValidDigits;
}

module.exports = cpfValidator; 