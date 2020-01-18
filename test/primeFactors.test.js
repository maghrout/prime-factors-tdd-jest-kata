const primeFactors = require('../src/primeFactors');

describe('PrimeFactors', () => {
    it('It calculate the prime factors of an integer', () => {
        expect(primeFactors.of()).toEqual([]);
    })
})