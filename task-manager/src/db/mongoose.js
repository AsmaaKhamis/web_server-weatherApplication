const mongoose = require ('mongoose')
const validator =require('validator')


mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api' , {
    useNewUrlParser: true,
    useCreateIndex:true
})
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

// Definig a model
const Task = mongoose.model('Task' , {
    description : {
        type:String,
        required:true,
        trim:true

    },
    completed:{
        type:Boolean,
        default:false
    }
})


// creating an instance of it
const myTask =new Task( {
    description:'have a sleep time',
    
})
 myTask.save().then( () => {
     console.log(myTask)
 } ).catch((error) => {
     console.log(error)
 } )