function add (num1, num2){
    console.log([...arguments]); // this arguments is not an array. it is array like object 
    return num1 + num2 + arguments[2];
}
const result = add(2, 3, 5, 7);
console.log(result);
