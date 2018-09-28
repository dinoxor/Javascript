export function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    else if (number <= 3) {
        return true;
    }
    else if (number % 2 == 0 || number % 3 == 0) {
        return false;
    }
    else if (number % 6 == 1 || number % 6 == 5) {
        for (let i = 5; i < Math.sqrt(number) ; i = i+2) {
            if (number % i == 0)
            {
                return false
            }
        }
        return true;
    }

    // console.log(number);
    return false;   
};