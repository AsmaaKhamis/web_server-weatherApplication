const request = require('request')

const url ='http://api.weatherstack.com/current?access_key=e747b0196e9ab66dea09287be40a3112&query=26.549999,%2031.700001'
request({url:url},(error, response) => {
const data =JSON.parse(response.body)
console.log(data.current)
})