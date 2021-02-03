require('../src/db/mongoose')
const { count } = require('../src/models/user')
const User =require('../src/models/user')



// Promise chaining
// User.findByIdAndUpdate('601813194596ba2b1da779d8', {age:1}).then( (user) => {
//     console.log(user)
//     return User.countDocuments({age:1})
// }).then((result)=> {
//     console.log(result)
// }).catch( (e) => {
//     console.log(e)
// })

// async/await
const updateAgeAndCount =async( id,age) =>{
    const user =await User.findByIdAndUpdate(id ,{age:age})
    const count =await User.countDocuments({age})
    return count
}
updateAgeAndCount('601813194596ba2b1da779d8' ,2).then( (count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})