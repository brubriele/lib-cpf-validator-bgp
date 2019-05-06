function cpfValidator(cpfNumber) {
    const cpfDigits = Array.from(cpfNumber.toString()).map(Number)
    
    let factorFirst = 10
    let factorScnd = 11
  
    const firstVerify = cpfDigits.slice(0, -2).map((digit) => {
      return digit * factorFirst--
    })
  
    const scndVerify = cpfDigits.slice(0, -1).reverse().map((digit) => {
      return digit * factorScnd--
    })
  
    const firstDigit = firstVerify.reduce((x, y) => x + y)
    const scndDigit = scndVerify.reduce((x, y) => x + y)
  
    
  
    console.log(11 - (firstDigit % 11))
    console.log(11 - (scndDigit % 11))
  
  
    console.log(cpfDigits)
  
  }
  
  cpfValidator(65104938026)
  
  
  
module.exports = cpfValidator  