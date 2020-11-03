'use strict';
/*Para ejecutar las pruebas en la consola corremos el comando npm test* */
const expect = require('chai').expect;
const calculator = require('../app/calculator');

describe('Calculator - Test', () => {
    describe('Testing the Operations', () => {
        it("Testing the sum operation", () => {
            expect(calculator.add(1,1)).to.equal(1+1);
        });
        it("Testing the minus operation", () => {
            expect(calculator.minus(1,1)).to.equal(1-1);
        });
        it("Testing the multiply operation", () => {
            expect(calculator.multiply(3,3)).to.equal(3*3);
        });
        it("Testing the divide operation", () => {
            expect(calculator.divide(3,3)).to.equal(3/3);
        });
        it("Testing the operation by zero", () => {
            const expectedError = new Error('No se puede dividir por cero');
            expect(calculator.divide(3,0).message).to.equal(expectedError.message);
        });
    });
});
