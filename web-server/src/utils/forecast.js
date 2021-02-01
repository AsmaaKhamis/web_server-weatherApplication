const request =require('request')



const forcast =(latitude,langitude,callback) =>{
    const url2 ='http://api.weatherstack.com/current?access_key=e747b0196e9ab66dea09287be40a3112&query='+latitude+','+langitude+'&units=m'
    request ({ url:url2 ,json:true} ,(error ,{body}) => {
        if(error){
            callback('Unable to connect to weather servicer !',undefined)
        }else if(body.error){
            callback('Unable to find location ' ,undefined)
        }else{
            callback(undefined, 'It is '+ body.current.weather_descriptions[0] +' Today '+ ', And the temperature about  '+body.current.temperature +' But it feels like '+ body.current.feelslike )
        }
    })
}

module.exports =forcast