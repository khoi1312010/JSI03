 //Normal function
 function log(name) {
    console.log(name);
 }
 function sum(a, b) {
   return a*b;
 }

 console.log(sum(2,3));

//Arrow function
const log1 = (name) => {
   console.log(name);
}
const logName = () => {
   {name: 'bruhlol'}
}

console.log(logName);

// let and const
let name1 = "you";
const name2 = "you";
const arr1 = [1, 2, 3, 4];
const student = {
   name: 'Gay',
   age: 15,
}
student.gender = 'male';

log1("bruh")

//Spread operator
const numberList = [1,2,3,4,5];
const numberList2 = [6,7,8,9,10];
const cloneNumberList = [...numberList, ...numberList2];

console.log(cloneNumberList);

const student1 = {
   name: 'lol',
   age: '18'
}

const student2 = {...student1};
student2.gender = 'male';

console.log(student1, student2);

//map
const arrMap1 = [1,2,3,4,5]; // [2,4,6,8,10]
const arrMap2 = [];
arrMap1.forEach((item) => {
   arrMap2.push(item*2);
});

const arrMap3 = arrMap1.map((item) => item * 2);

const arrMap4 = [
   { firstName: "nice", lastName: "lol"},
   { firstName: "Vu", lastName: "Anh"},
];

const arrMap5 = arrMap4.map((item, index) => {
   return `${item.firstName} ${item.lastName}`
});

console.log(arrMap5);