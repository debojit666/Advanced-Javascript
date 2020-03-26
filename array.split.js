const nums = [1,2,3,4,5,6,7,8];
const part = nums.slice(2, 5);//for slicing we use index number of an array. the output will be from the first index upto the last index
console.log(part);
console.log(nums);

const removed = nums.splice(2, 3, 77);// index 2 theke poroborti 3 ta value remove korbe array theke. tarpor oi jaaygaay 77 ke inject korbe
console.log(removed);
console.log(nums);

const together = nums.join(", ");
console.log(together);
