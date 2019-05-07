const chai = require("chai");
const expect = chai.expect;
const cpfValidator = require("../lib/index.js")

describe('Validador de dígitos CPF', () => {
    it('Deve retornar true', () => {
        expect(cpfValidator(77367047086)).to.equal(true)
    });
    it('Deve retornar true', () => {
        expect(cpfValidator(70798791080)).to.equal(true)
    });
    it('Deve retornar true', () => {
        expect(cpfValidator(56771406008)).to.equal(true)
    });
    it('Deve retornar true', () => {
        expect(cpfValidator(99252873082)).to.equal(true)
    });
    it('Deve retornar true', () => {
        expect(cpfValidator(99921275038)).to.equal(true)
    });
    it('Deve retornar true', () => {
        expect(cpfValidator(90525888055)).to.equal(true)
    });
    it('Deve retornar true', () => {
        expect(cpfValidator(00883339064)).to.equal(true)
    });

    it('Deve retornar false', () => {
        expect(cpfValidator(94906299018)).to.equal(false)
    });
    it('Deve retornar false', () => {
        expect(cpfValidator(00693729045)).to.equal(false)
    });
    it('Deve retornar false', () => {
        expect(cpfValidator(86771406008)).to.equal(false)
    });
    it('Deve retornar false', () => {
        expect(cpfValidator(888888888888)).to.equal(false)
    });
    it('Deve retornar false', () => {
        expect(cpfValidator(44444444444)).to.equal(false)
    });
    it('Deve retornar false', () => {
        expect(cpfValidator(01965814092)).to.equal(false)
    });
    it('Deve retornar false', () => {
        expect(cpfValidator(99525888005)).to.equal(false)
    });
    it('Deve retornar false', () => {
        expect(cpfValidator(37312972080)).to.equal(false)
    });
    it('Deve retornar false', () => {
        expect(cpfValidator(00000000000)).to.equal(false)
    });
});

