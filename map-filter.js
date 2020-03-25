const numbers = [3,4,5,6,7,8];
const output = [];
for (let i=0; i < numbers.length; i++){
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}
console.log(output);


function square(element){
    return element * element;
}
const value = square(3);
console.log(value);

const square2 = element => element * element;
const square3 = x => x * x;

numbers.map(function(element, index, array){
    console.log(element, index, array);
})

const result7 = numbers.map(function(element){
    return element * element;
})
console.log(result7);

const bigger = numbers.filter(x => x > 5);
console.log(bigger);
const smaller = numbers.filter(x => x < 5);
console.log(smaller);

const isThere = numbers.find(x => x > 5);
console.log(isThere); // returns the fist found value. doesn't matter if there is more
