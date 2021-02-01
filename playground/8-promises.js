const doWorkPromises =new Promise( ( resolve ,reject ) => {
    setTimeout(() => {
        // if things went well >>>> 1.pending  2.fulfilled
        resolve([7,4,1])
        // if things went wrong >>>> 1.pending  2.rejected
        // reject('things went wrong')

    },2000 )
})
doWorkPromises.then( (result) => {
    console.log('Success !' ,result)
}).catch((error) => {
    console.log('Error !', error)

})


//                         fulfilled
// promise --- pending -->|
//                         rejected