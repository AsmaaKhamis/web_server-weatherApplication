// CRUD stands for "Create Read Update Delete"

// Create 

// const mongodb =require('mongodb')
// const MongoClient =mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

// destructing the code above
const { MongoClient,ObjectID } =require('mongodb')


const connectionURL ='mongodb://127.0.0.1:27017'
const databaseName ='task-manager'

// const id = new ObjectID()
// // the original representation
// console.log(id.id.length)
// // the string representation
// console.log(id.toHexString().length)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL ,{ useUnifiedTopology: true }, (error ,client) => {
    if(error){
        return console.log('Unable to connect t database !')
    }
   const db = client.db(databaseName)
//  Create

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
// inserting maney users
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


// Read 

//    fetching user from the database
// db.collection('users').findOne({name:'Asma'} ,(error ,user) => {
//     if(error){
//         return console.log('Unable to fetch')
//     }
//     console.log(user)
// })
// db.collection('users').find({ age:23 }).toArray( (errot, users) => {
//     console.log(users)

// })
// db.collection('users').find({ age:23 }).count( (errot, counts) => {
//     console.log(counts)

// })


// db.collection('tasks').findOne({_id: new ObjectID("6016cb1016916242554e4284")} ,(error,task) => {

//     if(error){
//         console.log('Unable to find tasks')
//     }
//     console.log(task)
// })
// db.collection('tasks').find({completed :false}).count( (error,countTask ) => {
//     if(error){
//         console.log('Unable to count')
//     }
//     console.log(countTask)
// })

// Update

// update on
// db.collection('users').updateOne({
//     _id:new ObjectID("6016be40bcb52e394df1c31e")
// } , {
//        $inc:{
//            age:1
//        }
          

// }).then( ( result ) => {
//     console.log(result)
// }).catch( (error) => {
//     console.log(error)

//    })


// update many
// db.collection('tasks').updateMany({ 
//     completed:false
// } ,{ 
//     $set:{
//         completed:true

//     }
// }).then( (result) => {
//     console.log(result)
// }).catch( (error) => {
//     console.log(error)
// })


// Delete

// delete one
// db.collection('users').deleteMany({
//     age:24
// }).then( (result) => {
//     console.log(result)
// }).catch( (error) => {
//     console.log(error)
// })

// delete one
db.collection('tasks').deleteOne( {
    description :'Do tasks'
}).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
   })
})