const fs =require('fs')
// const book ={
//     titlt:'Ego is the enemy',
//     author:'Rayan holidy'
// }
    // take the json object ,array ,string and turn in into json format
//  const bookJson =JSON.stringify(book)
// fs.writeFileSync('1-json.json',bookJson)



// read the data from the fille
// const dataBuffer =fs.readFileSync('1-json.json')
// // convert the buffer (binary) to string format
//  const dataJson =dataBuffer.toString()
// // // parse the json data
//  const data =JSON.parse(dataJson)
// // access the data
//  console.log(data.title)



// how to update json file in js file  

const dataBuffer =fs.readFileSync('1-json.json')
const user =JSON.parse(dataBuffer.toString())

user.name ='Esraa'
user.age= 27
const updateData =JSON.stringify(user)
fs.writeFileSync('1-json.json',updateData)

