const primeFactors = require('../src/primeFactors');

describe('PrimeFactors', () => {
    it('It calculate the prime factors of 1 and returns and empty array', () => {
        expect(primeFactors.of(1)).toEqual([]);
    })

    it('It calculate the prime factors of 2 and returns an array [2]', () => {
        expect(primeFactors.of(2)).toEqual([2]);
    })
})