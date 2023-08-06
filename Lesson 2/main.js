// const arrNum = [5, 3, 0, -1, 2, -5];
// const positiveNum = [];

// arrNum.forEach((item) => {
//     if(item > 0) {
//         positiveNum.push(item);
//     }
// });

// console.log(positiveNum);

const arrNum = [5, 3, 0, -1, 2, -5];
const positiveNum = arrNum.filter((item) => item > 0);

console.log(positiveNum);

const products = [
	{ id: 1, name: 'Iphone 13', price: 1000, quantity: 10 },
	{ id: 2, name: 'Macbook pro M2', price: 2000, quantity: 5 },
	{ id: 3, name: 'Màn hình Samsung 23 inch', price: 1500, quantity: 2 },
	{ id: 4, name: 'Airpod 2', price: 100, quantity: 20 },
]
const products2 = products.filter((product) => product.quantity >= 10);
const products3 = products.filter((product) => product.id != 3).map((product) => product.name);

console.log(products2);
console.log(products3);

const checkProduct = (productName) => {
    const filterProduct = products.filter(product => product.name === productName);
    if(filterProduct.length === 0) {
        console.log('Khong ton tai')
    } else {
        console.log('Co ton tai')
    }
};

checkProduct('Iphone 13')

const checkProduct2 = (productName) => {
    const findProduct = products.find((product) => product.name === productName);
    if(findProduct) {
        console.log('ton tai')
    } else {
        console.log('khong ton tai')
    }
}

checkProduct('Iphone 13')

const checkProduct3 = (productName) => {
    const productIndex = products.findIndex((product) => product.name === productName);
    if (productIndex > -1) {
        console.log('ton tai')
    } else {
        console.log('khong ton tai')
    }
}

checkProduct('Iphone 13')