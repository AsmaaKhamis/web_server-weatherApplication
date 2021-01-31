
//Http request without a library all that can be in place of that line
// const request =require('request')


const { error } = require('console')
const http =require('http')
const url2 ='http://api.weatherstack.com/current?access_key=e747b0196e9ab66dea09287be40a3112&query=40,47&units=s'
const request = http.request(url2, (response) =>{
    // collecting all data in that variable called data
    let data =''
    // function to collabse all chuncks come
    response.on('data' ,(chunk) => {
        // data called multipe time to every chunck
        data =data +chunk.toString()
    })
    // the chunks ends
    response.on('end', () =>{
        // convert it to json object
        const body =JSON.parse(data)
        // called one time when thinga are done 
        console.log(body.current.temperature)
    })
})
// another lesener when error happen
request.on('error',(error) =>{
    console.log('An error Happened', error)
})
// ending the request to make things work
request.end()

