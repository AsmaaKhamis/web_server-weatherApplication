require('../src/db/mongoose')
const Task =require('../src/models/task')

Task.findByIdAndDelete('6018291d33749835239a1c18' ).then( (task)=> {
    console.log(task)
    return Task.countDocuments({completed:false})
}).then((reult) => {
    console.log(reult)
}).catch( (e) =>{
    console.log(e)
})