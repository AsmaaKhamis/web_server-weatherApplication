require('../src/db/mongoose')
const Task =require('../src/models/task')


// Promise chaining
Task.findByIdAndDelete('6018291d33749835239a1c18' ).then( (task)=> {
    console.log(task)
    return Task.countDocuments({completed:false})
}).then((reult) => {
    console.log(reult)
}).catch( (e) =>{
    console.log(e)
})


// async/await
 const DeleteAndCount =async (id) => {
     const task = await Task.findByIdAndDelete(id)
     const count = await Task.countDocuments({completed:false})
     return count
 }
 DeleteAndCount('6018291d33749835239a1c18').then((task) =>{
    console.log(task)
 }).catch( (e) => {
    console.log(e)
 })
