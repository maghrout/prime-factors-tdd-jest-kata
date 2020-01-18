const primeFactors = require('../src/primeFactors');

describe('PrimeFactors', () => {
    it('It calculate the prime factors of 1 and returns and empty array', () => {
        expect(primeFactors.of(1)).toEqual([]);
    })

    it('It calculate the prime factors of 2 and returns an array [2]', () => {
        expect(primeFactors.of(2)).toEqual([2]);
    })

    it('It calculate the prime factors of 3 and returns an array [3]', () => {
        expect(primeFactors.of(3)).toEqual([3]);
    })

    it('It calculate the prime factors of 4 and returns an array [2, 2]', () => {
        expect(primeFactors.of(4)).toEqual([2, 2]);
    })

    it('It calculate the prime factors of 5 and returns an array [5]', () => {
        expect(primeFactors.of(5)).toEqual([5]);
    })

    it('It calculate the prime factors of 6 and returns an array [6]', () => {
        expect(primeFactors.of(6)).toEqual([2, 3]);
    })

    it('It calculate the prime factors of 7 and returns an array [7]', () => {
        expect(primeFactors.of(7)).toEqual([7]);
    })
})