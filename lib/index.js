function cpfValidator (cpfNumber) {

  const cpfDigits = Array.from(cpfNumber.toString()).map(Number);

  cpfDigits.length < 11 ? cpfDigits.unshift(0) : false;
  cpfDigits[0] === 0 ? cpfDigits.unshift(0) : false;

  let factorFirst = 10;
  let factorScnd = 11;
  
  const firstVerify = cpfDigits.slice(0, -2).map((digit) => {

    return digit * factorFirst--;
  
  });
  const scndVerify = cpfDigits.slice(0, -1).reverse().map((digit) => {

    return digit * factorScnd--;
  
  });

  const firstDigit = firstVerify.reduce((x, y) => x + y);
  const scndDigit = scndVerify.reduce((x, y) => x + y);

  const isValidFirstDigit = cpfDigits.slice(-2)[0] === 0 && 11 - (firstDigit % 11) === 11 || 11 - (firstDigit % 11) === 10 || 11 - (firstDigit % 11) === cpfDigits.slice(-2)[0] ? true : false;

  const isValidScndDigit = cpfDigits.slice(-1)[0] === 0 && 11 - (scndDigit % 11) === 11 || 11 - (scndDigit % 11) === 10 || 11 - (scndDigit % 11) === cpfDigits.slice(-1)[0] ? true : false;

  const isNotZeroDigits =  cpfDigits.reduce((x, y) => x + y) > 0 ? true : false
  
  return isValidFirstDigit && isValidScndDigit && isNotZeroDigits ? true : false;

}


module.exports = cpfValidator;  