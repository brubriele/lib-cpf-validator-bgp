const chai = require("chai");
const expect = chai.expect;
const cpfValidator = require("../lib/index.js")

describe('Validador de dígitos CPF', () => {
    it('Deve retornar true', () => {
        expect(cpfValidator(35369110808)).to.equal(true)
    });
    it('Deve retornar true', () => {
        expect(cpfValidator(00693629045)).to.equal(true)
    });
    it('Deve retornar true', () => {
        expect(cpfValidator(56771406008)).to.equal(true)
    });
    it('Deve retornar true', () => {
        expect(cpfValidator(99252873082)).to.equal(true)
    });
    it('Deve retornar true', () => {
        expect(cpfValidator(00965814092)).to.equal(true)
    });
    it('Deve retornar true', () => {
        expect(cpfValidator(90525888055)).to.equal(true)
    });
    it('Deve retornar true', () => {
        expect(cpfValidator(33312972086)).to.equal(true)
    });

    it('Deve retornar false', () => {
        expect(cpfValidator(123)).to.equal(false)
    });
    it('Deve retornar false', () => {
        expect(cpfValidator(00693729045)).to.equal(false)
    });
    it('Deve retornar false', () => {
        expect(cpfValidator(86771406008)).to.equal(false)
    });
    it('Deve retornar false', () => {
        expect(cpfValidator(99253873082)).to.equal(false)
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

