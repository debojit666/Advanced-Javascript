
// double equal = only value will be checked
//triple equal = value and type both with be checked
// 0 and false both negative. 1 and true both positive
//better to use triple equal
const first = 2;
const second = "2";
if (first == second){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}

if (first === second) {
    console.log("condition is true");
}
else {
    console.log("condition is false");
}