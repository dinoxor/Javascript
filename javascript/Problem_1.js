console.log('hellosdfsdf')

let factor = [];

for (let i = 1; i < 1000; i++) {
    // console.log(i);
    if (i % 3 == 0 || i % 5 == 0)    {
        // console.log(i);
        factor.push(i);
    }
}

let sum = 0;

for (const number of factor) {
    sum+=number;

    console.log(number);
}

console.log (`total is ${sum}`);
