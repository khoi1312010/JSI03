//Bài 1
const arr1 = [1, 'a', 5, '2', true]; //1, 5
const result = arr1.filter(isNumber);

function isNumber(value)
    { return typeof value === `number`; }

console.log(result);

//Bài 2
const products = [
	{ name: 'Iphone 13', price: 1000, quantity: 10 },
	{ name: 'Macbook pro M2', price: 2000, quantity: 5 },
	{ name: 'Màn hình Samsung 23 inch', price: 1500, quantity: 2 },
	{ name: 'Airpod 2', price: 100, quantity: 20 },
]

const products2 = products.map((item, index) => {
    return `${item.price} ${item.name} giá ${item.price * item.quantity}$`
});

let total = 0;

products.forEach(product => {amount = product.price * product.quantity;})

total += amount;

console.log(products2);
console.log(`Tổng hóa đơn => ${total}$`);

//Bài 3
let students = [
	{ name: 'Alex', score: 6 },
	{ name: 'John', score: 8 },
	{ name: 'Peter', score: 4 },
];

let highestScore = 0;
let highestScoreName = '';

students.forEach(student => {if (student.score > highestScore) 
	{highestScore = student.score; highestScoreName = student.name;}
});

console.log(highestScoreName);