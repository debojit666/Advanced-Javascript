//using break
const nums = [1,2,3,4,5,6,7,8,9,10];
for (let i = 0; i < nums.length; i++){
    console.log(nums[i]);
    if(nums[i]>6){
        break;
    }
}
//using continue
const nums1 = [1, -2, 3, -4,-5, -6, 7, -8, 9];
for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] < 0) {
        continue;
    }
    console.log(nums1[i]);
}