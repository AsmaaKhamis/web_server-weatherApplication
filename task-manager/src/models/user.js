const mongoose = require ('mongoose')
const validator =require('validator')



// Definig a model
const User = mongoose.model('User' , {
    name:{
        type:String,
        required:true,
        trim:true
        
    },
    email: {
        type:String,
        trim:true,
        lowercase:true,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minLength:7,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Change that password')

            }
        }

    },
    age: {
        type: Number,
        default:0,
        validate(value){
            if(value < 0){
                throw new Error('Age must be a positive number')
            }
        }
    }
})
// Creating an instance of it
// const me =new User({
//     name:'  Zola   ',
//    email:'ZOLA@test.com',
//    password:'1234567'

// })
// me.save().then( () => {
//     console.log(me)
// }).catch( (error) => {
//     console.log(error)
// } )
module.exports = User