const { type } = require("os")

// Object property shorthand
const name ='Asma'
const userAge =23

const user ={
    // if the object is the same name you can just delete the reference
    name,
    age:userAge,
    location:'Aswan'
}

 console.log(user)

// Object destructuring

const product ={
    lable:'Red notebook',
    price:3,
    stock: 201,
    salePrice: undefined,
    // rating:4.2
}
//  const lable =product.lable
//  const stock =product.stock

// const {lable:productLabel ,stock,rating=5} =product
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction =(type, {lable,stock} = {}) =>{
    console.log(type, lable ,stock)
}
// we pass an object 'product'
transaction('order')

