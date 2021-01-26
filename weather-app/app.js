const chalk =require('chalk')
const request = require('request')
const geocode=require('./utils/geocode')
const forcast =require('./utils/forecast')
// units = m	for Celsius
// units = s	for Kelvin
// units = f	for Fahrenheit





// const url ='http://api.weatherstack.com/current?access_key=e747b0196e9ab66dea09287be40a3112&query=26.549999,%2031.700001&units=s'
// request({url:url,json:true},(error, response) => {
// if(error){
//     console.log('Unable to connect to weather services')

// }else if(response.body.error){
//     console.log('Unable to find location')

// }else{
//     // it work with the index and without it'[0]'
//     console.log(response.body.current.weather_descriptions[0] +' .The temperature is '+response.body.current.temperature + 'But it feel likes '+response.body.current.feelslike)

// }


// //Geocoding
// // Address => lat/long => Weather

// })




// const url2 ="https://api.mapbox.com/geocoding/v5/mapbox.places/cairo.json?access_token=pk.eyJ1IjoiYXNtYWtoYW1lcyIsImEiOiJja2tjZGZlMHEwNHE3MnBwN3E4ZXRmYXUxIn0.lpZYYsXKyozksbGWiE9wHw&limit=1"
// request({url:url2 ,json:true},(error ,response) =>{ 
//     if(error){
//         console.log('Unable to connect to location services')
//     }else if(response.body.features.length ===0){
//         console.log('No matching result,Unable to find location try another search')
//     }else{
//         console.log('The latitude ' +chalk.yellow.inverse(response.body.features[0].center[1]) )
//         console.log('The langitude ' +chalk.yellowBright.inverse(response.body.features[0].center[0]) )

//     }
// })
const address =process.argv[2]
if (!address){
    console.log('Please provide an address')
}else{
    geocode(address ,(error, {latitude,langitude,location} ={} ) => {
        if(error){
            return console.log(error)
        }
       
        forcast(latitude,langitude,(error ,forcastData) => {
           if(error){
               return console.log(error)
           }
           console.log(location)
           console.log(forcastData)
        })
    
    })

}



