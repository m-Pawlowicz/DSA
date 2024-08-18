import { GCD } from "./GCD";

function findPrimes(max) {
    const primes = [];
    for (let index = 1; index < max; index++) {
        const gcd = GCD(index, 1);
        if(gcd === index) {
            primes.push(index, 1);
        }
    }

    return primes;
}
