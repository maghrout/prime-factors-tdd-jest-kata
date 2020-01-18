const PrimeFactors = function() {};

PrimeFactors.prototype.of = function(primeNumber) {
    var primeFactorArray = [];

    while(primeNumber > 1) {
        if(primeNumber % 2 === 0) {
            primeFactorArray.push(2);
            primeNumber /= 2;
        } else {
            primeFactorArray.push(primeNumber);
            break;
        }
    }
    return primeFactorArray;
}

module.exports = new PrimeFactors();