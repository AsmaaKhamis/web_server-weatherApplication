// const doWorkPromises =new Promise( ( resolve ,reject ) => {
//     setTimeout(() => {
//         // if things went well >>>> 1.pending  2.fulfilled
//         resolve([7,4,1])
//         // if things went wrong >>>> 1.pending  2.rejected
//         // reject('things went wrong')

//     },2000 )
// })
// doWorkPromises.then( (result) => {
//     console.log('Success !' ,result)
// }).catch((error) => {
//     console.log('Error !', error)

// })


//                         fulfilled
// promise --- pending -->|
//                         rejected





const add =(a,b)=>{
    return new Promise( (resolve ,reject) => {
        setTimeout( () => {
            resolve( a+b ) 
        },2000)
    })
}

// the code nested
// add(1,2).then((sum) =>{
//     console.log(sum)

//     add(sum , 5).then( (sum2)=>{
//         console.log(sum2)
//     }).catch( (e) => {
//         console.log(e)
//     })
// }).catch( (e) =>{
//     console.log(e)
// })


// the solotion for the problem of nested functions "Promise Chaining"
add(1,1).then( (sum)=> {
    console.log(sum)
    return add(sum,5)

}).then( (sum2)=> {
    console.log(sum2)

}).catch( (e)=>{
    console.log(e)
})
