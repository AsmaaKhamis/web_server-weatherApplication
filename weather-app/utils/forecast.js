const request =require('request')



const forcast =(latitude,langitude,callback) =>{
    const url2 ='http://api.weatherstack.com/current?access_key=e747b0196e9ab66dea09287be40a3112&query='+latitude+','+langitude+'&units=s'
    request ({ url:url2 ,json:true} ,(error ,{body}) => {
        if(error){
            callback('Unable to connect to weather servicer !',undefined)
        }else if(body.error){
            callback('Unable to find location ' ,undefined)
        }else{
            callback(undefined, {
              Current_Weather:body.current.weather_descriptions[0] ,
               Temperature:body.current.temperature ,
                Feels_like:body.current.feelslike
            })
        }
    })
}
module.exports =forcast