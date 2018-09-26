//Even Fibonacci numbers

const maxTerm = 10;
const maxValue = 4000000;
let fibonnacciValues = [1,2];
let firstValue = fibonnacciValues[0];
let secondValue = fibonnacciValues[1];
let thirdValue = 0;

do{
    let i = 2; 
    thirdValue = firstValue + secondValue;

    if (thirdValue < maxValue)
    {
        fibonnacciValues.push(thirdValue);
    }    

    firstValue = secondValue;
    secondValue = thirdValue;

    i++;

    console.log(thirdValue);

}while (thirdValue < maxValue)


let sum = 0;

for (let number of fibonnacciValues){
    if (number % 2 ==0)
    {
        console.log(`Display: ${number}`);
        sum+=number;
    }
    
}

console.log(sum);
