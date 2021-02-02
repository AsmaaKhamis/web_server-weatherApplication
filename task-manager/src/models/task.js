const mongoose = require ('mongoose')

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
// const myTask =new Task( {
//     description:'have a sleep time',
    
// })
//  myTask.save().then( () => {
//      console.log(myTask)
//  } ).catch((error) => {
//      console.log(error)
//  } )

module.exports = Task