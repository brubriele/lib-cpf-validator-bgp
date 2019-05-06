const chai = require("chai");
const expect = chai.expect;
const cpfValidator = require("../lib/index.js")

describe('Validador de dígitos CPF', () => {
    it('Deve verificar dígitos verificadores', () => {
        expect(cpfValidator(35369110808).to.equal('true'))
    });
});