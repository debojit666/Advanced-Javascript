//If we declare a variable  within the function, then we can't call it from the outside of the function. so a local scope can not be called from the outside of the function but a global scope (like bonus) can be used inside the function without introducing it in the function.
let bonus = 20;
function sum(first, second){
    let result = first + second + bonus; // <--- bonus is global scope, result is local scope
    console.log(result);
    if(result > 9){
        const mood = "Happy";
        console.log(mood);
    }
    return result;
}

const output = sum(3,6);
console.log(output);

