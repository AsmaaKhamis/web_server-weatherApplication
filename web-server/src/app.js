const path =require('path')
const express =require('express')
const hbs= require('hbs')

const app = express()

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
        title:'About Me',
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
app.get('/weather_Page' ,(req,res) =>{
    res.send({
        forcast:'Aswan',
        location:50
    })
})
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
app.listen(3000 , () => {
    console.log('server is up on port 3000 .')
})