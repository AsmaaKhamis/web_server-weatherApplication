const doWorkCallback = (callback) =>{
    setTimeout(() => {
        // if things went wrong
        // callback('This is my error !',undefined )

        // if things went well
        callback(undefined ,[1,4,7])

    },2000 )
}

doWorkCallback( ( error ,result ) => {
    if(error){
        console.log(error)
    }
    console.log(result)
})