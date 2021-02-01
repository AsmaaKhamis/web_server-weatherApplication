const path =require('path')
const express =require('express')
const hbs= require('hbs')
const geocode=require('./utils/geocode')
const forcast =require('./utils/forecast')

const app = express()
const port =process.env.PORT || 3000

// the directory where your file lives in
// console.log(__dirname)
// the file name itself
// console.log(__filename)


// Define paths for Express config
const publicDirectoryPath =path.join(__dirname,'../public')
const viewPath =path.join(__dirname,'../templates/views')
const partialPath =path.join(__dirname,'../templates/partials')


// view handlers engin and views location 
app.set('view engine' ,'hbs')
app.set('views' ,viewPath)
hbs.registerPartials(partialPath)

// setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('' ,(req,res) => {
    res.render('index', {
        title:' Weather',
        name: 'Asma Khames'
    })
})
app.get('/about' , (req ,res)=>{
    res.render('about',{
        title:'About',
        name:'Asma Khames'
    })
})
app.get('/help', (req,res) =>{
    res.render('help', {
        title:'Help Page',
        info:'All what you want to know',
        name:'Asma Khames'
    })
})
app.get('/weather' ,(req,res) =>{
    if (!req.query.address){
        return res.send( {
            error:'You must provide an address'
        })
    }else{
        geocode(req.query.address ,(error, {latitude,langitude,location} ={} ) => {
            if(error){
                return res.send({error})
            }
            forcast(latitude,langitude,(error ,forcastData) => {
               if(error){
                   return res.send(error)
               }
               res.send({
                address:req.query.address,
                forcast:forcastData,
                location
            })
        })
     })
    }
    
})
// how to send a string query fron the clint side and the server response back
// app.get('/products', (req,res) => {
//     if(!req.query.search){
//         // without the 'return' you are make 2 responses and thay is wrong
//         return res.send({
//             error:'you must provide a search term'
//         })
//     }
//      console.log(req.query.search)
//     res.send({
//         products:[]
//     })
// })



app.get('/help/*', (req,res) => {
    res.render('404' ,{
        title:'404',
        errorMessage:'Help article not found'
    })
})
// it must be in the last as it works with matching
app.get('*' , (req ,res) => {
    res.render('404', {
        title:'404',
        errorMessage:'Page not found' 
    })
})
// app.com
// app.com/help
// app.com/about
app.listen(port , () => {
    console.log('server is up on port '+port)
})