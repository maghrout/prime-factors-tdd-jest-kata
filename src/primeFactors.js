const PrimeFactors = function() {};

PrimeFactors.prototype.of = function(primeNumber) {
    if(primeNumber === 2) {
        return [2];
    }
    return [];
}

module.exports = new PrimeFactors();