// CRUD stands for "Create Read Update Delete"

// Create 

// const mongodb =require('mongodb')
// const MongoClient =mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

// destructing the code above
const { MongoClient,ObjectID } =require('mongodb')


const connectionURL ='mongodb://127.0.0.1:27017'
const databaseName ='task-manager'

const id = new ObjectID()
// the original representation
console.log(id.id.length)
// the string representation
console.log(id.toHexString().length)
console.log(id.getTimestamp())

MongoClient.connect(connectionURL ,{ useUnifiedTopology: true }, (error ,client) => {
    if(error){
        return console.log('Unable to connect t database !')
    }
   const db = client.db(databaseName)

//    inserting first collection to the database
//    db.collection('users').insertOne({
//        _id:id,
//        name:'Body',
//        age:24
//     //    inserting a second operation which is a callback function that will be called when the operation is complete

//    }, (error ,result) => {
//        if(error){
//            return console.log('Unable to insert user')
//        }
//        console.log(result.ops)

//    })


// do not forgit that is an array not a function []
// db.collection('users').insertMany([
//     {
//         name:'ahmed',
//         age:29
//     },
//     {
//         name:'Hala',
//         age:25
//     }
// ],(error ,result) => {
//     if(error){
//         return console.log('Unable to insert documents !')
//     }
//     console.log(result.ops)

// })
// db.collection('tasks').insertMany([
//     {
//         description: 'Have a brake',
//         completed: false

//     },
//     {
//         description: 'Go to cinema',
//         completed: false  

//     },
//     {
//         description: 'Do tasks',
//         completed: true

//     }
// ], (error ,result) => {
//     if(error){
//        return console.log('Unable to add the task')
//     }
//     console.log(result.ops)

// })

})
