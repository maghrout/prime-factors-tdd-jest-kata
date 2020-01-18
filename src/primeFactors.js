const PrimeFactors = function() {};

PrimeFactors.prototype.of = function(primeNumber) {
    if(primeNumber > 1) {
        return [primeNumber]
    }
    return [];
}

module.exports = new PrimeFactors();