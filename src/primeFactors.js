const PrimeFactors = function() {};

PrimeFactors.prototype.of = function(primeNumber) {
    var primeFactorArray = [];

        for(var divisor = 2; divisor <= primeNumber; ++divisor) {
            for(;primeNumber % divisor === 0; primeNumber /= divisor) {
                primeFactorArray.push(divisor);
            }
        }
    return primeFactorArray;
}

module.exports = new PrimeFactors();