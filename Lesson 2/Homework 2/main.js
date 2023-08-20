//Bài 1
const arr1 = [1,2,4,5,6]; 
const arr2 = [1,6,8,9,0]; // 1, 6

const arr3 = arr1.filter((number) => arr2.includes(number));

console.log(arr3);
//Bài 2
// const arr4 = [1, 54, 6, 7];
// const newArr = arr4.map((item, index) => {
//     return `${item + 5}`
// });
 
// console.log(newArr);

let arr = [1, 54, 6, 7];
let newArr = arr.map(value => value + 5);
console.log(newArr);
//Bài 3
//Bài 4