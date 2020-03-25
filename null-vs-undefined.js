//pakhi let hoile and value assigned na thakle undefined hobe
let pakhi;
console.log(pakhi);


//function theke ki return korbe na bole dile undefined dekhabe
function add(num1, num2){
    console.log(num1+num2);
    return ; //      <--- ki return korbe bola nai
}
const result = add(13+82);
console.log(result);


//if we do not provide the second argument for the written function, we will get undefined
function add2(num3,num4){
    console.log(num3,num4);
}
const result2= add2(13); // <--- no second argument
console.log(result2);


//we will get undefined if the property is not defined
const mike = {name:"Cool Dude", phone: 345678}; // <--- no job property given
console.log(mike.job); // <--- trying to access the job property, hence undefined

//if we set the value undefined under a variable
let fun = undefined;
console.log(fun);

//here 16th positional value is not given in the array hence undefined
let ages = [2,5,11];
console.log(ages[15]);
